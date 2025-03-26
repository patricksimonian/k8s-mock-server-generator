/**
* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
* @resourceType weightedpodaffinityterm
* @kind Weightedpodaffinityterm
*/
export interface io_k8s_api_core_v1_WeightedPodAffinityTerm {
/**
* Required. A pod affinity term, associated with the corresponding weight.
* @required
* @references io.k8s.api.core.v1.PodAffinityTerm
*/
podAffinityTerm: io_k8s_api_core_v1_PodAffinityTerm;
/**
* weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
* @required
*/
weight: number;
}

/**
* Create a new Weightedpodaffinityterm with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_WeightedPodAffinityTerm instance with defaults applied
*/
export function createio_k8s_api_core_v1_WeightedPodAffinityTerm(data?: Partial<io_k8s_api_core_v1_WeightedPodAffinityTerm>): io_k8s_api_core_v1_WeightedPodAffinityTerm {
 return {
   podAffinityTerm: data?.podAffinityTerm !== undefined ? data.podAffinityTerm : createio_k8s_api_core_v1_PodAffinityTerm(),
   weight: data?.weight !== undefined ? data.weight : 0,
 };
}
// Required imports
import { io_k8s_api_core_v1_PodAffinityTerm, createio_k8s_api_core_v1_PodAffinityTerm } from '../podaffinityterm/io_k8s_api_core_v1_PodAffinityTerm';
