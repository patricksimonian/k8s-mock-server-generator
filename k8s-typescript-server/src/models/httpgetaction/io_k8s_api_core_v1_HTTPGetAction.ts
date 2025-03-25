/**
* HTTPGetAction describes an action based on HTTP Get requests.
* @resourceType httpgetaction
* @kind Httpgetaction
*/
export interface io_k8s_api_core_v1_HTTPGetAction {
/**
* Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
*/
host?: string;
/**
* Custom headers to set in the request. HTTP allows repeated headers.
* @isArray
*/
httpHeaders?: Array<{ value: string; name: string }>;
/**
* Path to access on the HTTP server.
*/
path?: string;
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
* @required
*/
port: string;
/**
* Scheme to use for connecting to the host. Defaults to HTTP.

Possible enum values:
 - `"HTTP"` means that the scheme used will be http://
 - `"HTTPS"` means that the scheme used will be https://
*/
scheme?: 'HTTP' | 'HTTPS';
}

/**
* Create a new Httpgetaction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_HTTPGetAction instance with defaults applied
*/
export function createio_k8s_api_core_v1_HTTPGetAction(data?: Partial<io_k8s_api_core_v1_HTTPGetAction>): io_k8s_api_core_v1_HTTPGetAction {
 return {
   host: data?.host !== undefined ? data.host : '',
   httpHeaders: data?.httpHeaders !== undefined ? data.httpHeaders : [],
   path: data?.path !== undefined ? data.path : '',
   port: data?.port !== undefined ? data.port : '',
   scheme: data?.scheme !== undefined ? data.scheme : '',
 };
}
