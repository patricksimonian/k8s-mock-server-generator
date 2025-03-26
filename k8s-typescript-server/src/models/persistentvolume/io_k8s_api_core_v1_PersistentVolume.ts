/**
* PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
* @resourceType persistentvolume
* @kind Persistentvolume
*/
export interface io_k8s_api_core_v1_PersistentVolume {
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
metadata?: { finalizers?: string[]; generation?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; uid?: string; creationTimestamp?: Date; deletionTimestamp?: Date; labels?: Record<string, any>; namespace?: string; name?: string; resourceVersion?: string; generateName?: string; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }> };
/**
* PersistentVolumeSpec is the specification of a persistent volume.
* @isObject
*/
spec?: Record<string, any>;
/**
* PersistentVolumeStatus is the current status of a persistent volume.
* @isObject
*/
status?: { lastPhaseTransitionTime?: Date; message?: string; phase?: 'Available' | 'Bound' | 'Failed' | 'Pending' | 'Released'; reason?: string };
}

/**
* Create a new Persistentvolume with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolume instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolume(data?: Partial<io_k8s_api_core_v1_PersistentVolume>): io_k8s_api_core_v1_PersistentVolume {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
 };
}
