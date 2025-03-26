/**
* LimitResponse defines how to handle requests that can not be executed right now.
* @resourceType limitresponse
* @kind Limitresponse
*/
export interface io_k8s_api_flowcontrol_v1_LimitResponse {
/**
* `type` is "Queue" or "Reject". "Queue" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. "Reject" means that requests that can not be executed upon arrival are rejected. Required.
* @required
*/
type: string;
/**
* QueuingConfiguration holds the configuration parameters for queuing
* @isObject
*/
queuing?: { handSize?: number; queueLengthLimit?: number; queues?: number };
}

/**
* Create a new Limitresponse with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_LimitResponse instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_LimitResponse(data?: Partial<io_k8s_api_flowcontrol_v1_LimitResponse>): io_k8s_api_flowcontrol_v1_LimitResponse {
 return {
   type: data?.type !== undefined ? data.type : '',
   queuing: data?.queuing !== undefined ? data.queuing : {},
 };
}
