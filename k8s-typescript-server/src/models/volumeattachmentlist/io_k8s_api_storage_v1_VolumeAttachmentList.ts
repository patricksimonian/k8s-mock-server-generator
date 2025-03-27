/**
* VolumeAttachmentList is a collection of VolumeAttachment objects.
* @resourceType volumeattachmentlist
* @kind VolumeattachmentList
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentList {
/**
* Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of VolumeAttachments
* @required
* @isArray
* @references io.k8s.api.storage.v1.VolumeAttachment
*/
items: io_k8s_api_storage_v1_VolumeAttachment[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new VolumeattachmentList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachmentList instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentList(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentList>): io_k8s_api_storage_v1_VolumeAttachmentList {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_storage_v1_VolumeAttachment, createio_k8s_api_storage_v1_VolumeAttachment } from '../volumeattachment/io_k8s_api_storage_v1_VolumeAttachment';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
