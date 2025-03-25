/**
* PodCondition contains details for the current condition of this pod.
* @resourceType podcondition
* @kind Podcondition
*/
export interface io_k8s_api_core_v1_PodCondition {
/**
* Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
* @required
*/
status: string;
/**
* Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
* @required
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastProbeTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* Human-readable message indicating details about last transition.
*/
message?: string;
/**
* Unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
}

/**
* Create a new Podcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodCondition instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodCondition(data?: Partial<io_k8s_api_core_v1_PodCondition>): io_k8s_api_core_v1_PodCondition {
 return {
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastProbeTime: data?.lastProbeTime !== undefined ? data.lastProbeTime : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
 };
}
