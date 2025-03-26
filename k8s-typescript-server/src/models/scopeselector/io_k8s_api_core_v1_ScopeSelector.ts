/**
* A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
* @resourceType scopeselector
* @kind Scopeselector
*/
export interface io_k8s_api_core_v1_ScopeSelector {
/**
* A list of scope selector requirements by scope of the resources.
* @isArray
*/
matchExpressions?: Array<{ values?: string[]; operator: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn'; scopeName: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating' }>;
}

/**
* Create a new Scopeselector with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ScopeSelector instance with defaults applied
*/
export function createio_k8s_api_core_v1_ScopeSelector(data?: Partial<io_k8s_api_core_v1_ScopeSelector>): io_k8s_api_core_v1_ScopeSelector {
 return {
   matchExpressions: data?.matchExpressions !== undefined ? data.matchExpressions : [],
 };
}
