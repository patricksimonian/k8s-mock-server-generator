/**
* ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
* @resourceType externalmetricstatus
* @kind Externalmetricstatus
*/
export interface io_k8s_api_autoscaling_v2_ExternalMetricStatus {
/**
* MetricValueStatus holds the current value for a metric
* @required
* @isObject
*/
current: { averageUtilization?: number; averageValue?: string; value?: string };
/**
* MetricIdentifier defines the name and optionally selector for a metric
* @required
* @isObject
*/
metric: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string };
}

/**
* Create a new Externalmetricstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_ExternalMetricStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_ExternalMetricStatus(data?: Partial<io_k8s_api_autoscaling_v2_ExternalMetricStatus>): io_k8s_api_autoscaling_v2_ExternalMetricStatus {
 return {
   current: data?.current !== undefined ? data.current : {},
   metric: data?.metric !== undefined ? data.metric : { name: '' },
 };
}
