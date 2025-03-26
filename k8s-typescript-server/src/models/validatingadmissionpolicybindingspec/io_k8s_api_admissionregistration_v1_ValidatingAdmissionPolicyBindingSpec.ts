/**
* ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.
* @resourceType validatingadmissionpolicybindingspec
* @kind Validatingadmissionpolicybindingspec
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSpec {
/**
* MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
* @isObject
*/
matchResources?: { namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; resourceRules?: Array<{ resources?: string[]; scope?: string; apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[] }>; excludeResourceRules?: Array<{ operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[]; scope?: string; apiGroups?: string[]; apiVersions?: string[] }>; matchPolicy?: 'Equivalent' | 'Exact' };
/**
* ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.
* @isObject
*/
paramRef?: { name?: string; namespace?: string; parameterNotFoundAction?: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } };
/**
* PolicyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.
*/
policyName?: string;
/**
* validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.

Failures defined by the ValidatingAdmissionPolicy's FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.

validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.

The supported actions values are:

"Deny" specifies that a validation failure results in a denied request.

"Warn" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.

"Audit" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `"validation.policy.admission.k8s.io/validation_failure": "[{\"message\": \"Invalid value\", {\"policy\": \"policy.example.com\", {\"binding\": \"policybinding.example.com\", {\"expressionIndex\": \"1\", {\"validationActions\": [\"Audit\"]}]"`

Clients should expect to handle additional values by ignoring any values not recognized.

"Deny" and "Warn" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.

Required.
* @isArray
*/
validationActions?: 'Audit' | 'Deny' | 'Warn'[];
}

/**
* Create a new Validatingadmissionpolicybindingspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSpec instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSpec(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSpec>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyBindingSpec {
 return {
   matchResources: data?.matchResources !== undefined ? data.matchResources : {},
   paramRef: data?.paramRef !== undefined ? data.paramRef : {},
   policyName: data?.policyName !== undefined ? data.policyName : '',
   validationActions: data?.validationActions !== undefined ? data.validationActions : [],
 };
}
