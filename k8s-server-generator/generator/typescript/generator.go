package typescript

import (
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"text/template"
	"unicode"

	"github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/generator/config"
	"github.com/patricksimonian/k8s-mock-server-generator/k8s-server-generator/generator/helpers"
	"github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor/ir"
)

// Generator represents a TypeScript code generator.
type Generator struct {
	IR                  *ir.IR
	Config              *config.Config
	OutputDir           string
	Templates           map[string]*template.Template
	SanitizedModelNames map[string]string
	CircularReferences  map[string]bool
}

// NewGenerator creates a new TypeScript generator.
func NewGenerator(irData *ir.IR, cfg *config.Config, outputDir string) (*Generator, error) {
	// Create generator
	g := &Generator{
		IR:                  irData,
		Config:              cfg,
		OutputDir:           outputDir,
		Templates:           make(map[string]*template.Template),
		SanitizedModelNames: make(map[string]string),
		CircularReferences:  make(map[string]bool),
	}

	// Pre-compute sanitized model names
	for name := range irData.Models {
		g.SanitizedModelNames[name] = sanitizeIdentifier(name)
	}

	// Load templates
	if err := g.loadTemplates(); err != nil {
		return nil, fmt.Errorf("failed to load templates: %w", err)
	}

	return g, nil
}

// getTemplatesDir returns the absolute path to the templates directory.
func getTemplatesDir() (string, error) {
	// Get the directory of the current file (generator.go)
	_, filename, _, ok := runtime.Caller(0)
	if !ok {
		return "", fmt.Errorf("failed to get current file path")
	}

	// The templates directory is in the same directory as this file
	return filepath.Join(filepath.Dir(filename), "templates"), nil
}

// sanitizeIdentifier sanitizes an identifier for use as a TypeScript identifier
func sanitizeIdentifier(s string) string {
	// Replace dots and other special characters with underscores
	sanitized := strings.Map(func(r rune) rune {
		if unicode.IsLetter(r) || unicode.IsDigit(r) {
			return r
		}
		return '_'
	}, s)

	// Ensure it starts with a letter (for valid JS identifier)
	if len(sanitized) > 0 && !unicode.IsLetter(rune(sanitized[0])) {
		sanitized = "Model" + sanitized
	}

	return sanitized
}

// sanitizeResourceType sanitizes a resource type for use as a file name and function name
func sanitizeResourceType(s string) string {
	return sanitizeIdentifier(s)
}

// getSanitizedModelName returns the sanitized name for a model
func (g *Generator) getSanitizedModelName(originalName string) string {
	if sanitized, ok := g.SanitizedModelNames[originalName]; ok {
		return sanitized
	}
	// If not found (shouldn't happen), sanitize on the fly
	return sanitizeIdentifier(originalName)
}

// getTypeScriptType converts an IR schema type to a TypeScript type
func (g *Generator) getTypeScriptType(schema ir.Schema) (string, error) {
	switch schema.Type {
	case "string":
		if len(schema.Enum) > 0 {
			// Handle enum types
			enumValues := []string{}
			for _, value := range schema.Enum {
				if strValue, ok := value.(string); ok {
					enumValues = append(enumValues, fmt.Sprintf("'%s'", strValue))
				}
			}
			if len(enumValues) > 0 {
				return strings.Join(enumValues, " | "), nil
			}
		}
		// Check for specific string formats
		if schema.Format == "date-time" {
			return "Date", nil
		}
		return "string", nil
	case "integer", "number":
		return "number", nil
	case "boolean":
		return "boolean", nil
	case "array":
		if schema.Items != nil {
			itemType, err := g.getTypeScriptType(*schema.Items)
			if err != nil {
				return "any[]", err
			}
			return itemType + "[]", nil
		}
		return "any[]", nil
	case "object":
		if schema.AdditionalProperties != nil {
			// Handle map types
			ap, ok := schema.AdditionalProperties.(ir.Schema)
			if !ok {
				return "Record<string, any>", nil
			}

			if ap.Type != "" {
				valueType, err := g.getTypeScriptType(ap)
				if err != nil {
					return "Record<string, any>", err
				}
				return "Record<string, " + valueType + ">", nil
			} else if ap.Ref != "" {
				refParts := strings.Split(ap.Ref, "/")
				originalRefName := refParts[len(refParts)-1]
				sanitizedRefName := g.getSanitizedModelName(originalRefName)
				return "Record<string, " + sanitizedRefName + ">", nil
			}
		}
		if len(schema.Properties) > 0 {
			// This is a complex object, but we'll handle it in enhanceModel
			return "object", nil
		}
		return "Record<string, any>", nil
	default:
		if schema.Ref != "" {
			parts := strings.Split(schema.Ref, "/")
			originalRefName := parts[len(parts)-1]
			// Use sanitized model name for references
			return g.getSanitizedModelName(originalRefName), nil
		}
		return "any", nil
	}
}

// getDefaultValue returns a default value for a given schema type
func (g *Generator) getDefaultValue(schema ir.Schema) string {
	switch schema.Type {
	case "string":
		// No Default property, so just return empty string
		return "''"
	case "integer", "number":
		// No Default property, so just return 0
		return "0"
	case "boolean":
		// No Default property, so just return false
		return "false"
	case "array":
		return "[]"
	case "object":
		// Check if this is a complex object with required properties
		if len(schema.Properties) > 0 {
			// Create a proper default object with required properties
			requiredProps := make(map[string]bool)
			for _, req := range schema.Required {
				requiredProps[req] = true
			}

			// If there are required properties, create a default object with those properties
			if len(requiredProps) > 0 {
				parts := []string{}
				for propName, propSchema := range schema.Properties {
					if requiredProps[propName] {
						defaultValue := g.getDefaultValue(propSchema)
						parts = append(parts, fmt.Sprintf("%s: %s", propName, defaultValue))
					}
				}

				if len(parts) > 0 {
					return "{ " + strings.Join(parts, ", ") + " }"
				}
			}
		}
		return "{}"
	default:
		if schema.Ref != "" {
			parts := strings.Split(schema.Ref, "/")
			originalName := parts[len(parts)-1]
			// Use sanitized model name for references
			sanitizedName := g.getSanitizedModelName(originalName)
			return fmt.Sprintf("create%s()", sanitizedName)
		}
		return "undefined"
	}
}

