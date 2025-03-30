package config

// Config represents the configuration for the Kubernetes mock server generator
type Config struct {
	// Path to the OpenAPI specification file
	OpenAPISpecPath string `yaml:"openAPISpecPath"`

	// Output directory for the generated code
	OutputDir string `yaml:"outputDir"`

	// Server configuration
	Server ServerConfig `yaml:"server"`

	// Storage configuration
	Storage StorageConfig `yaml:"storage"`

	// Initial state configuration
	InitialStateConfig InitialStateConfig `yaml:"initialState"`

	FetchProtos bool `yaml:"fetchProtos"`
}

// ServerConfig represents the server configuration
type ServerConfig struct {
	// Port to run the server on
	Port int `yaml:"port"`
}

// StorageConfig represents the storage configuration
type StorageConfig struct {
	// Type of storage to use (memory, file, firestore)
	Type string `yaml:"type"`

	// Path to the file for file storage
	FilePath string `yaml:"filePath,omitempty"`

	// Firestore project ID
	FirestoreProject string `yaml:"firestoreProject,omitempty"`

	// Firestore collection prefix
	FirestoreCollectionPrefix string `yaml:"firestoreCollectionPrefix,omitempty"`
}

// InitialStateConfig represents the initial state configuration
type InitialStateConfig struct {
	// Type of initial state (empty, default, custom)
	Type string `yaml:"type"`
}
