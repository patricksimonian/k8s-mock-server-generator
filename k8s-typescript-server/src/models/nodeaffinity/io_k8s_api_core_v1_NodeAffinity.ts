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
preferredDuringSchedulingIgnoredDuringExecution?: io_k8s_api_core_v1_PreferredSchedulingTerm[];
/**
* If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
* @references io.k8s.api.core.v1.NodeSelector
*/
requiredDuringSchedulingIgnoredDuringExecution?: io_k8s_api_core_v1_NodeSelector;
}

/**
* Create a new Nodeaffinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeAffinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeAffinity(data?: Partial<io_k8s_api_core_v1_NodeAffinity>): io_k8s_api_core_v1_NodeAffinity {
 return {
   preferredDuringSchedulingIgnoredDuringExecution: data?.preferredDuringSchedulingIgnoredDuringExecution !== undefined ? data.preferredDuringSchedulingIgnoredDuringExecution : [],
   requiredDuringSchedulingIgnoredDuringExecution: data?.requiredDuringSchedulingIgnoredDuringExecution !== undefined ? data.requiredDuringSchedulingIgnoredDuringExecution : createio_k8s_api_core_v1_NodeSelector(),
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeSelector, createio_k8s_api_core_v1_NodeSelector } from '../nodeselector/io_k8s_api_core_v1_NodeSelector';
import { io_k8s_api_core_v1_PreferredSchedulingTerm, createio_k8s_api_core_v1_PreferredSchedulingTerm } from '../io.k8s.api.core.v1.PreferredSchedulingTerm';