// createTemplateFuncMap creates a template function map with all the functions needed by the templates.
func (g *Generator) createTemplateFuncMap() template.FuncMap {
	return template.FuncMap{
		"contains": func(slice []string, item string) bool {
			for _, s := range slice {
				if s == item {
					return true
				}
			}
			return false
		},
		"toString": func(v interface{}) string {
			return fmt.Sprintf("%v", v)
		},
		"add": func(a, b int) int {
			return a + b
		},
		"sub": func(a, b int) int {
			return a - b
		},
		"sanitizePath": func(path string) string {
			sanitized := strings.ReplaceAll(strings.ReplaceAll(path, "/", "-"), ":", "_")
			sanitized = strings.ReplaceAll(sanitized, "{", "")
			sanitized = strings.ReplaceAll(sanitized, "}", "")
			if sanitized == "" || sanitized == "-" {
				sanitized = "root"
			}
			return sanitized
		},
		"sanitizeResourceType": sanitizeResourceType,
		"sanitizeIdentifier":   sanitizeIdentifier,
		"getSanitizedModelName": func(name string) string {
			return g.getSanitizedModelName(name)
		},
		"getTypeScriptType": func(schema ir.Schema) string {
			str, err := g.getTypeScriptType(schema)
			if err != nil {
				fmt.Printf("Error getting TypeScript type: %s\n", err)
				return "any" // Use 'any' for unknown types
			}
			return str
		},
		"getSubresource": func(path string) string {
			segments := strings.Split(path, "/")
			return segments[len(segments)-1]
		},
		"getDefaultValue": func(schema ir.Schema) string {
			return g.getDefaultValue(schema)
		},
		"upper": strings.ToUpper,
		"lower": strings.ToLower,
		"title": strings.Title,
		"first": func(slice []string) string {
			if len(slice) > 0 {
				return slice[0]
			}
			return ""
		},
		"last": func(slice []string) string {
			if len(slice) > 0 {
				return slice[len(slice)-1]
			}
			return ""
		},
		"hasSubstring": func(s, substr string) bool {
			return strings.Contains(s, substr)
		},
		"split": strings.Split,
		"hasKey": func(dict map[string]interface{}, key string) bool {
			_, ok := dict[key]
			return ok
		},
		"list": func(items ...string) []string {
			return items
		},
		"append": func(slice []string, item string) []string {
			return append(slice, item)
		},
		"set": func(dict map[string][]string, key string, value []string) map[string][]string {
			dict[key] = value
			return dict // Return the entire dictionary, not just the value
		},
		"get": func(dict map[string][]string, key string) []string {
			if val, ok := dict[key]; ok {
				return val
			}
			return []string{}
		},
		"dict": func() map[string][]string {
			return make(map[string][]string)
		},
		"toCamelCase": func(s string) string {
			// Split the string by non-alphanumeric characters
			parts := strings.FieldsFunc(s, func(r rune) bool {
				return !unicode.IsLetter(r) && !unicode.IsNumber(r)
			})

			// Convert to camelCase
			for i := range parts {
				if i == 0 {
					parts[i] = strings.ToLower(parts[i])
				} else {
					parts[i] = strings.Title(parts[i])
				}
			}

			return strings.Join(parts, "")
		},
		"escapeComment": func(s string) string {
			// Escape */ sequences in comments to prevent premature comment block termination
			return strings.ReplaceAll(s, "*/", "*\\/")
		},
	}
}

// loadTemplates loads all templates.
func (g *Generator) loadTemplates() error {
	// Get the templates directory
	templatesDir, err := getTemplatesDir()
	if err != nil {
		return fmt.Errorf("failed to get templates directory: %w", err)
	}

	// Create template function map
	funcMap := g.createTemplateFuncMap()

	// Define template paths
	templatePaths := []string{
		"config.ts.tmpl",
		"index.ts.tmpl",
		"logger.ts.tmpl",
		"server.ts.tmpl",
		"models/model.ts.tmpl",
		"models/index.ts.tmpl",
		"routes/resource-routes.ts.tmpl",
		"routes/index.ts.tmpl",
		"storage/Storage.ts.tmpl",
		"storage/InMemoryStorage.ts.tmpl",
		"storage/FileStorage.ts.tmpl",
		"storage/FirestoreStorage.ts.tmpl",
		"storage/index.ts.tmpl",
		"middleware/auth.ts.tmpl",
		"middleware/error-handler.ts.tmpl",
		"middleware/cluster-handler.ts.tmpl",
		"middleware/index.ts.tmpl",
		"utils/index.ts.tmpl",
		"utils/watch.ts.tmpl",
		"utils/resource-utils.ts.tmpl",
		"default-cluster-state.json.tmpl",
		"init-cluster.ts.tmpl",
		"package.json.tmpl",
		"tsconfig.json.tmpl",
		"routes/discovery-routes.ts.tmpl",
		"routes/endpoint-route.ts.tmpl",
		"routes/openapi-routes.ts.tmpl",
		"routes/utility-routes.ts.tmpl",
	}

	// Load each template
	for _, path := range templatePaths {
		// Construct full path
		fullPath := filepath.Join(templatesDir, path)

		// Ensure the directory exists
		dir := filepath.Dir(fullPath)
		if _, err := os.Stat(dir); os.IsNotExist(err) {
			return fmt.Errorf("template directory not found: %s", dir)
		}

		// Check if template file exists
		if _, err := os.Stat(fullPath); os.IsNotExist(err) {
			return fmt.Errorf("template file not found: %s", fullPath)
		}

		// Create a new template with the function map
		tmpl := template.New(filepath.Base(path)).Funcs(funcMap)

		// Parse template
		tmpl, err := tmpl.ParseFiles(fullPath)
		if err != nil {
			return fmt.Errorf("failed to parse template %s: %w", path, err)
		}

		// Store template
		g.Templates[path] = tmpl
	}

	return nil
}

// Add this function to the Generator struct methods
func (g *Generator) debugIR() {
	fmt.Println("=== DEBUG IR STRUCTURE ===")
	fmt.Printf("Number of Models: %d\n", len(g.IR.Models))
	fmt.Printf("Number of Endpoints: %d\n", len(g.IR.Endpoints))

	// Print a few model names as examples
	fmt.Println("Sample Model Names:")
	count := 0
	for name := range g.IR.Models {
		if count < 5 {
			fmt.Printf("  - %s\n", name)
			count++
		} else {
			break
		}
	}

	// Print a few endpoints as examples
	fmt.Println("Sample Endpoints:")
	for i, endpoint := range g.IR.Endpoints {
		if i < 5 {
			fmt.Printf("  - %s %s\n", endpoint.Method, endpoint.Path)
			fmt.Printf("    Tags: %v\n", endpoint.Tags)
		} else {
			break
		}
	}
	fmt.Println("=========================")
}

