/**
* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
* @resourceType clusterrole
* @kind Clusterrole
*/
export interface io_k8s_api_rbac_v1_ClusterRole {
/**
* Rules holds all the PolicyRules for this ClusterRole
* @isArray
*/
rules?: io_k8s_api_rbac_v1_PolicyRule[];
/**
* AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
* @references io.k8s.api.rbac.v1.AggregationRule
*/
aggregationRule?: io_k8s_api_rbac_v1_AggregationRule;
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
}

/**
* Create a new Clusterrole with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_ClusterRole instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_ClusterRole(data?: Partial<io_k8s_api_rbac_v1_ClusterRole>): io_k8s_api_rbac_v1_ClusterRole {
 return {
   rules: data?.rules !== undefined ? data.rules : [],
   aggregationRule: data?.aggregationRule !== undefined ? data.aggregationRule : createio_k8s_api_rbac_v1_AggregationRule(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
 };
}
// Required imports
import { io_k8s_api_rbac_v1_AggregationRule, createio_k8s_api_rbac_v1_AggregationRule } from '../aggregationrule/io_k8s_api_rbac_v1_AggregationRule';
import { io_k8s_api_rbac_v1_PolicyRule, createio_k8s_api_rbac_v1_PolicyRule } from '../io.k8s.api.rbac.v1.PolicyRule';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
