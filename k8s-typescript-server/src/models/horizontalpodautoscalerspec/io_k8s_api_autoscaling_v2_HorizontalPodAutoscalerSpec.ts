/**
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
* @resourceType horizontalpodautoscalerspec
* @kind Horizontalpodautoscalerspec
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec {
/**
* behavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). If not set, the default HPAScalingRules for scale up and scale down are used.
* @references io.k8s.api.autoscaling.v2.HorizontalPodAutoscalerBehavior
*/
behavior?: io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior;
/**
* maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
* @required
*/
maxReplicas: number;
/**
* metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
* @isArray
*/
metrics?: io_k8s_api_autoscaling_v2_MetricSpec[];
/**
* minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
*/
minReplicas?: number;
/**
* scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.
* @required
* @references io.k8s.api.autoscaling.v2.CrossVersionObjectReference
*/
scaleTargetRef: io_k8s_api_autoscaling_v2_CrossVersionObjectReference;
}

/**
* Create a new Horizontalpodautoscalerspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec {
 return {
   behavior: data?.behavior !== undefined ? data.behavior : createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior(),
   maxReplicas: data?.maxReplicas !== undefined ? data.maxReplicas : 0,
   metrics: data?.metrics !== undefined ? data.metrics : [],
   minReplicas: data?.minReplicas !== undefined ? data.minReplicas : 0,
   scaleTargetRef: data?.scaleTargetRef !== undefined ? data.scaleTargetRef : createio_k8s_api_autoscaling_v2_CrossVersionObjectReference(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_CrossVersionObjectReference, createio_k8s_api_autoscaling_v2_CrossVersionObjectReference } from '../crossversionobjectreference/io_k8s_api_autoscaling_v2_CrossVersionObjectReference';
import { io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior, createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior } from '../horizontalpodautoscalerbehavior/io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior';
import { io_k8s_api_autoscaling_v2_MetricSpec, createio_k8s_api_autoscaling_v2_MetricSpec } from '../io.k8s.api.autoscaling.v2.MetricSpec';
