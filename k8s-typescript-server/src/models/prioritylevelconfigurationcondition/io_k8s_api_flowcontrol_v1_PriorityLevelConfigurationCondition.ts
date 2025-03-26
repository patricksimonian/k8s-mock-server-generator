/**
* PriorityLevelConfigurationCondition defines the condition of priority level.
* @resourceType prioritylevelconfigurationcondition
* @kind Prioritylevelconfigurationcondition
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition {
/**
* `message` is a human-readable message indicating details about last transition.
*/
message?: string;
/**
* `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
/**
* `status` is the status of the condition. Can be True, False, Unknown. Required.
*/
status?: string;
/**
* `type` is the type of the condition. Required.
*/
type?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
}

/**
* Create a new Prioritylevelconfigurationcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition {
 return {
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
 };
}
