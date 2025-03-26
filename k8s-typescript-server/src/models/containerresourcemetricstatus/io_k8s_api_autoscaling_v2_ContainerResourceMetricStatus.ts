/**
* ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @resourceType containerresourcemetricstatus
* @kind Containerresourcemetricstatus
*/
export interface io_k8s_api_autoscaling_v2_ContainerResourceMetricStatus {
/**
* current contains the current value for the given metric
* @required
* @references io.k8s.api.autoscaling.v2.MetricValueStatus
*/
current: io_k8s_api_autoscaling_v2_MetricValueStatus;
/**
* name is the name of the resource in question.
* @required
*/
name: string;
/**
* container is the name of the container in the pods of the scaling target
* @required
*/
container: string;
}

/**
* Create a new Containerresourcemetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ContainerResourceMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ContainerResourceMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_ContainerResourceMetricStatus>): io_k8s_api_autoscaling_v2_ContainerResourceMetricStatus {
 return {
   current: data?.current !== undefined ? data.current : createio_k8s_api_autoscaling_v2_MetricValueStatus(),
   name: data?.name !== undefined ? data.name : '',
   container: data?.container !== undefined ? data.container : '',
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_MetricValueStatus, createio_k8s_api_autoscaling_v2_MetricValueStatus } from '../metricvaluestatus/io_k8s_api_autoscaling_v2_MetricValueStatus';
