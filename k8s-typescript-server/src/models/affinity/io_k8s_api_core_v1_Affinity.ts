/**
* Affinity is a group of affinity scheduling rules.
* @resourceType affinity
* @kind Affinity
*/
export interface io_k8s_api_core_v1_Affinity {
/**
* Pod affinity is a group of inter pod affinity scheduling rules.
* @isObject
*/
podAffinity?: { preferredDuringSchedulingIgnoredDuringExecution?: Array<{ podAffinityTerm: { labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string }; weight: number }>; requiredDuringSchedulingIgnoredDuringExecution?: Array<{ mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[] }> };
/**
* Pod anti affinity is a group of inter pod anti affinity scheduling rules.
* @isObject
*/
podAntiAffinity?: { preferredDuringSchedulingIgnoredDuringExecution?: Array<{ podAffinityTerm: { namespaceSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[] }; weight: number }>; requiredDuringSchedulingIgnoredDuringExecution?: Array<{ namespaceSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[] }> };
/**
* Node affinity is a group of node affinity scheduling rules.
* @isObject
*/
nodeAffinity?: { requiredDuringSchedulingIgnoredDuringExecution?: { nodeSelectorTerms: Array<{ matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }> }; preferredDuringSchedulingIgnoredDuringExecution?: Array<{ preference: { matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }; weight: number }> };
}

/**
* Create a new Affinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Affinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_Affinity(data?: Partial<io_k8s_api_core_v1_Affinity>): io_k8s_api_core_v1_Affinity {
 return {
   podAffinity: data?.podAffinity !== undefined ? data.podAffinity : {},
   podAntiAffinity: data?.podAntiAffinity !== undefined ? data.podAntiAffinity : {},
   nodeAffinity: data?.nodeAffinity !== undefined ? data.nodeAffinity : {},
 };
}
