/**
* Information about the condition of a component.
* @resourceType componentcondition
* @kind Componentcondition
*/
export interface io_k8s_api_core_v1_ComponentCondition {
/**
* Type of condition for a component. Valid value: "Healthy"
* @required
*/
type: string;
/**
* Condition error code for a component. For example, a health check error code.
*/
error?: string;
/**
* Message about the condition for a component. For example, information about a health check.
*/
message?: string;
/**
* Status of the condition for a component. Valid values for "Healthy": "True", "False", or "Unknown".
* @required
*/
status: string;
}

/**
* Create a new Componentcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ComponentCondition instance with defaults applied
*/
export function createio_k8s_api_core_v1_ComponentCondition(data?: Partial<io_k8s_api_core_v1_ComponentCondition>): io_k8s_api_core_v1_ComponentCondition {
 return {
   type: data?.type !== undefined ? data.type : '',
   error: data?.error !== undefined ? data.error : '',
   message: data?.message !== undefined ? data.message : '',
   status: data?.status !== undefined ? data.status : '',
 };
}
