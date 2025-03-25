/**
* ReplicationControllerCondition describes the state of a replication controller at a certain point.
* @resourceType replicationcontrollercondition
* @kind Replicationcontrollercondition
*/
export interface io_k8s_api_core_v1_ReplicationControllerCondition {
/**
* A human readable message indicating details about the transition.
*/
message?: string;
/**
* The reason for the condition's last transition.
*/
reason?: string;
/**
* Status of the condition, one of True, False, Unknown.
* @required
*/
status: string;
/**
* Type of replication controller condition.
* @required
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
}

/**
* Create a new Replicationcontrollercondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationControllerCondition instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationControllerCondition(data?: Partial<io_k8s_api_core_v1_ReplicationControllerCondition>): io_k8s_api_core_v1_ReplicationControllerCondition {
 return {
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
 };
}
