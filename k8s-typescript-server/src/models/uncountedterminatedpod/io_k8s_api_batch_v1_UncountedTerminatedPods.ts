/**
* UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
* @resourceType uncountedterminatedpod
* @kind Uncountedterminatedpod
*/
export interface io_k8s_api_batch_v1_UncountedTerminatedPods {
/**
* failed holds UIDs of failed Pods.
* @isArray
*/
failed?: string[];
/**
* succeeded holds UIDs of succeeded Pods.
* @isArray
*/
succeeded?: string[];
}

/**
* Create a new Uncountedterminatedpod with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_UncountedTerminatedPods instance with defaults applied
*/
export function createio_k8s_api_batch_v1_UncountedTerminatedPods(data?: Partial<io_k8s_api_batch_v1_UncountedTerminatedPods>): io_k8s_api_batch_v1_UncountedTerminatedPods {
 return {
   failed: data?.failed !== undefined ? data.failed : [],
   succeeded: data?.succeeded !== undefined ? data.succeeded : [],
 };
}
