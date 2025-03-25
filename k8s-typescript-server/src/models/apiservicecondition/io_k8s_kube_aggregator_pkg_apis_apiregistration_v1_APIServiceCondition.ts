/**
* APIServiceCondition describes the state of an APIService at a particular point
* @resourceType apiservicecondition
* @kind Apiservicecondition
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition {
/**
* Status is the status of the condition. Can be True, False, Unknown.
* @required
*/
status: string;
/**
* Type is the type of the condition.
* @required
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* Human-readable message indicating details about last transition.
*/
message?: string;
/**
* Unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
}

/**
* Create a new Apiservicecondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition {
 return {
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
 };
}
