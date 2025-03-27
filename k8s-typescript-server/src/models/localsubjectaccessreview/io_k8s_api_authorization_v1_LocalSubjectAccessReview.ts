/**
* LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
* @resourceType localsubjectaccessreview
* @kind Localsubjectaccessreview
*/
export interface io_k8s_api_authorization_v1_LocalSubjectAccessReview {
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
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
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Localsubjectaccessreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_LocalSubjectAccessReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_LocalSubjectAccessReview(data?: Partial<io_k8s_api_authorization_v1_LocalSubjectAccessReview>): io_k8s_api_authorization_v1_LocalSubjectAccessReview {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_authorization_v1_SubjectAccessReviewSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_authorization_v1_SubjectAccessReviewStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_authorization_v1_SubjectAccessReviewSpec, createio_k8s_api_authorization_v1_SubjectAccessReviewSpec } from '../subjectaccessreviewspec/io_k8s_api_authorization_v1_SubjectAccessReviewSpec';
import { io_k8s_api_authorization_v1_SubjectAccessReviewStatus, createio_k8s_api_authorization_v1_SubjectAccessReviewStatus } from '../subjectaccessreviewstatus/io_k8s_api_authorization_v1_SubjectAccessReviewStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
