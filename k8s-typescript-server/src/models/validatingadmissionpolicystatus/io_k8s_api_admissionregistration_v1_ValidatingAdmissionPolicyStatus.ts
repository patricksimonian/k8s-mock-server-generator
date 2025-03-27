/**
* ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.
* @resourceType validatingadmissionpolicystatus
* @kind Validatingadmissionpolicystatus
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus {
/**
* The conditions represent the latest available observations of a policy's current state.
* @isArray
*/
conditions?: io_k8s_apimachinery_pkg_apis_meta_v1_Condition[];
/**
* The generation observed by the controller.
*/
observedGeneration?: number;
/**
* The results of type checking for each expression. Presence of this field indicates the completion of the type checking.
* @references io.k8s.api.admissionregistration.v1.TypeChecking
*/
typeChecking?: io_k8s_api_admissionregistration_v1_TypeChecking;
}

/**
* Create a new Validatingadmissionpolicystatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus {
 return {
   conditions: data?.conditions !== undefined ? data.conditions : [],
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   typeChecking: data?.typeChecking !== undefined ? data.typeChecking : createio_k8s_api_admissionregistration_v1_TypeChecking(),
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_TypeChecking, createio_k8s_api_admissionregistration_v1_TypeChecking } from '../typechecking/io_k8s_api_admissionregistration_v1_TypeChecking';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Condition, createio_k8s_apimachinery_pkg_apis_meta_v1_Condition } from '../io.k8s.apimachinery.pkg.apis.meta.v1.Condition';
