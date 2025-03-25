/**
* PodFailurePolicy describes how failed pods influence the backoffLimit.
* @resourceType podfailurepolicy
* @kind Podfailurepolicy
*/
export interface io_k8s_api_batch_v1_PodFailurePolicy {
/**
* A list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed.
* @required
* @isArray
*/
rules: Array<{ action: 'Count' | 'FailIndex' | 'FailJob' | 'Ignore'; onExitCodes?: { containerName?: string; operator: 'In' | 'NotIn'; values: number[] }; onPodConditions?: Array<{ status: string; type: string }> }>;
}

/**
* Create a new Podfailurepolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_PodFailurePolicy instance with defaults applied
*/
export function createio_k8s_api_batch_v1_PodFailurePolicy(data?: Partial<io_k8s_api_batch_v1_PodFailurePolicy>): io_k8s_api_batch_v1_PodFailurePolicy {
 return {
   rules: data?.rules !== undefined ? data.rules : [],
 };
}
