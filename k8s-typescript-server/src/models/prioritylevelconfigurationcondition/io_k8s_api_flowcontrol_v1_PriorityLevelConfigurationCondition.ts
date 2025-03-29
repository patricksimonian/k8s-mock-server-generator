/**
* PriorityLevelConfigurationCondition defines the condition of priority level.
* @resourceType prioritylevelconfigurationcondition
* @kind Prioritylevelconfigurationcondition
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition {
/**
* `status` is the status of the condition. Can be True, False, Unknown. Required.
*/
status?: string;
/**
* `type` is the type of the condition. Required.
*/
type?: string;
/**
* `lastTransitionTime` is the last time the condition transitioned from one status to another.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* `message` is a human-readable message indicating details about last transition.
*/
message?: string;
/**
* `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
}

/**
* Create a new Prioritylevelconfigurationcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationCondition {
 return {
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
