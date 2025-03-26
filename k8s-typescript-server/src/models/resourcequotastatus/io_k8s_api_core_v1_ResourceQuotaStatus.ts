/**
* ResourceQuotaStatus defines the enforced hard limits and observed use.
* @resourceType resourcequotastatus
* @kind Resourcequotastatus
*/
export interface io_k8s_api_core_v1_ResourceQuotaStatus {
/**
* Used is the current observed total usage of the resource in the namespace.
*/
used?: Record<string, any>;
/**
* Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
*/
hard?: Record<string, any>;
}

/**
* Create a new Resourcequotastatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceQuotaStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceQuotaStatus(data?: Partial<io_k8s_api_core_v1_ResourceQuotaStatus>): io_k8s_api_core_v1_ResourceQuotaStatus {
 return {
   used: data?.used !== undefined ? data.used : {},
   hard: data?.hard !== undefined ? data.hard : {},
 };
}
