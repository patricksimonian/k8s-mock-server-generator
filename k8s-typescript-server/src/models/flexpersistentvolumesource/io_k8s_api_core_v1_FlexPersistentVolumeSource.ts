/**
* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
* @resourceType flexpersistentvolumesource
* @kind Flexpersistentvolumesource
*/
export interface io_k8s_api_core_v1_FlexPersistentVolumeSource {
/**
* options is Optional: this field holds extra command options if any.
*/
options?: Record<string, any>;
/**
* readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* secretRef is Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
* @references io.k8s.api.core.v1.SecretReference
*/
secretRef?: io_k8s_api_core_v1_SecretReference;
/**
* driver is the name of the driver to use for this volume.
* @required
*/
driver: string;
/**
* fsType is the Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
*/
fsType?: string;
}

/**
* Create a new Flexpersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_FlexPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_FlexPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_FlexPersistentVolumeSource>): io_k8s_api_core_v1_FlexPersistentVolumeSource {
 return {
   options: data?.options !== undefined ? data.options : {},
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_SecretReference(),
   driver: data?.driver !== undefined ? data.driver : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_SecretReference, createio_k8s_api_core_v1_SecretReference } from '../secretreference/io_k8s_api_core_v1_SecretReference';
