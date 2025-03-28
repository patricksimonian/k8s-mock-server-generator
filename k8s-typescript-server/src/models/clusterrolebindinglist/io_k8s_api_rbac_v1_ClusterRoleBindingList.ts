/**
* ClusterRoleBindingList is a collection of ClusterRoleBindings
* @resourceType clusterrolebindinglist
* @kind ClusterrolebindingList
*/
export interface io_k8s_api_rbac_v1_ClusterRoleBindingList {
/**
* Standard object's metadata.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of ClusterRoleBindings
* @required
* @isArray
* @references io.k8s.api.rbac.v1.ClusterRoleBinding
*/
items: io_k8s_api_rbac_v1_ClusterRoleBinding[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new ClusterrolebindingList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_ClusterRoleBindingList instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_ClusterRoleBindingList(data?: Partial<io_k8s_api_rbac_v1_ClusterRoleBindingList>): io_k8s_api_rbac_v1_ClusterRoleBindingList {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_rbac_v1_ClusterRoleBinding, createio_k8s_api_rbac_v1_ClusterRoleBinding } from '../clusterrolebinding/io_k8s_api_rbac_v1_ClusterRoleBinding';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
