/**
* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
* @resourceType selfsubjectaccessreviewspec
* @kind Selfsubjectaccessreviewspec
*/
export interface io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec {
/**
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
* @isObject
*/
nonResourceAttributes?: { path?: string; verb?: string };
/**
* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
* @isObject
*/
resourceAttributes?: { subresource?: string; version?: string; labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; name?: string; namespace?: string; resource?: string; verb?: string; fieldSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> }; group?: string };
}

/**
* Create a new Selfsubjectaccessreviewspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec>): io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec {
 return {
   nonResourceAttributes: data?.nonResourceAttributes !== undefined ? data.nonResourceAttributes : {},
   resourceAttributes: data?.resourceAttributes !== undefined ? data.resourceAttributes : {},
 };
}
