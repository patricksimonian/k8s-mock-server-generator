/**
* RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/
* @resourceType runtimeclass
* @kind Runtimeclass
*/
export interface io_k8s_api_node_v1_RuntimeClass {
/**
* scheduling holds the scheduling constraints to ensure that pods running with this RuntimeClass are scheduled to nodes that support it. If scheduling is nil, this RuntimeClass is assumed to be supported by all nodes.
* @references io.k8s.api.node.v1.Scheduling
*/
scheduling?: io_k8s_api_node_v1_Scheduling;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called "runc" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
* @required
*/
handler: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* overhead represents the resource overhead associated with running a pod for a given RuntimeClass. For more details, see
 https://kubernetes.io/docs/concepts/scheduling-eviction/pod-overhead/
* @references io.k8s.api.node.v1.Overhead
*/
overhead?: io_k8s_api_node_v1_Overhead;
}

/**
* Create a new Runtimeclass with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_node_v1_RuntimeClass instance with defaults applied
*/
export function createio_k8s_api_node_v1_RuntimeClass(data?: Partial<io_k8s_api_node_v1_RuntimeClass>): io_k8s_api_node_v1_RuntimeClass {
 return {
   scheduling: data?.scheduling !== undefined ? data.scheduling : createio_k8s_api_node_v1_Scheduling(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   handler: data?.handler !== undefined ? data.handler : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   overhead: data?.overhead !== undefined ? data.overhead : createio_k8s_api_node_v1_Overhead(),
 };
}
// Required imports
import { io_k8s_api_node_v1_Overhead, createio_k8s_api_node_v1_Overhead } from '../overhead/io_k8s_api_node_v1_Overhead';
import { io_k8s_api_node_v1_Scheduling, createio_k8s_api_node_v1_Scheduling } from '../scheduling/io_k8s_api_node_v1_Scheduling';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
