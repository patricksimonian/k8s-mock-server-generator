/**
* ReplicationController represents the configuration of a replication controller.
* @resourceType replicationcontroller
* @kind Replicationcontroller
*/
export interface io_k8s_api_core_v1_ReplicationController {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { name?: string; namespace?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; generation?: number; labels?: Record<string, any>; creationTimestamp?: Date; selfLink?: string; uid?: string; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; resourceVersion?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }> };
/**
* ReplicationControllerSpec is the specification of a replication controller.
* @isObject
*/
spec?: { minReadySeconds?: number; replicas?: number; selector?: Record<string, any>; template?: { metadata?: { namespace?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; generateName?: string; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; selfLink?: string; name?: string; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; generation?: number; labels?: Record<string, any>; uid?: string }; spec?: Record<string, any> } };
/**
* ReplicationControllerStatus represents the current status of a replication controller.
* @isObject
*/
status?: { replicas: number; availableReplicas?: number; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; fullyLabeledReplicas?: number; observedGeneration?: number; readyReplicas?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Replicationcontroller with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationController instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationController(data?: Partial<io_k8s_api_core_v1_ReplicationController>): io_k8s_api_core_v1_ReplicationController {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : { replicas: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
