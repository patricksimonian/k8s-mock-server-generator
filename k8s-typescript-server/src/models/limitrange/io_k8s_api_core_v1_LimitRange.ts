/**
* LimitRange sets resource usage limits for each kind of resource in a Namespace.
* @resourceType limitrange
* @kind Limitrange
*/
export interface io_k8s_api_core_v1_LimitRange {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Spec defines the limits enforced. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.LimitRangeSpec
*/
spec?: io_k8s_api_core_v1_LimitRangeSpec;
}

/**
* Create a new Limitrange with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LimitRange instance with defaults applied
*/
export function createio_k8s_api_core_v1_LimitRange(data?: Partial<io_k8s_api_core_v1_LimitRange>): io_k8s_api_core_v1_LimitRange {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_LimitRangeSpec(),
 };
}
// Required imports
import { io_k8s_api_core_v1_LimitRangeSpec, createio_k8s_api_core_v1_LimitRangeSpec } from '../limitrangespec/io_k8s_api_core_v1_LimitRangeSpec';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
