/**
* SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
* @resourceType selfsubjectaccessreview
* @kind Selfsubjectaccessreview
*/
export interface io_k8s_api_authorization_v1_SelfSubjectAccessReview {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; selfLink?: string; name?: string; generateName?: string; creationTimestamp?: Date; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; generation?: number; labels?: Record<string, any>; namespace?: string; uid?: string; deletionGracePeriodSeconds?: number };
/**
* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
* @required
* @isObject
*/
spec: { nonResourceAttributes?: { verb?: string; path?: string }; resourceAttributes?: { resource?: string; subresource?: string; version?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; namespace?: string; name?: string; verb?: string; group?: string; labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> } } };
/**
* SubjectAccessReviewStatus
* @isObject
*/
status?: { allowed: boolean; denied?: boolean; evaluationError?: string; reason?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Selfsubjectaccessreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SelfSubjectAccessReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SelfSubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectAccessReview>): io_k8s_api_authorization_v1_SelfSubjectAccessReview {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : { allowed: false },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
