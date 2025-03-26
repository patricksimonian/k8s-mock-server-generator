/**
* LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
* @resourceType localsubjectaccessreview
* @kind Localsubjectaccessreview
*/
export interface io_k8s_api_authorization_v1_LocalSubjectAccessReview {
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
metadata?: { generateName?: string; labels?: Record<string, any>; uid?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; resourceVersion?: string; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; creationTimestamp?: Date; deletionTimestamp?: Date; generation?: number; selfLink?: string; finalizers?: string[]; name?: string; namespace?: string };
/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
* @required
* @isObject
*/
spec: { groups?: string[]; nonResourceAttributes?: { path?: string; verb?: string }; resourceAttributes?: { name?: string; version?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ values?: string[]; key: string; operator: string }> }; group?: string; labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; namespace?: string; resource?: string; subresource?: string; verb?: string }; uid?: string; user?: string; extra?: Record<string, any> };
/**
* SubjectAccessReviewStatus
* @isObject
*/
status?: { allowed: boolean; denied?: boolean; evaluationError?: string; reason?: string };
}

/**
* Create a new Localsubjectaccessreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_LocalSubjectAccessReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_LocalSubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_LocalSubjectAccessReview>): io_k8s_api_authorization_v1_LocalSubjectAccessReview {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : { allowed: false },
 };
}
