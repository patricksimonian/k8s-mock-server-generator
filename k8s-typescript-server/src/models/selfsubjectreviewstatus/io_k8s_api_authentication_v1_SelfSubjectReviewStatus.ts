/**
* SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
* @resourceType selfsubjectreviewstatus
* @kind Selfsubjectreviewstatus
*/
export interface io_k8s_api_authentication_v1_SelfSubjectReviewStatus {
/**
* UserInfo holds the information about the user needed to implement the user.Info interface.
* @isObject
*/
userInfo?: { uid?: string; username?: string; extra?: Record<string, any>; groups?: string[] };
}

/**
* Create a new Selfsubjectreviewstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_SelfSubjectReviewStatus instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_SelfSubjectReviewStatus(data?: Partial<io_k8s_api_authentication_v1_SelfSubjectReviewStatus>): io_k8s_api_authentication_v1_SelfSubjectReviewStatus {
 return {
   userInfo: data?.userInfo !== undefined ? data.userInfo : {},
 };
}
