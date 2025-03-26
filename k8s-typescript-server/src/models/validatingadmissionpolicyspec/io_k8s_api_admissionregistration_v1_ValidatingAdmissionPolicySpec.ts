/**
* ValidatingAdmissionPolicySpec is the specification of the desired behavior of the AdmissionPolicy.
* @resourceType validatingadmissionpolicyspec
* @kind Validatingadmissionpolicyspec
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec {
/**
* MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
* @isObject
*/
matchConstraints?: { excludeResourceRules?: Array<{ scope?: string; apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[] }>; matchPolicy?: 'Equivalent' | 'Exact'; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; resourceRules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resourceNames?: string[]; resources?: string[]; scope?: string }> };
/**
* ParamKind is a tuple of Group Kind and Version.
* @isObject
*/
paramKind?: { apiVersion?: string; kind?: string };
/**
* Validations contain CEL expressions which is used to apply the validation. Validations and AuditAnnotations may not both be empty; a minimum of one Validations or AuditAnnotations is required.
* @isArray
*/
validations?: Array<{ reason?: string; expression: string; message?: string; messageExpression?: string }>;
/**
* Variables contain definitions of variables that can be used in composition of other expressions. Each variable is defined as a named CEL expression. The variables defined here will be available under `variables` in other expressions of the policy except MatchConditions because MatchConditions are evaluated before the rest of the policy.

The expression of a variable can refer to other variables defined earlier in the list but not those after. Thus, Variables must be sorted by the order of first appearance and acyclic.
* @isArray
*/
variables?: Array<{ expression: string; name: string }>;
/**
* auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. validations and auditAnnotations may not both be empty; a least one of validations or auditAnnotations is required.
* @isArray
*/
auditAnnotations?: Array<{ key: string; valueExpression: string }>;
/**
* failurePolicy defines how to handle failures for the admission policy. Failures can occur from CEL expression parse errors, type check errors, runtime errors and invalid or mis-configured policy definitions or bindings.

A policy is invalid if spec.paramKind refers to a non-existent Kind. A binding is invalid if spec.paramRef.name refers to a non-existent resource.

failurePolicy does not define how validations that evaluate to false are handled.

When failurePolicy is set to Fail, ValidatingAdmissionPolicyBinding validationActions define how failures are enforced.

Allowed values are Ignore or Fail. Defaults to Fail.

Possible enum values:
 - `"Fail"` means that an error calling the webhook causes the admission to fail.
 - `"Ignore"` means that an error calling the webhook is ignored.
*/
failurePolicy?: 'Fail' | 'Ignore';
/**
* MatchConditions is a list of conditions that must be met for a request to be validated. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.

If a parameter object is provided, it can be accessed via the `params` handle in the same manner as validation expressions.

The exact matching logic is (in order):
  1. If ANY matchCondition evaluates to FALSE, the policy is skipped.
  2. If ALL matchConditions evaluate to TRUE, the policy is evaluated.
  3. If any matchCondition evaluates to an error (but none are FALSE):
     - If failurePolicy=Fail, reject the request
     - If failurePolicy=Ignore, the policy is skipped
* @isArray
*/
matchConditions?: Array<{ expression: string; name: string }>;
}

/**
* Create a new Validatingadmissionpolicyspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec>): io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicySpec {
 return {
   matchConstraints: data?.matchConstraints !== undefined ? data.matchConstraints : {},
   paramKind: data?.paramKind !== undefined ? data.paramKind : {},
   validations: data?.validations !== undefined ? data.validations : [],
   variables: data?.variables !== undefined ? data.variables : [],
   auditAnnotations: data?.auditAnnotations !== undefined ? data.auditAnnotations : [],
   failurePolicy: data?.failurePolicy !== undefined ? data.failurePolicy : '',
   matchConditions: data?.matchConditions !== undefined ? data.matchConditions : [],
 };
}
