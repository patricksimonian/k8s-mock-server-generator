/**
* Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
* @resourceType role
* @kind Role
*/
export interface io_k8s_api_rbac_v1_Role {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Rules holds all the PolicyRules for this Role
* @isArray
*/
rules?: io_k8s_api_rbac_v1_PolicyRule[];
}

/**
* Create a new Role with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_Role instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_Role(data?: Partial<io_k8s_api_rbac_v1_Role>): io_k8s_api_rbac_v1_Role {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   rules: data?.rules !== undefined ? data.rules : [],
 };
}
// Required imports
import { io_k8s_api_rbac_v1_PolicyRule, createio_k8s_api_rbac_v1_PolicyRule } from '../io.k8s.api.rbac.v1.PolicyRule';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
