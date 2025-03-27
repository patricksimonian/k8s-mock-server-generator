/**
* SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
* @resourceType selfsubjectrulesreview
* @kind Selfsubjectrulesreview
*/
export interface io_k8s_api_authorization_v1_SelfSubjectRulesReview {
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
* Spec holds information about the request being evaluated.
* @required
* @references io.k8s.api.authorization.v1.SelfSubjectRulesReviewSpec
*/
spec: io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec;
/**
* Status is filled in by the server and indicates the set of actions a user can perform.
* @references io.k8s.api.authorization.v1.SubjectRulesReviewStatus
*/
status?: io_k8s_api_authorization_v1_SubjectRulesReviewStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Selfsubjectrulesreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_SelfSubjectRulesReview instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_SelfSubjectRulesReview(data?: Partial<io_k8s_api_authorization_v1_SelfSubjectRulesReview>): io_k8s_api_authorization_v1_SelfSubjectRulesReview {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_authorization_v1_SubjectRulesReviewStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec, createio_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec } from '../selfsubjectrulesreviewspec/io_k8s_api_authorization_v1_SelfSubjectRulesReviewSpec';
import { io_k8s_api_authorization_v1_SubjectRulesReviewStatus, createio_k8s_api_authorization_v1_SubjectRulesReviewStatus } from '../subjectrulesreviewstatus/io_k8s_api_authorization_v1_SubjectRulesReviewStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