// Generate generates all TypeScript code.
func (g *Generator) Generate() error {
	// Debug IR structure
	g.debugIR()

	// Generate config
	if err := g.generateConfig(); err != nil {
		return fmt.Errorf("failed to generate config: %w", err)
	}

	// Generate logger
	if err := g.generateLogger(); err != nil {
		return fmt.Errorf("failed to generate logger: %w", err)
	}

	// Generate models
	if err := g.generateModels(); err != nil {
		return fmt.Errorf("failed to generate models: %w", err)
	}

	// Generate storage
	if err := g.generateStorage(); err != nil {
		return fmt.Errorf("failed to generate storage: %w", err)
	}

	// Generate routes
	if err := g.generateRoutes(); err != nil {
		return fmt.Errorf("failed to generate routes: %w", err)
	}

	// Generate middleware
	if err := g.generateMiddleware(); err != nil {
		return fmt.Errorf("failed to generate middleware: %w", err)
	}

	// Generate utils
	if err := g.generateUtils(); err != nil {
		return fmt.Errorf("failed to generate utils: %w", err)
	}

	// Generate default cluster state
	if err := g.generateDefaultClusterState(); err != nil {
		return fmt.Errorf("failed to generate default cluster state: %w", err)
	}

	// Generate init cluster script
	if err := g.generateInitCluster(); err != nil {
		return fmt.Errorf("failed to generate init cluster script: %w", err)
	}

	// Generate server
	if err := g.generateServer(); err != nil {
		return fmt.Errorf("failed to generate server: %w", err)
	}

	// Generate index
	if err := g.generateIndex(); err != nil {
		return fmt.Errorf("failed to generate index: %w", err)
	}

	// Generate package.json
	if err := g.generatePackageJSON(); err != nil {
		return fmt.Errorf("failed to generate package.json: %w", err)
	}

	// Generate tsconfig.json
	if err := g.generateTSConfig(); err != nil {
		return fmt.Errorf("failed to generate tsconfig.json: %w", err)
	}
	// copy the openapi spec if present
	if g.Config.OpenAPISpecPath != "" {
		// 1) Create the "openapi" directory under g.OutputDir
		openapiDir := filepath.Join(g.OutputDir, "openapi")
		if err := os.MkdirAll(openapiDir, 0755); err != nil {
			return fmt.Errorf("failed to create openapi directory: %w", err)
		}

		// 2) Copy the file from config.OpenAPISpecPath to "openapi/openapi.json"
		dstPath := filepath.Join(openapiDir, "openapi.json")
		if err := helpers.StripProtoBufFromFile(g.Config.OpenAPISpecPath, dstPath); err != nil {
			return fmt.Errorf("failed to copy OpenAPI spec: %w", err)
		}

		fmt.Printf("Copied OpenAPI spec from %s to %s\n", g.Config.OpenAPISpecPath, dstPath)
	}
	return nil
}

// generateModels generates the model files.
func (g *Generator) generateModels() error {
	// Create models directory if it doesn't exist
	modelsDir := filepath.Join(g.OutputDir, "src", "models")
	if err := os.MkdirAll(modelsDir, 0755); err != nil {
		return fmt.Errorf("failed to create models directory: %w", err)
	}

	// Group models by resource type
	modelsByResourceType := make(map[string]map[string]ir.Model)

	for originalName, model := range g.IR.Models {
		resourceType := model.ResourceType
		if resourceType == "" {
			// If ResourceType is empty, try to infer it from the model name
			parts := strings.Split(originalName, ".")
			if len(parts) > 1 {
				resourceType = parts[len(parts)-2]
			} else {
				resourceType = "core"
			}
		}

		if modelsByResourceType[resourceType] == nil {
			modelsByResourceType[resourceType] = make(map[string]ir.Model)
		}
		modelsByResourceType[resourceType][originalName] = model
	}

	// Generate model files for each resource type
	for resourceType, models := range modelsByResourceType {
		// Create resource type directory
		resourceTypeDir := filepath.Join(modelsDir, sanitizeResourceType(resourceType))
		if err := os.MkdirAll(resourceTypeDir, 0755); err != nil {
			return fmt.Errorf("failed to create resource type directory %s: %w", resourceType, err)
		}

		// Generate model files for this resource type
		for originalName, model := range models {
			// Get the template
			tmpl, ok := g.Templates["models/model.ts.tmpl"]
			if !ok {
				return fmt.Errorf("template models/model.ts.tmpl not found")
			}

			// Get sanitized model name
			sanitizedName := g.getSanitizedModelName(originalName)

			// Process model to enhance with additional metadata
			enhancedModel := g.enhanceModel(originalName, sanitizedName, model)

			data := struct {
				OriginalModelName string
				ModelName         string
				Model             EnhancedModel
				IR                ir.IR
				ResourceType      string
			}{
				OriginalModelName: originalName,
				ModelName:         sanitizedName,
				Model:             enhancedModel,
				IR:                *g.IR,
				ResourceType:      resourceType,
			}

			filename := fmt.Sprintf("%s.ts", sanitizedName)
			filePath := filepath.Join(resourceTypeDir, filename)

			file, err := os.Create(filePath)
			if err != nil {
				return fmt.Errorf("failed to create file %s: %w", filePath, err)
			}
			defer file.Close()

			if err := tmpl.Execute(file, data); err != nil {
				return fmt.Errorf("failed to execute template for model %s: %w", originalName, err)
			}
		}

		// Generate index.ts for this resource type
		resourceIndexPath := filepath.Join(resourceTypeDir, "index.ts")
		resourceIndexFile, err := os.Create(resourceIndexPath)
		if err != nil {
			return fmt.Errorf("failed to create file %s: %w", resourceIndexPath, err)
		}

		// Write exports for all models in this resource type
		for originalName := range models {
			sanitizedName := g.getSanitizedModelName(originalName)
			_, err := fmt.Fprintf(resourceIndexFile, "export * from './%s';\n", sanitizedName)
			if err != nil {
				resourceIndexFile.Close()
				return fmt.Errorf("failed to write to resource index file: %w", err)
			}
		}

		resourceIndexFile.Close()
	}

	// Generate main models index
	indexTmpl, ok := g.Templates["models/index.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template models/index.ts.tmpl not found")
	}

	indexPath := filepath.Join(modelsDir, "index.ts")
	indexFile, err := os.Create(indexPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", indexPath, err)
	}
	defer indexFile.Close()

	// Create data for index template with models grouped by resource type
	indexData := struct {
		ModelsByResourceType map[string]map[string]ir.Model
		IR                   ir.IR
		SanitizedModelNames  map[string]string
	}{
		ModelsByResourceType: modelsByResourceType,
		IR:                   *g.IR,
		SanitizedModelNames:  g.SanitizedModelNames,
	}

	if err := indexTmpl.Execute(indexFile, indexData); err != nil {
		return fmt.Errorf("failed to execute template for models index: %w", err)
	}

	return nil
}

