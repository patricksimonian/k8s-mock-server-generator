package helpers

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

func CopyFile(src, dst string) error {
	input, err := os.Open(src)
	if err != nil {
		return err
	}
	defer input.Close()

	output, err := os.Create(dst)
	if err != nil {
		return err
	}
	defer output.Close()

	_, err = io.Copy(output, input)
	return err
}

// stripProtoBufFromFile reads the OpenAPI spec from inputPath, strips the protobuf entries,
// and writes the result to outputPath.
func StripProtoBufFromFile(inputPath, outputPath string) error {
	data, err := os.ReadFile(inputPath)
	if err != nil {
		return fmt.Errorf("error reading file %q: %w", inputPath, err)
	}

	stripped, err := StripProtoBuf(data)
	if err != nil {
		return fmt.Errorf("error stripping protobuf content: %w", err)
	}

	if err := os.WriteFile(outputPath, stripped, 0644); err != nil {
		return fmt.Errorf("error writing to file %q: %w", outputPath, err)
	}
	return nil
}

// stripProtoBuf takes JSON bytes (from an OpenAPI spec, for example)
// and returns JSON with all occurrences of "application/vnd.kubernetes.protobuf"
// removed from any "consumes" or "produces" arrays.
func StripProtoBuf(jsonBytes []byte) ([]byte, error) {
	// Unmarshal the JSON into an empty interface.
	var data interface{}
	if err := json.Unmarshal(jsonBytes, &data); err != nil {
		return nil, err
	}

	// recursiveStrip traverses the structure and filters out the protobuf media type.
	var recursiveStrip func(interface{}) interface{}
	recursiveStrip = func(val interface{}) interface{} {
		switch v := val.(type) {
		case map[string]interface{}:
			// If this map has a "consumes" field, filter it.
			if arr, ok := v["consumes"].([]interface{}); ok {
				v["consumes"] = FilterProto(arr)
			}
			// Similarly for "produces"
			if arr, ok := v["produces"].([]interface{}); ok {
				v["produces"] = FilterProto(arr)
			}
			// Recurse into each value in the map.
			for key, value := range v {
				v[key] = recursiveStrip(value)
			}
			return v
		case []interface{}:
			// Recurse for each element in the slice.
			for i, elem := range v {
				v[i] = recursiveStrip(elem)
			}
			return v
		default:
			// For other types, return as is.
			return v
		}
	}

	// Apply the recursive filter.
	result := recursiveStrip(data)

	// Marshal the modified data back to JSON.
	return json.MarshalIndent(result, "", "  ")
}

// filterProto removes the protobuf media type from an array of interface{}.
func FilterProto(arr []interface{}) []interface{} {
	filtered := make([]interface{}, 0, len(arr))
	for _, elem := range arr {
		if s, ok := elem.(string); ok && s == "application/vnd.kubernetes.protobuf" {
			// Skip protobuf entries.
			continue
		}
		filtered = append(filtered, elem)
	}
	return filtered
}
