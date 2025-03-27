/**
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
* @resourceType metricspec
* @kind Metricspec
*/
export interface io_k8s_api_autoscaling_v2_MetricSpec {
/**
* containerResource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing a single container in each pod of the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @references io.k8s.api.autoscaling.v2.ContainerResourceMetricSource
*/
containerResource?: io_k8s_api_autoscaling_v2_ContainerResourceMetricSource;
/**
* external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
* @references io.k8s.api.autoscaling.v2.ExternalMetricSource
*/
external?: io_k8s_api_autoscaling_v2_ExternalMetricSource;
/**
* object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
* @references io.k8s.api.autoscaling.v2.ObjectMetricSource
*/
object?: io_k8s_api_autoscaling_v2_ObjectMetricSource;
/**
* pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
* @references io.k8s.api.autoscaling.v2.PodsMetricSource
*/
pods?: io_k8s_api_autoscaling_v2_PodsMetricSource;
/**
* resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @references io.k8s.api.autoscaling.v2.ResourceMetricSource
*/
resource?: io_k8s_api_autoscaling_v2_ResourceMetricSource;
/**
* type is the type of metric source.  It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object.
* @required
*/
type: string;
}

/**
* Create a new Metricspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_MetricSpec instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_MetricSpec(data?: Partial<io_k8s_api_autoscaling_v2_MetricSpec>): io_k8s_api_autoscaling_v2_MetricSpec {
 return {
   containerResource: data?.containerResource !== undefined ? data.containerResource : createio_k8s_api_autoscaling_v2_ContainerResourceMetricSource(),
   external: data?.external !== undefined ? data.external : createio_k8s_api_autoscaling_v2_ExternalMetricSource(),
   object: data?.object !== undefined ? data.object : createio_k8s_api_autoscaling_v2_ObjectMetricSource(),
   pods: data?.pods !== undefined ? data.pods : createio_k8s_api_autoscaling_v2_PodsMetricSource(),
   resource: data?.resource !== undefined ? data.resource : createio_k8s_api_autoscaling_v2_ResourceMetricSource(),
   type: data?.type !== undefined ? data.type : '',
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_ContainerResourceMetricSource, createio_k8s_api_autoscaling_v2_ContainerResourceMetricSource } from '../containerresourcemetricsource/io_k8s_api_autoscaling_v2_ContainerResourceMetricSource';
import { io_k8s_api_autoscaling_v2_ExternalMetricSource, createio_k8s_api_autoscaling_v2_ExternalMetricSource } from '../externalmetricsource/io_k8s_api_autoscaling_v2_ExternalMetricSource';
import { io_k8s_api_autoscaling_v2_ObjectMetricSource, createio_k8s_api_autoscaling_v2_ObjectMetricSource } from '../objectmetricsource/io_k8s_api_autoscaling_v2_ObjectMetricSource';
import { io_k8s_api_autoscaling_v2_PodsMetricSource, createio_k8s_api_autoscaling_v2_PodsMetricSource } from '../podsmetricsource/io_k8s_api_autoscaling_v2_PodsMetricSource';
import { io_k8s_api_autoscaling_v2_ResourceMetricSource, createio_k8s_api_autoscaling_v2_ResourceMetricSource } from '../resourcemetricsource/io_k8s_api_autoscaling_v2_ResourceMetricSource';
