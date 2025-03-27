/**
* PersistentVolumeClaim is a user's request for and claim to a persistent volume
* @resourceType persistentvolumeclaim
* @kind Persistentvolumeclaim
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaim {
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
* @references io.k8s.api.core.v1.PersistentVolumeClaimSpec
*/
spec?: io_k8s_api_core_v1_PersistentVolumeClaimSpec;
/**
* status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
* @references io.k8s.api.core.v1.PersistentVolumeClaimStatus
*/
status?: io_k8s_api_core_v1_PersistentVolumeClaimStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Persistentvolumeclaim with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeClaim instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaim(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaim>): io_k8s_api_core_v1_PersistentVolumeClaim {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_PersistentVolumeClaimSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_core_v1_PersistentVolumeClaimStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_PersistentVolumeClaimSpec, createio_k8s_api_core_v1_PersistentVolumeClaimSpec } from '../persistentvolumeclaimspec/io_k8s_api_core_v1_PersistentVolumeClaimSpec';
import { io_k8s_api_core_v1_PersistentVolumeClaimStatus, createio_k8s_api_core_v1_PersistentVolumeClaimStatus } from '../persistentvolumeclaimstatus/io_k8s_api_core_v1_PersistentVolumeClaimStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
