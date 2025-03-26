/**
* Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
* @resourceType awselasticblockstorevolumesource
* @kind Awselasticblockstorevolumesource
*/
export interface io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource {
/**
* partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).
*/
partition?: number;
/**
* readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
*/
readOnly?: boolean;
/**
* volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
* @required
*/
volumeID: string;
/**
* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
*/
fsType?: string;
}

/**
* Create a new Awselasticblockstorevolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource(data?: Partial<io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource>): io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource {
 return {
   partition: data?.partition !== undefined ? data.partition : 0,
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   volumeID: data?.volumeID !== undefined ? data.volumeID : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
 };
}
