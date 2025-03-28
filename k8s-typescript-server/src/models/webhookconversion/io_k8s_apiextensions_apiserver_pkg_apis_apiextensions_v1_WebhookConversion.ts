/**
* WebhookConversion describes how to call a conversion webhook
* @resourceType webhookconversion
* @kind Webhookconversion
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion {
/**
* clientConfig is the instructions for how to call the webhook if strategy is `Webhook`.
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig
*/
clientConfig?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookClientConfig;
/**
* conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
* @required
* @isArray
*/
conversionReviewVersions: string[];
}

/**
* Create a new Webhookconversion with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion {
 return {
   clientConfig: data?.clientConfig !== undefined ? data.clientConfig : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookClientConfig(),
   conversionReviewVersions: data?.conversionReviewVersions !== undefined ? data.conversionReviewVersions : [],
 };
}
// Required imports
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookClientConfig, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookClientConfig } from '../webhookclientconfig/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookClientConfig';
