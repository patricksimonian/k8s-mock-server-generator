/**
* Pod anti affinity is a group of inter pod anti affinity scheduling rules.
* @resourceType podantiaffinity
* @kind Podantiaffinity
*/
export interface io_k8s_api_core_v1_PodAntiAffinity {
/**
* The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
* @isArray
*/
preferredDuringSchedulingIgnoredDuringExecution?: io_k8s_api_core_v1_WeightedPodAffinityTerm[];
/**
* If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
* @isArray
*/
requiredDuringSchedulingIgnoredDuringExecution?: io_k8s_api_core_v1_PodAffinityTerm[];
}

/**
* Create a new Podantiaffinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodAntiAffinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodAntiAffinity(data?: Partial<io_k8s_api_core_v1_PodAntiAffinity>): io_k8s_api_core_v1_PodAntiAffinity {
 return {
   preferredDuringSchedulingIgnoredDuringExecution: data?.preferredDuringSchedulingIgnoredDuringExecution !== undefined ? data.preferredDuringSchedulingIgnoredDuringExecution : [],
   requiredDuringSchedulingIgnoredDuringExecution: data?.requiredDuringSchedulingIgnoredDuringExecution !== undefined ? data.requiredDuringSchedulingIgnoredDuringExecution : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_PodAffinityTerm, createio_k8s_api_core_v1_PodAffinityTerm } from '../io.k8s.api.core.v1.PodAffinityTerm';
import { io_k8s_api_core_v1_WeightedPodAffinityTerm, createio_k8s_api_core_v1_WeightedPodAffinityTerm } from '../io.k8s.api.core.v1.WeightedPodAffinityTerm';
