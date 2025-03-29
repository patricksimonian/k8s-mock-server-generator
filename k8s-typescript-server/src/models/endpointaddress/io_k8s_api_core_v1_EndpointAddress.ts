/**
* EndpointAddress is a tuple that describes single IP address.
* @resourceType endpointaddress
* @kind Endpointaddress
*/
export interface io_k8s_api_core_v1_EndpointAddress {
/**
* The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
* @required
*/
ip: string;
/**
* Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
*/
nodeName?: string;
/**
* Reference to object providing the endpoint.
* @references io.k8s.api.core.v1.ObjectReference
*/
targetRef?: io_k8s_api_core_v1_ObjectReference;
/**
* The Hostname of this endpoint
*/
hostname?: string;
}

/**
* Create a new Endpointaddress with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EndpointAddress instance with defaults applied
*/
export function createio_k8s_api_core_v1_EndpointAddress(data?: Partial<io_k8s_api_core_v1_EndpointAddress>): io_k8s_api_core_v1_EndpointAddress {
 return {
   ip: data?.ip !== undefined ? data.ip : '',
   nodeName: data?.nodeName !== undefined ? data.nodeName : '',
   targetRef: data?.targetRef !== undefined ? data.targetRef : createio_k8s_api_core_v1_ObjectReference(),
   hostname: data?.hostname !== undefined ? data.hostname : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_ObjectReference, createio_k8s_api_core_v1_ObjectReference } from '../objectreference/io_k8s_api_core_v1_ObjectReference';
