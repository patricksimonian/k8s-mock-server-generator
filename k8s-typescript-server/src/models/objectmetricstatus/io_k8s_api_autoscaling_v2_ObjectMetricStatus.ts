/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
* @resourceType objectmetricstatus
* @kind Objectmetricstatus
*/
export interface io_k8s_api_autoscaling_v2_ObjectMetricStatus {
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
/**
* DescribedObject specifies the descriptions of a object,such as kind,name apiVersion
* @required
* @references io.k8s.api.autoscaling.v2.CrossVersionObjectReference
*/
describedObject: io_k8s_api_autoscaling_v2_CrossVersionObjectReference;
}

/**
* Create a new Objectmetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ObjectMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ObjectMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_ObjectMetricStatus>): io_k8s_api_autoscaling_v2_ObjectMetricStatus {
 return {
   metric: data?.metric !== undefined ? data.metric : createio_k8s_api_autoscaling_v2_MetricIdentifier(),
   current: data?.current !== undefined ? data.current : createio_k8s_api_autoscaling_v2_MetricValueStatus(),
   describedObject: data?.describedObject !== undefined ? data.describedObject : createio_k8s_api_autoscaling_v2_CrossVersionObjectReference(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_CrossVersionObjectReference, createio_k8s_api_autoscaling_v2_CrossVersionObjectReference } from '../crossversionobjectreference/io_k8s_api_autoscaling_v2_CrossVersionObjectReference';
import { io_k8s_api_autoscaling_v2_MetricIdentifier, createio_k8s_api_autoscaling_v2_MetricIdentifier } from '../metricidentifier/io_k8s_api_autoscaling_v2_MetricIdentifier';
import { io_k8s_api_autoscaling_v2_MetricValueStatus, createio_k8s_api_autoscaling_v2_MetricValueStatus } from '../metricvaluestatus/io_k8s_api_autoscaling_v2_MetricValueStatus';
