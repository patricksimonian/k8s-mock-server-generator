/**
* ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
* @resourceType validatingwebhookconfiguration
* @kind Validatingwebhookconfiguration
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
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
webhooks?: io_k8s_api_admissionregistration_v1_ValidatingWebhook[];
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Validatingwebhookconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   webhooks: data?.webhooks !== undefined ? data.webhooks : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_ValidatingWebhook, createio_k8s_api_admissionregistration_v1_ValidatingWebhook } from '../io.k8s.api.admissionregistration.v1.ValidatingWebhook';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
