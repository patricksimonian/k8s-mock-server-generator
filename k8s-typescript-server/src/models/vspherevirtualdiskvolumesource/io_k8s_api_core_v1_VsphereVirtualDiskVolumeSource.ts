/**
* Represents a vSphere volume resource.
* @resourceType vspherevirtualdiskvolumesource
* @kind Vspherevirtualdiskvolumesource
*/
export interface io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource {
/**
* storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
*/
storagePolicyID?: string;
/**
* storagePolicyName is the storage Policy Based Management (SPBM) profile name.
*/
storagePolicyName?: string;
/**
* volumePath is the path that identifies vSphere volume vmdk
* @required
*/
volumePath: string;
/**
* fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
*/
fsType?: string;
}

/**
* Create a new Vspherevirtualdiskvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_VsphereVirtualDiskVolumeSource(data?: Partial<io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource>): io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource {
 return {
   storagePolicyID: data?.storagePolicyID !== undefined ? data.storagePolicyID : '',
   storagePolicyName: data?.storagePolicyName !== undefined ? data.storagePolicyName : '',
   volumePath: data?.volumePath !== undefined ? data.volumePath : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
 };
}
