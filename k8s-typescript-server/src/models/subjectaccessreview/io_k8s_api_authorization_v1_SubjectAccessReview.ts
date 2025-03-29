/**
* SubjectAccessReview checks whether or not a user or group can perform an action.
* @resourceType subjectaccessreview
* @kind Subjectaccessreview
*/
export interface io_k8s_api_authorization_v1_SubjectAccessReview {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Spec holds information about the request being evaluated
* @required
* @references io.k8s.api.authorization.v1.SubjectAccessReviewSpec
*/
spec: io_k8s_api_authorization_v1_SubjectAccessReviewSpec;
/**
* Status is filled in by the server and indicates whether the request is allowed or not
* @references io.k8s.api.authorization.v1.SubjectAccessReviewStatus
*/
status?: io_k8s_api_authorization_v1_SubjectAccessReviewStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Subjectaccessreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SubjectAccessReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_SubjectAccessReview>): io_k8s_api_authorization_v1_SubjectAccessReview {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_authorization_v1_SubjectAccessReviewSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_authorization_v1_SubjectAccessReviewStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_authorization_v1_SubjectAccessReviewSpec, createio_k8s_api_authorization_v1_SubjectAccessReviewSpec } from '../subjectaccessreviewspec/io_k8s_api_authorization_v1_SubjectAccessReviewSpec';
import { io_k8s_api_authorization_v1_SubjectAccessReviewStatus, createio_k8s_api_authorization_v1_SubjectAccessReviewStatus } from '../subjectaccessreviewstatus/io_k8s_api_authorization_v1_SubjectAccessReviewStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
