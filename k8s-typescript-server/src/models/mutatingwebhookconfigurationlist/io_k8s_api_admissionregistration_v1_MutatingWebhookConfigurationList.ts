/**
* MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
* @resourceType mutatingwebhookconfigurationlist
* @kind MutatingwebhookconfigurationList
*/
export interface io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of MutatingWebhookConfiguration.
* @required
* @isArray
* @references io.k8s.api.admissionregistration.v1.MutatingWebhookConfiguration
*/
items: io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration[];
}

/**
* Create a new MutatingwebhookconfigurationList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList(data?: Partial<io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList>): io_k8s_api_admissionregistration_v1_MutatingWebhookConfigurationList {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration, createio_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration } from '../mutatingwebhookconfiguration/io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
