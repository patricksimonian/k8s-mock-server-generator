/**
* An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
* @resourceType preferredschedulingterm
* @kind Preferredschedulingterm
*/
export interface io_k8s_api_core_v1_PreferredSchedulingTerm {
/**
* Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
* @required
*/
weight: number;
/**
* A node selector term, associated with the corresponding weight.
* @required
* @references io.k8s.api.core.v1.NodeSelectorTerm
*/
preference: io_k8s_api_core_v1_NodeSelectorTerm;
}

/**
* Create a new Preferredschedulingterm with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PreferredSchedulingTerm instance with defaults applied
*/
export function createio_k8s_api_core_v1_PreferredSchedulingTerm(data?: Partial<io_k8s_api_core_v1_PreferredSchedulingTerm>): io_k8s_api_core_v1_PreferredSchedulingTerm {
 return {
   weight: data?.weight !== undefined ? data.weight : 0,
   preference: data?.preference !== undefined ? data.preference : createio_k8s_api_core_v1_NodeSelectorTerm(),
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeSelectorTerm, createio_k8s_api_core_v1_NodeSelectorTerm } from '../nodeselectorterm/io_k8s_api_core_v1_NodeSelectorTerm';
