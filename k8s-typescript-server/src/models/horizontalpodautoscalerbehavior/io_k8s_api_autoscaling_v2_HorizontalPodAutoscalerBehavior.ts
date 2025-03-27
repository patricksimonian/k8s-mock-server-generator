/**
* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
* @resourceType horizontalpodautoscalerbehavior
* @kind Horizontalpodautoscalerbehavior
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior {
/**
* scaleDown is scaling policy for scaling Down. If not set, the default value is to allow to scale down to minReplicas pods, with a 300 second stabilization window (i.e., the highest recommendation for the last 300sec is used).
* @references io.k8s.api.autoscaling.v2.HPAScalingRules
*/
scaleDown?: io_k8s_api_autoscaling_v2_HPAScalingRules;
/**
* scaleUp is scaling policy for scaling Up. If not set, the default value is the higher of:
  * increase no more than 4 pods per 60 seconds
  * double the number of pods per 60 seconds
No stabilization is used.
* @references io.k8s.api.autoscaling.v2.HPAScalingRules
*/
scaleUp?: io_k8s_api_autoscaling_v2_HPAScalingRules;
}

/**
* Create a new Horizontalpodautoscalerbehavior with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior {
 return {
   scaleDown: data?.scaleDown !== undefined ? data.scaleDown : createio_k8s_api_autoscaling_v2_HPAScalingRules(),
   scaleUp: data?.scaleUp !== undefined ? data.scaleUp : createio_k8s_api_autoscaling_v2_HPAScalingRules(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_HPAScalingRules, createio_k8s_api_autoscaling_v2_HPAScalingRules } from '../hpascalingrule/io_k8s_api_autoscaling_v2_HPAScalingRules';
