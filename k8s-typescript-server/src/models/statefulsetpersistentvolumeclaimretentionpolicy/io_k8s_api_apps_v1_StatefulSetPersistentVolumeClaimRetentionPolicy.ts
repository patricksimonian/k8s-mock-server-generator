/**
* StatefulSetPersistentVolumeClaimRetentionPolicy describes the policy used for PVCs created from the StatefulSet VolumeClaimTemplates.
* @resourceType statefulsetpersistentvolumeclaimretentionpolicy
* @kind Statefulsetpersistentvolumeclaimretentionpolicy
*/
export interface io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy {
/**
* WhenDeleted specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is deleted. The default policy of `Retain` causes PVCs to not be affected by StatefulSet deletion. The `Delete` policy causes those PVCs to be deleted.
*/
whenDeleted?: string;
/**
* WhenScaled specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is scaled down. The default policy of `Retain` causes PVCs to not be affected by a scaledown. The `Delete` policy causes the associated PVCs for any excess pods above the replica count to be deleted.
*/
whenScaled?: string;
}

/**
* Create a new Statefulsetpersistentvolumeclaimretentionpolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy(data?: Partial<io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy>): io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy {
 return {
   whenDeleted: data?.whenDeleted !== undefined ? data.whenDeleted : '',
   whenScaled: data?.whenScaled !== undefined ? data.whenScaled : '',
 };
}
