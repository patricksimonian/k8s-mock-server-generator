/**
* TypedObjectReference contains enough information to let you locate the typed referenced object
* @resourceType typedobjectreference
* @kind Typedobjectreference
*/
export interface io_k8s_api_core_v1_TypedObjectReference {
/**
* APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
*/
apiGroup?: string;
/**
* Kind is the type of resource being referenced
* @required
*/
kind: string;
/**
* Name is the name of resource being referenced
* @required
*/
name: string;
/**
* Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
*/
namespace?: string;
}

/**
* Create a new Typedobjectreference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_TypedObjectReference instance with defaults applied
*/
export function createio_k8s_api_core_v1_TypedObjectReference(data?: Partial<io_k8s_api_core_v1_TypedObjectReference>): io_k8s_api_core_v1_TypedObjectReference {
 return {
   apiGroup: data?.apiGroup !== undefined ? data.apiGroup : '',
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
 };
}
