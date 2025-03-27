/**
* Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key <topologyKey> matches that of any node on which a pod of the set of pods is running
* @resourceType podaffinityterm
* @kind Podaffinityterm
*/
export interface io_k8s_api_core_v1_PodAffinityTerm {
/**
* A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
labelSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
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
* A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
namespaceSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
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
}

/**
* Create a new Podaffinityterm with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodAffinityTerm instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodAffinityTerm(data?: Partial<io_k8s_api_core_v1_PodAffinityTerm>): io_k8s_api_core_v1_PodAffinityTerm {
 return {
   labelSelector: data?.labelSelector !== undefined ? data.labelSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   matchLabelKeys: data?.matchLabelKeys !== undefined ? data.matchLabelKeys : [],
   mismatchLabelKeys: data?.mismatchLabelKeys !== undefined ? data.mismatchLabelKeys : [],
   namespaceSelector: data?.namespaceSelector !== undefined ? data.namespaceSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   namespaces: data?.namespaces !== undefined ? data.namespaces : [],
   topologyKey: data?.topologyKey !== undefined ? data.topologyKey : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
