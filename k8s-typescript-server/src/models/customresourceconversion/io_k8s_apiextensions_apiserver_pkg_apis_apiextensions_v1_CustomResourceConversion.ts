/**
* CustomResourceConversion describes how to convert different versions of a CR.
* @resourceType customresourceconversion
* @kind Customresourceconversion
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion {
/**
* strategy specifies how custom resources are converted between versions. Allowed values are: - `"None"`: The converter only change the apiVersion and would not touch any other field in the custom resource. - `"Webhook"`: API Server will call to an external webhook to do the conversion. Additional information
  is needed for this option. This requires spec.preserveUnknownFields to be false, and spec.conversion.webhook to be set.
* @required
*/
strategy: string;
/**
* webhook describes how to call the conversion webhook. Required when `strategy` is set to `"Webhook"`.
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookConversion
*/
webhook?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion;
}

/**
* Create a new Customresourceconversion with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceConversion {
 return {
   strategy: data?.strategy !== undefined ? data.strategy : '',
   webhook: data?.webhook !== undefined ? data.webhook : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion(),
 };
}
// Required imports
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion } from '../webhookconversion/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_WebhookConversion';
