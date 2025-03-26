/**
* Represents storage that is managed by an external CSI volume driver
* @resourceType csipersistentvolumesource
* @kind Csipersistentvolumesource
*/
export interface io_k8s_api_core_v1_CSIPersistentVolumeSource {
/**
* driver is the name of the driver to use for this volume. Required.
* @required
*/
driver: string;
/**
* readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
*/
readOnly?: boolean;
/**
* volumeAttributes of the volume to publish.
*/
volumeAttributes?: Record<string, any>;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
controllerExpandSecretRef?: { name?: string; namespace?: string };
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
controllerPublishSecretRef?: { namespace?: string; name?: string };
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
nodePublishSecretRef?: { namespace?: string; name?: string };
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
nodeStageSecretRef?: { name?: string; namespace?: string };
/**
* volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
* @required
*/
volumeHandle: string;
/**
* fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
*/
fsType?: string;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
nodeExpandSecretRef?: { name?: string; namespace?: string };
}

/**
* Create a new Csipersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_CSIPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_CSIPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_CSIPersistentVolumeSource>): io_k8s_api_core_v1_CSIPersistentVolumeSource {
 return {
   driver: data?.driver !== undefined ? data.driver : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   volumeAttributes: data?.volumeAttributes !== undefined ? data.volumeAttributes : {},
   controllerExpandSecretRef: data?.controllerExpandSecretRef !== undefined ? data.controllerExpandSecretRef : {},
   controllerPublishSecretRef: data?.controllerPublishSecretRef !== undefined ? data.controllerPublishSecretRef : {},
   nodePublishSecretRef: data?.nodePublishSecretRef !== undefined ? data.nodePublishSecretRef : {},
   nodeStageSecretRef: data?.nodeStageSecretRef !== undefined ? data.nodeStageSecretRef : {},
   volumeHandle: data?.volumeHandle !== undefined ? data.volumeHandle : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   nodeExpandSecretRef: data?.nodeExpandSecretRef !== undefined ? data.nodeExpandSecretRef : {},
 };
}
