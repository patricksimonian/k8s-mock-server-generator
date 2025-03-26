/**
* SubjectAccessReviewStatus
* @resourceType subjectaccessreviewstatus
* @kind Subjectaccessreviewstatus
*/
export interface io_k8s_api_authorization_v1_SubjectAccessReviewStatus {
/**
* Allowed is required. True if the action would be allowed, false otherwise.
* @required
*/
allowed: boolean;
/**
* Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
*/
denied?: boolean;
/**
* EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
*/
evaluationError?: string;
/**
* Reason is optional.  It indicates why a request was allowed or denied.
*/
reason?: string;
}

/**
* Create a new Subjectaccessreviewstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SubjectAccessReviewStatus instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SubjectAccessReviewStatus(data?: Partial<io_k8s_api_authorization_v1_SubjectAccessReviewStatus>): io_k8s_api_authorization_v1_SubjectAccessReviewStatus {
 return {
   allowed: data?.allowed !== undefined ? data.allowed : false,
   denied: data?.denied !== undefined ? data.denied : false,
   evaluationError: data?.evaluationError !== undefined ? data.evaluationError : '',
   reason: data?.reason !== undefined ? data.reason : '',
 };
}
