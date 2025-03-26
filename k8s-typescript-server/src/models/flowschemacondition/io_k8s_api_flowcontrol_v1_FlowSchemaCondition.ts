/**
* FlowSchemaCondition describes conditions for a FlowSchema.
* @resourceType flowschemacondition
* @kind Flowschemacondition
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchemaCondition {
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
/**
* `status` is the status of the condition. Can be True, False, Unknown. Required.
*/
status?: string;
}

/**
* Create a new Flowschemacondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_FlowSchemaCondition instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchemaCondition(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchemaCondition>): io_k8s_api_flowcontrol_v1_FlowSchemaCondition {
 return {
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
