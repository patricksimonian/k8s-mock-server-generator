/**
* HTTPGetAction describes an action based on HTTP Get requests.
* @resourceType httpgetaction
* @kind Httpgetaction
*/
export interface io_k8s_api_core_v1_HTTPGetAction {
/**
* Scheme to use for connecting to the host. Defaults to HTTP.

Possible enum values:
 - `"HTTP"` means that the scheme used will be http://
 - `"HTTPS"` means that the scheme used will be https://
*/
scheme?: 'HTTP' | 'HTTPS';
/**
* Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
*/
host?: string;
/**
* Custom headers to set in the request. HTTP allows repeated headers.
* @isArray
*/
httpHeaders?: io_k8s_api_core_v1_HTTPHeader[];
/**
* Path to access on the HTTP server.
*/
path?: string;
/**
* Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
* @required
* @references io.k8s.apimachinery.pkg.util.intstr.IntOrString
*/
port: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
}

/**
* Create a new Httpgetaction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_HTTPGetAction instance with defaults applied
*/
export function createio_k8s_api_core_v1_HTTPGetAction(data?: Partial<io_k8s_api_core_v1_HTTPGetAction>): io_k8s_api_core_v1_HTTPGetAction {
 return {
   scheme: data?.scheme !== undefined ? data.scheme : '',
   host: data?.host !== undefined ? data.host : '',
   httpHeaders: data?.httpHeaders !== undefined ? data.httpHeaders : [],
   path: data?.path !== undefined ? data.path : '',
   port: data?.port !== undefined ? data.port : createio_k8s_apimachinery_pkg_util_intstr_IntOrString(),
 };
}
// Required imports
import { io_k8s_api_core_v1_HTTPHeader, createio_k8s_api_core_v1_HTTPHeader } from '../io.k8s.api.core.v1.HTTPHeader';
import { io_k8s_apimachinery_pkg_util_intstr_IntOrString, createio_k8s_apimachinery_pkg_util_intstr_IntOrString } from '../intorstring/io_k8s_apimachinery_pkg_util_intstr_IntOrString';
