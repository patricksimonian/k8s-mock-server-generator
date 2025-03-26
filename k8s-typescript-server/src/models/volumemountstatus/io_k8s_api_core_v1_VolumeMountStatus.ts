/**
* VolumeMountStatus shows status of volume mounts.
* @resourceType volumemountstatus
* @kind Volumemountstatus
*/
export interface io_k8s_api_core_v1_VolumeMountStatus {
/**
* RecursiveReadOnly must be set to Disabled, Enabled, or unspecified (for non-readonly mounts). An IfPossible value in the original VolumeMount must be translated to Disabled or Enabled, depending on the mount result.
*/
recursiveReadOnly?: string;
/**
* MountPath corresponds to the original VolumeMount.
* @required
*/
mountPath: string;
/**
* Name corresponds to the name of the original VolumeMount.
* @required
*/
name: string;
/**
* ReadOnly corresponds to the original VolumeMount.
*/
readOnly?: boolean;
}

/**
* Create a new Volumemountstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_VolumeMountStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_VolumeMountStatus(data?: Partial<io_k8s_api_core_v1_VolumeMountStatus>): io_k8s_api_core_v1_VolumeMountStatus {
 return {
   recursiveReadOnly: data?.recursiveReadOnly !== undefined ? data.recursiveReadOnly : '',
   mountPath: data?.mountPath !== undefined ? data.mountPath : '',
   name: data?.name !== undefined ? data.name : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
 };
}
