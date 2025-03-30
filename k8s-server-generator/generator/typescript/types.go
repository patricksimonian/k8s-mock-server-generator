package typescript

import "github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor/ir"

// EnhancedModel represents a model with additional metadata for code generation
type EnhancedModel struct {
	OriginalName          string
	Name                  string
	DisplayName           string // Added DisplayName field for capitalized resource type
	Description           string
	Schema                ir.Schema
	Properties            []EnhancedProperty
	Imports               map[string]string // Map of sanitized name to original name
	ResourceType          string            // Added ResourceType field
	IsList                bool              // Flag to indicate if this is a list type
	BaseResourceType      string            // Base resource type for list types
	BaseModelName         string            // Base model name for list types
	BaseModelOriginalName string            // Original base model name for list types
}

// EnhancedProperty represents a property with additional metadata for code generation
type EnhancedProperty struct {
	Name            string
	Description     string
	Type            string
	IsRequired      bool
	IsArray         bool
	IsObject        bool
	IsReference     bool
	RefName         string
	OriginalRefName string
	DefaultValue    string
}
