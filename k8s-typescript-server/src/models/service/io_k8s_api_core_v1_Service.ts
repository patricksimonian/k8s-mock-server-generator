/**
* Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
* @resourceType service
* @kind Service
*/
export interface io_k8s_api_core_v1_Service {
/**
* Most recently observed status of the service. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.ServiceStatus
*/
status?: io_k8s_api_core_v1_ServiceStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Spec defines the behavior of a service. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.ServiceSpec
*/
spec?: io_k8s_api_core_v1_ServiceSpec;
}

/**
* Create a new Service with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Service instance with defaults applied
*/
export function createio_k8s_api_core_v1_Service(data?: Partial<io_k8s_api_core_v1_Service>): io_k8s_api_core_v1_Service {
 return {
   status: data?.status !== undefined ? data.status : createio_k8s_api_core_v1_ServiceStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_ServiceSpec(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ServiceSpec, createio_k8s_api_core_v1_ServiceSpec } from '../servicespec/io_k8s_api_core_v1_ServiceSpec';
import { io_k8s_api_core_v1_ServiceStatus, createio_k8s_api_core_v1_ServiceStatus } from '../servicestatus/io_k8s_api_core_v1_ServiceStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
