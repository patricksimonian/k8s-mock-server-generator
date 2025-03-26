/**
* LoadBalancerStatus represents the status of a load-balancer.
* @resourceType loadbalancerstatus
* @kind Loadbalancerstatus
*/
export interface io_k8s_api_core_v1_LoadBalancerStatus {
/**
* Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
* @isArray
*/
ingress?: io_k8s_api_core_v1_LoadBalancerIngress[];
}

/**
* Create a new Loadbalancerstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LoadBalancerStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_LoadBalancerStatus(data?: Partial<io_k8s_api_core_v1_LoadBalancerStatus>): io_k8s_api_core_v1_LoadBalancerStatus {
 return {
   ingress: data?.ingress !== undefined ? data.ingress : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_LoadBalancerIngress, createio_k8s_api_core_v1_LoadBalancerIngress } from '../io.k8s.api.core.v1.LoadBalancerIngress';
