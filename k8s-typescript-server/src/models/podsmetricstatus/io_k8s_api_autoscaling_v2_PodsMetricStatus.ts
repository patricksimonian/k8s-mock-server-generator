/**
* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
* @resourceType podsmetricstatus
* @kind Podsmetricstatus
*/
export interface io_k8s_api_autoscaling_v2_PodsMetricStatus {
/**
* current contains the current value for the given metric
* @required
* @references io.k8s.api.autoscaling.v2.MetricValueStatus
*/
current: io_k8s_api_autoscaling_v2_MetricValueStatus;
/**
* metric identifies the target metric by name and selector
* @required
* @references io.k8s.api.autoscaling.v2.MetricIdentifier
*/
metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
}

/**
* Create a new Podsmetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_PodsMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_PodsMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_PodsMetricStatus>): io_k8s_api_autoscaling_v2_PodsMetricStatus {
 return {
   current: data?.current !== undefined ? data.current : createio_k8s_api_autoscaling_v2_MetricValueStatus(),
   metric: data?.metric !== undefined ? data.metric : createio_k8s_api_autoscaling_v2_MetricIdentifier(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_MetricIdentifier, createio_k8s_api_autoscaling_v2_MetricIdentifier } from '../metricidentifier/io_k8s_api_autoscaling_v2_MetricIdentifier';
import { io_k8s_api_autoscaling_v2_MetricValueStatus, createio_k8s_api_autoscaling_v2_MetricValueStatus } from '../metricvaluestatus/io_k8s_api_autoscaling_v2_MetricValueStatus';
