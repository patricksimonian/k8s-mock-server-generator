/**
* Node affinity is a group of node affinity scheduling rules.
* @resourceType nodeaffinity
* @kind Nodeaffinity
*/
export interface io_k8s_api_core_v1_NodeAffinity {
/**
* The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
* @isArray
*/
preferredDuringSchedulingIgnoredDuringExecution?: Array<{ preference: { matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ values?: string[]; key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn' }> }; weight: number }>;
/**
* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
* @isObject
*/
requiredDuringSchedulingIgnoredDuringExecution?: { nodeSelectorTerms: Array<{ matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }> };
}

/**
* Create a new Nodeaffinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeAffinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeAffinity(data?: Partial<io_k8s_api_core_v1_NodeAffinity>): io_k8s_api_core_v1_NodeAffinity {
 return {
   preferredDuringSchedulingIgnoredDuringExecution: data?.preferredDuringSchedulingIgnoredDuringExecution !== undefined ? data.preferredDuringSchedulingIgnoredDuringExecution : [],
   requiredDuringSchedulingIgnoredDuringExecution: data?.requiredDuringSchedulingIgnoredDuringExecution !== undefined ? data.requiredDuringSchedulingIgnoredDuringExecution : { nodeSelectorTerms: [] },
 };
}
