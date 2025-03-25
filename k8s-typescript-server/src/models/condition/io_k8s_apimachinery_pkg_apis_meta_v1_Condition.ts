/**
* Condition contains details for one aspect of the current state of this API Resource.
* @resourceType condition
* @kind Condition
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_Condition {
/**
* message is a human readable message indicating details about the transition. This may be an empty string.
* @required
*/
message: string;
/**
* observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
*/
observedGeneration?: number;
/**
* reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
* @required
*/
reason: string;
/**
* status of the condition, one of True, False, Unknown.
* @required
*/
status: string;
/**
* type of condition in CamelCase or in foo.example.com/CamelCase.
* @required
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
* @required
*/
lastTransitionTime: Date;
}

/**
* Create a new Condition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_Condition instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_Condition(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_Condition>): io_k8s_apimachinery_pkg_apis_meta_v1_Condition {
 return {
   message: data?.message !== undefined ? data.message : '',
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
 };
}
