/**
* SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
* @resourceType selfsubjectreviewstatus
* @kind Selfsubjectreviewstatus
*/
export interface io_k8s_api_authentication_v1_SelfSubjectReviewStatus {
/**
* User attributes of the user making this request.
* @references io.k8s.api.authentication.v1.UserInfo
*/
userInfo?: io_k8s_api_authentication_v1_UserInfo;
}

/**
* Create a new Selfsubjectreviewstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_SelfSubjectReviewStatus instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_SelfSubjectReviewStatus(data?: Partial<io_k8s_api_authentication_v1_SelfSubjectReviewStatus>): io_k8s_api_authentication_v1_SelfSubjectReviewStatus {
 return {
   userInfo: data?.userInfo !== undefined ? data.userInfo : createio_k8s_api_authentication_v1_UserInfo(),
 };
}
// Required imports
import { io_k8s_api_authentication_v1_UserInfo, createio_k8s_api_authentication_v1_UserInfo } from '../userinfo/io_k8s_api_authentication_v1_UserInfo';
