/**
* NodeCondition contains condition information for a node.
* @resourceType nodecondition
* @kind Nodecondition
*/
export interface io_k8s_api_core_v1_NodeCondition {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastHeartbeatTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* Human readable message indicating details about last transition.
*/
message?: string;
/**
* (brief) reason for the condition's last transition.
*/
reason?: string;
/**
* Status of the condition, one of True, False, Unknown.
* @required
*/
status: string;
/**
* Type of node condition.
* @required
*/
type: string;
}

/**
* Create a new Nodecondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeCondition instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeCondition(data?: Partial<io_k8s_api_core_v1_NodeCondition>): io_k8s_api_core_v1_NodeCondition {
 return {
   lastHeartbeatTime: data?.lastHeartbeatTime !== undefined ? data.lastHeartbeatTime : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