// preprocessIRForDiscovery extracts API groups, versions, and resources from the IR
// for use in the discovery routes template
func preprocessIRForDiscovery(ir *ir.IR) map[string]interface{} {
	discoveryData := make(map[string]interface{})

	// Extract API groups and versions
	apiGroups := make(map[string][]string)
	coreResources := make(map[string]map[string]interface{})
	groupVersionResources := make(map[string]map[string]map[string]interface{})

	// Process all endpoints
	for _, endpoint := range ir.Endpoints {
		path := endpoint.Path

		// Skip watch endpoints - they're not separate resources
		if strings.Contains(path, "/watch/") {
			continue
		}

		// Extract API groups and versions from /apis/ paths
		if strings.Contains(path, "/apis/") {
			parts := strings.Split(path, "/")
			if len(parts) > 4 {
				group := parts[2]
				version := parts[3]

				// Skip if this is a watch endpoint
				if parts[4] == "watch" {
					continue
				}

				// Get the resource type - it's at different positions depending on whether it's namespaced
				var resourceType = endpoint.Kind
				// fmt.Printf("The resource type is %v \n", endpoint.Kind)
				// if len(parts) > 5 && parts[4] == "namespaces" {
				// 	// Namespaced resource: /apis/{group}/{version}/namespaces/{namespace}/{resource}
				// 	if len(parts) > 6 {
				// 		resourceType = parts[6]
				// 	}
				// } else {
				// 	// Non-namespaced resource: /apis/{group}/{version}/{resource}
				// 	resourceType = parts[4]
				// }

				if resourceType != "" {
					// Add group and version
					if _, ok := apiGroups[group]; !ok {
						apiGroups[group] = []string{version}
					} else if !contains(apiGroups[group], version) {
						apiGroups[group] = append(apiGroups[group], version)
					}

					// Add resource to group/version
					groupVersion := fmt.Sprintf("%s/%s", group, version)

					if _, ok := groupVersionResources[groupVersion]; !ok {
						groupVersionResources[groupVersion] = make(map[string]map[string]interface{})
					}

					if _, ok := groupVersionResources[groupVersion][resourceType]; !ok {
						groupVersionResources[groupVersion][resourceType] = map[string]interface{}{
							"name":       resourceType,
							"namespaced": endpoint.Namespaced, // Use the Namespaced property from the IR
						}
					}
				}
			}
		}

		// Extract core resources from /api/v1 paths
		if strings.Contains(path, "/api/v1") {
			parts := strings.Split(path, "/")

			// Skip if this is a watch endpoint
			if len(parts) > 3 && parts[3] == "watch" {
				continue
			}

			var resourceType = endpoint.Kind

			// if len(parts) > 3 && parts[3] == "namespaces" {
			// 	// Namespaced resource: /api/v1/namespaces/{namespace}/{resource}
			// 	if len(parts) > 5 {
			// 		resourceType = parts[5]
			// 	}
			// } else if len(parts) > 3 {
			// 	// Non-namespaced resource: /api/v1/{resource}
			// 	resourceType = parts[3]
			// }

			if resourceType != "" && resourceType != "namespaces" {
				coreResources[resourceType] = map[string]interface{}{
					"name":       resourceType,
					"namespaced": endpoint.Namespaced, // Use the Namespaced property from the IR
				}
			}
		}
	}

	// Add namespaces as a special case
	coreResources["namespaces"] = map[string]interface{}{
		"name":       "namespaces",
		"namespaced": false, // Namespaces are never namespaced
	}

	// Convert core resources to array
	coreResourcesList := make([]map[string]interface{}, 0, len(coreResources))
	for _, resource := range coreResources {
		coreResourcesList = append(coreResourcesList, resource)
	}

	// Convert group version resources to a more usable format
	groupVersionResourcesList := make(map[string][]map[string]interface{})
	for groupVersion, resources := range groupVersionResources {
		resourcesList := make([]map[string]interface{}, 0, len(resources))
		for _, resource := range resources {
			resourcesList = append(resourcesList, resource)
		}
		groupVersionResourcesList[groupVersion] = resourcesList
	}

	// Build the discovery data structure
	discoveryData["apiGroups"] = apiGroups
	discoveryData["coreResources"] = coreResourcesList
	discoveryData["groupVersionResources"] = groupVersionResourcesList

	return discoveryData
}

// Helper function to check if a string is in a slice
func contains(slice []string, item string) bool {
	for _, s := range slice {
		if s == item {
			return true
		}
	}
	return false
}

