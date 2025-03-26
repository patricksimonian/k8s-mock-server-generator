/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
* @resourceType lifecycle
* @kind Lifecycle
*/
export interface io_k8s_api_core_v1_Lifecycle {
/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
* @isObject
*/
preStop?: { httpGet?: { scheme?: 'HTTP' | 'HTTPS'; host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string }; sleep?: { seconds: number }; tcpSocket?: { host?: string; port: string }; exec?: { command?: string[] } };
/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
* @isObject
*/
postStart?: { httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; sleep?: { seconds: number }; tcpSocket?: { host?: string; port: string }; exec?: { command?: string[] } };
}

/**
* Create a new Lifecycle with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Lifecycle instance with defaults applied
*/
export function createio_k8s_api_core_v1_Lifecycle(data?: Partial<io_k8s_api_core_v1_Lifecycle>): io_k8s_api_core_v1_Lifecycle {
 return {
   preStop: data?.preStop !== undefined ? data.preStop : {},
   postStart: data?.postStart !== undefined ? data.postStart : {},
 };
}
