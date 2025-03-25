/**
* ReplicaSet ensures that a specified number of pod replicas are running at any given time.
* @resourceType replicaset
* @kind Replicaset
*/
export interface io_k8s_api_apps_v1_ReplicaSet {
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
metadata?: { namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; uid?: string; generateName?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; annotations?: Record<string, any>; name?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number };
/**
* ReplicaSetSpec is the specification of a ReplicaSet.
* @isObject
*/
spec?: { minReadySeconds?: number; replicas?: number; selector: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> }; template?: { metadata?: { deletionGracePeriodSeconds?: number; resourceVersion?: string; selfLink?: string; uid?: string; annotations?: Record<string, any>; labels?: Record<string, any>; creationTimestamp?: Date; generateName?: string; generation?: number; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionTimestamp?: Date; managedFields?: Array<{ subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string }>; name?: string; namespace?: string; finalizers?: string[] }; spec?: Record<string, any> } };
/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
* @isObject
*/
status?: { observedGeneration?: number; readyReplicas?: number; replicas: number; availableReplicas?: number; conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }>; fullyLabeledReplicas?: number };
}

/**
* Create a new Replicaset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ReplicaSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ReplicaSet(data?: Partial<io_k8s_api_apps_v1_ReplicaSet>): io_k8s_api_apps_v1_ReplicaSet {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { selector: {} },
   status: data?.status !== undefined ? data.status : { replicas: 0 },
 };
}
