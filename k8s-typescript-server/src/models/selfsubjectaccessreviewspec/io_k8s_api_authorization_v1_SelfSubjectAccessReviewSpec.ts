/**
* SelfSubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
* @resourceType selfsubjectaccessreviewspec
* @kind Selfsubjectaccessreviewspec
*/
export interface io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec {
/**
* NonResourceAttributes describes information for a non-resource access request
* @references io.k8s.api.authorization.v1.NonResourceAttributes
*/
nonResourceAttributes?: io_k8s_api_authorization_v1_NonResourceAttributes;
/**
* ResourceAuthorizationAttributes describes information for a resource access request
* @references io.k8s.api.authorization.v1.ResourceAttributes
*/
resourceAttributes?: io_k8s_api_authorization_v1_ResourceAttributes;
}

/**
* Create a new Selfsubjectaccessreviewspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec>): io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec {
 return {
   nonResourceAttributes: data?.nonResourceAttributes !== undefined ? data.nonResourceAttributes : createio_k8s_api_authorization_v1_NonResourceAttributes(),
   resourceAttributes: data?.resourceAttributes !== undefined ? data.resourceAttributes : createio_k8s_api_authorization_v1_ResourceAttributes(),
 };
}
// Required imports
import { io_k8s_api_authorization_v1_NonResourceAttributes, createio_k8s_api_authorization_v1_NonResourceAttributes } from '../nonresourceattribute/io_k8s_api_authorization_v1_NonResourceAttributes';
import { io_k8s_api_authorization_v1_ResourceAttributes, createio_k8s_api_authorization_v1_ResourceAttributes } from '../resourceattribute/io_k8s_api_authorization_v1_ResourceAttributes';
