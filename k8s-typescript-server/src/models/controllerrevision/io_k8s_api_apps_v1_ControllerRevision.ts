/**
* ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
* @resourceType controllerrevision
* @kind Controllerrevision
*/
export interface io_k8s_api_apps_v1_ControllerRevision {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Data is the serialized representation of the state.
* @references io.k8s.apimachinery.pkg.runtime.RawExtension
*/
data?: io_k8s_apimachinery_pkg_runtime_RawExtension;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Revision indicates the revision of the state represented by Data.
* @required
*/
revision: number;
}

/**
* Create a new Controllerrevision with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ControllerRevision instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ControllerRevision(data?: Partial<io_k8s_api_apps_v1_ControllerRevision>): io_k8s_api_apps_v1_ControllerRevision {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   data: data?.data !== undefined ? data.data : createio_k8s_apimachinery_pkg_runtime_RawExtension(),
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   revision: data?.revision !== undefined ? data.revision : 0,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
import { io_k8s_apimachinery_pkg_runtime_RawExtension, createio_k8s_apimachinery_pkg_runtime_RawExtension } from '../rawextension/io_k8s_apimachinery_pkg_runtime_RawExtension';
