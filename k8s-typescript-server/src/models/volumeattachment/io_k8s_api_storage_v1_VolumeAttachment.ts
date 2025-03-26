/**
* VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
* @resourceType volumeattachment
* @kind Volumeattachment
*/
export interface io_k8s_api_storage_v1_VolumeAttachment {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* spec represents specification of the desired attach/detach volume behavior. Populated by the Kubernetes system.
* @required
* @references io.k8s.api.storage.v1.VolumeAttachmentSpec
*/
spec: io_k8s_api_storage_v1_VolumeAttachmentSpec;
/**
* status represents status of the VolumeAttachment request. Populated by the entity completing the attach or detach operation, i.e. the external-attacher.
* @references io.k8s.api.storage.v1.VolumeAttachmentStatus
*/
status?: io_k8s_api_storage_v1_VolumeAttachmentStatus;
}

/**
* Create a new Volumeattachment with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachment instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachment(data?: Partial<io_k8s_api_storage_v1_VolumeAttachment>): io_k8s_api_storage_v1_VolumeAttachment {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_storage_v1_VolumeAttachmentSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_storage_v1_VolumeAttachmentStatus(),
 };
}
// Required imports
import { io_k8s_api_storage_v1_VolumeAttachmentSpec, createio_k8s_api_storage_v1_VolumeAttachmentSpec } from '../volumeattachmentspec/io_k8s_api_storage_v1_VolumeAttachmentSpec';
import { io_k8s_api_storage_v1_VolumeAttachmentStatus, createio_k8s_api_storage_v1_VolumeAttachmentStatus } from '../volumeattachmentstatus/io_k8s_api_storage_v1_VolumeAttachmentStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
