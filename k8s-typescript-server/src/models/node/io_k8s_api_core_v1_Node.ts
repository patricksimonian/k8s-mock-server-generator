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
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { resourceVersion?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; annotations?: Record<string, any>; name?: string; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; selfLink?: string; uid?: string; creationTimestamp?: Date; finalizers?: string[]; generateName?: string; generation?: number; namespace?: string };
/**
* NodeSpec describes the attributes that a node is created with.
* @isObject
*/
spec?: { podCIDR?: string; podCIDRs?: string[]; providerID?: string; taints?: Array<{ effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key: string; timeAdded?: Date; value?: string }>; unschedulable?: boolean; configSource?: { configMap?: { resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string; namespace: string } }; externalID?: string };
/**
* NodeStatus is information about the current status of a node.
* @isObject
*/
status?: { addresses?: Array<{ address: string; type: string }>; capacity?: Record<string, any>; conditions?: Array<{ lastHeartbeatTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>; config?: { active?: { configMap?: { namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string } }; assigned?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } }; error?: string; lastKnownGood?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } } }; images?: Array<{ names?: string[]; sizeBytes?: number }>; nodeInfo?: { bootID: string; containerRuntimeVersion: string; kubeProxyVersion: string; machineID: string; architecture: string; kernelVersion: string; kubeletVersion: string; operatingSystem: string; osImage: string; systemUUID: string }; runtimeHandlers?: Array<{ name?: string; features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean } }>; allocatable?: Record<string, any>; daemonEndpoints?: { kubeletEndpoint?: { Port: number } }; features?: { supplementalGroupsPolicy?: boolean }; phase?: 'Pending' | 'Running' | 'Terminated'; volumesAttached?: Array<{ devicePath: string; name: string }>; volumesInUse?: string[] };
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
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
 };
}
