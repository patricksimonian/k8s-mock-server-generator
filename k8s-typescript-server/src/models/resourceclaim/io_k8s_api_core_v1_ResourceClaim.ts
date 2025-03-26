/**
* ResourceClaim references one entry in PodSpec.ResourceClaims.
* @resourceType resourceclaim
* @kind Resourceclaim
*/
export interface io_k8s_api_core_v1_ResourceClaim {
/**
* Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
* @required
*/
name: string;
/**
* Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
*/
request?: string;
}

/**
* Create a new Resourceclaim with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceClaim instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceClaim(data?: Partial<io_k8s_api_core_v1_ResourceClaim>): io_k8s_api_core_v1_ResourceClaim {
 return {
   name: data?.name !== undefined ? data.name : '',
   request: data?.request !== undefined ? data.request : '',
 };
}
