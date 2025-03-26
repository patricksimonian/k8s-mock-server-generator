/**
* DaemonSetCondition describes the state of a DaemonSet at a certain point.
* @resourceType daemonsetcondition
* @kind Daemonsetcondition
*/
export interface io_k8s_api_apps_v1_DaemonSetCondition {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
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
* Type of DaemonSet condition.
* @required
*/
type: string;
}

/**
* Create a new Daemonsetcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSetCondition instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSetCondition(data?: Partial<io_k8s_api_apps_v1_DaemonSetCondition>): io_k8s_api_apps_v1_DaemonSetCondition {
 return {
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
