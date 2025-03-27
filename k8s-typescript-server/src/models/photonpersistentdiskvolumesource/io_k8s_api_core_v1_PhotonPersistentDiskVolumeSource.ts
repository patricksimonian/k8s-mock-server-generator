/**
* Represents a Photon Controller persistent disk resource.
* @resourceType photonpersistentdiskvolumesource
* @kind Photonpersistentdiskvolumesource
*/
export interface io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource {
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
*/
fsType?: string;
/**
* pdID is the ID that identifies Photon Controller persistent disk
* @required
*/
pdID: string;
}

/**
* Create a new Photonpersistentdiskvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_PhotonPersistentDiskVolumeSource(data?: Partial<io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource>): io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource {
 return {
   fsType: data?.fsType !== undefined ? data.fsType : '',
   pdID: data?.pdID !== undefined ? data.pdID : '',
 };
}
