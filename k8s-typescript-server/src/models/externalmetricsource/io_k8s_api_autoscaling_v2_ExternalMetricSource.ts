/**
* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
* @resourceType externalmetricsource
* @kind Externalmetricsource
*/
export interface io_k8s_api_autoscaling_v2_ExternalMetricSource {
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
* Create a new Externalmetricsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ExternalMetricSource instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ExternalMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_ExternalMetricSource>): io_k8s_api_autoscaling_v2_ExternalMetricSource {
 return {
   target: data?.target !== undefined ? data.target : createio_k8s_api_autoscaling_v2_MetricTarget(),
   metric: data?.metric !== undefined ? data.metric : createio_k8s_api_autoscaling_v2_MetricIdentifier(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_MetricIdentifier, createio_k8s_api_autoscaling_v2_MetricIdentifier } from '../metricidentifier/io_k8s_api_autoscaling_v2_MetricIdentifier';
import { io_k8s_api_autoscaling_v2_MetricTarget, createio_k8s_api_autoscaling_v2_MetricTarget } from '../metrictarget/io_k8s_api_autoscaling_v2_MetricTarget';
