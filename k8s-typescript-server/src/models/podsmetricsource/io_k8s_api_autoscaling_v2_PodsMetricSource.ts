/**
* PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
* @resourceType podsmetricsource
* @kind Podsmetricsource
*/
export interface io_k8s_api_autoscaling_v2_PodsMetricSource {
/**
* MetricIdentifier defines the name and optionally selector for a metric
* @required
* @isObject
*/
metric: { selector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; name: string };
/**
* MetricTarget defines the target value, average value, or average utilization of a specific metric
* @required
* @isObject
*/
target: { averageUtilization?: number; averageValue?: string; type: string; value?: string };
}

/**
* Create a new Podsmetricsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_PodsMetricSource instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_PodsMetricSource(data?: Partial<io_k8s_api_autoscaling_v2_PodsMetricSource>): io_k8s_api_autoscaling_v2_PodsMetricSource {
 return {
   metric: data?.metric !== undefined ? data.metric : { name: '' },
   target: data?.target !== undefined ? data.target : { type: '' },
 };
}
