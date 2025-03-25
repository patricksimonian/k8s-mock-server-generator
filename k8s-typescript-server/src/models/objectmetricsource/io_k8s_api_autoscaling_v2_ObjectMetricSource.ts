/**
* ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
* @resourceType objectmetricsource
* @kind Objectmetricsource
*/
export interface io_k8s_api_autoscaling_v2_ObjectMetricSource {
/**
* CrossVersionObjectReference contains enough information to let you identify the referred resource.
* @required
* @isObject
*/
describedObject: { apiVersion?: string; kind: string; name: string };
/**
* MetricIdentifier defines the name and optionally selector for a metric
* @required
* @isObject
*/
metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
/**
* MetricTarget defines the target value, average value, or average utilization of a specific metric
* @required
* @isObject
*/
target: { value?: string; averageUtilization?: number; averageValue?: string; type: string };
}

/**
* Create a new Objectmetricsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ObjectMetricSource instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ObjectMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_ObjectMetricSource>): io_k8s_api_autoscaling_v2_ObjectMetricSource {
 return {
   describedObject: data?.describedObject !== undefined ? data.describedObject : { kind: '', name: '' },
   metric: data?.metric !== undefined ? data.metric : { name: '' },
   target: data?.target !== undefined ? data.target : { type: '' },
 };
}
