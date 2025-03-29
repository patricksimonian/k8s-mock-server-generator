/**
* IngressPortStatus represents the error condition of a service port
* @resourceType ingressportstatus
* @kind Ingressportstatus
*/
export interface io_k8s_api_networking_v1_IngressPortStatus {
/**
* port is the port number of the ingress port.
* @required
*/
port: number;
/**
* protocol is the protocol of the ingress port. The supported values are: "TCP", "UDP", "SCTP"

Possible enum values:
 - `"SCTP"` is the SCTP protocol.
 - `"TCP"` is the TCP protocol.
 - `"UDP"` is the UDP protocol.
* @required
*/
protocol: 'SCTP' | 'TCP' | 'UDP';
/**
* error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
  CamelCase names
- cloud provider specific error values must have names that comply with the
  format foo.example.com/CamelCase.
*/
error?: string;
}

/**
* Create a new Ingressportstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressPortStatus instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressPortStatus(data?: Partial<io_k8s_api_networking_v1_IngressPortStatus>): io_k8s_api_networking_v1_IngressPortStatus {
 return {
   port: data?.port !== undefined ? data.port : 0,
   protocol: data?.protocol !== undefined ? data.protocol : '',
   error: data?.error !== undefined ? data.error : '',
 };
}
