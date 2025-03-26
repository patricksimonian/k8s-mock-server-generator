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
* scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
* @references io.k8s.api.core.v1.ScopeSelector
*/
scopeSelector?: io_k8s_api_core_v1_ScopeSelector;
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
   scopeSelector: data?.scopeSelector !== undefined ? data.scopeSelector : createio_k8s_api_core_v1_ScopeSelector(),
   scopes: data?.scopes !== undefined ? data.scopes : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_ScopeSelector, createio_k8s_api_core_v1_ScopeSelector } from '../scopeselector/io_k8s_api_core_v1_ScopeSelector';
