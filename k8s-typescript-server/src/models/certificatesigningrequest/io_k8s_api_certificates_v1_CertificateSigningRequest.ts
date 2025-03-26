/**
* CertificateSigningRequest objects provide a mechanism to obtain x509 certificates by submitting a certificate signing request, and having it asynchronously approved and issued.

Kubelets use this API to obtain:
 1. client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client-kubelet" signerName).
 2. serving certificates for TLS endpoints kube-apiserver can connect to securely (with the "kubernetes.io/kubelet-serving" signerName).

This API can be used to request client certificates to authenticate to kube-apiserver (with the "kubernetes.io/kube-apiserver-client" signerName), or to obtain certificates from custom non-Kubernetes signers.
* @resourceType certificatesigningrequest
* @kind Certificatesigningrequest
*/
export interface io_k8s_api_certificates_v1_CertificateSigningRequest {
/**
* 
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* spec contains the certificate request, and is immutable after creation. Only the request, signerName, expirationSeconds, and usages fields can be set on creation. Other fields are derived by Kubernetes and cannot be modified by users.
* @required
* @references io.k8s.api.certificates.v1.CertificateSigningRequestSpec
*/
spec: io_k8s_api_certificates_v1_CertificateSigningRequestSpec;
/**
* status contains information about whether the request is approved or denied, and the certificate issued by the signer, or the failure condition indicating signer failure.
* @references io.k8s.api.certificates.v1.CertificateSigningRequestStatus
*/
status?: io_k8s_api_certificates_v1_CertificateSigningRequestStatus;
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
* Create a new Certificatesigningrequest with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_certificates_v1_CertificateSigningRequest instance with defaults applied
*/
export function createio_k8s_api_certificates_v1_CertificateSigningRequest(data?: Partial<io_k8s_api_certificates_v1_CertificateSigningRequest>): io_k8s_api_certificates_v1_CertificateSigningRequest {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_certificates_v1_CertificateSigningRequestSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_certificates_v1_CertificateSigningRequestStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_certificates_v1_CertificateSigningRequestSpec, createio_k8s_api_certificates_v1_CertificateSigningRequestSpec } from '../certificatesigningrequestspec/io_k8s_api_certificates_v1_CertificateSigningRequestSpec';
import { io_k8s_api_certificates_v1_CertificateSigningRequestStatus, createio_k8s_api_certificates_v1_CertificateSigningRequestStatus } from '../certificatesigningrequeststatus/io_k8s_api_certificates_v1_CertificateSigningRequestStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
