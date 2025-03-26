/**
* ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
* @resourceType resourcemetricsource
* @kind Resourcemetricsource
*/
export interface io_k8s_api_autoscaling_v2_ResourceMetricSource {
/**
* name is the name of the resource in question.
* @required
*/
name: string;
/**
* target specifies the target value for the given metric
* @required
* @references io.k8s.api.autoscaling.v2.MetricTarget
*/
target: io_k8s_api_autoscaling_v2_MetricTarget;
}

/**
* Create a new Resourcemetricsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ResourceMetricSource instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ResourceMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_ResourceMetricSource>): io_k8s_api_autoscaling_v2_ResourceMetricSource {
 return {
   name: data?.name !== undefined ? data.name : '',
   target: data?.target !== undefined ? data.target : createio_k8s_api_autoscaling_v2_MetricTarget(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_MetricTarget, createio_k8s_api_autoscaling_v2_MetricTarget } from '../metrictarget/io_k8s_api_autoscaling_v2_MetricTarget';
