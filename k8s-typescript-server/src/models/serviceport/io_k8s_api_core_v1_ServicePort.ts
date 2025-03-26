/**
* ServicePort contains information on service's port.
* @resourceType serviceport
* @kind Serviceport
*/
export interface io_k8s_api_core_v1_ServicePort {
/**
* The port that will be exposed by this service.
* @required
*/
port: number;
/**
* The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.

Possible enum values:
 - `"SCTP"` is the SCTP protocol.
 - `"TCP"` is the TCP protocol.
 - `"UDP"` is the UDP protocol.
*/
protocol?: 'SCTP' | 'TCP' | 'UDP';
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
*/
targetPort?: string;
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
* The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.
*/
name?: string;
/**
* The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport
*/
nodePort?: number;
}

/**
* Create a new Serviceport with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ServicePort instance with defaults applied
*/
export function createio_k8s_api_core_v1_ServicePort(data?: Partial<io_k8s_api_core_v1_ServicePort>): io_k8s_api_core_v1_ServicePort {
 return {
   port: data?.port !== undefined ? data.port : 0,
   protocol: data?.protocol !== undefined ? data.protocol : '',
   targetPort: data?.targetPort !== undefined ? data.targetPort : '',
   appProtocol: data?.appProtocol !== undefined ? data.appProtocol : '',
   name: data?.name !== undefined ? data.name : '',
   nodePort: data?.nodePort !== undefined ? data.nodePort : 0,
 };
}
