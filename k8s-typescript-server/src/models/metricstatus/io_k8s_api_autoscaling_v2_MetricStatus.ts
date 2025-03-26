/**
* MetricStatus describes the last-read state of a single metric.
* @resourceType metricstatus
* @kind Metricstatus
*/
export interface io_k8s_api_autoscaling_v2_MetricStatus {
/**
* external refers to a global metric that is not associated with any Kubernetes object. It allows autoscaling based on information coming from components running outside of cluster (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
* @references io.k8s.api.autoscaling.v2.ExternalMetricStatus
*/
external?: io_k8s_api_autoscaling_v2_ExternalMetricStatus;
/**
* object refers to a metric describing a single kubernetes object (for example, hits-per-second on an Ingress object).
* @references io.k8s.api.autoscaling.v2.ObjectMetricStatus
*/
object?: io_k8s_api_autoscaling_v2_ObjectMetricStatus;
/**
* pods refers to a metric describing each pod in the current scale target (for example, transactions-processed-per-second).  The values will be averaged together before being compared to the target value.
* @references io.k8s.api.autoscaling.v2.PodsMetricStatus
*/
pods?: io_k8s_api_autoscaling_v2_PodsMetricStatus;
/**
* resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @references io.k8s.api.autoscaling.v2.ResourceMetricStatus
*/
resource?: io_k8s_api_autoscaling_v2_ResourceMetricStatus;
/**
* type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object.
* @required
*/
type: string;
/**
* container resource refers to a resource metric (such as those specified in requests and limits) known to Kubernetes describing a single container in each pod in the current scale target (e.g. CPU or memory). Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @references io.k8s.api.autoscaling.v2.ContainerResourceMetricStatus
*/
containerResource?: io_k8s_api_autoscaling_v2_ContainerResourceMetricStatus;
}

/**
* Create a new Metricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_MetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_MetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_MetricStatus>): io_k8s_api_autoscaling_v2_MetricStatus {
 return {
   external: data?.external !== undefined ? data.external : createio_k8s_api_autoscaling_v2_ExternalMetricStatus(),
   object: data?.object !== undefined ? data.object : createio_k8s_api_autoscaling_v2_ObjectMetricStatus(),
   pods: data?.pods !== undefined ? data.pods : createio_k8s_api_autoscaling_v2_PodsMetricStatus(),
   resource: data?.resource !== undefined ? data.resource : createio_k8s_api_autoscaling_v2_ResourceMetricStatus(),
   type: data?.type !== undefined ? data.type : '',
   containerResource: data?.containerResource !== undefined ? data.containerResource : createio_k8s_api_autoscaling_v2_ContainerResourceMetricStatus(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_ContainerResourceMetricStatus, createio_k8s_api_autoscaling_v2_ContainerResourceMetricStatus } from '../containerresourcemetricstatus/io_k8s_api_autoscaling_v2_ContainerResourceMetricStatus';
import { io_k8s_api_autoscaling_v2_ExternalMetricStatus, createio_k8s_api_autoscaling_v2_ExternalMetricStatus } from '../externalmetricstatus/io_k8s_api_autoscaling_v2_ExternalMetricStatus';
import { io_k8s_api_autoscaling_v2_ObjectMetricStatus, createio_k8s_api_autoscaling_v2_ObjectMetricStatus } from '../objectmetricstatus/io_k8s_api_autoscaling_v2_ObjectMetricStatus';
import { io_k8s_api_autoscaling_v2_PodsMetricStatus, createio_k8s_api_autoscaling_v2_PodsMetricStatus } from '../podsmetricstatus/io_k8s_api_autoscaling_v2_PodsMetricStatus';
import { io_k8s_api_autoscaling_v2_ResourceMetricStatus, createio_k8s_api_autoscaling_v2_ResourceMetricStatus } from '../resourcemetricstatus/io_k8s_api_autoscaling_v2_ResourceMetricStatus';
