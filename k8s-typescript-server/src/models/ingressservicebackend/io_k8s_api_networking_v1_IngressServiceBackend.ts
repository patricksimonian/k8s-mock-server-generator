/**
* IngressServiceBackend references a Kubernetes Service as a Backend.
* @resourceType ingressservicebackend
* @kind Ingressservicebackend
*/
export interface io_k8s_api_networking_v1_IngressServiceBackend {
/**
* name is the referenced service. The service must exist in the same namespace as the Ingress object.
* @required
*/
name: string;
/**
* port of the referenced service. A port name or port number is required for a IngressServiceBackend.
* @references io.k8s.api.networking.v1.ServiceBackendPort
*/
port?: io_k8s_api_networking_v1_ServiceBackendPort;
}

/**
* Create a new Ingressservicebackend with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressServiceBackend instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressServiceBackend(data?: Partial<io_k8s_api_networking_v1_IngressServiceBackend>): io_k8s_api_networking_v1_IngressServiceBackend {
 return {
   name: data?.name !== undefined ? data.name : '',
   port: data?.port !== undefined ? data.port : createio_k8s_api_networking_v1_ServiceBackendPort(),
 };
}
// Required imports
import { io_k8s_api_networking_v1_ServiceBackendPort, createio_k8s_api_networking_v1_ServiceBackendPort } from '../servicebackendport/io_k8s_api_networking_v1_ServiceBackendPort';
