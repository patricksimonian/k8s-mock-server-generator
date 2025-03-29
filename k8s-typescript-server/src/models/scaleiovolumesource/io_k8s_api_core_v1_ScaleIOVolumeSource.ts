/**
* ScaleIOVolumeSource represents a persistent ScaleIO volume
* @resourceType scaleiovolumesource
* @kind Scaleiovolumesource
*/
export interface io_k8s_api_core_v1_ScaleIOVolumeSource {
/**
* system is the name of the storage system as configured in ScaleIO.
* @required
*/
system: string;
/**
* volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
*/
volumeName?: string;
/**
* gateway is the host address of the ScaleIO API Gateway.
* @required
*/
gateway: string;
/**
* secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
* @required
* @references io.k8s.api.core.v1.LocalObjectReference
*/
secretRef: io_k8s_api_core_v1_LocalObjectReference;
/**
* storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
*/
storageMode?: string;
/**
* storagePool is the ScaleIO Storage Pool associated with the protection domain.
*/
storagePool?: string;
/**
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".
*/
fsType?: string;
/**
* protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
*/
protectionDomain?: string;
/**
* readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* sslEnabled Flag enable/disable SSL communication with Gateway, default false
*/
sslEnabled?: boolean;
}

/**
* Create a new Scaleiovolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ScaleIOVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ScaleIOVolumeSource(data?: Partial<io_k8s_api_core_v1_ScaleIOVolumeSource>): io_k8s_api_core_v1_ScaleIOVolumeSource {
 return {
   system: data?.system !== undefined ? data.system : '',
   volumeName: data?.volumeName !== undefined ? data.volumeName : '',
   gateway: data?.gateway !== undefined ? data.gateway : '',
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_LocalObjectReference(),
   storageMode: data?.storageMode !== undefined ? data.storageMode : '',
   storagePool: data?.storagePool !== undefined ? data.storagePool : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   protectionDomain: data?.protectionDomain !== undefined ? data.protectionDomain : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   sslEnabled: data?.sslEnabled !== undefined ? data.sslEnabled : false,
 };
}
// Required imports
import { io_k8s_api_core_v1_LocalObjectReference, createio_k8s_api_core_v1_LocalObjectReference } from '../localobjectreference/io_k8s_api_core_v1_LocalObjectReference';
