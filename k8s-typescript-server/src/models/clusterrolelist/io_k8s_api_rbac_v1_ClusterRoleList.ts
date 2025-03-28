/**
* ClusterRoleList is a collection of ClusterRoles
* @resourceType clusterrolelist
* @kind ClusterroleList
*/
export interface io_k8s_api_rbac_v1_ClusterRoleList {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
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
* Items is a list of ClusterRoles
* @required
* @isArray
* @references io.k8s.api.rbac.v1.ClusterRole
*/
items: io_k8s_api_rbac_v1_ClusterRole[];
}

/**
* Create a new ClusterroleList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_ClusterRoleList instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_ClusterRoleList(data?: Partial<io_k8s_api_rbac_v1_ClusterRoleList>): io_k8s_api_rbac_v1_ClusterRoleList {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
 };
}
// Required imports
import { io_k8s_api_rbac_v1_ClusterRole, createio_k8s_api_rbac_v1_ClusterRole } from '../clusterrole/io_k8s_api_rbac_v1_ClusterRole';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
