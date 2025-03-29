/**
* CustomResourceDefinitionCondition contains details for the current condition of this pod.
* @resourceType customresourcedefinitioncondition
* @kind Customresourcedefinitioncondition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition {
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
* lastTransitionTime last time the condition transitioned from one status to another.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* message is a human-readable message indicating details about last transition.
*/
message?: string;
/**
* reason is a unique, one-word, CamelCase reason for the condition's last transition.
*/
reason?: string;
}

/**
* Create a new Customresourcedefinitioncondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition {
 return {
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
