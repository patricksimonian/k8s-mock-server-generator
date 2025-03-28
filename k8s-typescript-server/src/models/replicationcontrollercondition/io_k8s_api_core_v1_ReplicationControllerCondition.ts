/**
* ReplicationControllerCondition describes the state of a replication controller at a certain point.
* @resourceType replicationcontrollercondition
* @kind Replicationcontrollercondition
*/
export interface io_k8s_api_core_v1_ReplicationControllerCondition {
/**
* The last time the condition transitioned from one status to another.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* A human readable message indicating details about the transition.
*/
message?: string;
/**
* The reason for the condition's last transition.
*/
reason?: string;
/**
* Status of the condition, one of True, False, Unknown.
* @required
*/
status: string;
/**
* Type of replication controller condition.
* @required
*/
type: string;
}

/**
* Create a new Replicationcontrollercondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationControllerCondition instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationControllerCondition(data?: Partial<io_k8s_api_core_v1_ReplicationControllerCondition>): io_k8s_api_core_v1_ReplicationControllerCondition {
 return {
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
