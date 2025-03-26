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
* ServiceBackendPort is the service port being referenced.
* @isObject
*/
port?: { number?: number; name?: string };
}

/**
* Create a new Ingressservicebackend with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressServiceBackend instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressServiceBackend(data?: Partial<io_k8s_api_networking_v1_IngressServiceBackend>): io_k8s_api_networking_v1_IngressServiceBackend {
 return {
   name: data?.name !== undefined ? data.name : '',
   port: data?.port !== undefined ? data.port : {},
 };
}
