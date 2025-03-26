/**
* PersistentVolumeStatus is the current status of a persistent volume.
* @resourceType persistentvolumestatus
* @kind Persistentvolumestatus
*/
export interface io_k8s_api_core_v1_PersistentVolumeStatus {
/**
* reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
*/
reason?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastPhaseTransitionTime?: Date;
/**
* message is a human-readable message indicating details about why the volume is in this state.
*/
message?: string;
/**
* phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase

Possible enum values:
 - `"Available"` used for PersistentVolumes that are not yet bound Available volumes are held by the binder and matched to PersistentVolumeClaims
 - `"Bound"` used for PersistentVolumes that are bound
 - `"Failed"` used for PersistentVolumes that failed to be correctly recycled or deleted after being released from a claim
 - `"Pending"` used for PersistentVolumes that are not available
 - `"Released"` used for PersistentVolumes where the bound PersistentVolumeClaim was deleted released volumes must be recycled before becoming available again this phase is used by the persistent volume claim binder to signal to another process to reclaim the resource
*/
phase?: 'Available' | 'Bound' | 'Failed' | 'Pending' | 'Released';
}

/**
* Create a new Persistentvolumestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeStatus(data?: Partial<io_k8s_api_core_v1_PersistentVolumeStatus>): io_k8s_api_core_v1_PersistentVolumeStatus {
 return {
   reason: data?.reason !== undefined ? data.reason : '',
   lastPhaseTransitionTime: data?.lastPhaseTransitionTime !== undefined ? data.lastPhaseTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
   phase: data?.phase !== undefined ? data.phase : '',
 };
}
