/**
* ScaleStatus represents the current status of a scale subresource.
* @resourceType scalestatus
* @kind Scalestatus
*/
export interface io_k8s_api_autoscaling_v1_ScaleStatus {
/**
* selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
*/
selector?: string;
/**
* replicas is the actual number of observed instances of the scaled object.
* @required
*/
replicas: number;
}

/**
* Create a new Scalestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_ScaleStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_ScaleStatus(data?: Partial<io_k8s_api_autoscaling_v1_ScaleStatus>): io_k8s_api_autoscaling_v1_ScaleStatus {
 return {
   selector: data?.selector !== undefined ? data.selector : '',
   replicas: data?.replicas !== undefined ? data.replicas : 0,
 };
}
