/**
* FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
* @resourceType flexvolumesource
* @kind Flexvolumesource
*/
export interface io_k8s_api_core_v1_FlexVolumeSource {
/**
* driver is the name of the driver to use for this volume.
* @required
*/
driver: string;
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
*/
fsType?: string;
/**
* options is Optional: this field holds extra command options if any.
*/
options?: Record<string, any>;
/**
* readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* secretRef is Optional: secretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
* @references io.k8s.api.core.v1.LocalObjectReference
*/
secretRef?: io_k8s_api_core_v1_LocalObjectReference;
}

/**
* Create a new Flexvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_FlexVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_FlexVolumeSource(data?: Partial<io_k8s_api_core_v1_FlexVolumeSource>): io_k8s_api_core_v1_FlexVolumeSource {
 return {
   driver: data?.driver !== undefined ? data.driver : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   options: data?.options !== undefined ? data.options : {},
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_LocalObjectReference(),
 };
}
// Required imports
import { io_k8s_api_core_v1_LocalObjectReference, createio_k8s_api_core_v1_LocalObjectReference } from '../localobjectreference/io_k8s_api_core_v1_LocalObjectReference';
