#!/bin/bash
# requires kind and kubectl to be installed

# ANSI color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

# Unicode symbols
CHECKMARK="✅"
CROSSMARK="❌"
SPINNER="⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏"

# Resolve relative paths to absolute paths
CONFILE_FILE_PATH=$(realpath "$1")
OUTPUT_FILE_PATH=$(realpath "$2")

# Check if the resolved configuration file path exists
if [[ ! -f "$CONFILE_FILE_PATH" ]]; then
  echo -e "${RED}${CROSSMARK} Error: kind configuration file not found: $CONFILE_FILE_PATH${NC}"
  exit 1
fi

# Extract the directory from the output file path
OUTPUT_DIR=$(dirname "$OUTPUT_FILE_PATH")

# Check if the output directory exists
if [[ ! -d "$OUTPUT_DIR" ]]; then
  echo -e "${RED}${CROSSMARK} Error: Output directory not found: $OUTPUT_DIR${NC}"
  exit 1
fi

# Section separator
echo -e "${YELLOW}--------------------------------------------------${NC}"

# start kind cluster in the background
echo -e "${YELLOW}Starting kind cluster...${NC}"
kind create cluster --name kind-cluster --config "$CONFILE_FILE_PATH" > /dev/null 2>&1 &

# wait for cluster to be up
echo -e "${YELLOW}Waiting for cluster to be ready...${NC}"
kubectl wait --for=condition=Ready node --all --timeout=300s 2>/dev/null
echo -e "${GREEN}${CHECKMARK} Cluster ready.${NC}"

# Section separator
echo -e "${YELLOW}--------------------------------------------------${NC}"

# Retry mechanism for API server readiness
echo -e "${YELLOW}Waiting for API server to be ready...${NC}"
retries=10
delay=5

for i in $(seq 1 $retries); do
  kubectl cluster-info --context kind-kind-cluster > /dev/null 2>&1
  if [[ $? -eq 0 ]]; then
    echo -e "${GREEN}${CHECKMARK} API server ready.${NC}                                 "
    break
  fi
  if [[ $i -eq $retries ]]; then
    echo -e "${RED}${CROSSMARK} Error: API server not ready after $retries retries.${NC}"
    kind delete cluster --name kind-cluster
    exit 1
  fi
  spinner_char=${SPINNER:$((i % 10)):1}
  progress_bar="["$(printf "%${i}s" | tr ' ' '#')$(printf "%$((retries - i))s" | tr ' ' '-')"]"
  echo -en "${YELLOW}Retrying API server check $progress_bar $spinner_char ${NC}\r"
  sleep $delay
done
echo ""

# Section separator
echo -e "${YELLOW}--------------------------------------------------${NC}"

# get the open api spec
echo -en "${YELLOW}Retrieving OpenAPI specification...${NC}"
kubectl get --raw /openapi/v2 > "$OUTPUT_FILE_PATH"
echo -e "${GREEN}${CHECKMARK} Done.${NC}"

# Section separator
echo -e "${YELLOW}--------------------------------------------------${NC}"

# stop the kind cluster
echo -e "${YELLOW}Stopping kind cluster...${NC}"
kind delete cluster --name kind-cluster

echo -e "${GREEN}${CHECKMARK} Kind cluster stopped.${NC}"
echo -e "${GREEN}${CHECKMARK} OpenAPI spec saved to $OUTPUT_FILE_PATH${NC}"
