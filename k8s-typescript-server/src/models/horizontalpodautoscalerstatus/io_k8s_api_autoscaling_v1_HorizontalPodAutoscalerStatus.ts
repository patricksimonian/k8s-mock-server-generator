/**
* current status of a horizontal pod autoscaler
* @resourceType horizontalpodautoscalerstatus
* @kind Horizontalpodautoscalerstatus
*/
export interface io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus {
/**
* currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.
*/
currentCPUUtilizationPercentage?: number;
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
* lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastScaleTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* observedGeneration is the most recent generation observed by this autoscaler.
*/
observedGeneration?: number;
}

/**
* Create a new Horizontalpodautoscalerstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus(data?: Partial<io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus>): io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus {
 return {
   currentCPUUtilizationPercentage: data?.currentCPUUtilizationPercentage !== undefined ? data.currentCPUUtilizationPercentage : 0,
   currentReplicas: data?.currentReplicas !== undefined ? data.currentReplicas : 0,
   desiredReplicas: data?.desiredReplicas !== undefined ? data.desiredReplicas : 0,
   lastScaleTime: data?.lastScaleTime !== undefined ? data.lastScaleTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
