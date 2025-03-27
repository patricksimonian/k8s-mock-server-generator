/**
* CustomResourceSubresources defines the status and scale subresources for CustomResources.
* @resourceType customresourcesubresource
* @kind Customresourcesubresource
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources {
/**
* scale indicates the custom resource should serve a `/scale` subresource that returns an `autoscaling/v1` Scale object.
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceScale
*/
scale?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale;
/**
* status indicates the custom resource should serve a `/status` subresource. When enabled: 1. requests to the custom resource primary endpoint ignore changes to the `status` stanza of the object. 2. requests to the custom resource `/status` subresource ignore changes to anything other than the `status` stanza of the object.
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresourceStatus
*/
status?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus;
}

/**
* Create a new Customresourcesubresource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources {
 return {
   scale: data?.scale !== undefined ? data.scale : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale(),
   status: data?.status !== undefined ? data.status : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus(),
 };
}
// Required imports
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale } from '../customresourcesubresourcescale/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus } from '../customresourcesubresourcestatus/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceStatus';
