/**
* current status of a horizontal pod autoscaler
* @resourceType horizontalpodautoscalerstatus
* @kind Horizontalpodautoscalerstatus
*/
export interface io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus {
/**
* currentReplicas is the current number of replicas of pods managed by this autoscaler.
* @required
*/
currentReplicas: number;
/**
* desiredReplicas is the  desired number of replicas of pods managed by this autoscaler.
* @required
*/
desiredReplicas: number;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastScaleTime?: Date;
/**
* observedGeneration is the most recent generation observed by this autoscaler.
*/
observedGeneration?: number;
/**
* currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
*/
currentCPUUtilizationPercentage?: number;
}

/**
* Create a new Horizontalpodautoscalerstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus(data?: Partial<io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus>): io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus {
 return {
   currentReplicas: data?.currentReplicas !== undefined ? data.currentReplicas : 0,
   desiredReplicas: data?.desiredReplicas !== undefined ? data.desiredReplicas : 0,
   lastScaleTime: data?.lastScaleTime !== undefined ? data.lastScaleTime : '',
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   currentCPUUtilizationPercentage: data?.currentCPUUtilizationPercentage !== undefined ? data.currentCPUUtilizationPercentage : 0,
 };
}
