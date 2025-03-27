/**
* SubjectAccessReviewSpec is a description of the access request.  Exactly one of ResourceAuthorizationAttributes and NonResourceAuthorizationAttributes must be set
* @resourceType subjectaccessreviewspec
* @kind Subjectaccessreviewspec
*/
export interface io_k8s_api_authorization_v1_SubjectAccessReviewSpec {
/**
* Groups is the groups you're testing for.
* @isArray
*/
groups?: string[];
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
/**
* UID information about the requesting user.
*/
uid?: string;
/**
* User is the user you're testing for. If you specify "User" but not "Groups", then is it interpreted as "What if User were not a member of any groups
*/
user?: string;
/**
* Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here.
*/
extra?: Record<string, any>;
}

/**
* Create a new Subjectaccessreviewspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SubjectAccessReviewSpec instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SubjectAccessReviewSpec(data?: Partial<io_k8s_api_authorization_v1_SubjectAccessReviewSpec>): io_k8s_api_authorization_v1_SubjectAccessReviewSpec {
 return {
   groups: data?.groups !== undefined ? data.groups : [],
   nonResourceAttributes: data?.nonResourceAttributes !== undefined ? data.nonResourceAttributes : createio_k8s_api_authorization_v1_NonResourceAttributes(),
   resourceAttributes: data?.resourceAttributes !== undefined ? data.resourceAttributes : createio_k8s_api_authorization_v1_ResourceAttributes(),
   uid: data?.uid !== undefined ? data.uid : '',
   user: data?.user !== undefined ? data.user : '',
   extra: data?.extra !== undefined ? data.extra : {},
 };
}
// Required imports
import { io_k8s_api_authorization_v1_NonResourceAttributes, createio_k8s_api_authorization_v1_NonResourceAttributes } from '../nonresourceattribute/io_k8s_api_authorization_v1_NonResourceAttributes';
import { io_k8s_api_authorization_v1_ResourceAttributes, createio_k8s_api_authorization_v1_ResourceAttributes } from '../resourceattribute/io_k8s_api_authorization_v1_ResourceAttributes';
