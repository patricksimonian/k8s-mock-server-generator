/**
* PolicyRulesWithSubjects prescribes a test that applies to a request to an apiserver. The test considers the subject making the request, the verb being requested, and the resource to be acted upon. This PolicyRulesWithSubjects matches a request if and only if both (a) at least one member of subjects matches the request and (b) at least one member of resourceRules or nonResourceRules matches the request.
* @resourceType policyruleswithsubject
* @kind Policyruleswithsubject
*/
export interface io_k8s_api_flowcontrol_v1_PolicyRulesWithSubjects {
/**
* `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
* @isArray
*/
nonResourceRules?: Array<{ nonResourceURLs: string[]; verbs: string[] }>;
/**
* `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
* @isArray
*/
resourceRules?: Array<{ apiGroups: string[]; clusterScope?: boolean; namespaces?: string[]; resources: string[]; verbs: string[] }>;
/**
* subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
* @required
* @isArray
*/
subjects: Array<{ group?: { name: string }; kind: string; serviceAccount?: { name: string; namespace: string }; user?: { name: string } }>;
}

/**
* Create a new Policyruleswithsubject with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PolicyRulesWithSubjects instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PolicyRulesWithSubjects(data?: Partial<io_k8s_api_flowcontrol_v1_PolicyRulesWithSubjects>): io_k8s_api_flowcontrol_v1_PolicyRulesWithSubjects {
 return {
   nonResourceRules: data?.nonResourceRules !== undefined ? data.nonResourceRules : [],
   resourceRules: data?.resourceRules !== undefined ? data.resourceRules : [],
   subjects: data?.subjects !== undefined ? data.subjects : [],
 };
}
