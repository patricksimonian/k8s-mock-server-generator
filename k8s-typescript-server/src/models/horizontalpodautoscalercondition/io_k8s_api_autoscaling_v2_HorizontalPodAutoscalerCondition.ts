/**
* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
* @resourceType horizontalpodautoscalercondition
* @kind Horizontalpodautoscalercondition
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition {
/**
* type describes the current condition
* @required
*/
type: string;
/**
* lastTransitionTime is the last time the condition transitioned from one status to another
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* message is a human-readable explanation containing details about the transition
*/
message?: string;
/**
* reason is the reason for the condition's last transition.
*/
reason?: string;
/**
* status is the status of the condition (True, False, Unknown)
* @required
*/
status: string;
}

/**
* Create a new Horizontalpodautoscalercondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition {
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
