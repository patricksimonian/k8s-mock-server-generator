/**
* ReplicationController represents the configuration of a replication controller.
* @resourceType replicationcontroller
* @kind Replicationcontroller
*/
export interface io_k8s_api_core_v1_ReplicationController {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* If the Labels of a ReplicationController are empty, they are defaulted to be the same as the Pod(s) that the replication controller manages. Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Spec defines the specification of the desired behavior of the replication controller. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.ReplicationControllerSpec
*/
spec?: io_k8s_api_core_v1_ReplicationControllerSpec;
/**
* Status is the most recently observed status of the replication controller. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.ReplicationControllerStatus
*/
status?: io_k8s_api_core_v1_ReplicationControllerStatus;
}

/**
* Create a new Replicationcontroller with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationController instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationController(data?: Partial<io_k8s_api_core_v1_ReplicationController>): io_k8s_api_core_v1_ReplicationController {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_ReplicationControllerSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_core_v1_ReplicationControllerStatus(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ReplicationControllerSpec, createio_k8s_api_core_v1_ReplicationControllerSpec } from '../replicationcontrollerspec/io_k8s_api_core_v1_ReplicationControllerSpec';
import { io_k8s_api_core_v1_ReplicationControllerStatus, createio_k8s_api_core_v1_ReplicationControllerStatus } from '../replicationcontrollerstatus/io_k8s_api_core_v1_ReplicationControllerStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
