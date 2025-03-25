/**
* Namespace provides a scope for Names. Use of multiple namespaces is optional.
* @resourceType namespace
* @kind Namespace
*/
export interface io_k8s_api_core_v1_Namespace {
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
metadata?: { deletionGracePeriodSeconds?: number; generateName?: string; creationTimestamp?: Date; deletionTimestamp?: Date; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; namespace?: string; resourceVersion?: string; selfLink?: string; uid?: string };
/**
* NamespaceSpec describes the attributes on a Namespace.
* @isObject
*/
spec?: { finalizers?: string[] };
/**
* NamespaceStatus is information about the current status of a Namespace.
* @isObject
*/
status?: { conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }>; phase?: 'Active' | 'Terminating' };
}

/**
* Create a new Namespace with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Namespace instance with defaults applied
*/
export function createio_k8s_api_core_v1_Namespace(data?: Partial<io_k8s_api_core_v1_Namespace>): io_k8s_api_core_v1_Namespace {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
 };
}
