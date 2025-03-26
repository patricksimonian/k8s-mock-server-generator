/**
* LimitRangeSpec defines a min/max usage limit for resources that match on kind.
* @resourceType limitrangespec
* @kind Limitrangespec
*/
export interface io_k8s_api_core_v1_LimitRangeSpec {
/**
* Limits is the list of LimitRangeItem objects that are enforced.
* @required
* @isArray
*/
limits: io_k8s_api_core_v1_LimitRangeItem[];
}

/**
* Create a new Limitrangespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LimitRangeSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_LimitRangeSpec(data?: Partial<io_k8s_api_core_v1_LimitRangeSpec>): io_k8s_api_core_v1_LimitRangeSpec {
 return {
   limits: data?.limits !== undefined ? data.limits : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_LimitRangeItem, createio_k8s_api_core_v1_LimitRangeItem } from '../io.k8s.api.core.v1.LimitRangeItem';
