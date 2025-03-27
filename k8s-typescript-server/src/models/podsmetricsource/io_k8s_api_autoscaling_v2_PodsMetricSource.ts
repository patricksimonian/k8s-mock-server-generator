/**
* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
* @resourceType podsmetricsource
* @kind Podsmetricsource
*/
export interface io_k8s_api_autoscaling_v2_PodsMetricSource {
/**
* target specifies the target value for the given metric
* @required
* @references io.k8s.api.autoscaling.v2.MetricTarget
*/
target: io_k8s_api_autoscaling_v2_MetricTarget;
/**
* metric identifies the target metric by name and selector
* @required
* @references io.k8s.api.autoscaling.v2.MetricIdentifier
*/
metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
}

/**
* Create a new Podsmetricsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_PodsMetricSource instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_PodsMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_PodsMetricSource>): io_k8s_api_autoscaling_v2_PodsMetricSource {
 return {
   target: data?.target !== undefined ? data.target : createio_k8s_api_autoscaling_v2_MetricTarget(),
   metric: data?.metric !== undefined ? data.metric : createio_k8s_api_autoscaling_v2_MetricIdentifier(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_MetricIdentifier, createio_k8s_api_autoscaling_v2_MetricIdentifier } from '../metricidentifier/io_k8s_api_autoscaling_v2_MetricIdentifier';
import { io_k8s_api_autoscaling_v2_MetricTarget, createio_k8s_api_autoscaling_v2_MetricTarget } from '../metrictarget/io_k8s_api_autoscaling_v2_MetricTarget';
