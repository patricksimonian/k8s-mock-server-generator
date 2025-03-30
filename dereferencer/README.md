# Swagger Spec Dereferencer

This Python script preprocesses and fully dereferences a K8S Swagger/OpenAPI specification (Swagger 2.0 / OpenAPI 2.0). P

## Limitations
This tool does not support definitions that have a `$ref` as a parameter. Because of this limitation, the JSONSchema definition for Kubernetes (specifically, the definition for `io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps`) is removed during preprocessing. This is because Prance current fails to resolve if $ref is used in other contexts such as Parameters.

## Prerequisites

-   **Python 3.6+** Verify your Python version with:

    ```bash
    python --version
    ```

-   **pip**
    Ensure pip is installed to manage Python dependencies.

## Installation

1.  **Create a Virtual Environment (Optional but Recommended)**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

2.  **Install Dependencies from `requirements.txt`**

    ```bash
    pip install -r requirements.txt
    ```

## Usage

1.  **Prepare Your Spec File**
    Ensure your original Swagger spec (e.g., `swagger.json`) is available in your working directory.

2.  **Run the Script**
    The script accepts the input file as a command-line argument. For example:

    ```bash
    python dereference.py swagger.json
    ```

    You can also specify an output file (default: `dereferenced_spec.json`):

    ```bash
    python dereference.py swagger.json --output my_dereferenced_spec.json
    ```

## Performance Considerations

Dereferencing a complete Kubernetes OpenAPI spec is resource intensive. The process may take several minutes and produce an output file larger than 150MB.

## License

This project is licensed under the MIT License.
