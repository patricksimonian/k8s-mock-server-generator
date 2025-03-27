/**
* PodCondition contains details for the current condition of this pod.
* @resourceType podcondition
* @kind Podcondition
*/
export interface io_k8s_api_core_v1_PodCondition {
/**
* Unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
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
* Last time we probed the condition.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastProbeTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Last time the condition transitioned from one status to another.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Human-readable message indicating details about last transition.
*/
message?: string;
}

/**
* Create a new Podcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodCondition instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodCondition(data?: Partial<io_k8s_api_core_v1_PodCondition>): io_k8s_api_core_v1_PodCondition {
 return {
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastProbeTime: data?.lastProbeTime !== undefined ? data.lastProbeTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
