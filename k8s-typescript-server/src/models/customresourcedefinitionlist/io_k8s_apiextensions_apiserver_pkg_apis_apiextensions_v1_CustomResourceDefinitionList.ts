/**
* CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
* @resourceType customresourcedefinitionlist
* @kind CustomresourcedefinitionList
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items list individual CustomResourceDefinition objects
* @required
* @isArray
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinition
*/
items: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition[];
}

/**
* Create a new CustomresourcedefinitionList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionList {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
 };
}
// Required imports
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition } from '../customresourcedefinition/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
