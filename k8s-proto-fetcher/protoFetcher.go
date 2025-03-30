package k8sprotofetcher

import (
	"bytes"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

var DefaultGroups = []string{"core/v1", "apps/v1"}

// FetchTarget represents a file to fetch from GitHub (repo and path in the repo).
type FetchTarget struct {
	Repo string // e.g. "kubernetes/api" or "kubernetes/apimachinery"
	Path string // e.g. "core/v1/generated.proto" or "pkg/apis/meta/v1/generated.proto"
}

var targetsFetched = map[string]bool{} // to track already fetched targets
func FetchProtos(outputDir string, apiGroup string) ([]FetchTarget, error) {
	var failedTargets []FetchTarget

	gitApiToken := os.Getenv("GITHUB_ACCESS_TOKEN")
	if gitApiToken == "" {
		fmt.Fprintf(os.Stderr, "GITHUB_ACCESS_TOKEN environment variable is not set.\n")
		return failedTargets, fmt.Errorf("GITHUB_ACCESS_TOKEN environment variable is not set")
	}
	// Configure which API group versions to fetch (initially core/v1 and apps/v1).

	// Ensure the base output directory exists.
	if err := os.MkdirAll(outputDir, 0755); err != nil {
		fmt.Fprintf(os.Stderr, "Failed to create output directory: %v\n", err)
		return failedTargets, err
	}

	client := http.Client{}
	// Queue of files to fetch, and a set to avoid duplicates.
	var queue []FetchTarget

	// Initialize the queue with the requested group/version protos.
	// for _, gv := range apiGroups {
	target, err := resolveGroupVersionToRepoPath(apiGroup)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Invalid group version '%s': %v\n", apiGroup, err)
		return failedTargets, err
	}
	queue = append(queue, target)
	targetsFetched[fmt.Sprintf("%s/%s", target.Repo, target.Path)] = true
	// }

	// Process the queue: fetch each proto file and parse its imports for dependencies.
	for len(queue) > 0 {
		t := queue[0]
		queue = queue[1:] // pop front of the queue
		// Construct the raw GitHub URL (master branch) for the file.
		url := fmt.Sprintf("https://raw.githubusercontent.com/%s/master/%s", t.Repo, t.Path)
		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Unable to make request '%s': %v\n", url, err)
			return failedTargets, err
		}

		// Add the token
		req.Header.Set("Authorization", "token "+gitApiToken)
		req.Header.Set("Accept", "application/vnd.github.v3.raw") // optional for raw content

		resp, err := client.Do(req)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error fetching %s: %v\n", url, err)
			failedTargets = append(failedTargets, t)
			continue
		}
		if resp.StatusCode != 200 {
			fmt.Fprintf(os.Stderr, "Failed to fetch %s (HTTP %d)\n", url, resp.StatusCode)
			resp.Body.Close()
			failedTargets = append(failedTargets, t)
			continue
		}
		data, err := io.ReadAll(resp.Body)
		resp.Body.Close()
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error reading response for %s: %v\n", t.Path, err)

			continue
		}
		// Determine local file path under outputDir (e.g., k8s.io/api/..., k8s.io/apimachinery/...).
		// Parse the package line from the .proto file
		packagePath := extractPackagePath(data)
		if packagePath == "" {
			fmt.Fprintf(os.Stderr, "Could not find package in proto: %s\n", t.Path)
			continue
		}
		localPath := filepath.Join(outputDir, filepath.FromSlash(packagePath), filepath.Base(t.Path))

		if err := os.MkdirAll(filepath.Dir(localPath), 0755); err != nil {
			fmt.Fprintf(os.Stderr, "Could not create directory for %s: %v\n", localPath, err)
			resp.Body.Close()
			continue
		}

		// Save the downloaded content to the local file.
		outFile, err := os.Create(localPath)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Could not create file %s: %v\n", localPath, err)
			resp.Body.Close()
			outFile.Close()
			continue
		}

		if _, err := outFile.Write(data); err != nil {
			fmt.Fprintf(os.Stderr, "Error writing to %s: %v\n", localPath, err)
		}
		outFile.Close()
		fmt.Printf("Fetched %s/%s\n", t.Repo, t.Path)

		// Parse imports in the proto to find additional files to fetch.
		for _, imp := range parseImports(data) {
			// Only consider imports from Kubernetes domains (k8s.io).
			if strings.HasPrefix(imp, "k8s.io/") {
				// Determine which repo the import belongs to and construct path.
				var depTarget FetchTarget
				if strings.HasPrefix(imp, "k8s.io/api/") {
					// Import from the main API repo.
					depTarget.Repo = "kubernetes/api"
					depTarget.Path = strings.TrimPrefix(imp, "k8s.io/api/") // e.g. "core/v1/generated.proto"
				} else if strings.HasPrefix(imp, "k8s.io/apimachinery/") {
					// Import from the apimachinery repo.
					depTarget.Repo = "kubernetes/apimachinery"
					depTarget.Path = strings.TrimPrefix(imp, "k8s.io/apimachinery/")
				} else if strings.HasPrefix(imp, "k8s.io/apiextensions-apiserver/") {
					// Import from the API extensions (CRDs) repo (if such imports appear).
					depTarget.Repo = "kubernetes/apiextensions-apiserver"
					depTarget.Path = strings.TrimPrefix(imp, "k8s.io/apiextensions-apiserver/")
				} else {
					// Other k8s.io imports (if any) could be handled here.
					continue
				}
				// If not already fetched, add to the queue.
				key := fmt.Sprintf("%s/%s", depTarget.Repo, depTarget.Path)
				if !targetsFetched[key] {
					targetsFetched[key] = true
					queue = append(queue, depTarget)
				}
			}
		}
	}
	return failedTargets, nil
}

