/**
* Binding ties one object to another; for example, a pod is bound to a node by a scheduler.
* @resourceType binding
* @kind Binding
*/
export interface io_k8s_api_core_v1_Binding {
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @required
* @isObject
*/
target: { namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string };
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
metadata?: { annotations?: Record<string, any>; finalizers?: string[]; generateName?: string; generation?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; resourceVersion?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; namespace?: string; selfLink?: string; creationTimestamp?: Date; deletionTimestamp?: Date; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; uid?: string };
}

/**
* Create a new Binding with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Binding instance with defaults applied
*/
export function createio_k8s_api_core_v1_Binding(data?: Partial<io_k8s_api_core_v1_Binding>): io_k8s_api_core_v1_Binding {
 return {
   target: data?.target !== undefined ? data.target : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
