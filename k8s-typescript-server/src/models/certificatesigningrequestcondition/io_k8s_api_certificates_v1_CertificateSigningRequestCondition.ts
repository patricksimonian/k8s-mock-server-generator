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
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastUpdateTime?: Date;
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
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   lastUpdateTime: data?.lastUpdateTime !== undefined ? data.lastUpdateTime : '',
   message: data?.message !== undefined ? data.message : '',
 };
}
