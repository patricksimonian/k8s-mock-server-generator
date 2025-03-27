/**
* ServiceReference holds a reference to Service.legacy.k8s.io
* @resourceType servicereference
* @kind Servicereference
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ServiceReference {
/**
* namespace is the namespace of the service. Required
* @required
*/
namespace: string;
/**
* path is an optional URL path at which the webhook will be contacted.
*/
path?: string;
/**
* port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
*/
port?: number;
/**
* name is the name of the service. Required
* @required
*/
name: string;
}

/**
* Create a new Servicereference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ServiceReference instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ServiceReference(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ServiceReference>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_ServiceReference {
 return {
   namespace: data?.namespace !== undefined ? data.namespace : '',
   path: data?.path !== undefined ? data.path : '',
   port: data?.port !== undefined ? data.port : 0,
   name: data?.name !== undefined ? data.name : '',
 };
}
