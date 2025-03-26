/**
* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
* @resourceType horizontalpodautoscalerbehavior
* @kind Horizontalpodautoscalerbehavior
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior {
/**
* HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
* @isObject
*/
scaleDown?: { stabilizationWindowSeconds?: number; policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string };
/**
* HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.
* @isObject
*/
scaleUp?: { stabilizationWindowSeconds?: number; policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string };
}

/**
* Create a new Horizontalpodautoscalerbehavior with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior {
 return {
   scaleDown: data?.scaleDown !== undefined ? data.scaleDown : {},
   scaleUp: data?.scaleUp !== undefined ? data.scaleUp : {},
 };
}
