/**
* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
* @resourceType customresourcedefinitionname
* @kind Customresourcedefinitionname
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames {
/**
* kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
* @required
*/
kind: string;
/**
* listKind is the serialized kind of the list for this resource. Defaults to "`kind`List".
*/
listKind?: string;
/**
* plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
* @required
*/
plural: string;
/**
* shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
* @isArray
*/
shortNames?: string[];
/**
* singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
*/
singular?: string;
/**
* categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
* @isArray
*/
categories?: string[];
}

/**
* Create a new Customresourcedefinitionname with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   listKind: data?.listKind !== undefined ? data.listKind : '',
   plural: data?.plural !== undefined ? data.plural : '',
   shortNames: data?.shortNames !== undefined ? data.shortNames : [],
   singular: data?.singular !== undefined ? data.singular : '',
   categories: data?.categories !== undefined ? data.categories : [],
 };
}
