/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
* @resourceType horizontalpodautoscalerstatus
* @kind Horizontalpodautoscalerstatus
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus {
/**
* desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.
* @required
*/
desiredReplicas: number;
/**
* lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastScaleTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* observedGeneration is the most recent generation observed by this autoscaler.
*/
observedGeneration?: number;
/**
* conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met.
* @isArray
*/
conditions?: io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition[];
/**
* currentMetrics is the last read state of the metrics used by this autoscaler.
* @isArray
*/
currentMetrics?: io_k8s_api_autoscaling_v2_MetricStatus[];
/**
* currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.
*/
currentReplicas?: number;
}

/**
* Create a new Horizontalpodautoscalerstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus {
 return {
   desiredReplicas: data?.desiredReplicas !== undefined ? data.desiredReplicas : 0,
   lastScaleTime: data?.lastScaleTime !== undefined ? data.lastScaleTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   conditions: data?.conditions !== undefined ? data.conditions : [],
   currentMetrics: data?.currentMetrics !== undefined ? data.currentMetrics : [],
   currentReplicas: data?.currentReplicas !== undefined ? data.currentReplicas : 0,
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition, createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition } from '../io.k8s.api.autoscaling.v2.HorizontalPodAutoscalerCondition';
import { io_k8s_api_autoscaling_v2_MetricStatus, createio_k8s_api_autoscaling_v2_MetricStatus } from '../io.k8s.api.autoscaling.v2.MetricStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
