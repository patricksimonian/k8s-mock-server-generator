/**
* CustomResourceColumnDefinition specifies a column for server side printing.
* @resourceType customresourcecolumndefinition
* @kind Customresourcecolumndefinition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition {
/**
* name is a human readable name for the column.
* @required
*/
name: string;
/**
* priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
*/
priority?: number;
/**
* type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
* @required
*/
type: string;
/**
* description is a human readable description of this column.
*/
description?: string;
/**
* format is an optional OpenAPI type definition for this column. The 'name' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
*/
format?: string;
/**
* jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
* @required
*/
jsonPath: string;
}

/**
* Create a new Customresourcecolumndefinition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition {
 return {
   name: data?.name !== undefined ? data.name : '',
   priority: data?.priority !== undefined ? data.priority : 0,
   type: data?.type !== undefined ? data.type : '',
   description: data?.description !== undefined ? data.description : '',
   format: data?.format !== undefined ? data.format : '',
   jsonPath: data?.jsonPath !== undefined ? data.jsonPath : '',
 };
}
