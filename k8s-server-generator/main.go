package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"

	k8sprotofetcher "github.com/patricksimonian/k8s-mock-server-generator/k8s-proto-fetcher"
	"github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/generator/config"
	"github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/generator/typescript"
	"github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor/ir"
	"gopkg.in/yaml.v2"
)

func main() {
	// Define command-line flags
	configPath := flag.String("config", "", "Path to the configuration file (required)")
	verbose := flag.Bool("verbose", false, "Enable verbose output")
	showVersion := flag.Bool("version", false, "Show version information")

	// Define custom usage message
	flag.Usage = func() {
		fmt.Fprintf(os.Stderr, "Usage: %s [options]\n\n", os.Args[0])
		fmt.Fprintf(os.Stderr, "Options:\n")
		flag.PrintDefaults()
		fmt.Fprintf(os.Stderr, "\nExample:\n")
		fmt.Fprintf(os.Stderr, "  %s -config config.yaml\n", os.Args[0])
	}

	// Parse command-line flags
	flag.Parse()

	// Show version if requested
	if *showVersion {
		fmt.Println("Kubernetes Mock Server Generator v1.0.0")
		os.Exit(0)
	}

	// Check if config file path is provided
	if *configPath == "" {
		fmt.Fprintf(os.Stderr, "Error: Config file path is required\n\n")
		flag.Usage()
		os.Exit(1)
	}

	// Set up logging
	if *verbose {
		log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)
		log.Println("Verbose mode enabled")
	} else {
		log.SetFlags(0)
	}

	// Check if config file exists
	if _, err := os.Stat(*configPath); os.IsNotExist(err) {
		log.Fatalf("Config file not found: %s", *configPath)
	}

	// Read and parse config file
	log.Printf("Reading config file: %s", *configPath)
	configData, err := ioutil.ReadFile(*configPath)
	if err != nil {
		log.Fatalf("Failed to read config file: %v", err)
	}

	var cfg config.Config
	if err := yaml.Unmarshal(configData, &cfg); err != nil {
		log.Fatalf("Failed to parse config file: %v", err)
	}

	// Validate config
	if err := validateConfig(&cfg); err != nil {
		log.Fatalf("Invalid configuration: %v", err)
	}

	// Read OpenAPI spec file
	log.Printf("Reading OpenAPI spec file: %s", cfg.OpenAPISpecPath)
	specData, err := ioutil.ReadFile(cfg.OpenAPISpecPath)
	if err != nil {
		log.Fatalf("Failed to read OpenAPI spec file: %v", err)
	}

	// Parse spec into SwaggerSpec structure
	log.Println("Parsing OpenAPI spec")
	var spec ir.SwaggerSpec
	if err := json.Unmarshal(specData, &spec); err != nil {
		log.Fatalf("Failed to parse OpenAPI spec: %v", err)
	}

	// Generate IR from the spec
	log.Println("Generating intermediate representation")
	irData := ir.GenerateIR(spec)

	// Create output directory if it doesn't exist
	log.Printf("Creating output directory: %s", cfg.OutputDir)
	if err := os.MkdirAll(cfg.OutputDir, 0755); err != nil {
		log.Fatalf("Failed to create output directory: %v", err)
	}

	// Generate TypeScript code
	log.Println("Generating TypeScript code")
	// log.Printf("sample endpoint %+v", irData.Endpoints[0])
	generator, err := typescript.NewGenerator(&irData, &cfg, cfg.OutputDir)
	if err != nil {
		log.Fatalf("Failed to create generator: %v", err)
	}

	if cfg.FetchProtos {
		groupVersions := make(map[string][]*ir.Endpoint) // collect unique ones

		for i, _ := range irData.Endpoints {
			endpoint := &irData.Endpoints[i]
			if len(groupVersions[fmt.Sprintf("%s/%s", endpoint.Group, endpoint.Version)]) == 0 {
				groupVersions[fmt.Sprintf("%s/%s", endpoint.Group, endpoint.Version)] = []*ir.Endpoint{}
			}
			groupVersions[fmt.Sprintf("%s/%s", endpoint.Group, endpoint.Version)] = append(groupVersions[fmt.Sprintf("%s/%s", endpoint.Group, endpoint.Version)], endpoint)

		}
		log.Println("Unique group versions found:", len(groupVersions))
		// var protoGroups []string
		for gv := range groupVersions {
			if gv == "core/" {
				gv = "core/v1" // Handle core group separately
			}

			log.Println("Fetching proto files for group version:", gv)
			outDir := filepath.Join(cfg.OutputDir, "src/protos")
			failedTargets, err := k8sprotofetcher.FetchProtos(outDir, gv)
			if err != nil {
				log.Printf("Failed to fetch %s", err)
			}
			if len(failedTargets) > 0 {
				log.Printf("Failed to fetch proto files for group version %s", gv)

				for _, endpoint := range groupVersions[gv] {
					endpoint.ProtoImportPath = ""
					endpoint.ProtoMessage = ""
				}
			}

		}

	}
	// WriteProtoReferencesToFile(irData.Endpoints, filepath.Join(cfg.OutputDir, "src/protos/proto_references.json"))
	if err := generator.Generate(); err != nil {
		log.Fatalf("Failed to generate TypeScript code: %v", err)
	}

	// Get absolute path for better user experience
	absOutputDir, err := filepath.Abs(cfg.OutputDir)
	if err != nil {
		absOutputDir = cfg.OutputDir // Fallback to relative path
	}

	fmt.Printf("Successfully generated Kubernetes mock server at %s\n", absOutputDir)
	fmt.Printf("To start the server:\n")
	fmt.Printf("  cd %s\n", absOutputDir)
	fmt.Printf("  npm install\n")
	fmt.Printf("  npm run build\n")
	fmt.Printf("  npm start\n")
}

