/**
* ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
* @resourceType externalmetricsource
* @kind Externalmetricsource
*/
export interface io_k8s_api_autoscaling_v2_ExternalMetricSource {
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
target: { averageUtilization?: number; averageValue?: string; type: string; value?: string };
}

/**
* Create a new Externalmetricsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ExternalMetricSource instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ExternalMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_ExternalMetricSource>): io_k8s_api_autoscaling_v2_ExternalMetricSource {
 return {
   metric: data?.metric !== undefined ? data.metric : { name: '' },
   target: data?.target !== undefined ? data.target : { type: '' },
 };
}
