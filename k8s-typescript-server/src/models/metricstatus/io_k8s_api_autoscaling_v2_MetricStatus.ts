/**
* MetricStatus describes the last-read state of a single metric.
* @resourceType metricstatus
* @kind Metricstatus
*/
export interface io_k8s_api_autoscaling_v2_MetricStatus {
/**
* type is the type of metric source.  It will be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each corresponds to a matching field in the object.
* @required
*/
type: string;
/**
* ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @isObject
*/
containerResource?: { container: string; current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string };
/**
* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
* @isObject
*/
external?: { current: { averageValue?: string; value?: string; averageUtilization?: number }; metric: { name: string; selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> } } };
/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
* @isObject
*/
object?: { metric: { name: string; selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> } }; current: { averageValue?: string; value?: string; averageUtilization?: number }; describedObject: { apiVersion?: string; kind: string; name: string } };
/**
* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
* @isObject
*/
pods?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } };
/**
* ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
* @isObject
*/
resource?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string };
}

/**
* Create a new Metricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_MetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_MetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_MetricStatus>): io_k8s_api_autoscaling_v2_MetricStatus {
 return {
   type: data?.type !== undefined ? data.type : '',
   containerResource: data?.containerResource !== undefined ? data.containerResource : { container: '', current: {}, name: '' },
   external: data?.external !== undefined ? data.external : { current: {}, metric: { name: '' } },
   object: data?.object !== undefined ? data.object : { current: {}, describedObject: { name: '', kind: '' }, metric: { name: '' } },
   pods: data?.pods !== undefined ? data.pods : { current: {}, metric: { name: '' } },
   resource: data?.resource !== undefined ? data.resource : { current: {}, name: '' },
 };
}
