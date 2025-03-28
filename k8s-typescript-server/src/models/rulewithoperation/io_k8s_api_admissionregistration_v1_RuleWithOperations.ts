/**
* RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.
* @resourceType rulewithoperation
* @kind Rulewithoperation
*/
export interface io_k8s_api_admissionregistration_v1_RuleWithOperations {
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
/**
* APIGroups is the API groups the resources belong to. '*' is all groups. If '*' is present, the length of the slice must be one. Required.
* @isArray
*/
apiGroups?: string[];
}

/**
* Create a new Rulewithoperation with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_RuleWithOperations instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_RuleWithOperations(data?: Partial<io_k8s_api_admissionregistration_v1_RuleWithOperations>): io_k8s_api_admissionregistration_v1_RuleWithOperations {
 return {
   apiVersions: data?.apiVersions !== undefined ? data.apiVersions : [],
   operations: data?.operations !== undefined ? data.operations : [],
   resources: data?.resources !== undefined ? data.resources : [],
   scope: data?.scope !== undefined ? data.scope : '',
   apiGroups: data?.apiGroups !== undefined ? data.apiGroups : [],
 };
}
