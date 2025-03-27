/**
* PortworxVolumeSource represents a Portworx volume resource.
* @resourceType portworxvolumesource
* @kind Portworxvolumesource
*/
export interface io_k8s_api_core_v1_PortworxVolumeSource {
/**
* fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
*/
fsType?: string;
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* volumeID uniquely identifies a Portworx volume
* @required
*/
volumeID: string;
}

/**
* Create a new Portworxvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PortworxVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_PortworxVolumeSource(data?: Partial<io_k8s_api_core_v1_PortworxVolumeSource>): io_k8s_api_core_v1_PortworxVolumeSource {
 return {
   fsType: data?.fsType !== undefined ? data.fsType : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   volumeID: data?.volumeID !== undefined ? data.volumeID : '',
 };
}
