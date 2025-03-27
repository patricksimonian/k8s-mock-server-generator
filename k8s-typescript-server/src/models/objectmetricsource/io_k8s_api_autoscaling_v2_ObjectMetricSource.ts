/**
* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
* @resourceType objectmetricsource
* @kind Objectmetricsource
*/
export interface io_k8s_api_autoscaling_v2_ObjectMetricSource {
/**
* metric identifies the target metric by name and selector
* @required
* @references io.k8s.api.autoscaling.v2.MetricIdentifier
*/
metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
/**
* target specifies the target value for the given metric
* @required
* @references io.k8s.api.autoscaling.v2.MetricTarget
*/
target: io_k8s_api_autoscaling_v2_MetricTarget;
/**
* describedObject specifies the descriptions of a object,such as kind,name apiVersion
* @required
* @references io.k8s.api.autoscaling.v2.CrossVersionObjectReference
*/
describedObject: io_k8s_api_autoscaling_v2_CrossVersionObjectReference;
}

/**
* Create a new Objectmetricsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ObjectMetricSource instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ObjectMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_ObjectMetricSource>): io_k8s_api_autoscaling_v2_ObjectMetricSource {
 return {
   metric: data?.metric !== undefined ? data.metric : createio_k8s_api_autoscaling_v2_MetricIdentifier(),
   target: data?.target !== undefined ? data.target : createio_k8s_api_autoscaling_v2_MetricTarget(),
   describedObject: data?.describedObject !== undefined ? data.describedObject : createio_k8s_api_autoscaling_v2_CrossVersionObjectReference(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_CrossVersionObjectReference, createio_k8s_api_autoscaling_v2_CrossVersionObjectReference } from '../crossversionobjectreference/io_k8s_api_autoscaling_v2_CrossVersionObjectReference';
import { io_k8s_api_autoscaling_v2_MetricIdentifier, createio_k8s_api_autoscaling_v2_MetricIdentifier } from '../metricidentifier/io_k8s_api_autoscaling_v2_MetricIdentifier';
import { io_k8s_api_autoscaling_v2_MetricTarget, createio_k8s_api_autoscaling_v2_MetricTarget } from '../metrictarget/io_k8s_api_autoscaling_v2_MetricTarget';
