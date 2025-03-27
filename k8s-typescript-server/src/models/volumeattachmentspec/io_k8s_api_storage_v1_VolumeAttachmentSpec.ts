/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
* @resourceType volumeattachmentspec
* @kind Volumeattachmentspec
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentSpec {
/**
* source represents the volume that should be attached.
* @required
* @references io.k8s.api.storage.v1.VolumeAttachmentSource
*/
source: io_k8s_api_storage_v1_VolumeAttachmentSource;
/**
* attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
* @required
*/
attacher: string;
/**
* nodeName represents the node that the volume should be attached to.
* @required
*/
nodeName: string;
}

/**
* Create a new Volumeattachmentspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachmentSpec instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentSpec(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentSpec>): io_k8s_api_storage_v1_VolumeAttachmentSpec {
 return {
   source: data?.source !== undefined ? data.source : createio_k8s_api_storage_v1_VolumeAttachmentSource(),
   attacher: data?.attacher !== undefined ? data.attacher : '',
   nodeName: data?.nodeName !== undefined ? data.nodeName : '',
 };
}
// Required imports
import { io_k8s_api_storage_v1_VolumeAttachmentSource, createio_k8s_api_storage_v1_VolumeAttachmentSource } from '../volumeattachmentsource/io_k8s_api_storage_v1_VolumeAttachmentSource';
