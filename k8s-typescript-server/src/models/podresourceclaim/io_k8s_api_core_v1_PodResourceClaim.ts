/**
* PodResourceClaim references exactly one ResourceClaim, either directly or by naming a ResourceClaimTemplate which is then turned into a ResourceClaim for the pod.

It adds a name to it that uniquely identifies the ResourceClaim inside the Pod. Containers that need access to the ResourceClaim reference it with this name.
* @resourceType podresourceclaim
* @kind Podresourceclaim
*/
export interface io_k8s_api_core_v1_PodResourceClaim {
/**
* ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.

Exactly one of ResourceClaimName and ResourceClaimTemplateName must be set.
*/
resourceClaimName?: string;
/**
* ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.

The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.

This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.

Exactly one of ResourceClaimName and ResourceClaimTemplateName must be set.
*/
resourceClaimTemplateName?: string;
/**
* Name uniquely identifies this resource claim inside the pod. This must be a DNS_LABEL.
* @required
*/
name: string;
}

/**
* Create a new Podresourceclaim with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodResourceClaim instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodResourceClaim(data?: Partial<io_k8s_api_core_v1_PodResourceClaim>): io_k8s_api_core_v1_PodResourceClaim {
 return {
   resourceClaimName: data?.resourceClaimName !== undefined ? data.resourceClaimName : '',
   resourceClaimTemplateName: data?.resourceClaimTemplateName !== undefined ? data.resourceClaimTemplateName : '',
   name: data?.name !== undefined ? data.name : '',
 };
}
