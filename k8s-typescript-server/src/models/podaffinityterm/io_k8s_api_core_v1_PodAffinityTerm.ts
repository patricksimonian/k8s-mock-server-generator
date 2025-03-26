/**
* Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
* @resourceType podaffinityterm
* @kind Podaffinityterm
*/
export interface io_k8s_api_core_v1_PodAffinityTerm {
/**
* namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace".
* @isArray
*/
namespaces?: string[];
/**
* This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
* @required
*/
topologyKey: string;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @isObject
*/
labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
/**
* MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key in (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
* @isArray
*/
matchLabelKeys?: string[];
/**
* MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with `labelSelector` as `key notin (value)` to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is a beta field and requires enabling MatchLabelKeysInPodAffinity feature gate (enabled by default).
* @isArray
*/
mismatchLabelKeys?: string[];
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @isObject
*/
namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
}

/**
* Create a new Podaffinityterm with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodAffinityTerm instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodAffinityTerm(data?: Partial<io_k8s_api_core_v1_PodAffinityTerm>): io_k8s_api_core_v1_PodAffinityTerm {
 return {
   namespaces: data?.namespaces !== undefined ? data.namespaces : [],
   topologyKey: data?.topologyKey !== undefined ? data.topologyKey : '',
   labelSelector: data?.labelSelector !== undefined ? data.labelSelector : {},
   matchLabelKeys: data?.matchLabelKeys !== undefined ? data.matchLabelKeys : [],
   mismatchLabelKeys: data?.mismatchLabelKeys !== undefined ? data.mismatchLabelKeys : [],
   namespaceSelector: data?.namespaceSelector !== undefined ? data.namespaceSelector : {},
 };
}
