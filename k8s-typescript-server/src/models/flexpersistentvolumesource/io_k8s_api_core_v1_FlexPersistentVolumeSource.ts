/**
* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
* @resourceType flexpersistentvolumesource
* @kind Flexpersistentvolumesource
*/
export interface io_k8s_api_core_v1_FlexPersistentVolumeSource {
/**
* driver is the name of the driver to use for this volume.
* @required
*/
driver: string;
/**
* fsType is the Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
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
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @isObject
*/
secretRef?: { name?: string; namespace?: string };
}

/**
* Create a new Flexpersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_FlexPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_FlexPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_FlexPersistentVolumeSource>): io_k8s_api_core_v1_FlexPersistentVolumeSource {
 return {
   driver: data?.driver !== undefined ? data.driver : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   options: data?.options !== undefined ? data.options : {},
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
 };
}
