/**
* Represents a source location of a volume to mount, managed by an external CSI driver
* @resourceType csivolumesource
* @kind Csivolumesource
*/
export interface io_k8s_api_core_v1_CSIVolumeSource {
/**
* driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
* @required
*/
driver: string;
/**
* fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
*/
fsType?: string;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
* @isObject
*/
nodePublishSecretRef?: { name?: string };
/**
* readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
*/
readOnly?: boolean;
/**
* volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
*/
volumeAttributes?: Record<string, any>;
}

/**
* Create a new Csivolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_CSIVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_CSIVolumeSource(data?: Partial<io_k8s_api_core_v1_CSIVolumeSource>): io_k8s_api_core_v1_CSIVolumeSource {
 return {
   driver: data?.driver !== undefined ? data.driver : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   nodePublishSecretRef: data?.nodePublishSecretRef !== undefined ? data.nodePublishSecretRef : {},
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   volumeAttributes: data?.volumeAttributes !== undefined ? data.volumeAttributes : {},
 };
}
