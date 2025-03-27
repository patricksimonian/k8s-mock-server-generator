/**
* HPAScalingPolicy is a single policy which must hold true for a specified past interval.
* @resourceType hpascalingpolicy
* @kind Hpascalingpolicy
*/
export interface io_k8s_api_autoscaling_v2_HPAScalingPolicy {
/**
* value contains the amount of change which is permitted by the policy. It must be greater than zero
* @required
*/
value: number;
/**
* periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
* @required
*/
periodSeconds: number;
/**
* type is used to specify the scaling policy.
* @required
*/
type: string;
}

/**
* Create a new Hpascalingpolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HPAScalingPolicy instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HPAScalingPolicy(data?: Partial<io_k8s_api_autoscaling_v2_HPAScalingPolicy>): io_k8s_api_autoscaling_v2_HPAScalingPolicy {
 return {
   value: data?.value !== undefined ? data.value : 0,
   periodSeconds: data?.periodSeconds !== undefined ? data.periodSeconds : 0,
   type: data?.type !== undefined ? data.type : '',
 };
}
