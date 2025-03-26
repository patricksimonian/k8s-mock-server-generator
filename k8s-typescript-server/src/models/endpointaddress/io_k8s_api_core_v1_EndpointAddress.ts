/**
* EndpointAddress is a tuple that describes single IP address.
* @resourceType endpointaddress
* @kind Endpointaddress
*/
export interface io_k8s_api_core_v1_EndpointAddress {
/**
* The Hostname of this endpoint
*/
hostname?: string;
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
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
targetRef?: { namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string };
}

/**
* Create a new Endpointaddress with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EndpointAddress instance with defaults applied
*/
export function createio_k8s_api_core_v1_EndpointAddress(data?: Partial<io_k8s_api_core_v1_EndpointAddress>): io_k8s_api_core_v1_EndpointAddress {
 return {
   hostname: data?.hostname !== undefined ? data.hostname : '',
   ip: data?.ip !== undefined ? data.ip : '',
   nodeName: data?.nodeName !== undefined ? data.nodeName : '',
   targetRef: data?.targetRef !== undefined ? data.targetRef : {},
 };
}