// resolveGroupVersionToRepoPath converts "group/version" (e.g., "apps/v1") into the corresponding
// GitHub repo and path to the proto file. It returns a FetchTarget with Repo and Path filled in.
func resolveGroupVersionToRepoPath(groupVersion string) (FetchTarget, error) {
	parts := strings.Split(groupVersion, "/")
	if len(parts) != 2 {
		return FetchTarget{}, fmt.Errorf("expected format <group>/<version>")
	}
	group, version := parts[0], parts[1]
	if group == "" || group == "core" {
		// Core API group (no group name in manifests) is stored under "core" in kubernetes/api
		return FetchTarget{
			Repo: "kubernetes/api",
			Path: fmt.Sprintf("core/%s/generated.proto", version),
		}, nil
	}
	// Determine directory name for non-core groups.
	// Use the prefix before the first dot in group (for domains like "*.k8s.io"), or the whole name if no dot.
	dirName := group
	if idx := strings.Index(group, "."); idx != -1 {
		dirName = group[:idx]
	}
	return FetchTarget{
		Repo: "kubernetes/api",
		Path: fmt.Sprintf("%s/%s/generated.proto", dirName, version),
	}, nil
}

// parseImports scans a proto file content and returns any imported file paths (strings inside import "..." statements).
func parseImports(protoData []byte) []string {
	var imports []string
	lines := bytes.Split(protoData, []byte("\n"))
	for _, line := range lines {
		line = bytes.TrimSpace(line)
		if bytes.HasPrefix(line, []byte("import \"")) {
			// Extract the path between the quotes.
			start := bytes.IndexByte(line, '"')
			end := bytes.LastIndexByte(line, '"')
			if start != -1 && end != -1 && end > start {
				impPath := string(line[start+1 : end])
				imports = append(imports, impPath)
			}
		}
	}
	return imports
}

func extractPackagePath(protoData []byte) string {
	lines := bytes.Split(protoData, []byte("\n"))
	for _, line := range lines {
		line = bytes.TrimSpace(line)
		if bytes.HasPrefix(line, []byte("package ")) {
			start := bytes.IndexByte(line, ' ')
			end := bytes.IndexByte(line, ';')
			if start != -1 && end != -1 && end > start {
				pkg := string(line[start+1 : end])
				return strings.ReplaceAll(pkg, ".", "/") // e.g. "io.k8s.api.core.v1" → "io/k8s/api/core/v1"
			}
		}
	}
	return ""
}
