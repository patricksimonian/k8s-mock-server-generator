/**
* ValidatingAdmissionPolicyBindingList is a list of ValidatingAdmissionPolicyBinding.
* @resourceType validatingadmissionpolicybindinglist
* @kind ValidatingadmissionpolicybindingList
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList {
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of PolicyBinding.
* @required
* @isArray
* @references io.k8s.api.admissionregistration.v1.ValidatingAdmissionPolicyBinding
*/
items: io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBinding[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new ValidatingadmissionpolicybindingList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingList {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBinding, createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBinding } from '../validatingadmissionpolicybinding/io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBinding';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
