/**
* SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
* @resourceType selfsubjectaccessreview
* @kind Selfsubjectaccessreview
*/
export interface io_k8s_api_authorization_v1_SelfSubjectAccessReview {
/**
* Spec holds information about the request being evaluated.  user and groups must be empty
* @required
* @references io.k8s.api.authorization.v1.SelfSubjectAccessReviewSpec
*/
spec: io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec;
/**
* Status is filled in by the server and indicates whether the request is allowed or not
* @references io.k8s.api.authorization.v1.SubjectAccessReviewStatus
*/
status?: io_k8s_api_authorization_v1_SubjectAccessReviewStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
}

/**
* Create a new Selfsubjectaccessreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SelfSubjectAccessReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SelfSubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectAccessReview>): io_k8s_api_authorization_v1_SelfSubjectAccessReview {
 return {
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_authorization_v1_SubjectAccessReviewStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
 };
}
// Required imports
import { io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec, createio_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec } from '../selfsubjectaccessreviewspec/io_k8s_api_authorization_v1_SelfSubjectAccessReviewSpec';
import { io_k8s_api_authorization_v1_SubjectAccessReviewStatus, createio_k8s_api_authorization_v1_SubjectAccessReviewStatus } from '../subjectaccessreviewstatus/io_k8s_api_authorization_v1_SubjectAccessReviewStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
