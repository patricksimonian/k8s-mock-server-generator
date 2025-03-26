/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @resourceType podtemplatespec
* @kind Podtemplatespec
*/
export interface io_k8s_api_core_v1_PodTemplateSpec {
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.PodSpec
*/
spec?: io_k8s_api_core_v1_PodSpec;
}

/**
* Create a new Podtemplatespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodTemplateSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodTemplateSpec(data?: Partial<io_k8s_api_core_v1_PodTemplateSpec>): io_k8s_api_core_v1_PodTemplateSpec {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_PodSpec(),
 };
}
// Required imports
import { io_k8s_api_core_v1_PodSpec, createio_k8s_api_core_v1_PodSpec } from '../podspec/io_k8s_api_core_v1_PodSpec';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
