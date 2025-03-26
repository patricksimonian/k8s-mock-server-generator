/**
* IngressClass represents the class of the Ingress, referenced by the Ingress Spec. The `ingressclass.kubernetes.io/is-default-class` annotation can be used to indicate that an IngressClass should be considered default. When a single IngressClass resource has this annotation set to true, new Ingress resources without a class specified will be assigned this default class.
* @resourceType ingressclass
* @kind Ingressclass
*/
export interface io_k8s_api_networking_v1_IngressClass {
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
metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; namespace?: string; generation?: number; uid?: string; finalizers?: string[]; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; selfLink?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generateName?: string; labels?: Record<string, any>; name?: string };
/**
* IngressClassSpec provides information about the class of an Ingress.
* @isObject
*/
spec?: { controller?: string; parameters?: { apiGroup?: string; kind: string; name: string; namespace?: string; scope?: string } };
}

/**
* Create a new Ingressclass with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressClass instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressClass(data?: Partial<io_k8s_api_networking_v1_IngressClass>): io_k8s_api_networking_v1_IngressClass {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
