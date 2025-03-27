/**
* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
* @resourceType gcepersistentdiskvolumesource
* @kind Gcepersistentdiskvolumesource
*/
export interface io_k8s_api_core_v1_GCEPersistentDiskVolumeSource {
/**
* fsType is filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
*/
fsType?: string;
/**
* partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
*/
partition?: number;
/**
* pdName is unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
* @required
*/
pdName: string;
/**
* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
*/
readOnly?: boolean;
}

/**
* Create a new Gcepersistentdiskvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_GCEPersistentDiskVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_GCEPersistentDiskVolumeSource(data?: Partial<io_k8s_api_core_v1_GCEPersistentDiskVolumeSource>): io_k8s_api_core_v1_GCEPersistentDiskVolumeSource {
 return {
   fsType: data?.fsType !== undefined ? data.fsType : '',
   partition: data?.partition !== undefined ? data.partition : 0,
   pdName: data?.pdName !== undefined ? data.pdName : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
 };
}
