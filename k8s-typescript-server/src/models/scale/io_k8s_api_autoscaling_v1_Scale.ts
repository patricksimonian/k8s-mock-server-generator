/**
* Scale represents a scaling request for a resource.
* @resourceType scale
* @kind Scale
*/
export interface io_k8s_api_autoscaling_v1_Scale {
/**
* ScaleSpec describes the attributes of a scale subresource.
* @isObject
*/
spec?: { replicas?: number };
/**
* ScaleStatus represents the current status of a scale subresource.
* @isObject
*/
status?: { replicas: number; selector?: string };
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
metadata?: { deletionGracePeriodSeconds?: number; finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; creationTimestamp?: Date; generateName?: string; selfLink?: string; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; generation?: number; resourceVersion?: string };
}

/**
* Create a new Scale with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_Scale instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_Scale(data?: Partial<io_k8s_api_autoscaling_v1_Scale>): io_k8s_api_autoscaling_v1_Scale {
 return {
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : { replicas: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
