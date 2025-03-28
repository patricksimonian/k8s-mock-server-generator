/**
* EndpointPort represents a Port used by an EndpointSlice
* @resourceType endpointport
* @kind Endpointport
*/
export interface io_k8s_api_discovery_v1_EndpointPort {
/**
* name represents the name of this port. All ports in an EndpointSlice must have a unique name. If the EndpointSlice is derived from a Kubernetes service, this corresponds to the Service.ports[].name. Name must either be an empty string or pass DNS_LABEL validation: * must be no more than 63 characters long. * must consist of lower case alphanumeric characters or '-'. * must start and end with an alphanumeric character. Default is empty string.
*/
name?: string;
/**
* port represents the port number of the endpoint. If this is not specified, ports are not restricted and must be interpreted in the context of the specific consumer.
*/
port?: number;
/**
* protocol represents the IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.

Possible enum values:
 - `"SCTP"` is the SCTP protocol.
 - `"TCP"` is the TCP protocol.
 - `"UDP"` is the UDP protocol.
*/
protocol?: 'SCTP' | 'TCP' | 'UDP';
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
}

/**
* Create a new Endpointport with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_discovery_v1_EndpointPort instance with defaults applied
*/
export function createio_k8s_api_discovery_v1_EndpointPort(data?: Partial<io_k8s_api_discovery_v1_EndpointPort>): io_k8s_api_discovery_v1_EndpointPort {
 return {
   name: data?.name !== undefined ? data.name : '',
   port: data?.port !== undefined ? data.port : 0,
   protocol: data?.protocol !== undefined ? data.protocol : '',
   appProtocol: data?.appProtocol !== undefined ? data.appProtocol : '',
 };
}
