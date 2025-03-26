/**
* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
* @resourceType nodeselectorterm
* @kind Nodeselectorterm
*/
export interface io_k8s_api_core_v1_NodeSelectorTerm {
/**
* A list of node selector requirements by node's labels.
* @isArray
*/
matchExpressions?: io_k8s_api_core_v1_NodeSelectorRequirement[];
/**
* A list of node selector requirements by node's fields.
* @isArray
*/
matchFields?: io_k8s_api_core_v1_NodeSelectorRequirement[];
}

/**
* Create a new Nodeselectorterm with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeSelectorTerm instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeSelectorTerm(data?: Partial<io_k8s_api_core_v1_NodeSelectorTerm>): io_k8s_api_core_v1_NodeSelectorTerm {
 return {
   matchExpressions: data?.matchExpressions !== undefined ? data.matchExpressions : [],
   matchFields: data?.matchFields !== undefined ? data.matchFields : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeSelectorRequirement, createio_k8s_api_core_v1_NodeSelectorRequirement } from '../io.k8s.api.core.v1.NodeSelectorRequirement';
