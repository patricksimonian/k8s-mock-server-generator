/**
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
* @resourceType fcvolumesource
* @kind Fcvolumesource
*/
export interface io_k8s_api_core_v1_FCVolumeSource {
/**
* readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* targetWWNs is Optional: FC target worldwide names (WWNs)
* @isArray
*/
targetWWNs?: string[];
/**
* wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
* @isArray
*/
wwids?: string[];
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
*/
fsType?: string;
/**
* lun is Optional: FC target lun number
*/
lun?: number;
}

/**
* Create a new Fcvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_FCVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_FCVolumeSource(data?: Partial<io_k8s_api_core_v1_FCVolumeSource>): io_k8s_api_core_v1_FCVolumeSource {
 return {
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   targetWWNs: data?.targetWWNs !== undefined ? data.targetWWNs : [],
   wwids: data?.wwids !== undefined ? data.wwids : [],
   fsType: data?.fsType !== undefined ? data.fsType : '',
   lun: data?.lun !== undefined ? data.lun : 0,
 };
}
