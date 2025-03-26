/**
* NamedRuleWithOperations is a tuple of Operations and Resources with ResourceNames.
* @resourceType namedrulewithoperation
* @kind Namedrulewithoperation
*/
export interface io_k8s_api_admissionregistration_v1_NamedRuleWithOperations {
/**
* APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
* @isArray
*/
apiGroups?: string[];
/**
* APIVersions is the API versions the resources belong to. '*' is all versions. If '*' is present, the length of the slice must be one. Required.
* @isArray
*/
apiVersions?: string[];
/**
* Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
* @isArray
*/
operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[];
/**
* ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
* @isArray
*/
resourceNames?: string[];
/**
* Resources is a list of resources this rule applies to.

For example: 'pods' means pods. 'pods/log' means the log subresource of pods. '*' means all resources, but not subresources. 'pods/*' means all subresources of pods. '*\/scale' means all scale subresources. '*\/*' means all resources and their subresources.

If wildcard is present, the validation rule will ensure resources do not overlap with each other.

Depending on the enclosing object, subresources might not be allowed. Required.
* @isArray
*/
resources?: string[];
/**
* scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".
*/
scope?: string;
}

/**
* Create a new Namedrulewithoperation with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_NamedRuleWithOperations instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_NamedRuleWithOperations(data?: Partial<io_k8s_api_admissionregistration_v1_NamedRuleWithOperations>): io_k8s_api_admissionregistration_v1_NamedRuleWithOperations {
 return {
   apiGroups: data?.apiGroups !== undefined ? data.apiGroups : [],
   apiVersions: data?.apiVersions !== undefined ? data.apiVersions : [],
   operations: data?.operations !== undefined ? data.operations : [],
   resourceNames: data?.resourceNames !== undefined ? data.resourceNames : [],
   resources: data?.resources !== undefined ? data.resources : [],
   scope: data?.scope !== undefined ? data.scope : '',
 };
}
