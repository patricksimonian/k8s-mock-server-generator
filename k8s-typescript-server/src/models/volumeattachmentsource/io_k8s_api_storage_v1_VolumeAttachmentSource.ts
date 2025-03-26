/**
* VolumeAttachmentSource represents a volume that should be attached. Right now only PersistentVolumes can be attached via external attacher, in the future we may allow also inline volumes in pods. Exactly one member can be set.
* @resourceType volumeattachmentsource
* @kind Volumeattachmentsource
*/
export interface io_k8s_api_storage_v1_VolumeAttachmentSource {
/**
* inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is beta-level and is only honored by servers that enabled the CSIMigration feature.
* @references io.k8s.api.core.v1.PersistentVolumeSpec
*/
inlineVolumeSpec?: io_k8s_api_core_v1_PersistentVolumeSpec;
/**
* persistentVolumeName represents the name of the persistent volume to attach.
*/
persistentVolumeName?: string;
}

/**
* Create a new Volumeattachmentsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachmentSource instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachmentSource(data?: Partial<io_k8s_api_storage_v1_VolumeAttachmentSource>): io_k8s_api_storage_v1_VolumeAttachmentSource {
 return {
   inlineVolumeSpec: data?.inlineVolumeSpec !== undefined ? data.inlineVolumeSpec : createio_k8s_api_core_v1_PersistentVolumeSpec(),
   persistentVolumeName: data?.persistentVolumeName !== undefined ? data.persistentVolumeName : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_PersistentVolumeSpec, createio_k8s_api_core_v1_PersistentVolumeSpec } from '../persistentvolumespec/io_k8s_api_core_v1_PersistentVolumeSpec';
