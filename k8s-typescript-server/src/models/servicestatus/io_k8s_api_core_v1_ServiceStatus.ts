/**
* ServiceStatus represents the current status of a service.
* @resourceType servicestatus
* @kind Servicestatus
*/
export interface io_k8s_api_core_v1_ServiceStatus {
/**
* Current service state
* @isArray
*/
conditions?: io_k8s_apimachinery_pkg_apis_meta_v1_Condition[];
/**
* LoadBalancer contains the current status of the load-balancer, if one is present.
* @references io.k8s.api.core.v1.LoadBalancerStatus
*/
loadBalancer?: io_k8s_api_core_v1_LoadBalancerStatus;
}

/**
* Create a new Servicestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ServiceStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ServiceStatus(data?: Partial<io_k8s_api_core_v1_ServiceStatus>): io_k8s_api_core_v1_ServiceStatus {
 return {
   conditions: data?.conditions !== undefined ? data.conditions : [],
   loadBalancer: data?.loadBalancer !== undefined ? data.loadBalancer : createio_k8s_api_core_v1_LoadBalancerStatus(),
 };
}
// Required imports
import { io_k8s_api_core_v1_LoadBalancerStatus, createio_k8s_api_core_v1_LoadBalancerStatus } from '../loadbalancerstatus/io_k8s_api_core_v1_LoadBalancerStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Condition, createio_k8s_apimachinery_pkg_apis_meta_v1_Condition } from '../io.k8s.apimachinery.pkg.apis.meta.v1.Condition';
