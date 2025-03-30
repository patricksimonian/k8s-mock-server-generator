# OpenAPI IR Processor

This Go program, `openapi-ir-processor`, transforms a fully dereferenced OpenAPI (Swagger 2.0) specification into an intermediate representation (IR) suitable for further processing by other tools, such as code generators.

## Features

-   **OpenAPI to IR Conversion:** Parses a dereferenced OpenAPI specification and converts it into a structured IR.
-   **Endpoint Extraction:** Extracts detailed information about each API endpoint, including method, path, parameters, and responses.
-   **Model Processing:** Processes and stores data models defined in the OpenAPI specification.
-   **Parameter Handling:** Merges global and operation-level parameters and converts them into a simplified IR format.
-   **Response Handling:** Converts API responses, resolving schema references to models.
-   **Path Variable Conversion:** Converts OpenAPI path variables (e.g., `{id}`) to Express-style variables (e.g., `:id`).
-   **Operation ID Generation:** Generates fallback operation IDs if they are missing in the specification.

## Prerequisites

-   **Go 1.16+:** Ensure you have Go installed and configured.
-   **Dereferenced OpenAPI Specification:** This program requires a fully dereferenced OpenAPI (Swagger 2.0) JSON file. You can use tools like `swagger-spec-dereferencer` to prepare your specification.

## Installation

1.  **Clone the Repository:**

    ```bash
    git clone <repository_url>
    cd openapi-ir-processor
    ```

2.  **Build the Program:**

    ```bash
    go build
    ```

## Usage

1.  **Prepare Your OpenAPI Specification:**
    Ensure you have a fully dereferenced OpenAPI specification file (e.g., `dereferenced_swagger.json`).

2.  **Run the Program:**
    Provide the path to your dereferenced OpenAPI specification as a command-line argument.

    ```bash
    ./openapi-ir-processor dereferenced_swagger.json
    ```

3.  **Output:**
    The program will output the extracted endpoint information to the console, including method, path, operation ID, summary, description, tags, parameters, and responses. Optionally it will also output the full IR as JSON.

    Example output:

    ```
    Endpoint: GET /api/v1/pets/:id (OperationID: get_api_v1_pets_{id})
      Summary: Get a pet by ID
      Description: Retrieves a pet based on the ID supplied
      Tags: [pets]
      Parameters:
        - "id" (path) required: true
      Responses:
        200: Successful operation, Schema: &{...}

    --- Full IR ---
    {
      "Title": "Petstore API",
      "Version": "1.0.0",
      "BasePath": "/api/v1",
      "Endpoints": [
        {
          "OperationID": "get_api_v1_pets_{id}",
          "Method": "get",
          "Path": "/api/v1/pets/:id",
          "Summary": "Get a pet by ID",
          "Description": "Retrieves a pet based on the ID supplied",
          "Tags": [
            "pets"
          ],
          "Parameters": [
            {
              "Name": "id",
              "In": "path",
              "Required": true,
              "Type": "",
              "Description": "",
              "Schema": null
            }
          ],
          "Responses": {
            "200": {
              "StatusCode": "200",
              "Description": "Successful operation",
              "Schema": {...}
            }
          }
        },
        ...
      ],
      "Models": {
        "Pet": {...}
      }
    }
    ```

## Contributing

Contributions, improvements, and bug reports are welcome. Please open an issue or submit a pull request with your changes.

## License

This project is licensed under the MIT License.
