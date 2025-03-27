/**
* ResourceAttributes includes the authorization attributes available for resource requests to the Authorizer interface
* @resourceType resourceattribute
* @kind Resourceattribute
*/
export interface io_k8s_api_authorization_v1_ResourceAttributes {
/**
* Group is the API Group of the Resource.  "*" means all.
*/
group?: string;
/**
* Namespace is the namespace of the action being requested.  Currently, there is no distinction between no namespace and all namespaces "" (empty) is defaulted for LocalSubjectAccessReviews "" (empty) is empty for cluster-scoped resources "" (empty) means "all" for namespace scoped resources from a SubjectAccessReview or SelfSubjectAccessReview
*/
namespace?: string;
/**
* Verb is a kubernetes resource API verb, like: get, list, watch, create, update, delete, proxy.  "*" means all.
*/
verb?: string;
/**
* fieldSelector describes the limitation on access based on field.  It can only limit access, not broaden it.

This field  is alpha-level. To use this field, you must enable the `AuthorizeWithSelectors` feature gate (disabled by default).
* @references io.k8s.api.authorization.v1.FieldSelectorAttributes
*/
fieldSelector?: io_k8s_api_authorization_v1_FieldSelectorAttributes;
/**
* labelSelector describes the limitation on access based on labels.  It can only limit access, not broaden it.

This field  is alpha-level. To use this field, you must enable the `AuthorizeWithSelectors` feature gate (disabled by default).
* @references io.k8s.api.authorization.v1.LabelSelectorAttributes
*/
labelSelector?: io_k8s_api_authorization_v1_LabelSelectorAttributes;
/**
* Name is the name of the resource being requested for a "get" or deleted for a "delete". "" (empty) means all.
*/
name?: string;
/**
* Resource is one of the existing resource types.  "*" means all.
*/
resource?: string;
/**
* Subresource is one of the existing resource types.  "" means none.
*/
subresource?: string;
/**
* Version is the API Version of the Resource.  "*" means all.
*/
version?: string;
}

/**
* Create a new Resourceattribute with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_ResourceAttributes instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_ResourceAttributes(data?: Partial<io_k8s_api_authorization_v1_ResourceAttributes>): io_k8s_api_authorization_v1_ResourceAttributes {
 return {
   group: data?.group !== undefined ? data.group : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
   verb: data?.verb !== undefined ? data.verb : '',
   fieldSelector: data?.fieldSelector !== undefined ? data.fieldSelector : createio_k8s_api_authorization_v1_FieldSelectorAttributes(),
   labelSelector: data?.labelSelector !== undefined ? data.labelSelector : createio_k8s_api_authorization_v1_LabelSelectorAttributes(),
   name: data?.name !== undefined ? data.name : '',
   resource: data?.resource !== undefined ? data.resource : '',
   subresource: data?.subresource !== undefined ? data.subresource : '',
   version: data?.version !== undefined ? data.version : '',
 };
}
// Required imports
import { io_k8s_api_authorization_v1_FieldSelectorAttributes, createio_k8s_api_authorization_v1_FieldSelectorAttributes } from '../fieldselectorattribute/io_k8s_api_authorization_v1_FieldSelectorAttributes';
import { io_k8s_api_authorization_v1_LabelSelectorAttributes, createio_k8s_api_authorization_v1_LabelSelectorAttributes } from '../labelselectorattribute/io_k8s_api_authorization_v1_LabelSelectorAttributes';
