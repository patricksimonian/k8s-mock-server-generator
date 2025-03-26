/**
* PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
* @resourceType persistentvolume
* @kind Persistentvolume
*/
export interface io_k8s_api_core_v1_PersistentVolume {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
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
* spec defines a specification of a persistent volume owned by the cluster. Provisioned by an administrator. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
* @references io.k8s.api.core.v1.PersistentVolumeSpec
*/
spec?: io_k8s_api_core_v1_PersistentVolumeSpec;
/**
* status represents the current information/status for the persistent volume. Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistent-volumes
* @references io.k8s.api.core.v1.PersistentVolumeStatus
*/
status?: io_k8s_api_core_v1_PersistentVolumeStatus;
}

/**
* Create a new Persistentvolume with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolume instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolume(data?: Partial<io_k8s_api_core_v1_PersistentVolume>): io_k8s_api_core_v1_PersistentVolume {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_PersistentVolumeSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_core_v1_PersistentVolumeStatus(),
 };
}
// Required imports
import { io_k8s_api_core_v1_PersistentVolumeSpec, createio_k8s_api_core_v1_PersistentVolumeSpec } from '../persistentvolumespec/io_k8s_api_core_v1_PersistentVolumeSpec';
import { io_k8s_api_core_v1_PersistentVolumeStatus, createio_k8s_api_core_v1_PersistentVolumeStatus } from '../persistentvolumestatus/io_k8s_api_core_v1_PersistentVolumeStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
