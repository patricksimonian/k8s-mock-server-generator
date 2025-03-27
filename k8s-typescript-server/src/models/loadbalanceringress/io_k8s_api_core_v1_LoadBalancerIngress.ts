/**
* LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.
* @resourceType loadbalanceringress
* @kind Loadbalanceringress
*/
export interface io_k8s_api_core_v1_LoadBalancerIngress {
/**
* IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
*/
ip?: string;
/**
* IPMode specifies how the load-balancer IP behaves, and may only be specified when the ip field is specified. Setting this to "VIP" indicates that traffic is delivered to the node with the destination set to the load-balancer's IP and port. Setting this to "Proxy" indicates that traffic is delivered to the node or pod with the destination set to the node's IP and node port or the pod's IP and port. Service implementations may use this information to adjust traffic routing.
*/
ipMode?: string;
/**
* Ports is a list of records of service ports If used, every port defined in the service should have an entry in it
* @isArray
*/
ports?: io_k8s_api_core_v1_PortStatus[];
/**
* Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
*/
hostname?: string;
}

/**
* Create a new Loadbalanceringress with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LoadBalancerIngress instance with defaults applied
*/
export function createio_k8s_api_core_v1_LoadBalancerIngress(data?: Partial<io_k8s_api_core_v1_LoadBalancerIngress>): io_k8s_api_core_v1_LoadBalancerIngress {
 return {
   ip: data?.ip !== undefined ? data.ip : '',
   ipMode: data?.ipMode !== undefined ? data.ipMode : '',
   ports: data?.ports !== undefined ? data.ports : [],
   hostname: data?.hostname !== undefined ? data.hostname : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_PortStatus, createio_k8s_api_core_v1_PortStatus } from '../io.k8s.api.core.v1.PortStatus';
