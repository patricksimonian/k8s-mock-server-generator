/**
* TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
* @resourceType tokenreview
* @kind Tokenreview
*/
export interface io_k8s_api_authentication_v1_TokenReview {
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Spec holds information about the request being evaluated
* @required
* @references io.k8s.api.authentication.v1.TokenReviewSpec
*/
spec: io_k8s_api_authentication_v1_TokenReviewSpec;
/**
* Status is filled in by the server and indicates whether the request can be authenticated.
* @references io.k8s.api.authentication.v1.TokenReviewStatus
*/
status?: io_k8s_api_authentication_v1_TokenReviewStatus;
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
* Create a new Tokenreview with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenReview instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenReview(data?: Partial<io_k8s_api_authentication_v1_TokenReview>): io_k8s_api_authentication_v1_TokenReview {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_authentication_v1_TokenReviewSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_authentication_v1_TokenReviewStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_authentication_v1_TokenReviewSpec, createio_k8s_api_authentication_v1_TokenReviewSpec } from '../tokenreviewspec/io_k8s_api_authentication_v1_TokenReviewSpec';
import { io_k8s_api_authentication_v1_TokenReviewStatus, createio_k8s_api_authentication_v1_TokenReviewStatus } from '../tokenreviewstatus/io_k8s_api_authentication_v1_TokenReviewStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
