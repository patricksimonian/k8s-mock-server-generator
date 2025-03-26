/**
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
* @resourceType horizontalpodautoscalerspec
* @kind Horizontalpodautoscalerspec
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec {
/**
* HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
* @isObject
*/
behavior?: { scaleDown?: { selectPolicy?: string; stabilizationWindowSeconds?: number; policies?: Array<{ periodSeconds: number; type: string; value: number }> }; scaleUp?: { stabilizationWindowSeconds?: number; policies?: Array<{ value: number; periodSeconds: number; type: string }>; selectPolicy?: string } };
/**
* maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
* @required
*/
maxReplicas: number;
/**
* metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
* @isArray
*/
metrics?: Array<{ containerResource?: { name: string; target: { type: string; value?: string; averageUtilization?: number; averageValue?: string }; container: string }; external?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; object?: { describedObject: { apiVersion?: string; kind: string; name: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { averageValue?: string; type: string; value?: string; averageUtilization?: number } }; pods?: { metric: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; resource?: { name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; type: string }>;
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
}

/**
* Create a new Horizontalpodautoscalerspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec {
 return {
   behavior: data?.behavior !== undefined ? data.behavior : {},
   maxReplicas: data?.maxReplicas !== undefined ? data.maxReplicas : 0,
   metrics: data?.metrics !== undefined ? data.metrics : [],
   minReplicas: data?.minReplicas !== undefined ? data.minReplicas : 0,
   scaleTargetRef: data?.scaleTargetRef !== undefined ? data.scaleTargetRef : { kind: '', name: '' },
 };
}
