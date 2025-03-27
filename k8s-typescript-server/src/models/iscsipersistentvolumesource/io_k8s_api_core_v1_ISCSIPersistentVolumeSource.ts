/**
* ISCSIPersistentVolumeSource represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
* @resourceType iscsipersistentvolumesource
* @kind Iscsipersistentvolumesource
*/
export interface io_k8s_api_core_v1_ISCSIPersistentVolumeSource {
/**
* lun is iSCSI Target Lun number.
* @required
*/
lun: number;
/**
* portals is the iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
* @isArray
*/
portals?: string[];
/**
* readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
*/
readOnly?: boolean;
/**
* secretRef is the CHAP Secret for iSCSI target and initiator authentication
* @references io.k8s.api.core.v1.SecretReference
*/
secretRef?: io_k8s_api_core_v1_SecretReference;
/**
* targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
* @required
*/
targetPortal: string;
/**
* chapAuthSession defines whether support iSCSI Session CHAP authentication
*/
chapAuthSession?: boolean;
/**
* iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
*/
iscsiInterface?: string;
/**
* initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
*/
initiatorName?: string;
/**
* iqn is Target iSCSI Qualified Name.
* @required
*/
iqn: string;
/**
* chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
*/
chapAuthDiscovery?: boolean;
/**
* fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
*/
fsType?: string;
}

/**
* Create a new Iscsipersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ISCSIPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ISCSIPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_ISCSIPersistentVolumeSource>): io_k8s_api_core_v1_ISCSIPersistentVolumeSource {
 return {
   lun: data?.lun !== undefined ? data.lun : 0,
   portals: data?.portals !== undefined ? data.portals : [],
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_SecretReference(),
   targetPortal: data?.targetPortal !== undefined ? data.targetPortal : '',
   chapAuthSession: data?.chapAuthSession !== undefined ? data.chapAuthSession : false,
   iscsiInterface: data?.iscsiInterface !== undefined ? data.iscsiInterface : '',
   initiatorName: data?.initiatorName !== undefined ? data.initiatorName : '',
   iqn: data?.iqn !== undefined ? data.iqn : '',
   chapAuthDiscovery: data?.chapAuthDiscovery !== undefined ? data.chapAuthDiscovery : false,
   fsType: data?.fsType !== undefined ? data.fsType : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_SecretReference, createio_k8s_api_core_v1_SecretReference } from '../secretreference/io_k8s_api_core_v1_SecretReference';
