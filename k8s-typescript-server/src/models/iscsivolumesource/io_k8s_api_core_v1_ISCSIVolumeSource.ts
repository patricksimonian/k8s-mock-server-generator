/**
* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
* @resourceType iscsivolumesource
* @kind Iscsivolumesource
*/
export interface io_k8s_api_core_v1_ISCSIVolumeSource {
/**
* secretRef is the CHAP Secret for iSCSI target and initiator authentication
* @references io.k8s.api.core.v1.LocalObjectReference
*/
secretRef?: io_k8s_api_core_v1_LocalObjectReference;
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
* iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
*/
iscsiInterface?: string;
/**
* portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
* @isArray
*/
portals?: string[];
/**
* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
*/
readOnly?: boolean;
/**
* lun represents iSCSI Target Lun number.
* @required
*/
lun: number;
/**
* chapAuthSession defines whether support iSCSI Session CHAP authentication
*/
chapAuthSession?: boolean;
/**
* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
*/
fsType?: string;
/**
* initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
*/
initiatorName?: string;
/**
* iqn is the target iSCSI Qualified Name.
* @required
*/
iqn: string;
}

/**
* Create a new Iscsivolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ISCSIVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ISCSIVolumeSource(data?: Partial<io_k8s_api_core_v1_ISCSIVolumeSource>): io_k8s_api_core_v1_ISCSIVolumeSource {
 return {
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_LocalObjectReference(),
   targetPortal: data?.targetPortal !== undefined ? data.targetPortal : '',
   chapAuthDiscovery: data?.chapAuthDiscovery !== undefined ? data.chapAuthDiscovery : false,
   iscsiInterface: data?.iscsiInterface !== undefined ? data.iscsiInterface : '',
   portals: data?.portals !== undefined ? data.portals : [],
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   lun: data?.lun !== undefined ? data.lun : 0,
   chapAuthSession: data?.chapAuthSession !== undefined ? data.chapAuthSession : false,
   fsType: data?.fsType !== undefined ? data.fsType : '',
   initiatorName: data?.initiatorName !== undefined ? data.initiatorName : '',
   iqn: data?.iqn !== undefined ? data.iqn : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_LocalObjectReference, createio_k8s_api_core_v1_LocalObjectReference } from '../localobjectreference/io_k8s_api_core_v1_LocalObjectReference';
