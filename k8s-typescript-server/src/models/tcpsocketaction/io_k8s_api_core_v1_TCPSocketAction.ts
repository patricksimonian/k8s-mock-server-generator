/**
* TCPSocketAction describes an action based on opening a socket
* @resourceType tcpsocketaction
* @kind Tcpsocketaction
*/
export interface io_k8s_api_core_v1_TCPSocketAction {
/**
* Optional: Host name to connect to, defaults to the pod IP.
*/
host?: string;
/**
* Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
* @required
* @references io.k8s.apimachinery.pkg.util.intstr.IntOrString
*/
port: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
}

/**
* Create a new Tcpsocketaction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_TCPSocketAction instance with defaults applied
*/
export function createio_k8s_api_core_v1_TCPSocketAction(data?: Partial<io_k8s_api_core_v1_TCPSocketAction>): io_k8s_api_core_v1_TCPSocketAction {
 return {
   host: data?.host !== undefined ? data.host : '',
   port: data?.port !== undefined ? data.port : createio_k8s_apimachinery_pkg_util_intstr_IntOrString(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_util_intstr_IntOrString, createio_k8s_apimachinery_pkg_util_intstr_IntOrString } from '../intorstring/io_k8s_apimachinery_pkg_util_intstr_IntOrString';
