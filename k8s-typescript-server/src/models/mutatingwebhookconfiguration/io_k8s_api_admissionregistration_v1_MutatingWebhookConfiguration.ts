/**
* MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
* @resourceType mutatingwebhookconfiguration
* @kind Mutatingwebhookconfiguration
*/
export interface io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Webhooks is a list of webhooks and the affected resources and operations.
* @isArray
*/
webhooks?: io_k8s_api_admissionregistration_v1_MutatingWebhook[];
}

/**
* Create a new Mutatingwebhookconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_MutatingWebhookConfiguration {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   webhooks: data?.webhooks !== undefined ? data.webhooks : [],
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_MutatingWebhook, createio_k8s_api_admissionregistration_v1_MutatingWebhook } from '../io.k8s.api.admissionregistration.v1.MutatingWebhook';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
