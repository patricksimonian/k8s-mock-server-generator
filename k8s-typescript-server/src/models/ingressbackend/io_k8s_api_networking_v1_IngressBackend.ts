/**
* IngressBackend describes all endpoints for a given service and port.
* @resourceType ingressbackend
* @kind Ingressbackend
*/
export interface io_k8s_api_networking_v1_IngressBackend {
/**
* TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.
* @isObject
*/
resource?: { name: string; apiGroup?: string; kind: string };
/**
* IngressServiceBackend references a Kubernetes Service as a Backend.
* @isObject
*/
service?: { name: string; port?: { name?: string; number?: number } };
}

/**
* Create a new Ingressbackend with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressBackend instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressBackend(data?: Partial<io_k8s_api_networking_v1_IngressBackend>): io_k8s_api_networking_v1_IngressBackend {
 return {
   resource: data?.resource !== undefined ? data.resource : { kind: '', name: '' },
   service: data?.service !== undefined ? data.service : { name: '' },
 };
}
