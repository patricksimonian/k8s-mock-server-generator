# Kubernetes OpenAPI Spec Extractor (kind)

This Bash script automates the process of creating a local Kubernetes cluster using `kind`, retrieving its OpenAPI v2 specification, saving it to a specified output path, and then deleting the cluster.

## Prerequisites

-   **kind:** Kubernetes IN Docker must be installed.
-   **kubectl:** Kubernetes command-line tool must be installed and configured.

## Usage

1.  **Prepare a kind Configuration File:**
    Create a `kind` configuration file (e.g., `kind-config.yaml`) that defines your cluster setup. (see the cluster-config.example.yaml)

2.  **Run the Script:**
    Provide the path to your `kind` configuration file and the desired output directory as command-line arguments.

    ```bash
    ./extract-openapi.sh kind-config.yaml /path/to/output
    ```

    -   `kind-config.yaml`: Path to your `kind` configuration file.
    -   `/path/to/output`: Path to the directory where the OpenAPI spec will be saved. This path should typically correspond to a host mount path used in your configuration.

## Output

-   `kind-cluster-openapi-spec.json`: The OpenAPI v2 specification of the created Kubernetes cluster, saved in the specified output directory.

## Example

```bash
./extract-openapi.sh kind-config.yaml ./swagger.json
