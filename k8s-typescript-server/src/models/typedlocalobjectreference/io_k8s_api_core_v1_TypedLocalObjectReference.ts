/**
* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
* @resourceType typedlocalobjectreference
* @kind Typedlocalobjectreference
*/
export interface io_k8s_api_core_v1_TypedLocalObjectReference {
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
}

/**
* Create a new Typedlocalobjectreference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_TypedLocalObjectReference instance with defaults applied
*/
export function createio_k8s_api_core_v1_TypedLocalObjectReference(data?: Partial<io_k8s_api_core_v1_TypedLocalObjectReference>): io_k8s_api_core_v1_TypedLocalObjectReference {
 return {
   apiGroup: data?.apiGroup !== undefined ? data.apiGroup : '',
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
 };
}
