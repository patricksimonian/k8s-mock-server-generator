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
* `queuing` holds the configuration parameters for queuing. This field may be non-empty only if `type` is `"Queue"`.
* @references io.k8s.api.flowcontrol.v1.QueuingConfiguration
*/
queuing?: io_k8s_api_flowcontrol_v1_QueuingConfiguration;
}

/**
* Create a new Limitresponse with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_LimitResponse instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_LimitResponse(data?: Partial<io_k8s_api_flowcontrol_v1_LimitResponse>): io_k8s_api_flowcontrol_v1_LimitResponse {
 return {
   type: data?.type !== undefined ? data.type : '',
   queuing: data?.queuing !== undefined ? data.queuing : createio_k8s_api_flowcontrol_v1_QueuingConfiguration(),
 };
}
// Required imports
import { io_k8s_api_flowcontrol_v1_QueuingConfiguration, createio_k8s_api_flowcontrol_v1_QueuingConfiguration } from '../queuingconfiguration/io_k8s_api_flowcontrol_v1_QueuingConfiguration';
