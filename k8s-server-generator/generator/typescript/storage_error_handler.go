package typescript

import (
	"fmt"
	"os"
	"path/filepath"
	"text/template"
)

// StorageErrorHandler generates the StorageError.ts file
type StorageErrorHandler struct {
	OutputDir string
}

// NewStorageErrorHandler creates a new storage error handler
func NewStorageErrorHandler(outputDir string) *StorageErrorHandler {
	return &StorageErrorHandler{
		OutputDir: outputDir,
	}
}

// Generate generates the StorageError.ts file
func (h *StorageErrorHandler) Generate() error {
	// Create storage directory if it doesn't exist
	storageDir := filepath.Join(h.OutputDir, "src", "storage")
	if err := os.MkdirAll(storageDir, 0755); err != nil {
		return fmt.Errorf("failed to create storage directory: %w", err)
	}

	// Template for StorageError.ts using string concatenation to avoid dollar sign issues
	templateContent := `/**
 * Custom error class for storage operations
 */
export class StorageError extends Error {
  /**
   * Error code for categorizing the error
   */
  code: string;
  
  /**
   * Original error that caused this error (if any)
   */
  cause?: Error;
  
  /**
   * Additional context information about the error
   */
  context?: Record<string, any>;
  
  /**
   * Create a new StorageError
   * 
   * @param code Error code for categorizing the error
   * @param message Human-readable error message
   * @param cause Original error that caused this error (if any)
   * @param context Additional context information about the error
   */
  constructor(code: string, message: string, cause?: Error, context?: Record<string, any>) {
    super(message);
    this.name = 'StorageError';
    this.code = code;
    this.cause = cause;
    this.context = context;
    
    // Ensure proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, StorageError.prototype);
  }
  
  /**
   * Convert the error to a Kubernetes-style status object
   */
  toStatus() {
    return {
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      message: this.message,
      reason: this.code,
      code: this.getStatusCode(),
      details: this.context
    };
  }
  
  /**
   * Get the HTTP status code for this error
   */
  getStatusCode(): number {
    switch (this.code) {
      case 'NOT_FOUND':
        return 404;
      case 'ALREADY_EXISTS':
        return 409;
      case 'INVALID_INPUT':
      case 'MISSING_FIELD':
        return 400;
      case 'UNAUTHORIZED':
        return 401;
      case 'FORBIDDEN':
        return 403;
      case 'CONFLICT':
        return 409;
      case 'TIMEOUT':
        return 408;
      case 'INTERNAL_ERROR':
      default:
        return 500;
    }
  }
  
  /**
   * Create a NOT_FOUND error
   */
  static notFound(kind: string, name: string, namespace?: string): StorageError {
    const message = namespace 
      ? ` + "`${kind} \"${name}\" not found in namespace \"${namespace}\"`" + `
      : ` + "`${kind} \"${name}\" not found`" + `;
      
    return new StorageError('NOT_FOUND', message, undefined, {
      kind,
      name,
      namespace
    });
  }
  
  /**
   * Create an ALREADY_EXISTS error
   */
  static alreadyExists(kind: string, name: string, namespace?: string): StorageError {
    const message = namespace 
      ? ` + "`${kind} \"${name}\" already exists in namespace \"${namespace}\"`" + `
      : ` + "`${kind} \"${name}\" already exists`" + `;
      
    return new StorageError('ALREADY_EXISTS', message, undefined, {
      kind,
      name,
      namespace
    });
  }
  
  /**
   * Create an INVALID_INPUT error
   */
  static invalidInput(message: string, context?: Record<string, any>): StorageError {
    return new StorageError('INVALID_INPUT', message, undefined, context);
  }
  
  /**
   * Create a MISSING_FIELD error
   */
  static missingField(field: string): StorageError {
    return new StorageError('MISSING_FIELD', ` + "`Required field \"${field}\" is missing`" + `, undefined, {
      field
    });
  }
  
  /**
   * Create an INTERNAL_ERROR error
   */
  static internal(message: string, cause?: Error): StorageError {
    return new StorageError('INTERNAL_ERROR', message, cause);
  }
}`

	// Parse the template
	tmpl, err := template.New("StorageError").Parse(templateContent)
	if err != nil {
		return fmt.Errorf("failed to parse StorageError template: %w", err)
	}

	// Write StorageError.ts to file
	filePath := filepath.Join(storageDir, "StorageError.ts")
	file, err := os.Create(filePath)
	if err != nil {
		return fmt.Errorf("failed to create file %s: %w", filePath, err)
	}
	defer file.Close()

	if err := tmpl.Execute(file, nil); err != nil {
		return fmt.Errorf("failed to execute template for StorageError: %w", err)
	}

	return nil
}

