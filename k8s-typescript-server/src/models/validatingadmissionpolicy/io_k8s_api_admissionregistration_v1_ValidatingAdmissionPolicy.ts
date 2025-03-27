/**
* ValidatingAdmissionPolicy describes the definition of an admission validation policy that accepts or rejects an object without changing it.
* @resourceType validatingadmissionpolicy
* @kind Validatingadmissionpolicy
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Specification of the desired behavior of the ValidatingAdmissionPolicy.
* @references io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicySpec
*/
spec?: io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec;
/**
* The status of the ValidatingAdmissionPolicy, including warnings that are useful to determine if the policy behaves in the expected way. Populated by the system. Read-only.
* @references io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyStatus
*/
status?: io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus;
}

/**
* Create a new Validatingadmissionpolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicy {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus(),
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec, createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec } from '../validatingadmissionpolicyspec/io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec';
import { io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus, createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus } from '../validatingadmissionpolicystatus/io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
