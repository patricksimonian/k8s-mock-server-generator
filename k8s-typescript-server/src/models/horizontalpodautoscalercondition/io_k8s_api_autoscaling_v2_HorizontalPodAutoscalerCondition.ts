/**
* HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.
* @resourceType horizontalpodautoscalercondition
* @kind Horizontalpodautoscalercondition
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition {
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
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
/**
* type describes the current condition
* @required
*/
type: string;
}

/**
* Create a new Horizontalpodautoscalercondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition {
 return {
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
