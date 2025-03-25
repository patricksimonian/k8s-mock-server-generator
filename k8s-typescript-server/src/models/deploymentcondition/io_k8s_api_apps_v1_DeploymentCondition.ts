/**
* DeploymentCondition describes the state of a deployment at a certain point.
* @resourceType deploymentcondition
* @kind Deploymentcondition
*/
export interface io_k8s_api_apps_v1_DeploymentCondition {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastUpdateTime?: Date;
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
* Type of deployment condition.
* @required
*/
type: string;
}

/**
* Create a new Deploymentcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DeploymentCondition instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DeploymentCondition(data?: Partial<io_k8s_api_apps_v1_DeploymentCondition>): io_k8s_api_apps_v1_DeploymentCondition {
 return {
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   lastUpdateTime: data?.lastUpdateTime !== undefined ? data.lastUpdateTime : '',
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
