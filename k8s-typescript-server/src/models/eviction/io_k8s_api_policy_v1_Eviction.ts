/**
* Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
* @resourceType eviction
* @kind Eviction
*/
export interface io_k8s_api_policy_v1_Eviction {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* DeleteOptions may be provided
* @references io.k8s.apimachinery.pkg.apis.meta.v1.DeleteOptions
*/
deleteOptions?: io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta describes the pod that is being evicted.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
}

/**
* Create a new Eviction with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_Eviction instance with defaults applied
*/
export function createio_k8s_api_policy_v1_Eviction(data?: Partial<io_k8s_api_policy_v1_Eviction>): io_k8s_api_policy_v1_Eviction {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   deleteOptions: data?.deleteOptions !== undefined ? data.deleteOptions : createio_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions(),
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions, createio_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions } from '../deleteoption/io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
