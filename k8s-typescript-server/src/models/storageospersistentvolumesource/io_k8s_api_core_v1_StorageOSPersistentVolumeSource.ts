/**
* Represents a StorageOS persistent volume resource.
* @resourceType storageospersistentvolumesource
* @kind Storageospersistentvolumesource
*/
export interface io_k8s_api_core_v1_StorageOSPersistentVolumeSource {
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
* secretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
* @references io.k8s.api.core.v1.ObjectReference
*/
secretRef?: io_k8s_api_core_v1_ObjectReference;
/**
* volumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.
*/
volumeName?: string;
}

/**
* Create a new Storageospersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_StorageOSPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_StorageOSPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_StorageOSPersistentVolumeSource>): io_k8s_api_core_v1_StorageOSPersistentVolumeSource {
 return {
   volumeNamespace: data?.volumeNamespace !== undefined ? data.volumeNamespace : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_ObjectReference(),
   volumeName: data?.volumeName !== undefined ? data.volumeName : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_ObjectReference, createio_k8s_api_core_v1_ObjectReference } from '../objectreference/io_k8s_api_core_v1_ObjectReference';
