/**
* specification of a horizontal pod autoscaler.
* @resourceType horizontalpodautoscalerspec
* @kind Horizontalpodautoscalerspec
*/
export interface io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec {
/**
* maxReplicas is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
* @required
*/
maxReplicas: number;
/**
* minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
*/
minReplicas?: number;
/**
* CrossVersionObjectReference contains enough information to let you identify the referred resource.
* @required
* @isObject
*/
scaleTargetRef: { apiVersion?: string; kind: string; name: string };
/**
* targetCPUUtilizationPercentage is the target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
*/
targetCPUUtilizationPercentage?: number;
}

/**
* Create a new Horizontalpodautoscalerspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec(data?: Partial<io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec>): io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec {
 return {
   maxReplicas: data?.maxReplicas !== undefined ? data.maxReplicas : 0,
   minReplicas: data?.minReplicas !== undefined ? data.minReplicas : 0,
   scaleTargetRef: data?.scaleTargetRef !== undefined ? data.scaleTargetRef : { kind: '', name: '' },
   targetCPUUtilizationPercentage: data?.targetCPUUtilizationPercentage !== undefined ? data.targetCPUUtilizationPercentage : 0,
 };
}
