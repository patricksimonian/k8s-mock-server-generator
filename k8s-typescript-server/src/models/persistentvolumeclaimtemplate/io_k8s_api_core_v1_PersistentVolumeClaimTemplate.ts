/**
* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
* @resourceType persistentvolumeclaimtemplate
* @kind Persistentvolumeclaimtemplate
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaimTemplate {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { selfLink?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string; namespace?: string; annotations?: Record<string, any>; finalizers?: string[]; generateName?: string; generation?: number; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; name?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; uid?: string; creationTimestamp?: Date; labels?: Record<string, any> };
/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
* @required
* @isObject
*/
spec: { dataSourceRef?: { kind: string; name: string; namespace?: string; apiGroup?: string }; storageClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSource?: { apiGroup?: string; kind: string; name: string }; resources?: { requests?: Record<string, any>; limits?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; volumeAttributesClassName?: string };
}

/**
* Create a new Persistentvolumeclaimtemplate with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeClaimTemplate instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaimTemplate(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaimTemplate>): io_k8s_api_core_v1_PersistentVolumeClaimTemplate {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