// enhanceModel processes a model to add additional metadata for code generation
func (g *Generator) enhanceModel(originalName, sanitizedName string, model ir.Model) EnhancedModel {
	enhanced := EnhancedModel{
		OriginalName: originalName,
		Name:         sanitizedName,
		Description:  model.Schema.Description,
		Schema:       model.Schema,
		Properties:   []EnhancedProperty{},
		Imports:      make(map[string]string),
		ResourceType: model.ResourceType,
	}

	// If ResourceType is empty, try to infer it from the model name
	if enhanced.ResourceType == "" {
		parts := strings.Split(originalName, ".")
		if len(parts) > 1 {
			enhanced.ResourceType = parts[len(parts)-2]
		} else {
			// Try to infer from the model name itself
			// Common Kubernetes resource types
			resourceTypes := []string{
				"pod", "deployment", "service", "configmap", "secret",
				"namespace", "node", "persistentvolume", "persistentvolumeclaim",
				"statefulset", "daemonset", "job", "cronjob", "ingress", "networkpolicy",
				"serviceaccount", "role", "rolebinding", "clusterrole", "clusterrolebinding",
			}

			lowerName := strings.ToLower(originalName)
			for _, rt := range resourceTypes {
				if strings.Contains(lowerName, rt) {
					enhanced.ResourceType = rt
					break
				}
			}

			// If still not found, default to "core"
			if enhanced.ResourceType == "" {
				enhanced.ResourceType = "core"
			}
		}
	}

	// Handle the 'list' edge case
	// If resourceType ends with 'list', it's a list of another resource type
	if strings.HasSuffix(strings.ToLower(enhanced.ResourceType), "list") {
		// Extract the base resource type (remove 'list' suffix)
		baseResourceType := strings.TrimSuffix(strings.ToLower(enhanced.ResourceType), "list")

		// Find the corresponding model for the base resource type
		var baseModelName string
		var baseModelOriginalName string

		for origName, mdl := range g.IR.Models {
			rt := mdl.ResourceType
			if rt == "" {
				parts := strings.Split(origName, ".")
				if len(parts) > 1 {
					rt = parts[len(parts)-2]
				}
			}

			if strings.ToLower(rt) == baseResourceType {
				baseModelOriginalName = origName
				baseModelName = g.getSanitizedModelName(origName)
				break
			}
		}

		// If we found a base model, add it to imports
		if baseModelName != "" {
			enhanced.Imports[baseModelName] = fmt.Sprintf("%s/%s",
				sanitizeResourceType(baseResourceType), baseModelName)

			// Add a special flag to indicate this is a list type
			enhanced.IsList = true
			enhanced.BaseResourceType = baseResourceType
			enhanced.BaseModelName = baseModelName
			enhanced.BaseModelOriginalName = baseModelOriginalName
		}
	}

	// Process properties
	for propName, propSchema := range model.Schema.Properties {
		isRequired := false
		for _, req := range model.Schema.Required {
			if req == propName {
				isRequired = true
				break
			}
		}

		prop := EnhancedProperty{
			Name:        propName,
			Description: propSchema.Description,
			IsRequired:  isRequired,
		}

		// Special handling for 'items' property in list types
		if enhanced.IsList && propName == "items" {
			// Set the type to an array of the base model
			prop.Type = enhanced.BaseModelName + "[]"
			prop.IsArray = true
			prop.IsReference = true
			prop.RefName = enhanced.BaseModelName
			prop.OriginalRefName = enhanced.BaseModelOriginalName

			// The import is already added above
			enhanced.Properties = append(enhanced.Properties, prop)
			continue
		}

		// Determine property type
		if propSchema.Ref != "" {
			// Handle reference type
			refParts := strings.Split(propSchema.Ref, "/")
			originalRefName := refParts[len(refParts)-1]
			sanitizedRefName := g.getSanitizedModelName(originalRefName)

			// Avoid circular references by checking if the reference is to the current model
			if originalRefName == originalName {
				prop.Type = "any" // Use 'any' to break circular references
				prop.IsReference = false
			} else {
				prop.Type = sanitizedRefName
				prop.IsReference = true
				prop.RefName = sanitizedRefName
				prop.OriginalRefName = originalRefName

				// Add to imports if it's not the same as the current model
				enhanced.Imports[sanitizedRefName] = originalRefName
			}
		} else if propSchema.Type == "array" && propSchema.Items != nil {
			// Handle array type
			prop.IsArray = true

			if propSchema.Items.Ref != "" {
				// Array of references
				refParts := strings.Split(propSchema.Items.Ref, "/")
				originalRefName := refParts[len(refParts)-1]
				sanitizedRefName := g.getSanitizedModelName(originalRefName)

				// Avoid circular references by checking if the reference is to the current model
				if originalRefName == originalName {
					prop.Type = "any[]" // Use 'any[]' to break circular references
				} else {
					prop.Type = sanitizedRefName + "[]"
					prop.RefName = sanitizedRefName
					prop.OriginalRefName = originalRefName

					// Add to imports if it's not the same as the current model
					enhanced.Imports[sanitizedRefName] = originalRefName
				}
			} else {
				// Array of primitive types or nested objects
				if propSchema.Items.Type == "object" && len(propSchema.Items.Properties) > 0 {
					// Array of nested objects
					nestedType := g.generateNestedObjectType(
						propSchema.Items.Properties,
						propSchema.Items.Required,
						&enhanced.Imports,
						originalName,
					)
					prop.Type = "Array<" + nestedType + ">"
				} else {
					// Array of primitive types
					itemType, err := g.getTypeScriptType(*propSchema.Items)
					if err != nil {
						fmt.Printf("Error getting array item type: %s\n", err)
						prop.Type = "any[]"
					} else {
						prop.Type = itemType + "[]"
					}
				}
			}
		} else if propSchema.Type == "object" && len(propSchema.Properties) > 0 {
			// Handle nested object type
			prop.IsObject = true
			nestedType := g.generateNestedObjectType(
				propSchema.Properties,
				propSchema.Required,
				&enhanced.Imports,
				originalName,
			)
			prop.Type = nestedType
		} else {
			// Handle primitive type
			typeStr, err := g.getTypeScriptType(propSchema)
			if err != nil {
				fmt.Printf("Error getting primitive type: %s\n", err)
				prop.Type = "any" // Use 'any' for unknown types
			} else {
				prop.Type = typeStr
			}
		}

		// Set default value
		prop.DefaultValue = g.getDefaultValue(propSchema)

		// For reference types, we need to determine the resource type of the referenced model
		if prop.IsReference && prop.RefName != "" {
			// Find the resource type of the referenced model
			refModel, exists := g.IR.Models[prop.OriginalRefName]
			if exists {
				refResourceType := refModel.ResourceType
				if refResourceType == "" {
					parts := strings.Split(prop.OriginalRefName, ".")
					if len(parts) > 1 {
						refResourceType = parts[len(parts)-2]
					} else {
						// Try to infer from the model name itself
						// Common Kubernetes resource types
						resourceTypes := []string{
							"pod", "deployment", "service", "configmap", "secret",
							"namespace", "node", "persistentvolume", "persistentvolumeclaim",
							"statefulset", "daemonset", "job", "cronjob", "ingress", "networkpolicy",
							"serviceaccount", "role", "rolebinding", "clusterrole", "clusterrolebinding",
						}

						lowerName := strings.ToLower(prop.OriginalRefName)
						for _, rt := range resourceTypes {
							if strings.Contains(lowerName, rt) {
								refResourceType = rt
								break
							}
						}

						// If still not found, default to "core"
						if refResourceType == "" {
							refResourceType = "core"
						}
					}
				}

				// If the referenced model is in a different resource type, adjust the import path
				if refResourceType != enhanced.ResourceType {
					// Update the import path to include the resource type directory
					enhanced.Imports[prop.RefName] = fmt.Sprintf("%s/%s",
						sanitizeResourceType(refResourceType), prop.RefName)
				}
			}
		}

		enhanced.Properties = append(enhanced.Properties, prop)
	}

	// Set the display name to be the capitalized resource type
	if enhanced.ResourceType != "" {
		enhanced.DisplayName = strings.Title(enhanced.ResourceType)

		// If it's a list type, make sure the display name reflects that
		if enhanced.IsList {
			enhanced.DisplayName = strings.Title(enhanced.BaseResourceType) + "List"
		}
	} else {
		enhanced.DisplayName = enhanced.Name
	}

	return enhanced
}

