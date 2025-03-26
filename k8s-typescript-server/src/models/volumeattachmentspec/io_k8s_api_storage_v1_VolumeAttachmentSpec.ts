/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
* @resourceType volumeattachmentspec
* @kind Volumeattachmentspec
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentSpec {
/**
* nodeName represents the node that the volume should be attached to.
* @required
*/
nodeName: string;
/**
* VolumeAttachmentSource represents a volume that should be attached. Right now only PersistentVolumes can be attached via external attacher, in the future we may allow also inline volumes in pods. Exactly one member can be set.
* @required
* @isObject
*/
source: { inlineVolumeSpec?: Record<string, any>; persistentVolumeName?: string };
/**
* attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
* @required
*/
attacher: string;
}

/**
* Create a new Volumeattachmentspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachmentSpec instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentSpec(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentSpec>): io_k8s_api_storage_v1_VolumeAttachmentSpec {
 return {
   nodeName: data?.nodeName !== undefined ? data.nodeName : '',
   source: data?.source !== undefined ? data.source : {},
   attacher: data?.attacher !== undefined ? data.attacher : '',
 };
}
