/**
* ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
* @resourceType scaleiopersistentvolumesource
* @kind Scaleiopersistentvolumesource
*/
export interface io_k8s_api_core_v1_ScaleIOPersistentVolumeSource {
/**
* protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
*/
protectionDomain?: string;
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
* @required
* @isObject
*/
secretRef: { name?: string; namespace?: string };
/**
* storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
*/
storageMode?: string;
/**
* storagePool is the ScaleIO Storage Pool associated with the protection domain.
*/
storagePool?: string;
/**
* gateway is the host address of the ScaleIO API Gateway.
* @required
*/
gateway: string;
/**
* sslEnabled is the flag to enable/disable SSL communication with Gateway, default false
*/
sslEnabled?: boolean;
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
* fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs"
*/
fsType?: string;
}

/**
* Create a new Scaleiopersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ScaleIOPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ScaleIOPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_ScaleIOPersistentVolumeSource>): io_k8s_api_core_v1_ScaleIOPersistentVolumeSource {
 return {
   protectionDomain: data?.protectionDomain !== undefined ? data.protectionDomain : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
   storageMode: data?.storageMode !== undefined ? data.storageMode : '',
   storagePool: data?.storagePool !== undefined ? data.storagePool : '',
   gateway: data?.gateway !== undefined ? data.gateway : '',
   sslEnabled: data?.sslEnabled !== undefined ? data.sslEnabled : false,
   system: data?.system !== undefined ? data.system : '',
   volumeName: data?.volumeName !== undefined ? data.volumeName : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
 };
}
