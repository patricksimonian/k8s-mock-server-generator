/**
* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
* @resourceType iscsivolumesource
* @kind Iscsivolumesource
*/
export interface io_k8s_api_core_v1_ISCSIVolumeSource {
/**
* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
*/
fsType?: string;
/**
* iqn is the target iSCSI Qualified Name.
* @required
*/
iqn: string;
/**
* iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
*/
iscsiInterface?: string;
/**
* portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
* @isArray
*/
portals?: string[];
/**
* targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
* @required
*/
targetPortal: string;
/**
* chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
*/
chapAuthDiscovery?: boolean;
/**
* chapAuthSession defines whether support iSCSI Session CHAP authentication
*/
chapAuthSession?: boolean;
/**
* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
*/
readOnly?: boolean;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
* @isObject
*/
secretRef?: { name?: string };
/**
* initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
*/
initiatorName?: string;
/**
* lun represents iSCSI Target Lun number.
* @required
*/
lun: number;
}

/**
* Create a new Iscsivolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ISCSIVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ISCSIVolumeSource(data?: Partial<io_k8s_api_core_v1_ISCSIVolumeSource>): io_k8s_api_core_v1_ISCSIVolumeSource {
 return {
   fsType: data?.fsType !== undefined ? data.fsType : '',
   iqn: data?.iqn !== undefined ? data.iqn : '',
   iscsiInterface: data?.iscsiInterface !== undefined ? data.iscsiInterface : '',
   portals: data?.portals !== undefined ? data.portals : [],
   targetPortal: data?.targetPortal !== undefined ? data.targetPortal : '',
   chapAuthDiscovery: data?.chapAuthDiscovery !== undefined ? data.chapAuthDiscovery : false,
   chapAuthSession: data?.chapAuthSession !== undefined ? data.chapAuthSession : false,
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
   initiatorName: data?.initiatorName !== undefined ? data.initiatorName : '',
   lun: data?.lun !== undefined ? data.lun : 0,
 };
}
