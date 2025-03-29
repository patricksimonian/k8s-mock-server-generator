/**
* Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
* @resourceType ingress
* @kind Ingress
*/
export interface io_k8s_api_networking_v1_Ingress {
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
* spec is the desired state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.networking.v1.IngressSpec
*/
spec?: io_k8s_api_networking_v1_IngressSpec;
/**
* status is the current state of the Ingress. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.networking.v1.IngressStatus
*/
status?: io_k8s_api_networking_v1_IngressStatus;
}

/**
* Create a new Ingress with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_Ingress instance with defaults applied
*/
export function createio_k8s_api_networking_v1_Ingress(data?: Partial<io_k8s_api_networking_v1_Ingress>): io_k8s_api_networking_v1_Ingress {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_networking_v1_IngressSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_networking_v1_IngressStatus(),
 };
}
// Required imports
import { io_k8s_api_networking_v1_IngressSpec, createio_k8s_api_networking_v1_IngressSpec } from '../ingressspec/io_k8s_api_networking_v1_IngressSpec';
import { io_k8s_api_networking_v1_IngressStatus, createio_k8s_api_networking_v1_IngressStatus } from '../ingressstatus/io_k8s_api_networking_v1_IngressStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
