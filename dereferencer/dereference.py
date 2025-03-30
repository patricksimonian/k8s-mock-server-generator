import json
import tempfile
import os
import argparse
from prance import ResolvingParser

# Offending definition details.
offending_def = "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSONSchemaProps"
offending_ref = "#/definitions/" + offending_def

def remove_offending_definition(spec):
    """
    Remove the offending definition from spec['definitions'].
    """
    if "definitions" in spec and offending_def in spec["definitions"]:
        print(f"Removing offending definition: {offending_def}")
        del spec["definitions"][offending_def]
    else:
        print("Offending definition not found in 'definitions'.")

def replace_offending_refs(obj):
    """
    Recursively traverse obj (which may be a dict or list) and replace any
    occurrence of a $ref equal to offending_ref with an inline empty object schema.
    """
    if isinstance(obj, dict):
        if "$ref" in obj and obj["$ref"] == offending_ref:
            # Replace the offending $ref with a simple empty object schema.
            print("Replacing an offending $ref occurrence.")
            obj.pop("$ref")
            obj["type"] = "object"
            obj["properties"] = {}
            return
        # Recursively process all dictionary values.
        for key, value in obj.items():
            replace_offending_refs(value)
    elif isinstance(obj, list):
        for item in obj:
            replace_offending_refs(item)

def main():
    parser = argparse.ArgumentParser(
        description="Dereference a Swagger spec after filtering out a problematic definition."
    )
    parser.add_argument("input_file", help="Path to the original Swagger/OpenAPI spec file (JSON)")
    parser.add_argument(
        "--output",
        default="dereferenced_spec.json",
        help="Path to write the fully dereferenced spec"
    )
    args = parser.parse_args()

    # Step 1: Load the original spec.
    with open(args.input_file, "r") as f:
        spec = json.load(f)

    # Step 2: Remove the offending definition.
    remove_offending_definition(spec)

    # Step 3: Recursively replace any $ref equal to offending_ref.
    replace_offending_refs(spec)

    # Step 4: Write the filtered spec to a temporary file.
    with tempfile.NamedTemporaryFile(mode="w+", delete=False, suffix=".json") as temp:
        json.dump(spec, temp, indent=2)
        temp_filename = temp.name
    print(f"Filtered spec written to temporary file: {temp_filename}")

    # Step 5: Use Prance to dereference the filtered spec.
    try:
        parser_obj = ResolvingParser(temp_filename)
        dereferenced_spec = parser_obj.specification
        with open(args.output, "w") as f:
            json.dump(dereferenced_spec, f, indent=2)
        print(f"Dereferenced spec written to {args.output}")
    except Exception as e:
        print("Error during dereferencing:", e)
    finally:
        # Remove the temporary filtered file.
        os.remove(temp_filename)
        print(f"Temporary file {temp_filename} removed.")

if __name__ == "__main__":
    main()
