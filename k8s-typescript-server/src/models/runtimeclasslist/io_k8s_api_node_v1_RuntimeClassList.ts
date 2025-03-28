/**
* RuntimeClassList is a list of RuntimeClass objects.
* @resourceType runtimeclasslist
* @kind RuntimeclassList
*/
export interface io_k8s_api_node_v1_RuntimeClassList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is a list of schema objects.
* @required
* @isArray
* @references io.k8s.api.node.v1.RuntimeClass
*/
items: io_k8s_api_node_v1_RuntimeClass[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
}

/**
* Create a new RuntimeclassList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_node_v1_RuntimeClassList instance with defaults applied
*/
export function createio_k8s_api_node_v1_RuntimeClassList(data?: Partial<io_k8s_api_node_v1_RuntimeClassList>): io_k8s_api_node_v1_RuntimeClassList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
 };
}
// Required imports
import { io_k8s_api_node_v1_RuntimeClass, createio_k8s_api_node_v1_RuntimeClass } from '../runtimeclass/io_k8s_api_node_v1_RuntimeClass';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
