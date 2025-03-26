/**
* PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
* @resourceType podfailurepolicyonpodconditionspattern
* @kind Podfailurepolicyonpodconditionspattern
*/
export interface io_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPattern {
/**
* Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
* @required
*/
status: string;
/**
* Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
* @required
*/
type: string;
}

/**
* Create a new Podfailurepolicyonpodconditionspattern with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPattern instance with defaults applied
*/
export function createio_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPattern(data?: Partial<io_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPattern>): io_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPattern {
 return {
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
