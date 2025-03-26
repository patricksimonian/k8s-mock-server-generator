/**
* TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
* @resourceType typechecking
* @kind Typechecking
*/
export interface io_k8s_api_admissionregistration_v1_TypeChecking {
/**
* The type checking warnings for each expression.
* @isArray
*/
expressionWarnings?: io_k8s_api_admissionregistration_v1_ExpressionWarning[];
}

/**
* Create a new Typechecking with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_TypeChecking instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_TypeChecking(data?: Partial<io_k8s_api_admissionregistration_v1_TypeChecking>): io_k8s_api_admissionregistration_v1_TypeChecking {
 return {
   expressionWarnings: data?.expressionWarnings !== undefined ? data.expressionWarnings : [],
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_ExpressionWarning, createio_k8s_api_admissionregistration_v1_ExpressionWarning } from '../io.k8s.api.admissionregistration.v1.ExpressionWarning';
