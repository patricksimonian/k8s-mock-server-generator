/**
* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
* @resourceType resourceattribute
* @kind Resourceattribute
*/
export interface io_k8s_api_authorization_v1_ResourceAttributes {
/**
* FieldSelectorAttributes indicates a field limited access. Webhook authors are encouraged to * ensure rawSelector and requirements are not both set * consider the requirements field if set * not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the *SubjectAccessReview endpoints of the kube-apiserver: * If rawSelector is empty and requirements are empty, the request is not limited. * If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. * If rawSelector is empty and requirements are present, the requirements should be honored * If rawSelector is present and requirements are present, the request is invalid.
* @isObject
*/
fieldSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> };
/**
* Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
*/
name?: string;
/**
* Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.
*/
verb?: string;
/**
* Version is the API Version of the Resource.  "*" means all.
*/
version?: string;
/**
* Group is the API Group of the Resource.  "*" means all.
*/
group?: string;
/**
* LabelSelectorAttributes indicates a label limited access. Webhook authors are encouraged to * ensure rawSelector and requirements are not both set * consider the requirements field if set * not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the *SubjectAccessReview endpoints of the kube-apiserver: * If rawSelector is empty and requirements are empty, the request is not limited. * If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. * If rawSelector is empty and requirements are present, the requirements should be honored * If rawSelector is present and requirements are present, the request is invalid.
* @isObject
*/
labelSelector?: { rawSelector?: string; requirements?: Array<{ key: string; operator: string; values?: string[] }> };
/**
* Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
*/
namespace?: string;
/**
* Resource is one of the existing resource types.  "*" means all.
*/
resource?: string;
/**
* Subresource is one of the existing resource types.  "" means none.
*/
subresource?: string;
}

/**
* Create a new Resourceattribute with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_ResourceAttributes instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_ResourceAttributes(data?: Partial<io_k8s_api_authorization_v1_ResourceAttributes>): io_k8s_api_authorization_v1_ResourceAttributes {
 return {
   fieldSelector: data?.fieldSelector !== undefined ? data.fieldSelector : {},
   name: data?.name !== undefined ? data.name : '',
   verb: data?.verb !== undefined ? data.verb : '',
   version: data?.version !== undefined ? data.version : '',
   group: data?.group !== undefined ? data.group : '',
   labelSelector: data?.labelSelector !== undefined ? data.labelSelector : {},
   namespace: data?.namespace !== undefined ? data.namespace : '',
   resource: data?.resource !== undefined ? data.resource : '',
   subresource: data?.subresource !== undefined ? data.subresource : '',
 };
}
