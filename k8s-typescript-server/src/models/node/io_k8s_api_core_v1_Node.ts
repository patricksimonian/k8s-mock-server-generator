/**
* Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
* @resourceType node
* @kind Node
*/
export interface io_k8s_api_core_v1_Node {
/**
* NodeSpec describes the attributes that a node is created with.
* @isObject
*/
spec?: { taints?: Array<{ effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key: string; timeAdded?: Date; value?: string }>; unschedulable?: boolean; configSource?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; externalID?: string; podCIDR?: string; podCIDRs?: string[]; providerID?: string };
/**
* NodeStatus is information about the current status of a node.
* @isObject
*/
status?: { images?: Array<{ names?: string[]; sizeBytes?: number }>; runtimeHandlers?: Array<{ features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean }; name?: string }>; daemonEndpoints?: { kubeletEndpoint?: { Port: number } }; allocatable?: Record<string, any>; capacity?: Record<string, any>; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string; lastHeartbeatTime?: Date }>; config?: { active?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; assigned?: { configMap?: { namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string } }; error?: string; lastKnownGood?: { configMap?: { name: string; namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string } } }; features?: { supplementalGroupsPolicy?: boolean }; nodeInfo?: { bootID: string; containerRuntimeVersion: string; systemUUID: string; osImage: string; architecture: string; kernelVersion: string; kubeProxyVersion: string; kubeletVersion: string; machineID: string; operatingSystem: string }; phase?: 'Pending' | 'Running' | 'Terminated'; addresses?: Array<{ address: string; type: string }>; volumesInUse?: string[]; volumesAttached?: Array<{ devicePath: string; name: string }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionTimestamp?: Date; finalizers?: string[]; namespace?: string; deletionGracePeriodSeconds?: number; generateName?: string; selfLink?: string; annotations?: Record<string, any>; creationTimestamp?: Date; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; resourceVersion?: string; uid?: string; generation?: number; labels?: Record<string, any> };
}

/**
* Create a new Node with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Node instance with defaults applied
*/
export function createio_k8s_api_core_v1_Node(data?: Partial<io_k8s_api_core_v1_Node>): io_k8s_api_core_v1_Node {
 return {
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
