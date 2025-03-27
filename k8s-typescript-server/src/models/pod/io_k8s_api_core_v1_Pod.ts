/**
* Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
* @resourceType pod
* @kind Pod
*/
export interface io_k8s_api_core_v1_Pod {
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
* Specification of the desired behavior of the pod. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.PodSpec
*/
spec?: io_k8s_api_core_v1_PodSpec;
/**
* Most recently observed status of the pod. This data may not be up to date. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.PodStatus
*/
status?: io_k8s_api_core_v1_PodStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Pod with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Pod instance with defaults applied
*/
export function createio_k8s_api_core_v1_Pod(data?: Partial<io_k8s_api_core_v1_Pod>): io_k8s_api_core_v1_Pod {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_PodSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_core_v1_PodStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_PodSpec, createio_k8s_api_core_v1_PodSpec } from '../podspec/io_k8s_api_core_v1_PodSpec';
import { io_k8s_api_core_v1_PodStatus, createio_k8s_api_core_v1_PodStatus } from '../podstatus/io_k8s_api_core_v1_PodStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
