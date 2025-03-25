/**
* CustomResourceDefinitionCondition contains details for the current condition of this pod.
* @resourceType customresourcedefinitioncondition
* @kind Customresourcedefinitioncondition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition {
/**
* reason is a unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
/**
* status is the status of the condition. Can be True, False, Unknown.
* @required
*/
status: string;
/**
* type is the type of the condition. Types include Established, NamesAccepted and Terminating.
* @required
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* message is a human-readable message indicating details about last transition.
*/
message?: string;
}

/**
* Create a new Customresourcedefinitioncondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition {
 return {
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
 };
}
