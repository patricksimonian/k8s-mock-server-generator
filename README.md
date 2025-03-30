# K8S Mock Server Generator

This project contains tooling to generate a Express.JS/Typescript mock api server for K8s based on a real K8s OpenApi (v2) Spec and the proto files from the official sources. 

## Projects

- cluster-runbooks: These are a series of shell scripts that fetch complete open api specs from target k8s clusters. Currently there is only a script to get a spec from a KiND cluster
- dereferencer: a python project that generates a fully de-referenced open api spec from what you would receive from a k8s cluster
- openapi-ir-processor: a go package that generates an IR that is used by the k8s-server-generator
- k8s-server-generator: a go package/cli that will generate a typescript mock k8s server
- k8s-proto-fetcher: a go package that fetches the proto files from the official k8s source. Beware! This code is highly dependant on the auto-generated proto structure and is not tolerant to those changes. 


## To get Started!

All you really need to get started is to work off of the [k8s-server-generator](./k8s-server-generator/README.md) package. 


## Contributions

This code requires a large amount of refactoring before its ready for contributions. I'll address that over the next few monthes. Please drop issues for feature ideas if you're interested so they can be tracked. I am a fulltime engineering consultant and so my time for consistent updates are limited! I'm hoping for the community to take this on if there's interest. 
