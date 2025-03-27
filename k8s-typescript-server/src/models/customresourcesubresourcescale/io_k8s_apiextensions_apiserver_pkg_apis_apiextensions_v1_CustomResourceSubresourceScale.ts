/**
* CustomResourceSubresourceScale defines how to serve the scale subresource for CustomResources.
* @resourceType customresourcesubresourcescale
* @kind Customresourcesubresourcescale
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale {
/**
* labelSelectorPath defines the JSON path inside of a custom resource that corresponds to Scale `status.selector`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status` or `.spec`. Must be set to work with HorizontalPodAutoscaler. The field pointed by this JSON path must be a string field (not a complex selector struct) which contains a serialized label selector in string form. More info: https://kubernetes.io/docs/tasks/access-kubernetes-api/custom-resources/custom-resource-definitions#scale-subresource If there is no value under the given path in the custom resource, the `status.selector` value in the `/scale` subresource will default to the empty string.
*/
labelSelectorPath?: string;
/**
* specReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `spec.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.spec`. If there is no value under the given path in the custom resource, the `/scale` subresource will return an error on GET.
* @required
*/
specReplicasPath: string;
/**
* statusReplicasPath defines the JSON path inside of a custom resource that corresponds to Scale `status.replicas`. Only JSON paths without the array notation are allowed. Must be a JSON Path under `.status`. If there is no value under the given path in the custom resource, the `status.replicas` value in the `/scale` subresource will default to 0.
* @required
*/
statusReplicasPath: string;
}

/**
* Create a new Customresourcesubresourcescale with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresourceScale {
 return {
   labelSelectorPath: data?.labelSelectorPath !== undefined ? data.labelSelectorPath : '',
   specReplicasPath: data?.specReplicasPath !== undefined ? data.specReplicasPath : '',
   statusReplicasPath: data?.statusReplicasPath !== undefined ? data.statusReplicasPath : '',
 };
}
