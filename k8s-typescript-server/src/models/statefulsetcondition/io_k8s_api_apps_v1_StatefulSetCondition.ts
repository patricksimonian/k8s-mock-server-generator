/**
* StatefulSetCondition describes the state of a statefulset at a certain point.
* @resourceType statefulsetcondition
* @kind Statefulsetcondition
*/
export interface io_k8s_api_apps_v1_StatefulSetCondition {
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
* Type of statefulset condition.
* @required
*/
type: string;
/**
* Last time the condition transitioned from one status to another.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
}

/**
* Create a new Statefulsetcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSetCondition instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSetCondition(data?: Partial<io_k8s_api_apps_v1_StatefulSetCondition>): io_k8s_api_apps_v1_StatefulSetCondition {
 return {
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