// generateNestedObjectType generates a TypeScript type for a nested object
func (g *Generator) generateNestedObjectType(
	properties map[string]ir.Schema,
	required []string,
	imports *map[string]string, // Map of sanitized name to original name
	currentModelOriginalName string,
) string {
	if len(properties) == 0 {
		return "Record<string, any>"
	}

	// If there are too many properties, simplify to Record<string, any>
	if len(properties) > 15 {
		return "Record<string, any>"
	}

	parts := []string{}

	for propName, propSchema := range properties {
		isRequired := false
		for _, req := range required {
			if req == propName {
				isRequired = true
				break
			}
		}

		// Determine property type
		var propType string
		if propSchema.Ref != "" {
			// Handle reference type
			refParts := strings.Split(propSchema.Ref, "/")
			originalRefName := refParts[len(refParts)-1]
			sanitizedRefName := g.getSanitizedModelName(originalRefName)

			// Avoid circular references by checking if the reference is to the current model
			if originalRefName == currentModelOriginalName {
				propType = "any" // Use 'any' to break circular references
			} else {
				propType = sanitizedRefName

				// Add to imports if it's not the same as the current model
				(*imports)[sanitizedRefName] = originalRefName
			}
		} else if propSchema.Type == "array" && propSchema.Items != nil {
			// Handle array type
			if propSchema.Items.Ref != "" {
				// Array of references
				refParts := strings.Split(propSchema.Items.Ref, "/")
				originalRefName := refParts[len(refParts)-1]
				sanitizedRefName := g.getSanitizedModelName(originalRefName)

				// Avoid circular references by checking if the reference is to the current model
				if originalRefName == currentModelOriginalName {
					propType = "any[]" // Use 'any[]' to break circular references
				} else {
					propType = sanitizedRefName + "[]"

					// Add to imports if it's not the same as the current model
					(*imports)[sanitizedRefName] = originalRefName
				}
			} else {
				// Array of primitive types or nested objects
				if propSchema.Items.Type == "object" && len(propSchema.Items.Properties) > 0 {
					// Array of nested objects
					nestedType := g.generateNestedObjectType(
						propSchema.Items.Properties,
						propSchema.Items.Required,
						imports,
						currentModelOriginalName,
					)
					propType = "Array<" + nestedType + ">"
				} else {
					// Array of primitive types
					itemType, err := g.getTypeScriptType(*propSchema.Items)
					if err != nil {
						fmt.Printf("Error getting array item type in nested object: %s\n", err)
						propType = "any[]"
					} else {
						propType = itemType + "[]"
					}
				}
			}
		} else if propSchema.Type == "object" {
			if len(propSchema.Properties) > 0 {
				// Nested object with properties
				nestedType := g.generateNestedObjectType(
					propSchema.Properties,
					propSchema.Required,
					imports,
					currentModelOriginalName,
				)
				propType = nestedType
			} else if propSchema.AdditionalProperties != nil {
				// Map type
				ap, ok := propSchema.AdditionalProperties.(ir.Schema)
				if ok {
					if ap.Ref != "" {
						refParts := strings.Split(ap.Ref, "/")
						originalRefName := refParts[len(refParts)-1]
						sanitizedRefName := g.getSanitizedModelName(originalRefName)
						propType = "Record<string, " + sanitizedRefName + ">"
						(*imports)[sanitizedRefName] = originalRefName
					} else {
						valueType, err := g.getTypeScriptType(ap)
						if err != nil {
							fmt.Printf("Error getting map value type: %s\n", err)
							propType = "Record<string, any>"
						} else {
							propType = "Record<string, " + valueType + ">"
						}
					}
				} else {
					propType = "Record<string, any>"
				}
			} else {
				propType = "Record<string, any>"
			}
		} else {
			// Handle primitive type
			typeStr, err := g.getTypeScriptType(propSchema)
			if err != nil {
				fmt.Printf("Error getting primitive type in nested object: %s\n", err)
				propType = "any"
			} else {
				propType = typeStr
			}
		}

		// Add optional marker if not required
		if !isRequired {
			propName += "?"
		}

		parts = append(parts, propName+": "+propType)
	}

	return "{ " + strings.Join(parts, "; ") + " }"
}

// generateRoutes generates the route files.
func (g *Generator) generateRoutes() error {
	// Create routes directory if it doesn't exist
	routesDir := filepath.Join(g.OutputDir, "src", "routes")
	if err := os.MkdirAll(routesDir, 0755); err != nil {
		return fmt.Errorf("failed to create routes directory: %w", err)
	}

	// Generate discovery routes file
	if err := g.generateDiscoveryRoutes(); err != nil {
		return fmt.Errorf("failed to generate discovery routes: %w", err)
	}

	// Generate openapi routes file
	if err := g.generateOpenAPIRoutes(); err != nil {
		return fmt.Errorf("failed to generate openapi routes: %w", err)
	}

	// Generate utility routes file
	if err := g.generateUtilityRoutes(); err != nil {
		return fmt.Errorf("failed to generate utility routes: %w", err)
	}

	// Generate individual route files for each endpoint
	if err := g.generateEndpointRoutes(); err != nil {
		return fmt.Errorf("failed to generate endpoint routes: %w", err)
	}

	// Generate routes index
	indexTmpl, ok := g.Templates["routes/index.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template routes/index.ts.tmpl not found")
	}

	indexPath := filepath.Join(g.OutputDir, "src", "routes", "index.ts")
	indexFile, err := os.Create(indexPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", indexPath, err)
	}
	defer indexFile.Close()

	// Create a data structure for the index template
	indexData := struct {
		Endpoints []ir.Endpoint
		IR        ir.IR
	}{
		Endpoints: g.IR.Endpoints,
		IR:        *g.IR,
	}

	if err := indexTmpl.Execute(indexFile, indexData); err != nil {
		return fmt.Errorf("failed to execute template for routes index: %w", err)
	}

	return nil
}

