/**
* PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
* @resourceType persistentvolumeclaimvolumesource
* @kind Persistentvolumeclaimvolumesource
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource {
/**
* readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
*/
readOnly?: boolean;
/**
* claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
* @required
*/
claimName: string;
}

/**
* Create a new Persistentvolumeclaimvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaimVolumeSource(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource>): io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource {
 return {
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   claimName: data?.claimName !== undefined ? data.claimName : '',
 };
}
