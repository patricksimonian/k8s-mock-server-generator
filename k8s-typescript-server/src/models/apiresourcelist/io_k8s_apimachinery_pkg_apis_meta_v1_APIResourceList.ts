/**
* APIResourceList is a list of APIResource, it is used to expose the name of the resources supported in a specific group and version, and if the resource is namespaced.
* @resourceType apiresourcelist
* @kind ApiresourceList
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* groupVersion is the group and version this APIResourceList is for.
* @required
*/
groupVersion: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* resources contains the name of the resources and if they are namespaced.
* @required
* @isArray
*/
resources: Array<{ singularName: string; verbs: string[]; categories?: string[]; group?: string; kind: string; storageVersionHash?: string; version?: string; name: string; namespaced: boolean; shortNames?: string[] }>;
}

/**
* Create a new ApiresourceList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList>): io_k8s_apimachinery_pkg_apis_meta_v1_APIResourceList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   groupVersion: data?.groupVersion !== undefined ? data.groupVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   resources: data?.resources !== undefined ? data.resources : [],
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_APIResource, createio_k8s_apimachinery_pkg_apis_meta_v1_APIResource } from '../apiresource/io_k8s_apimachinery_pkg_apis_meta_v1_APIResource';
