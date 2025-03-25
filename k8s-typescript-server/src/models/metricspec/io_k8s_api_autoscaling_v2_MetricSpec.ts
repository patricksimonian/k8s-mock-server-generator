/**
* MetricSpec specifies how to scale based on a single metric (only `type` and one other matching field should be set at once).
* @resourceType metricspec
* @kind Metricspec
*/
export interface io_k8s_api_autoscaling_v2_MetricSpec {
/**
* ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
* @isObject
*/
containerResource?: { target: { averageUtilization?: number; averageValue?: string; type: string; value?: string }; container: string; name: string };
/**
* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
* @isObject
*/
external?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { type: string; value?: string; averageUtilization?: number; averageValue?: string } };
/**
* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
* @isObject
*/
object?: { describedObject: { apiVersion?: string; kind: string; name: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { value?: string; averageUtilization?: number; averageValue?: string; type: string } };
/**
* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
* @isObject
*/
pods?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } };
/**
* ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
* @isObject
*/
resource?: { name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } };
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
   containerResource: data?.containerResource !== undefined ? data.containerResource : { container: '', name: '', target: { type: '' } },
   external: data?.external !== undefined ? data.external : { metric: { name: '' }, target: { type: '' } },
   object: data?.object !== undefined ? data.object : { describedObject: { kind: '', name: '' }, metric: { name: '' }, target: { type: '' } },
   pods: data?.pods !== undefined ? data.pods : { target: { type: '' }, metric: { name: '' } },
   resource: data?.resource !== undefined ? data.resource : { name: '', target: { type: '' } },
   type: data?.type !== undefined ? data.type : '',
 };
}
