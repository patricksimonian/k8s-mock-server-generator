/**
* FieldSelectorAttributes indicates a field limited access. Webhook authors are encouraged to * ensure rawSelector and requirements are not both set * consider the requirements field if set * not try to parse or consider the rawSelector field if set. This is to avoid another CVE-2022-2880 (i.e. getting different systems to agree on how exactly to parse a query is not something we want), see https://www.oxeye.io/resources/golang-parameter-smuggling-attack for more details. For the *SubjectAccessReview endpoints of the kube-apiserver: * If rawSelector is empty and requirements are empty, the request is not limited. * If rawSelector is present and requirements are empty, the rawSelector will be parsed and limited if the parsing succeeds. * If rawSelector is empty and requirements are present, the requirements should be honored * If rawSelector is present and requirements are present, the request is invalid.
* @resourceType fieldselectorattribute
* @kind Fieldselectorattribute
*/
export interface io_k8s_api_authorization_v1_FieldSelectorAttributes {
/**
* rawSelector is the serialization of a field selector that would be included in a query parameter. Webhook implementations are encouraged to ignore rawSelector. The kube-apiserver's *SubjectAccessReview will parse the rawSelector as long as the requirements are not present.
*/
rawSelector?: string;
/**
* requirements is the parsed interpretation of a field selector. All requirements must be met for a resource instance to match the selector. Webhook implementations should handle requirements, but how to handle them is up to the webhook. Since requirements can only limit the request, it is safe to authorize as unlimited request if the requirements are not understood.
* @isArray
*/
requirements?: Array<{ key: string; operator: string; values?: string[] }>;
}

/**
* Create a new Fieldselectorattribute with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_FieldSelectorAttributes instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_FieldSelectorAttributes(data?: Partial<io_k8s_api_authorization_v1_FieldSelectorAttributes>): io_k8s_api_authorization_v1_FieldSelectorAttributes {
 return {
   rawSelector: data?.rawSelector !== undefined ? data.rawSelector : '',
   requirements: data?.requirements !== undefined ? data.requirements : [],
 };
}
