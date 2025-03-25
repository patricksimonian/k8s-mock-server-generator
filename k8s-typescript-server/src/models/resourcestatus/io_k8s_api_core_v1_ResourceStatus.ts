/**
* ResourceStatus represents the status of a single resource allocated to a Pod.
* @resourceType resourcestatus
* @kind Resourcestatus
*/
export interface io_k8s_api_core_v1_ResourceStatus {
/**
* Name of the resource. Must be unique within the pod and in case of non-DRA resource, match one of the resources from the pod spec. For DRA resources, the value must be "claim:<claim_name>/<request>". When this status is reported about a container, the "claim_name" and "request" must match one of the claims of this container.
* @required
*/
name: string;
/**
* List of unique resources health. Each element in the list contains an unique resource ID and its health. At a minimum, for the lifetime of a Pod, resource ID must uniquely identify the resource allocated to the Pod on the Node. If other Pod on the same Node reports the status with the same resource ID, it must be the same resource they share. See ResourceID type definition for a specific format it has in various use cases.
* @isArray
*/
resources?: Array<{ health?: string; resourceID: string }>;
}

/**
* Create a new Resourcestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceStatus(data?: Partial<io_k8s_api_core_v1_ResourceStatus>): io_k8s_api_core_v1_ResourceStatus {
 return {
   name: data?.name !== undefined ? data.name : '',
   resources: data?.resources !== undefined ? data.resources : [],
 };
}
