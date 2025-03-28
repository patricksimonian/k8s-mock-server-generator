/**
* IngressClassList is a collection of IngressClasses.
* @resourceType ingressclasslist
* @kind IngressclassList
*/
export interface io_k8s_api_networking_v1_IngressClassList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of IngressClasses.
* @required
* @isArray
* @references io.k8s.api.networking.v1.IngressClass
*/
items: io_k8s_api_networking_v1_IngressClass[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
}

/**
* Create a new IngressclassList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressClassList instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressClassList(data?: Partial<io_k8s_api_networking_v1_IngressClassList>): io_k8s_api_networking_v1_IngressClassList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
 };
}
// Required imports
import { io_k8s_api_networking_v1_IngressClass, createio_k8s_api_networking_v1_IngressClass } from '../ingressclass/io_k8s_api_networking_v1_IngressClass';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
