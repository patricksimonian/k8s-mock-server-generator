/**
* EndpointPort is a tuple that describes a single port.
* @resourceType endpointport
* @kind Endpointport
*/
export interface io_k8s_api_core_v1_EndpointPort {
/**
* The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either:

* Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names).

* Kubernetes-defined prefixed names:
  * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior-
  * 'kubernetes.io/ws'  - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455
  * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455

* Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
*/
appProtocol?: string;
/**
* The name of this port.  This must match the 'name' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
*/
name?: string;
/**
* The port number of the endpoint.
* @required
*/
port: number;
/**
* The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.

Possible enum values:
 - `"SCTP"` is the SCTP protocol.
 - `"TCP"` is the TCP protocol.
 - `"UDP"` is the UDP protocol.
*/
protocol?: 'SCTP' | 'TCP' | 'UDP';
}

/**
* Create a new Endpointport with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EndpointPort instance with defaults applied
*/
export function createio_k8s_api_core_v1_EndpointPort(data?: Partial<io_k8s_api_core_v1_EndpointPort>): io_k8s_api_core_v1_EndpointPort {
 return {
   appProtocol: data?.appProtocol !== undefined ? data.appProtocol : '',
   name: data?.name !== undefined ? data.name : '',
   port: data?.port !== undefined ? data.port : 0,
   protocol: data?.protocol !== undefined ? data.protocol : '',
 };
}
