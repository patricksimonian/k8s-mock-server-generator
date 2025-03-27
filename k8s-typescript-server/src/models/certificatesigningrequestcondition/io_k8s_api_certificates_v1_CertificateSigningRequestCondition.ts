/**
* CertificateSigningRequestCondition describes a condition of a CertificateSigningRequest object
* @resourceType certificatesigningrequestcondition
* @kind Certificatesigningrequestcondition
*/
export interface io_k8s_api_certificates_v1_CertificateSigningRequestCondition {
/**
* reason indicates a brief reason for the request state
*/
reason?: string;
/**
* status of the condition, one of True, False, Unknown. Approved, Denied, and Failed conditions may not be "False" or "Unknown".
* @required
*/
status: string;
/**
* type of the condition. Known conditions are "Approved", "Denied", and "Failed".

An "Approved" condition is added via the /approval subresource, indicating the request was approved and should be issued by the signer.

A "Denied" condition is added via the /approval subresource, indicating the request was denied and should not be issued by the signer.

A "Failed" condition is added via the /status subresource, indicating the signer failed to issue the certificate.

Approved and Denied conditions are mutually exclusive. Approved, Denied, and Failed conditions cannot be removed once added.

Only one condition of a given type is allowed.
* @required
*/
type: string;
/**
* lastTransitionTime is the time the condition last transitioned from one status to another. If unset, when a new condition type is added or an existing condition's status is changed, the server defaults this to the current time.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTransitionTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* lastUpdateTime is the time of the last update to this condition
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastUpdateTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* message contains a human readable message with details about the request state
*/
message?: string;
}

/**
* Create a new Certificatesigningrequestcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_certificates_v1_CertificateSigningRequestCondition instance with defaults applied
*/
export function createio_k8s_api_certificates_v1_CertificateSigningRequestCondition(data?: Partial<io_k8s_api_certificates_v1_CertificateSigningRequestCondition>): io_k8s_api_certificates_v1_CertificateSigningRequestCondition {
 return {
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   lastUpdateTime: data?.lastUpdateTime !== undefined ? data.lastUpdateTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
