/**
* NetworkPolicyList is a list of NetworkPolicy objects.
* @resourceType networkpolicylist
* @kind NetworkpolicyList
*/
export interface io_k8s_api_networking_v1_NetworkPolicyList {
/**
* items is a list of schema objects.
* @required
* @isArray
* @references io.k8s.api.networking.v1.NetworkPolicy
*/
items: io_k8s_api_networking_v1_NetworkPolicy[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new NetworkpolicyList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_NetworkPolicyList instance with defaults applied
*/
export function createio_k8s_api_networking_v1_NetworkPolicyList(data?: Partial<io_k8s_api_networking_v1_NetworkPolicyList>): io_k8s_api_networking_v1_NetworkPolicyList {
 return {
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_networking_v1_NetworkPolicy, createio_k8s_api_networking_v1_NetworkPolicy } from '../networkpolicy/io_k8s_api_networking_v1_NetworkPolicy';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
