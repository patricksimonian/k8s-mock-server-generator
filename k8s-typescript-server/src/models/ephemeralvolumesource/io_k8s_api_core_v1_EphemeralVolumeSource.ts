/**
* Represents an ephemeral volume that is handled by a normal storage driver.
* @resourceType ephemeralvolumesource
* @kind Ephemeralvolumesource
*/
export interface io_k8s_api_core_v1_EphemeralVolumeSource {
/**
* PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.
* @isObject
*/
volumeClaimTemplate?: { metadata?: { generation?: number; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; name?: string; resourceVersion?: string; uid?: string; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; finalizers?: string[]; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }> }; spec: { selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; storageClassName?: string; volumeMode?: 'Block' | 'Filesystem'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSourceRef?: { name: string; namespace?: string; apiGroup?: string; kind: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; dataSource?: { apiGroup?: string; kind: string; name: string }; volumeAttributesClassName?: string; volumeName?: string } };
}

/**
* Create a new Ephemeralvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EphemeralVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_EphemeralVolumeSource(data?: Partial<io_k8s_api_core_v1_EphemeralVolumeSource>): io_k8s_api_core_v1_EphemeralVolumeSource {
 return {
   volumeClaimTemplate: data?.volumeClaimTemplate !== undefined ? data.volumeClaimTemplate : { spec: {} },
 };
}
