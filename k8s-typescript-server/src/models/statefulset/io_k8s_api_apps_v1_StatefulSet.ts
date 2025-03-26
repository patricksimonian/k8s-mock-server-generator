/**
* StatefulSet represents a set of pods with consistent identities. Identities are defined as:
  - Network: A single stable DNS and hostname.
  - Storage: As many VolumeClaims as requested.

The StatefulSet guarantees that a given network identity will always map to the same storage identity.
* @resourceType statefulset
* @kind Statefulset
*/
export interface io_k8s_api_apps_v1_StatefulSet {
/**
* StatefulSetStatus represents the current state of a StatefulSet.
* @isObject
*/
status?: { collisionCount?: number; conditions?: Array<{ reason?: string; status: string; type: string; lastTransitionTime?: Date; message?: string }>; currentReplicas?: number; currentRevision?: string; replicas: number; availableReplicas?: number; observedGeneration?: number; readyReplicas?: number; updateRevision?: string; updatedReplicas?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { generation?: number; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; uid?: string; generateName?: string; name?: string; namespace?: string; resourceVersion?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[] };
/**
* A StatefulSetSpec is the specification of a StatefulSet.
* @isObject
*/
spec?: { ordinals?: { start?: number }; persistentVolumeClaimRetentionPolicy?: { whenDeleted?: string; whenScaled?: string }; updateStrategy?: { rollingUpdate?: { maxUnavailable?: string; partition?: number }; type?: 'OnDelete' | 'RollingUpdate' }; minReadySeconds?: number; replicas?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; serviceName: string; template: { metadata?: { managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; generateName?: string; finalizers?: string[]; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; deletionTimestamp?: Date; creationTimestamp?: Date; labels?: Record<string, any>; selfLink?: string; uid?: string; annotations?: Record<string, any>; generation?: number; namespace?: string; deletionGracePeriodSeconds?: number }; spec?: Record<string, any> }; volumeClaimTemplates?: Array<{ apiVersion?: string; kind?: string; metadata?: { annotations?: Record<string, any>; finalizers?: string[]; name?: string; deletionGracePeriodSeconds?: number; namespace?: string; uid?: string; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; labels?: Record<string, any>; resourceVersion?: string; generateName?: string; generation?: number; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }> }; spec?: { resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; storageClassName?: string; volumeAttributesClassName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSource?: { apiGroup?: string; kind: string; name: string }; dataSourceRef?: { namespace?: string; apiGroup?: string; kind: string; name: string }; volumeMode?: 'Block' | 'Filesystem'; volumeName?: string }; status?: { modifyVolumeStatus?: { status: 'InProgress' | 'Infeasible' | 'Pending'; targetVolumeAttributesClassName?: string }; phase?: 'Bound' | 'Lost' | 'Pending'; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; allocatedResourceStatuses?: Record<string, any>; allocatedResources?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string; lastProbeTime?: Date }>; currentVolumeAttributesClassName?: string } }>; podManagementPolicy?: 'OrderedReady' | 'Parallel' };
}

/**
* Create a new Statefulset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSet(data?: Partial<io_k8s_api_apps_v1_StatefulSet>): io_k8s_api_apps_v1_StatefulSet {
 return {
   status: data?.status !== undefined ? data.status : { replicas: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { template: {}, selector: {}, serviceName: '' },
 };
}
