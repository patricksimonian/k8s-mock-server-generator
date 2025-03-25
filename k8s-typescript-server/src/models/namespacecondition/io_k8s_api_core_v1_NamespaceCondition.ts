/**
* NamespaceCondition contains details about state of namespace.
* @resourceType namespacecondition
* @kind Namespacecondition
*/
export interface io_k8s_api_core_v1_NamespaceCondition {
/**
* Unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
/**
* Status of the condition, one of True, False, Unknown.
* @required
*/
status: string;
/**
* Type of namespace controller condition.
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
}

/**
* Create a new Namespacecondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NamespaceCondition instance with defaults applied
*/
export function createio_k8s_api_core_v1_NamespaceCondition(data?: Partial<io_k8s_api_core_v1_NamespaceCondition>): io_k8s_api_core_v1_NamespaceCondition {
 return {
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
 };
}
