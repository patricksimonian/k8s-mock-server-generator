/**
* IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource.
* @resourceType ingressclassparametersreference
* @kind Ingressclassparametersreference
*/
export interface io_k8s_api_networking_v1_IngressClassParametersReference {
/**
* apiGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
*/
apiGroup?: string;
/**
* kind is the type of resource being referenced.
* @required
*/
kind: string;
/**
* name is the name of resource being referenced.
* @required
*/
name: string;
/**
* namespace is the namespace of the resource being referenced. This field is required when scope is set to "Namespace" and must be unset when scope is set to "Cluster".
*/
namespace?: string;
/**
* scope represents if this refers to a cluster or namespace scoped resource. This may be set to "Cluster" (default) or "Namespace".
*/
scope?: string;
}

/**
* Create a new Ingressclassparametersreference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressClassParametersReference instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressClassParametersReference(data?: Partial<io_k8s_api_networking_v1_IngressClassParametersReference>): io_k8s_api_networking_v1_IngressClassParametersReference {
 return {
   apiGroup: data?.apiGroup !== undefined ? data.apiGroup : '',
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
   scope: data?.scope !== undefined ? data.scope : '',
 };
}
