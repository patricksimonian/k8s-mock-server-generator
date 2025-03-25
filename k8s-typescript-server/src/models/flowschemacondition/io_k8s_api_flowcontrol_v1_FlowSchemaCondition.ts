/**
* FlowSchemaCondition describes conditions for a FlowSchema.
* @resourceType flowschemacondition
* @kind Flowschemacondition
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchemaCondition {
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
/**
* `message` is a human-readable message indicating details about last transition.
*/
message?: string;
}

/**
* Create a new Flowschemacondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_FlowSchemaCondition instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchemaCondition(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchemaCondition>): io_k8s_api_flowcontrol_v1_FlowSchemaCondition {
 return {
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
 };
}
