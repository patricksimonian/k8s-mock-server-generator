/**
* NodeCondition contains condition information for a node.
* @resourceType nodecondition
* @kind Nodecondition
*/
export interface io_k8s_api_core_v1_NodeCondition {
/**
* Last time we got an update on a given condition.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastHeartbeatTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Last time the condition transit from one status to another.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
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
   lastHeartbeatTime: data?.lastHeartbeatTime !== undefined ? data.lastHeartbeatTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
