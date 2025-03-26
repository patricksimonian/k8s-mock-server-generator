/**
* IngressStatus describe the current state of the Ingress.
* @resourceType ingressstatus
* @kind Ingressstatus
*/
export interface io_k8s_api_networking_v1_IngressStatus {
/**
* loadBalancer contains the current status of the load-balancer.
* @references io.k8s.api.networking.v1.IngressLoadBalancerStatus
*/
loadBalancer?: io_k8s_api_networking_v1_IngressLoadBalancerStatus;
}

/**
* Create a new Ingressstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressStatus instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressStatus(data?: Partial<io_k8s_api_networking_v1_IngressStatus>): io_k8s_api_networking_v1_IngressStatus {
 return {
   loadBalancer: data?.loadBalancer !== undefined ? data.loadBalancer : createio_k8s_api_networking_v1_IngressLoadBalancerStatus(),
 };
}
// Required imports
import { io_k8s_api_networking_v1_IngressLoadBalancerStatus, createio_k8s_api_networking_v1_IngressLoadBalancerStatus } from '../ingressloadbalancerstatus/io_k8s_api_networking_v1_IngressLoadBalancerStatus';
