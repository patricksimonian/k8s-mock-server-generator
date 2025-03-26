/**
* NetworkPolicyPort describes a port to allow traffic on
* @resourceType networkpolicyport
* @kind Networkpolicyport
*/
export interface io_k8s_api_networking_v1_NetworkPolicyPort {
/**
* endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
*/
endPort?: number;
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
*/
port?: string;
/**
* protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.

Possible enum values:
 - `"SCTP"` is the SCTP protocol.
 - `"TCP"` is the TCP protocol.
 - `"UDP"` is the UDP protocol.
*/
protocol?: 'SCTP' | 'TCP' | 'UDP';
}

/**
* Create a new Networkpolicyport with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_NetworkPolicyPort instance with defaults applied
*/
export function createio_k8s_api_networking_v1_NetworkPolicyPort(data?: Partial<io_k8s_api_networking_v1_NetworkPolicyPort>): io_k8s_api_networking_v1_NetworkPolicyPort {
 return {
   endPort: data?.endPort !== undefined ? data.endPort : 0,
   port: data?.port !== undefined ? data.port : '',
   protocol: data?.protocol !== undefined ? data.protocol : '',
 };
}
