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
* port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
* @references io.k8s.apimachinery.pkg.util.intstr.IntOrString
*/
port?: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
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
   port: data?.port !== undefined ? data.port : createio_k8s_apimachinery_pkg_util_intstr_IntOrString(),
   protocol: data?.protocol !== undefined ? data.protocol : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_util_intstr_IntOrString, createio_k8s_apimachinery_pkg_util_intstr_IntOrString } from '../intorstring/io_k8s_apimachinery_pkg_util_intstr_IntOrString';
