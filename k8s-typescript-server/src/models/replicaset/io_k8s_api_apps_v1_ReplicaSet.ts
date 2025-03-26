/**
* ReplicaSet ensures that a specified number of pod replicas are running at any given time.
* @resourceType replicaset
* @kind Replicaset
*/
export interface io_k8s_api_apps_v1_ReplicaSet {
/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
* @isObject
*/
status?: { availableReplicas?: number; conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }>; fullyLabeledReplicas?: number; observedGeneration?: number; readyReplicas?: number; replicas: number };
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
metadata?: { finalizers?: string[]; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; creationTimestamp?: Date; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; deletionTimestamp?: Date; generation?: number; name?: string; selfLink?: string; uid?: string };
/**
* ReplicaSetSpec is the specification of a ReplicaSet.
* @isObject
*/
spec?: { minReadySeconds?: number; replicas?: number; selector: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; template?: { spec?: Record<string, any>; metadata?: { deletionGracePeriodSeconds?: number; generation?: number; namespace?: string; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; labels?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; name?: string; resourceVersion?: string; selfLink?: string; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }> } } };
}

/**
* Create a new Replicaset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ReplicaSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ReplicaSet(data?: Partial<io_k8s_api_apps_v1_ReplicaSet>): io_k8s_api_apps_v1_ReplicaSet {
 return {
   status: data?.status !== undefined ? data.status : { replicas: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { selector: {} },
 };
}
