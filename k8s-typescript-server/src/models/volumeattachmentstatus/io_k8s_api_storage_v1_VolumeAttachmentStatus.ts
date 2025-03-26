/**
* VolumeAttachmentStatus is the status of a VolumeAttachment request.
* @resourceType volumeattachmentstatus
* @kind Volumeattachmentstatus
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentStatus {
/**
* VolumeError captures an error encountered during a volume operation.
* @isObject
*/
attachError?: { message?: string; time?: Date };
/**
* attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
* @required
*/
attached: boolean;
/**
* attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
*/
attachmentMetadata?: Record<string, any>;
/**
* VolumeError captures an error encountered during a volume operation.
* @isObject
*/
detachError?: { message?: string; time?: Date };
}

/**
* Create a new Volumeattachmentstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachmentStatus instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentStatus(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentStatus>): io_k8s_api_storage_v1_VolumeAttachmentStatus {
 return {
   attachError: data?.attachError !== undefined ? data.attachError : {},
   attached: data?.attached !== undefined ? data.attached : false,
   attachmentMetadata: data?.attachmentMetadata !== undefined ? data.attachmentMetadata : {},
   detachError: data?.detachError !== undefined ? data.detachError : {},
 };
}
