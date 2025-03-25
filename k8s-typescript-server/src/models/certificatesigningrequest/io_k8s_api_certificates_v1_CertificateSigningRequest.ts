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
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; generateName?: string; labels?: Record<string, any>; resourceVersion?: string; uid?: string; annotations?: Record<string, any>; finalizers?: string[]; name?: string; namespace?: string; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; selfLink?: string };
/**
* CertificateSigningRequestSpec contains the certificate request.
* @required
* @isObject
*/
spec: { expirationSeconds?: number; extra?: Record<string, any>; groups?: string[]; request: string; signerName: string; uid?: string; usages?: 'any' | 'cert sign' | 'client auth' | 'code signing' | 'content commitment' | 'crl sign' | 'data encipherment' | 'decipher only' | 'digital signature' | 'email protection' | 'encipher only' | 'ipsec end system' | 'ipsec tunnel' | 'ipsec user' | 'key agreement' | 'key encipherment' | 'microsoft sgc' | 'netscape sgc' | 'ocsp signing' | 's/mime' | 'server auth' | 'signing' | 'timestamping'[]; username?: string };
/**
* CertificateSigningRequestStatus contains conditions used to indicate approved/denied/failed status of the request, and the issued certificate.
* @isObject
*/
status?: { certificate?: string; conditions?: Array<{ lastTransitionTime?: Date; lastUpdateTime?: Date; message?: string; reason?: string; status: string; type: string }> };
}

/**
* Create a new Certificatesigningrequest with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_certificates_v1_CertificateSigningRequest instance with defaults applied
*/
export function createio_k8s_api_certificates_v1_CertificateSigningRequest(data?: Partial<io_k8s_api_certificates_v1_CertificateSigningRequest>): io_k8s_api_certificates_v1_CertificateSigningRequest {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { request: '', signerName: '' },
   status: data?.status !== undefined ? data.status : {},
 };
}
