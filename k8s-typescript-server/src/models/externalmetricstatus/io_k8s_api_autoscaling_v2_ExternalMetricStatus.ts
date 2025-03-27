/**
* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
* @resourceType externalmetricstatus
* @kind Externalmetricstatus
*/
export interface io_k8s_api_autoscaling_v2_ExternalMetricStatus {
/**
* metric identifies the target metric by name and selector
* @required
* @references io.k8s.api.autoscaling.v2.MetricIdentifier
*/
metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
/**
* current contains the current value for the given metric
* @required
* @references io.k8s.api.autoscaling.v2.MetricValueStatus
*/
current: io_k8s_api_autoscaling_v2_MetricValueStatus;
}

/**
* Create a new Externalmetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ExternalMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ExternalMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_ExternalMetricStatus>): io_k8s_api_autoscaling_v2_ExternalMetricStatus {
 return {
   metric: data?.metric !== undefined ? data.metric : createio_k8s_api_autoscaling_v2_MetricIdentifier(),
   current: data?.current !== undefined ? data.current : createio_k8s_api_autoscaling_v2_MetricValueStatus(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_MetricIdentifier, createio_k8s_api_autoscaling_v2_MetricIdentifier } from '../metricidentifier/io_k8s_api_autoscaling_v2_MetricIdentifier';
import { io_k8s_api_autoscaling_v2_MetricValueStatus, createio_k8s_api_autoscaling_v2_MetricValueStatus } from '../metricvaluestatus/io_k8s_api_autoscaling_v2_MetricValueStatus';
