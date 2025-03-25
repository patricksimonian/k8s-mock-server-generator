/**
* RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/
* @resourceType runtimeclass
* @kind Runtimeclass
*/
export interface io_k8s_api_node_v1_RuntimeClass {
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
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; deletionTimestamp?: Date; finalizers?: string[]; generation?: number; name?: string; creationTimestamp?: Date; resourceVersion?: string; selfLink?: string; namespace?: string; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; uid?: string; annotations?: Record<string, any> };
/**
* Overhead structure represents the resource overhead associated with running a pod.
* @isObject
*/
overhead?: { podFixed?: Record<string, any> };
/**
* Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
* @isObject
*/
scheduling?: { nodeSelector?: Record<string, any>; tolerations?: Array<{ tolerationSeconds?: number; value?: string; effect?: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key?: string; operator?: 'Equal' | 'Exists' }> };
}

/**
* Create a new Runtimeclass with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_node_v1_RuntimeClass instance with defaults applied
*/
export function createio_k8s_api_node_v1_RuntimeClass(data?: Partial<io_k8s_api_node_v1_RuntimeClass>): io_k8s_api_node_v1_RuntimeClass {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   handler: data?.handler !== undefined ? data.handler : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   overhead: data?.overhead !== undefined ? data.overhead : {},
   scheduling: data?.scheduling !== undefined ? data.scheduling : {},
 };
}
