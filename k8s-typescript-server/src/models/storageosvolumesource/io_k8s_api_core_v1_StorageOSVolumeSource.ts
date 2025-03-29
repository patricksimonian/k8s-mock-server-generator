/**
* Represents a StorageOS persistent volume resource.
* @resourceType storageosvolumesource
* @kind Storageosvolumesource
*/
export interface io_k8s_api_core_v1_StorageOSVolumeSource {
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* secretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.
* @references io.k8s.api.core.v1.LocalObjectReference
*/
secretRef?: io_k8s_api_core_v1_LocalObjectReference;
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
}

/**
* Create a new Storageosvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_StorageOSVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_StorageOSVolumeSource(data?: Partial<io_k8s_api_core_v1_StorageOSVolumeSource>): io_k8s_api_core_v1_StorageOSVolumeSource {
 return {
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_LocalObjectReference(),
   volumeName: data?.volumeName !== undefined ? data.volumeName : '',
   volumeNamespace: data?.volumeNamespace !== undefined ? data.volumeNamespace : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_LocalObjectReference, createio_k8s_api_core_v1_LocalObjectReference } from '../localobjectreference/io_k8s_api_core_v1_LocalObjectReference';
