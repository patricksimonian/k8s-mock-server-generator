/**
* NodeStatus is information about the current status of a node.
* @resourceType nodestatus
* @kind Nodestatus
*/
export interface io_k8s_api_core_v1_NodeStatus {
/**
* List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/reference/node/node-status/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node's address in its own status or consumers of the downward API (status.hostIP).
* @isArray
*/
addresses?: Array<{ address: string; type: string }>;
/**
* Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
*/
allocatable?: Record<string, any>;
/**
* Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/reference/node/node-status/#condition
* @isArray
*/
conditions?: Array<{ lastHeartbeatTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }>;
/**
* NodeDaemonEndpoints lists ports opened by daemons running on the Node.
* @isObject
*/
daemonEndpoints?: { kubeletEndpoint?: { Port: number } };
/**
* List of container images on this node
* @isArray
*/
images?: Array<{ names?: string[]; sizeBytes?: number }>;
/**
* Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/reference/node/node-status/#capacity
*/
capacity?: Record<string, any>;
/**
* NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
* @isObject
*/
config?: { active?: { configMap?: { name: string; namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string } }; assigned?: { configMap?: { name: string; namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string } }; error?: string; lastKnownGood?: { configMap?: { uid?: string; kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string } } };
/**
* NodeFeatures describes the set of features implemented by the CRI implementation. The features contained in the NodeFeatures should depend only on the cri implementation independent of runtime handlers.
* @isObject
*/
features?: { supplementalGroupsPolicy?: boolean };
/**
* NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
* @isObject
*/
nodeInfo?: { containerRuntimeVersion: string; kernelVersion: string; kubeProxyVersion: string; machineID: string; operatingSystem: string; architecture: string; bootID: string; kubeletVersion: string; osImage: string; systemUUID: string };
/**
* NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.

Possible enum values:
 - `"Pending"` means the node has been created/added by the system, but not configured.
 - `"Running"` means the node has been configured and has Kubernetes components running.
 - `"Terminated"` means the node has been removed from the cluster.
*/
phase?: 'Pending' | 'Running' | 'Terminated';
/**
* The available runtime handlers.
* @isArray
*/
runtimeHandlers?: Array<{ features?: { recursiveReadOnlyMounts?: boolean; userNamespaces?: boolean }; name?: string }>;
/**
* List of volumes that are attached to the node.
* @isArray
*/
volumesAttached?: Array<{ devicePath: string; name: string }>;
/**
* List of attachable volumes in use (mounted) by the node.
* @isArray
*/
volumesInUse?: string[];
}

/**
* Create a new Nodestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeStatus(data?: Partial<io_k8s_api_core_v1_NodeStatus>): io_k8s_api_core_v1_NodeStatus {
 return {
   addresses: data?.addresses !== undefined ? data.addresses : [],
   allocatable: data?.allocatable !== undefined ? data.allocatable : {},
   conditions: data?.conditions !== undefined ? data.conditions : [],
   daemonEndpoints: data?.daemonEndpoints !== undefined ? data.daemonEndpoints : {},
   images: data?.images !== undefined ? data.images : [],
   capacity: data?.capacity !== undefined ? data.capacity : {},
   config: data?.config !== undefined ? data.config : {},
   features: data?.features !== undefined ? data.features : {},
   nodeInfo: data?.nodeInfo !== undefined ? data.nodeInfo : { kubeProxyVersion: '', machineID: '', operatingSystem: '', containerRuntimeVersion: '', kernelVersion: '', kubeletVersion: '', osImage: '', systemUUID: '', architecture: '', bootID: '' },
   phase: data?.phase !== undefined ? data.phase : '',
   runtimeHandlers: data?.runtimeHandlers !== undefined ? data.runtimeHandlers : [],
   volumesAttached: data?.volumesAttached !== undefined ? data.volumesAttached : [],
   volumesInUse: data?.volumesInUse !== undefined ? data.volumesInUse : [],
 };
}
