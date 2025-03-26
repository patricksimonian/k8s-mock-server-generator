/**
* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @resourceType resourcemetricstatus
* @kind Resourcemetricstatus
*/
export interface io_k8s_api_autoscaling_v2_ResourceMetricStatus {
/**
* name is the name of the resource in question.
* @required
*/
name: string;
/**
* current contains the current value for the given metric
* @required
* @references io.k8s.api.autoscaling.v2.MetricValueStatus
*/
current: io_k8s_api_autoscaling_v2_MetricValueStatus;
}

/**
* Create a new Resourcemetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ResourceMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ResourceMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_ResourceMetricStatus>): io_k8s_api_autoscaling_v2_ResourceMetricStatus {
 return {
   name: data?.name !== undefined ? data.name : '',
   current: data?.current !== undefined ? data.current : createio_k8s_api_autoscaling_v2_MetricValueStatus(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_MetricValueStatus, createio_k8s_api_autoscaling_v2_MetricValueStatus } from '../metricvaluestatus/io_k8s_api_autoscaling_v2_MetricValueStatus';
