/**
* TokenRequest requests a token for a given service account.
* @resourceType tokenrequest
* @kind Tokenrequest
*/
export interface io_k8s_api_authentication_v1_TokenRequest {
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Spec holds information about the request being evaluated
* @required
* @references io.k8s.api.authentication.v1.TokenRequestSpec
*/
spec: io_k8s_api_authentication_v1_TokenRequestSpec;
/**
* Status is filled in by the server and indicates whether the token can be authenticated.
* @references io.k8s.api.authentication.v1.TokenRequestStatus
*/
status?: io_k8s_api_authentication_v1_TokenRequestStatus;
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
* Create a new Tokenrequest with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenRequest instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenRequest(data?: Partial<io_k8s_api_authentication_v1_TokenRequest>): io_k8s_api_authentication_v1_TokenRequest {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_authentication_v1_TokenRequestSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_authentication_v1_TokenRequestStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_authentication_v1_TokenRequestSpec, createio_k8s_api_authentication_v1_TokenRequestSpec } from '../tokenrequestspec/io_k8s_api_authentication_v1_TokenRequestSpec';
import { io_k8s_api_authentication_v1_TokenRequestStatus, createio_k8s_api_authentication_v1_TokenRequestStatus } from '../tokenrequeststatus/io_k8s_api_authentication_v1_TokenRequestStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
