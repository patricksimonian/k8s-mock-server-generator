/**
* IngressSpec describes the Ingress the user wishes to exist.
* @resourceType ingressspec
* @kind Ingressspec
*/
export interface io_k8s_api_networking_v1_IngressSpec {
/**
* IngressBackend describes all endpoints for a given service and port.
* @isObject
*/
defaultBackend?: { resource?: { apiGroup?: string; kind: string; name: string }; service?: { name: string; port?: { name?: string; number?: number } } };
/**
* ingressClassName is the name of an IngressClass cluster resource. Ingress controller implementations use this field to know whether they should be serving this Ingress resource, by a transitive connection (controller -> IngressClass -> Ingress resource). Although the `kubernetes.io/ingress.class` annotation (simple constant name) was never formally defined, it was widely supported by Ingress controllers to create a direct binding between Ingress controller and Ingress resources. Newly created Ingress resources should prefer using the field. However, even though the annotation is officially deprecated, for backwards compatibility reasons, ingress controllers should still honor that annotation if present.
*/
ingressClassName?: string;
/**
* rules is a list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend.
* @isArray
*/
rules?: Array<{ http?: { paths: Array<{ path?: string; pathType: 'Exact' | 'ImplementationSpecific' | 'Prefix'; backend: { resource?: { apiGroup?: string; kind: string; name: string }; service?: { name: string; port?: { name?: string; number?: number } } } }> }; host?: string }>;
/**
* tls represents the TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI.
* @isArray
*/
tls?: Array<{ hosts?: string[]; secretName?: string }>;
}

/**
* Create a new Ingressspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressSpec instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressSpec(data?: Partial<io_k8s_api_networking_v1_IngressSpec>): io_k8s_api_networking_v1_IngressSpec {
 return {
   defaultBackend: data?.defaultBackend !== undefined ? data.defaultBackend : {},
   ingressClassName: data?.ingressClassName !== undefined ? data.ingressClassName : '',
   rules: data?.rules !== undefined ? data.rules : [],
   tls: data?.tls !== undefined ? data.tls : [],
 };
}
