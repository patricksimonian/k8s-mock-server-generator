/**
* Namespace provides a scope for Names. Use of multiple namespaces is optional.
* @resourceType namespace
* @kind Namespace
*/
export interface io_k8s_api_core_v1_Namespace {
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
* Spec defines the behavior of the Namespace. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.NamespaceSpec
*/
spec?: io_k8s_api_core_v1_NamespaceSpec;
/**
* Status describes the current status of a Namespace. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.NamespaceStatus
*/
status?: io_k8s_api_core_v1_NamespaceStatus;
}

/**
* Create a new Namespace with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Namespace instance with defaults applied
*/
export function createio_k8s_api_core_v1_Namespace(data?: Partial<io_k8s_api_core_v1_Namespace>): io_k8s_api_core_v1_Namespace {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_NamespaceSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_core_v1_NamespaceStatus(),
 };
}
// Required imports
import { io_k8s_api_core_v1_NamespaceSpec, createio_k8s_api_core_v1_NamespaceSpec } from '../namespacespec/io_k8s_api_core_v1_NamespaceSpec';
import { io_k8s_api_core_v1_NamespaceStatus, createio_k8s_api_core_v1_NamespaceStatus } from '../namespacestatus/io_k8s_api_core_v1_NamespaceStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