// validateConfig validates the configuration
func validateConfig(cfg *config.Config) error {
	// Check if OpenAPI spec path is provided
	if cfg.OpenAPISpecPath == "" {
		return fmt.Errorf("OpenAPISpecPath is required")
	}

	// Check if output directory is provided
	if cfg.OutputDir == "" {
		return fmt.Errorf("OutputDir is required")
	}

	// Set default values if not provided
	if cfg.Server.Port == 0 {
		cfg.Server.Port = 8080
	}

	// Validate storage configuration
	switch cfg.Storage.Type {
	case "memory":
		// No additional validation needed
	case "file":
		if cfg.Storage.FilePath == "" {
			return fmt.Errorf("FilePath is required for file storage")
		}
	case "firestore":
		if cfg.Storage.FirestoreProject == "" {
			return fmt.Errorf("FirestoreProject is required for Firestore storage")
		}
	default:
		return fmt.Errorf("unsupported storage type: %s", cfg.Storage.Type)
	}

	// Validate initial state configuration
	switch cfg.InitialStateConfig.Type {
	case "none":
		// No additional validation needed
	case "default":
		// No additional validation needed
	default:
		return fmt.Errorf("unsupported initial state type: %s", cfg.InitialStateConfig.Type)
	}

	return nil
}

type ProtoReference struct {
	Path    string `json:"protoImportPath"`
	Message string `json:"protoMessage,omitempty"`
}

// WriteProtoReferencesToFile extracts all proto import paths from endpoints and writes them to a JSON file.
func WriteProtoReferencesToFile(endpoints []ir.Endpoint, outputPath string) error {
	// seen := map[string]bool{}
	var refs []ProtoReference

	for _, ep := range endpoints {
		// if ep.ProtoImportPath != "" && !seen[ep.ProtoImportPath] {
		// 	seen[ep.ProtoImportPath] = true
		refs = append(refs, ProtoReference{
			Path:    ep.ProtoImportPath,
			Message: ep.ProtoMessage,
		})
		// }
	}

	// Write to file
	file, err := os.Create(outputPath)
	if err != nil {
		return fmt.Errorf("failed to create proto reference file: %w", err)
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")
	if err := encoder.Encode(refs); err != nil {
		return fmt.Errorf("failed to write proto reference file: %w", err)
	}

	fmt.Printf("Wrote %d proto references to %s\n", len(refs), outputPath)
	return nil
}
