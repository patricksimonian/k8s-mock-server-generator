/**
* NodeList is the whole list of all Nodes which have been registered with master.
* @resourceType nodelist
* @kind NodeList
*/
export interface io_k8s_api_core_v1_NodeList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of nodes
* @required
* @isArray
* @references io.k8s.api.core.v1.Node
*/
items: io_k8s_api_core_v1_Node[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
}

/**
* Create a new NodeList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeList instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeList(data?: Partial<io_k8s_api_core_v1_NodeList>): io_k8s_api_core_v1_NodeList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
 };
}
// Required imports
import { io_k8s_api_core_v1_Node, createio_k8s_api_core_v1_Node } from '../node/io_k8s_api_core_v1_Node';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
