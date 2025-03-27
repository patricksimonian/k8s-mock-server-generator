/**
* Pod affinity is a group of inter pod affinity scheduling rules.
* @resourceType podaffinity
* @kind Podaffinity
*/
export interface io_k8s_api_core_v1_PodAffinity {
/**
* If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
* @isArray
*/
requiredDuringSchedulingIgnoredDuringExecution?: io_k8s_api_core_v1_PodAffinityTerm[];
/**
* The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
* @isArray
*/
preferredDuringSchedulingIgnoredDuringExecution?: io_k8s_api_core_v1_WeightedPodAffinityTerm[];
}

/**
* Create a new Podaffinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodAffinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodAffinity(data?: Partial<io_k8s_api_core_v1_PodAffinity>): io_k8s_api_core_v1_PodAffinity {
 return {
   requiredDuringSchedulingIgnoredDuringExecution: data?.requiredDuringSchedulingIgnoredDuringExecution !== undefined ? data.requiredDuringSchedulingIgnoredDuringExecution : [],
   preferredDuringSchedulingIgnoredDuringExecution: data?.preferredDuringSchedulingIgnoredDuringExecution !== undefined ? data.preferredDuringSchedulingIgnoredDuringExecution : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_PodAffinityTerm, createio_k8s_api_core_v1_PodAffinityTerm } from '../io.k8s.api.core.v1.PodAffinityTerm';
import { io_k8s_api_core_v1_WeightedPodAffinityTerm, createio_k8s_api_core_v1_WeightedPodAffinityTerm } from '../io.k8s.api.core.v1.WeightedPodAffinityTerm';
