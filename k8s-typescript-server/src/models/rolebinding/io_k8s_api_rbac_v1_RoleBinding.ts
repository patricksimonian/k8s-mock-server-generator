/**
* RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
* @resourceType rolebinding
* @kind Rolebinding
*/
export interface io_k8s_api_rbac_v1_RoleBinding {
/**
* RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. This field is immutable.
* @required
* @references io.k8s.api.rbac.v1.RoleRef
*/
roleRef: io_k8s_api_rbac_v1_RoleRef;
/**
* Subjects holds references to the objects the role applies to.
* @isArray
*/
subjects?: io_k8s_api_rbac_v1_Subject[];
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
* Create a new Rolebinding with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_RoleBinding instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_RoleBinding(data?: Partial<io_k8s_api_rbac_v1_RoleBinding>): io_k8s_api_rbac_v1_RoleBinding {
 return {
   roleRef: data?.roleRef !== undefined ? data.roleRef : createio_k8s_api_rbac_v1_RoleRef(),
   subjects: data?.subjects !== undefined ? data.subjects : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
 };
}
// Required imports
import { io_k8s_api_rbac_v1_RoleRef, createio_k8s_api_rbac_v1_RoleRef } from '../roleref/io_k8s_api_rbac_v1_RoleRef';
import { io_k8s_api_rbac_v1_Subject, createio_k8s_api_rbac_v1_Subject } from '../io.k8s.api.rbac.v1.Subject';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
