/**
* IngressBackend describes all endpoints for a given service and port.
* @resourceType ingressbackend
* @kind Ingressbackend
*/
export interface io_k8s_api_networking_v1_IngressBackend {
/**
* resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service".
* @references io.k8s.api.core.v1.TypedLocalObjectReference
*/
resource?: io_k8s_api_core_v1_TypedLocalObjectReference;
/**
* service references a service as a backend. This is a mutually exclusive setting with "Resource".
* @references io.k8s.api.networking.v1.IngressServiceBackend
*/
service?: io_k8s_api_networking_v1_IngressServiceBackend;
}

/**
* Create a new Ingressbackend with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressBackend instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressBackend(data?: Partial<io_k8s_api_networking_v1_IngressBackend>): io_k8s_api_networking_v1_IngressBackend {
 return {
   resource: data?.resource !== undefined ? data.resource : createio_k8s_api_core_v1_TypedLocalObjectReference(),
   service: data?.service !== undefined ? data.service : createio_k8s_api_networking_v1_IngressServiceBackend(),
 };
}
// Required imports
import { io_k8s_api_core_v1_TypedLocalObjectReference, createio_k8s_api_core_v1_TypedLocalObjectReference } from '../typedlocalobjectreference/io_k8s_api_core_v1_TypedLocalObjectReference';
import { io_k8s_api_networking_v1_IngressServiceBackend, createio_k8s_api_networking_v1_IngressServiceBackend } from '../ingressservicebackend/io_k8s_api_networking_v1_IngressServiceBackend';
