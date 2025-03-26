/**
* Represents a StorageOS persistent volume resource.
* @resourceType storageospersistentvolumesource
* @kind Storageospersistentvolumesource
*/
export interface io_k8s_api_core_v1_StorageOSPersistentVolumeSource {
/**
* volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
*/
volumeName?: string;
/**
* volumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod's namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
*/
volumeNamespace?: string;
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
*/
fsType?: string;
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
secretRef?: { uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string };
}

/**
* Create a new Storageospersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_StorageOSPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_StorageOSPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_StorageOSPersistentVolumeSource>): io_k8s_api_core_v1_StorageOSPersistentVolumeSource {
 return {
   volumeName: data?.volumeName !== undefined ? data.volumeName : '',
   volumeNamespace: data?.volumeNamespace !== undefined ? data.volumeNamespace : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
 };
}
