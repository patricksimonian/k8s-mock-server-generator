/**
* PersistentVolumeClaim is a user's request for and claim to a persistent volume
* @resourceType persistentvolumeclaim
* @kind Persistentvolumeclaim
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaim {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { name?: string; selfLink?: string; deletionTimestamp?: Date; generateName?: string; generation?: number; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; resourceVersion?: string; uid?: string; labels?: Record<string, any>; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; namespace?: string; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[] };
/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
* @isObject
*/
spec?: { dataSource?: { name: string; apiGroup?: string; kind: string }; dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; resources?: { requests?: Record<string, any>; limits?: Record<string, any> }; storageClassName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; volumeAttributesClassName?: string; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string };
/**
* PersistentVolumeClaimStatus is the current status of a persistent volume claim.
* @isObject
*/
status?: { accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any>; allocatedResources?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ reason?: string; status: string; type: string; lastProbeTime?: Date; lastTransitionTime?: Date; message?: string }>; currentVolumeAttributesClassName?: string; modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string }; phase?: 'Bound' | 'Lost' | 'Pending' };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Persistentvolumeclaim with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeClaim instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaim(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaim>): io_k8s_api_core_v1_PersistentVolumeClaim {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
