/**
* APIServiceCondition describes the state of an APIService at a particular point
* @resourceType apiservicecondition
* @kind Apiservicecondition
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition {
/**
* Type is the type of the condition.
* @required
*/
type: string;
/**
* Last time the condition transitioned from one status to another.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Human-readable message indicating details about last transition.
*/
message?: string;
/**
* Unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
/**
* Status is the status of the condition. Can be True, False, Unknown.
* @required
*/
status: string;
}

/**
* Create a new Apiservicecondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition {
 return {
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
