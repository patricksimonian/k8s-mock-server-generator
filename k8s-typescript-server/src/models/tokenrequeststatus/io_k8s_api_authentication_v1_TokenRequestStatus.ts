/**
* TokenRequestStatus is the result of a token request.
* @resourceType tokenrequeststatus
* @kind Tokenrequeststatus
*/
export interface io_k8s_api_authentication_v1_TokenRequestStatus {
/**
* ExpirationTimestamp is the time of expiration of the returned token.
* @required
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
expirationTimestamp: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Token is the opaque bearer token.
* @required
*/
token: string;
}

/**
* Create a new Tokenrequeststatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_TokenRequestStatus instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_TokenRequestStatus(data?: Partial<io_k8s_api_authentication_v1_TokenRequestStatus>): io_k8s_api_authentication_v1_TokenRequestStatus {
 return {
   expirationTimestamp: data?.expirationTimestamp !== undefined ? data.expirationTimestamp : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   token: data?.token !== undefined ? data.token : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
