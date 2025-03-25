/**
* Variable is the definition of a variable that is used for composition. A variable is defined as a named expression.
* @resourceType variable
* @kind Variable
*/
export interface io_k8s_api_admissionregistration_v1_Variable {
/**
* Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.
* @required
*/
expression: string;
/**
* Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is "foo", the variable will be available as `variables.foo`
* @required
*/
name: string;
}

/**
* Create a new Variable with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_Variable instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_Variable(data?: Partial<io_k8s_api_admissionregistration_v1_Variable>): io_k8s_api_admissionregistration_v1_Variable {
 return {
   expression: data?.expression !== undefined ? data.expression : '',
   name: data?.name !== undefined ? data.name : '',
 };
}