// generateDiscoveryRoutes generates the API discovery routes file
func (g *Generator) generateDiscoveryRoutes() error {
	// Get the template
	tmpl, ok := g.Templates["routes/discovery-routes.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template routes/discovery-routes.ts.tmpl not found")
	}

	// Create file
	filePath := filepath.Join(g.OutputDir, "src", "routes", "discovery-routes.ts")
	file, err := os.Create(filePath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", filePath, err)
	}
	defer file.Close()

	// Filter discovery endpoints
	var discoveryEndpoints []ir.Endpoint
	for _, endpoint := range g.IR.Endpoints {
		if endpoint.ResourceType == "discovery" {
			discoveryEndpoints = append(discoveryEndpoints, endpoint)
		}
	}
	discoveryData := preprocessIRForDiscovery(g.IR)

	// Execute template
	data := struct {
		IR                 ir.IR
		DiscoveryEndpoints []ir.Endpoint
		DiscoveryData      map[string]interface{}
	}{
		IR:                 *g.IR,
		DiscoveryEndpoints: discoveryEndpoints,
		DiscoveryData:      discoveryData,
	}

	if err := tmpl.Execute(file, data); err != nil {
		return fmt.Errorf("failed to execute template for discovery routes: %w", err)
	}

	return nil
}

// generateOpenAPIRoutes generates the API discovery routes file
func (g *Generator) generateOpenAPIRoutes() error {
	// Get the template
	tmpl, ok := g.Templates["routes/openapi-routes.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template routes/openapi-routes.ts.tmpl not found")
	}

	// Create file
	filePath := filepath.Join(g.OutputDir, "src", "routes", "openapi-routes.ts")
	file, err := os.Create(filePath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", filePath, err)
	}
	defer file.Close()

	if err := tmpl.Execute(file, nil); err != nil {
		return fmt.Errorf("failed to execute template for openapi routes: %w", err)
	}

	return nil
}

// generateUtilityRoutes generates the API discovery routes file
func (g *Generator) generateUtilityRoutes() error {
	// Get the template
	tmpl, ok := g.Templates["routes/utility-routes.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template routes/utility-routes.ts.tmpl not found")
	}

	// Create file
	filePath := filepath.Join(g.OutputDir, "src", "routes", "utility-routes.ts")
	file, err := os.Create(filePath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", filePath, err)
	}
	defer file.Close()

	if err := tmpl.Execute(file, nil); err != nil {
		return fmt.Errorf("failed to execute template for utility routes: %w", err)
	}

	return nil
}

// generateEndpointRoutes generates individual route files for each endpoint
func (g *Generator) generateEndpointRoutes() error {
	// Get the template
	tmpl, ok := g.Templates["routes/endpoint-route.ts.tmpl"]
	if !ok {
		return fmt.Errorf("template routes/endpoint-route.ts.tmpl not found")
	}

	// Group endpoints by resource type
	endpointsByResourceType := make(map[string][]ir.Endpoint)

	// Map to track which models are used by each resource type
	modelsByResourceType := make(map[string][]string)

	// Process endpoints and group by resource type
	for _, endpoint := range g.IR.Endpoints {

		// Skip discovery endpoints as they are handled separately
		if endpoint.ResourceType == "discovery" {
			continue
		}

		// Use the ResourceType property, or fall back to the first tag, or "resource" if neither exists
		resourceType := endpoint.ResourceType
		if resourceType == "" {
			if len(endpoint.Tags) > 0 {
				resourceType = endpoint.Tags[0]
			} else {
				resourceType = "resource"
			}
		}

		endpointsByResourceType[resourceType] = append(endpointsByResourceType[resourceType], endpoint)
	}

	// Process models and group by resource type
	for modelName, model := range g.IR.Models {
		resourceType := model.ResourceType
		if resourceType == "" {
			resourceType = "core"
		}

		sanitizedName := g.getSanitizedModelName(modelName)
		modelsByResourceType[resourceType] = append(modelsByResourceType[resourceType], sanitizedName)
	}

	// Generate a route file for each resource type
	for resourceType, endpoints := range endpointsByResourceType {
		// Use the same sanitization function as for models
		sanitizedResourceType := sanitizeResourceType(resourceType)

		// Get models for this resource type
		models := modelsByResourceType[resourceType]
		if len(models) == 0 {
			// If no models found for this resource type, try to find models with similar names
			for modelResourceType, modelList := range modelsByResourceType {
				if strings.Contains(strings.ToLower(modelResourceType), strings.ToLower(resourceType)) ||
					strings.Contains(strings.ToLower(resourceType), strings.ToLower(modelResourceType)) {
					models = append(models, modelList...)
				}
			}
		}

		// Create file name from sanitized resource type
		fileName := fmt.Sprintf("%s-routes.ts", sanitizedResourceType)
		filePath := filepath.Join(g.OutputDir, "src", "routes", fileName)

		file, err := os.Create(filePath)
		if err != nil {
			return fmt.Errorf("failed to create file %s: %w", filePath, err)
		}

		// Execute template
		data := struct {
			ResourceType          string
			SanitizedResourceType string
			Endpoints             []ir.Endpoint
			Models                []string
			IR                    ir.IR
			UseProtos             bool
			ProtoImportPath       string
			ProtoMessage          string
		}{
			ResourceType:          resourceType,
			SanitizedResourceType: sanitizedResourceType,
			Endpoints:             endpoints,
			Models:                models,
			IR:                    *g.IR,
			UseProtos:             g.Config.FetchProtos,
			ProtoImportPath:       endpoints[0].ProtoImportPath,
			ProtoMessage:          endpoints[0].ProtoMessage,
		}

		if err := tmpl.Execute(file, data); err != nil {
			file.Close()
			return fmt.Errorf("failed to execute template for endpoint route %s: %w", resourceType, err)
		}

		file.Close()
	}

	return nil
}

// Remove this function as it's no longer needed
// extractResourceTypeFromEndpoint extracts the resource type from an endpoint
// func (g *Generator) extractResourceTypeFromEndpoint(endpoint ir.Endpoint) string {
//     ...
// }

