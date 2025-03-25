/**
* TCPSocketAction describes an action based on opening a socket
* @resourceType tcpsocketaction
* @kind Tcpsocketaction
*/
export interface io_k8s_api_core_v1_TCPSocketAction {
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
* @required
*/
port: string;
/**
* Optional: Host name to connect to, defaults to the pod IP.
*/
host?: string;
}

/**
* Create a new Tcpsocketaction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_TCPSocketAction instance with defaults applied
*/
export function createio_k8s_api_core_v1_TCPSocketAction(data?: Partial<io_k8s_api_core_v1_TCPSocketAction>): io_k8s_api_core_v1_TCPSocketAction {
 return {
   port: data?.port !== undefined ? data.port : '',
   host: data?.host !== undefined ? data.host : '',
 };
}
