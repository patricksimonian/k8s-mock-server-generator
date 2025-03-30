module github.com/patricksimonian/k8s-mock-server-generator

go 1.16

require (
	github.com/getkin/kin-openapi v0.130.0 // indirect
	github.com/jinzhu/inflection v1.0.0 // indirect
	gopkg.in/yaml.v2 v2.4.0
)

// If the openapi-ir-processor is in the same repository but not yet published,
// you can use a replace directive to point to the local version
// replace github.com/patricksimonian/k8s-mock-server-generator/openapi-ir-processor => ../openapi-ir-processor
