/**
* SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.
* @resourceType selfsubjectreview
* @kind Selfsubjectreview
*/
export interface io_k8s_api_authentication_v1_SelfSubjectReview {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Status is filled in by the server with the user attributes.
* @references io.k8s.api.authentication.v1.SelfSubjectReviewStatus
*/
status?: io_k8s_api_authentication_v1_SelfSubjectReviewStatus;
}

/**
* Create a new Selfsubjectreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_SelfSubjectReview instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_SelfSubjectReview(data?: Partial<io_k8s_api_authentication_v1_SelfSubjectReview>): io_k8s_api_authentication_v1_SelfSubjectReview {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_authentication_v1_SelfSubjectReviewStatus(),
 };
}
// Required imports
import { io_k8s_api_authentication_v1_SelfSubjectReviewStatus, createio_k8s_api_authentication_v1_SelfSubjectReviewStatus } from '../selfsubjectreviewstatus/io_k8s_api_authentication_v1_SelfSubjectReviewStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
