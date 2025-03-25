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
conditions?: Array<{ reason: string; status: string; type: string; lastTransitionTime: Date; message: string; observedGeneration?: number }>;
/**
* The generation observed by the controller.
*/
observedGeneration?: number;
/**
* TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy
* @isObject
*/
typeChecking?: { expressionWarnings?: Array<{ fieldRef: string; warning: string }> };
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
   typeChecking: data?.typeChecking !== undefined ? data.typeChecking : {},
 };
}
