/**
* Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
* @resourceType node
* @kind Node
*/
export interface io_k8s_api_core_v1_Node {
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
* Spec defines the behavior of a node. https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.NodeSpec
*/
spec?: io_k8s_api_core_v1_NodeSpec;
/**
* Most recently observed status of the node. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.core.v1.NodeStatus
*/
status?: io_k8s_api_core_v1_NodeStatus;
}

/**
* Create a new Node with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Node instance with defaults applied
*/
export function createio_k8s_api_core_v1_Node(data?: Partial<io_k8s_api_core_v1_Node>): io_k8s_api_core_v1_Node {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_core_v1_NodeSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_core_v1_NodeStatus(),
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeSpec, createio_k8s_api_core_v1_NodeSpec } from '../nodespec/io_k8s_api_core_v1_NodeSpec';
import { io_k8s_api_core_v1_NodeStatus, createio_k8s_api_core_v1_NodeStatus } from '../nodestatus/io_k8s_api_core_v1_NodeStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
