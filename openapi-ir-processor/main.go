package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"strings"

	"github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor/ir"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <path-to-dereferenced-swagger.json>")
		os.Exit(1)
	}

	filename := os.Args[1]
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Printf("Error reading file: %v\n", err)
		os.Exit(1)
	}

	var spec ir.SwaggerSpec
	err = json.Unmarshal(data, &spec)
	if err != nil {
		fmt.Printf("Error parsing JSON: %v\n", err)
		os.Exit(1)
	}

	ir := ir.GenerateIR(spec)

	// For demonstration, print out each endpoint.
	for _, ep := range ir.Endpoints {
		fmt.Printf("Endpoint: %s %s (OperationID: %s)\n", strings.ToUpper(ep.Method), ep.Path, ep.OperationID)
		fmt.Printf("  Summary: %s\n", ep.Summary)
		fmt.Printf("  Description: %s\n", ep.Description)
		fmt.Printf("  Tags: %v\n", ep.Tags)
		fmt.Printf("  Parameters:\n")
		for _, p := range ep.Parameters {
			fmt.Printf("    - %q (%s) required: %t\n", p.Name, p.In, p.Required)
		}
		fmt.Printf("  Responses:\n")
		for code, r := range ep.Responses {
			fmt.Printf("    %s: %s, Schema: %+v\n", code, r.Description, r.Schema)
		}
		fmt.Println()
	}

	// Optionally, print the complete IR as JSON.
	irJSON, err := json.MarshalIndent(ir, "", "  ")
	if err == nil {
		fmt.Println("--- Full IR ---")
		fmt.Println(string(irJSON))
	}
}
