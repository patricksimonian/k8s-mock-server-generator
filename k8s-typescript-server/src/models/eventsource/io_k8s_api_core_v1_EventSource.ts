/**
* EventSource contains information for an event.
* @resourceType eventsource
* @kind Eventsource
*/
export interface io_k8s_api_core_v1_EventSource {
/**
* Component from which the event is generated.
*/
component?: string;
/**
* Node name on which the event is generated.
*/
host?: string;
}

/**
* Create a new Eventsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EventSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_EventSource(data?: Partial<io_k8s_api_core_v1_EventSource>): io_k8s_api_core_v1_EventSource {
 return {
   component: data?.component !== undefined ? data.component : '',
   host: data?.host !== undefined ? data.host : '',
 };
}
