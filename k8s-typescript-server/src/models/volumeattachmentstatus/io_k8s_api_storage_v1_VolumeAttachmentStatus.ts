/**
* VolumeAttachmentStatus is the status of a VolumeAttachment request.
* @resourceType volumeattachmentstatus
* @kind Volumeattachmentstatus
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentStatus {
/**
* detachError represents the last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
* @references io.k8s.api.storage.v1.VolumeError
*/
detachError?: io_k8s_api_storage_v1_VolumeError;
/**
* attachError represents the last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
* @references io.k8s.api.storage.v1.VolumeError
*/
attachError?: io_k8s_api_storage_v1_VolumeError;
/**
* attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
* @required
*/
attached: boolean;
/**
* attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
*/
attachmentMetadata?: Record<string, any>;
}

/**
* Create a new Volumeattachmentstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachmentStatus instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentStatus(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentStatus>): io_k8s_api_storage_v1_VolumeAttachmentStatus {
 return {
   detachError: data?.detachError !== undefined ? data.detachError : createio_k8s_api_storage_v1_VolumeError(),
   attachError: data?.attachError !== undefined ? data.attachError : createio_k8s_api_storage_v1_VolumeError(),
   attached: data?.attached !== undefined ? data.attached : false,
   attachmentMetadata: data?.attachmentMetadata !== undefined ? data.attachmentMetadata : {},
 };
}
// Required imports
import { io_k8s_api_storage_v1_VolumeError, createio_k8s_api_storage_v1_VolumeError } from '../volumeerror/io_k8s_api_storage_v1_VolumeError';
