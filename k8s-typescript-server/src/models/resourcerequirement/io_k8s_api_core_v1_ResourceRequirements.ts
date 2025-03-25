/**
* ResourceRequirements describes the compute resource requirements.
* @resourceType resourcerequirement
* @kind Resourcerequirement
*/
export interface io_k8s_api_core_v1_ResourceRequirements {
/**
* Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.

This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.

This field is immutable. It can only be set for containers.
* @isArray
*/
claims?: Array<{ name: string; request?: string }>;
/**
* Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
*/
limits?: Record<string, any>;
/**
* Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
*/
requests?: Record<string, any>;
}

/**
* Create a new Resourcerequirement with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceRequirements instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceRequirements(data?: Partial<io_k8s_api_core_v1_ResourceRequirements>): io_k8s_api_core_v1_ResourceRequirements {
 return {
   claims: data?.claims !== undefined ? data.claims : [],
   limits: data?.limits !== undefined ? data.limits : {},
   requests: data?.requests !== undefined ? data.requests : {},
 };
}
