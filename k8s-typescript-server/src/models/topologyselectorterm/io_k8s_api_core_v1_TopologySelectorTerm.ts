/**
* A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.
* @resourceType topologyselectorterm
* @kind Topologyselectorterm
*/
export interface io_k8s_api_core_v1_TopologySelectorTerm {
/**
* A list of topology selector requirements by labels.
* @isArray
*/
matchLabelExpressions?: io_k8s_api_core_v1_TopologySelectorLabelRequirement[];
}

/**
* Create a new Topologyselectorterm with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_TopologySelectorTerm instance with defaults applied
*/
export function createio_k8s_api_core_v1_TopologySelectorTerm(data?: Partial<io_k8s_api_core_v1_TopologySelectorTerm>): io_k8s_api_core_v1_TopologySelectorTerm {
 return {
   matchLabelExpressions: data?.matchLabelExpressions !== undefined ? data.matchLabelExpressions : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_TopologySelectorLabelRequirement, createio_k8s_api_core_v1_TopologySelectorLabelRequirement } from '../io.k8s.api.core.v1.TopologySelectorLabelRequirement';
