/**
* ExternalDocumentation allows referencing an external resource for extended documentation.
* @resourceType externaldocumentation
* @kind Externaldocumentation
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation {
/**
* 
*/
description?: string;
/**
* 
*/
url?: string;
}

/**
* Create a new Externaldocumentation with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ExternalDocumentation {
 return {
   description: data?.description !== undefined ? data.description : '',
   url: data?.url !== undefined ? data.url : '',
 };
}
