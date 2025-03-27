/**
* APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
* @resourceType apigrouplist
* @kind ApigroupList
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList {
/**
* groups is a list of APIGroup.
* @required
* @isArray
*/
groups: io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new ApigroupList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList>): io_k8s_apimachinery_pkg_apis_meta_v1_APIGroupList {
 return {
   groups: data?.groups !== undefined ? data.groups : [],
   kind: data?.kind !== undefined ? data.kind : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_APIGroup, createio_k8s_apimachinery_pkg_apis_meta_v1_APIGroup } from '../io.k8s.apimachinery.pkg.apis.meta.v1.APIGroup';
