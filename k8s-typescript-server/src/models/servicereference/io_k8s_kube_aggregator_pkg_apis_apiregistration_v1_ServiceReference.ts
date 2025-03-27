/**
* ServiceReference holds a reference to Service.legacy.k8s.io
* @resourceType servicereference
* @kind Servicereference
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference {
/**
* Name is the name of the service
*/
name?: string;
/**
* Namespace is the namespace of the service
*/
namespace?: string;
/**
* If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
*/
port?: number;
}

/**
* Create a new Servicereference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_ServiceReference {
 return {
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
   port: data?.port !== undefined ? data.port : 0,
 };
}
