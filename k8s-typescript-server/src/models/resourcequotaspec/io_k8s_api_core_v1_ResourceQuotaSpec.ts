/**
* ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
* @resourceType resourcequotaspec
* @kind Resourcequotaspec
*/
export interface io_k8s_api_core_v1_ResourceQuotaSpec {
/**
* hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
*/
hard?: Record<string, any>;
/**
* A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
* @isObject
*/
scopeSelector?: { matchExpressions?: Array<{ values?: string[]; operator: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn'; scopeName: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating' }> };
/**
* A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
* @isArray
*/
scopes?: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'[];
}

/**
* Create a new Resourcequotaspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceQuotaSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceQuotaSpec(data?: Partial<io_k8s_api_core_v1_ResourceQuotaSpec>): io_k8s_api_core_v1_ResourceQuotaSpec {
 return {
   hard: data?.hard !== undefined ? data.hard : {},
   scopeSelector: data?.scopeSelector !== undefined ? data.scopeSelector : {},
   scopes: data?.scopes !== undefined ? data.scopes : [],
 };
}
