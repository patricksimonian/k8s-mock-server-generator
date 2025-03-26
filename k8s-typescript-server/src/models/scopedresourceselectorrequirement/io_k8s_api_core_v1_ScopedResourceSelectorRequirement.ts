/**
* A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.
* @resourceType scopedresourceselectorrequirement
* @kind Scopedresourceselectorrequirement
*/
export interface io_k8s_api_core_v1_ScopedResourceSelectorRequirement {
/**
* An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
* @isArray
*/
values?: string[];
/**
* Represents a scope's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist.

Possible enum values:
 - `"DoesNotExist"`
 - `"Exists"`
 - `"In"`
 - `"NotIn"`
* @required
*/
operator: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn';
/**
* The name of the scope that the selector applies to.

Possible enum values:
 - `"BestEffort"` Match all pod objects that have best effort quality of service
 - `"CrossNamespacePodAffinity"` Match all pod objects that have cross-namespace pod (anti)affinity mentioned.
 - `"NotBestEffort"` Match all pod objects that do not have best effort quality of service
 - `"NotTerminating"` Match all pod objects where spec.activeDeadlineSeconds is nil
 - `"PriorityClass"` Match all pod objects that have priority class mentioned
 - `"Terminating"` Match all pod objects where spec.activeDeadlineSeconds >=0
* @required
*/
scopeName: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating';
}

/**
* Create a new Scopedresourceselectorrequirement with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ScopedResourceSelectorRequirement instance with defaults applied
*/
export function createio_k8s_api_core_v1_ScopedResourceSelectorRequirement(data?: Partial<io_k8s_api_core_v1_ScopedResourceSelectorRequirement>): io_k8s_api_core_v1_ScopedResourceSelectorRequirement {
 return {
   values: data?.values !== undefined ? data.values : [],
   operator: data?.operator !== undefined ? data.operator : '',
   scopeName: data?.scopeName !== undefined ? data.scopeName : '',
 };
}
