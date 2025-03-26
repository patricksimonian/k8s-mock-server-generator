/**
* CertificateSigningRequestList is a collection of CertificateSigningRequest objects
* @resourceType certificatesigningrequestlist
* @kind CertificatesigningrequestList
*/
export interface io_k8s_api_certificates_v1_CertificateSigningRequestList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is a collection of CertificateSigningRequest objects
* @required
* @isArray
* @references io.k8s.api.certificates.v1.CertificateSigningRequest
*/
items: io_k8s_api_certificates_v1_CertificateSigningRequest[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
}

/**
* Create a new CertificatesigningrequestList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_certificates_v1_CertificateSigningRequestList instance with defaults applied
*/
export function createio_k8s_api_certificates_v1_CertificateSigningRequestList(data?: Partial<io_k8s_api_certificates_v1_CertificateSigningRequestList>): io_k8s_api_certificates_v1_CertificateSigningRequestList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_certificates_v1_CertificateSigningRequest, createio_k8s_api_certificates_v1_CertificateSigningRequest } from '../certificatesigningrequest/io_k8s_api_certificates_v1_CertificateSigningRequest';