// generateConfig generates the config.ts file.
func (g *Generator) generateConfig() error {
	// Create simplified config for TypeScript
	tsConfig := struct {
		StorageType               string `json:"storageType"`
		FilePath                  string `json:"filePath,omitempty"`
		FirestoreProject          string `json:"firestoreProject,omitempty"`
		FirestoreCollectionPrefix string `json:"firestoreCollectionPrefix,omitempty"`
		InitialStateType          string `json:"initialStateType"`
		CustomStatePath           string `json:"customStatePath,omitempty"`
	}{
		StorageType:      g.Config.Storage.Type,
		InitialStateType: g.Config.InitialStateConfig.Type,
	}

	// Add storage-specific config
	if g.Config.Storage.Type == "file" {
		tsConfig.FilePath = g.Config.Storage.FilePath
	} else if g.Config.Storage.Type == "firestore" {
		tsConfig.FirestoreProject = g.Config.Storage.FirestoreProject
		tsConfig.FirestoreCollectionPrefix = g.Config.Storage.FirestoreCollectionPrefix
		if tsConfig.FirestoreCollectionPrefix == "" {
			tsConfig.FirestoreCollectionPrefix = "k8s" // Default collection prefix
		}
	}

	// Execute template
	return g.executeTemplate("config.ts.tmpl", filepath.Join(g.OutputDir, "src", "config.ts"), tsConfig)
}

// generateLogger generates the logger.ts file.
func (g *Generator) generateLogger() error {
	// Execute template
	return g.executeTemplate("logger.ts.tmpl", filepath.Join(g.OutputDir, "src", "logger.ts"), nil)
}

// generateStorage generates the storage files.
func (g *Generator) generateStorage() error {
	// Generate Storage interface
	if err := g.executeTemplate("storage/Storage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "Storage.ts"), g.IR); err != nil {
		return fmt.Errorf("failed to generate Storage interface: %w", err)
	}

	// Generate StorageError
	storageErrorHandler := NewStorageErrorHandler(g.OutputDir)
	if err := storageErrorHandler.Generate(); err != nil {
		return fmt.Errorf("failed to generate StorageError: %w", err)
	}

	// Generate storage implementations based on config
	switch g.Config.Storage.Type {
	case "memory":
		// Generate InMemoryStorage
		if err := g.executeTemplate("storage/InMemoryStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "InMemoryStorage.ts"), g.IR); err != nil {
			return fmt.Errorf("failed to generate InMemoryStorage: %w", err)
		}
	case "file":
		// Generate FileStorage
		if err := g.executeTemplate("storage/FileStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "FileStorage.ts"), g.IR); err != nil {
			return fmt.Errorf("failed to generate FileStorage: %w", err)
		}
	case "firestore":
		// Generate FirestoreStorage
		if err := g.executeTemplate("storage/FirestoreStorage.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "FirestoreStorage.ts"), g.IR); err != nil {
			return fmt.Errorf("failed to generate FirestoreStorage: %w", err)
		}
	}

	// Generate storage index
	return g.executeTemplate("storage/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "storage", "index.ts"), g.Config)
}

// generateMiddleware generates the middleware files.
func (g *Generator) generateMiddleware() error {
	// Generate auth middleware
	if err := g.executeTemplate("middleware/auth.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "auth.ts"), nil); err != nil {
		return fmt.Errorf("failed to generate auth middleware: %w", err)
	}

	// Generate error handler middleware
	if err := g.executeTemplate("middleware/error-handler.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "error-handler.ts"), nil); err != nil {
		return fmt.Errorf("failed to generate error handler middleware: %w", err)
	}

	// Generate cluster handler middleware
	if err := g.executeTemplate("middleware/cluster-handler.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "cluster-handler.ts"), nil); err != nil {
		return fmt.Errorf("failed to generate cluster handler middleware: %w", err)
	}

	// Generate middleware index
	return g.executeTemplate("middleware/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "middleware", "index.ts"), nil)
}

// generateUtils generates the utils files.
func (g *Generator) generateUtils() error {
	// Generate resource utils
	if err := g.executeTemplate("utils/resource-utils.ts.tmpl", filepath.Join(g.OutputDir, "src", "utils", "resource-utils.ts"), nil); err != nil {
		return fmt.Errorf("failed to generate resource utils: %w", err)
	}

	// Generate watch utils
	if err := g.executeTemplate("utils/watch.ts.tmpl", filepath.Join(g.OutputDir, "src", "utils", "watch.ts"), nil); err != nil {
		return fmt.Errorf("failed to generate watch utils: %w", err)
	}

	// Generate utils index
	return g.executeTemplate("utils/index.ts.tmpl", filepath.Join(g.OutputDir, "src", "utils", "index.ts"), nil)
}

// generateDefaultClusterState generates the default cluster state JSON file.
func (g *Generator) generateDefaultClusterState() error {
	// Only generate if using default initial state
	if g.Config.InitialStateConfig.Type != "default" {
		return nil
	}

	// Execute template
	return g.executeTemplate("default-cluster-state.json.tmpl", filepath.Join(g.OutputDir, "default-cluster-state.json"), g.IR)
}

// generateInitCluster generates the init-cluster.ts file.
func (g *Generator) generateInitCluster() error {
	// Execute template
	return g.executeTemplate("init-cluster.ts.tmpl", filepath.Join(g.OutputDir, "src", "init-cluster.ts"), g.Config)
}

// generateServer generates the server.ts file.
func (g *Generator) generateServer() error {
	// Execute template
	return g.executeTemplate("server.ts.tmpl", filepath.Join(g.OutputDir, "src", "server.ts"), g.Config)
}

// generateIndex generates the index.ts file.
func (g *Generator) generateIndex() error {
	// Execute template
	return g.executeTemplate("index.ts.tmpl", filepath.Join(g.OutputDir, "src", "index.ts"), g.Config)
}

// generatePackageJSON generates the package.json file.
func (g *Generator) generatePackageJSON() error {
	// Execute template
	return g.executeTemplate("package.json.tmpl", filepath.Join(g.OutputDir, "package.json"), g.Config)
}

// generateTSConfig generates the tsconfig.json file.
func (g *Generator) generateTSConfig() error {
	// Execute template
	return g.executeTemplate("tsconfig.json.tmpl", filepath.Join(g.OutputDir, "tsconfig.json"), nil)
}

// executeTemplate executes a template with the given data and writes the result to the given file.
func (g *Generator) executeTemplate(templateName string, outputPath string, data interface{}) error {
	// Get template
	tmpl, ok := g.Templates[templateName]
	if !ok {
		return fmt.Errorf("template %s not found", templateName)
	}

	// Create output directory if it doesn't exist
	dir := filepath.Dir(outputPath)
	if err := os.MkdirAll(dir, 0755); err != nil {
		return fmt.Errorf("failed to create directory %s: %w", dir, err)
	}

	// Create output file
	file, err := os.Create(outputPath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", outputPath, err)
	}
	defer file.Close()

	// Execute template
	if err := tmpl.Execute(file, data); err != nil {
		return fmt.Errorf("failed to execute template %s: %w", templateName, err)
	}

	return nil
}
