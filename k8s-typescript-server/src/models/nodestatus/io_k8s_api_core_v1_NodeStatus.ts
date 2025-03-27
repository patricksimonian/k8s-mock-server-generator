/**
* NodeStatus is information about the current status of a node.
* @resourceType nodestatus
* @kind Nodestatus
*/
export interface io_k8s_api_core_v1_NodeStatus {
/**
* NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.

Possible enum values:
 - `"Pending"` means the node has been created/added by the system, but not configured.
 - `"Running"` means the node has been configured and has Kubernetes components running.
 - `"Terminated"` means the node has been removed from the cluster.
*/
phase?: 'Pending' | 'Running' | 'Terminated';
/**
* List of attachable volumes in use (mounted) by the node.
* @isArray
*/
volumesInUse?: string[];
/**
* List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/reference/node/node-status/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node's address in its own status or consumers of the downward API (status.hostIP).
* @isArray
*/
addresses?: io_k8s_api_core_v1_NodeAddress[];
/**
* Features describes the set of features implemented by the CRI implementation.
* @references io.k8s.api.core.v1.NodeFeatures
*/
features?: io_k8s_api_core_v1_NodeFeatures;
/**
* Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/reference/node/node-status/#info
* @references io.k8s.api.core.v1.NodeSystemInfo
*/
nodeInfo?: io_k8s_api_core_v1_NodeSystemInfo;
/**
* Status of the config assigned to the node via the dynamic Kubelet config feature.
* @references io.k8s.api.core.v1.NodeConfigStatus
*/
config?: io_k8s_api_core_v1_NodeConfigStatus;
/**
* Endpoints of daemons running on the Node.
* @references io.k8s.api.core.v1.NodeDaemonEndpoints
*/
daemonEndpoints?: io_k8s_api_core_v1_NodeDaemonEndpoints;
/**
* List of container images on this node
* @isArray
*/
images?: io_k8s_api_core_v1_ContainerImage[];
/**
* The available runtime handlers.
* @isArray
*/
runtimeHandlers?: io_k8s_api_core_v1_NodeRuntimeHandler[];
/**
* List of volumes that are attached to the node.
* @isArray
*/
volumesAttached?: io_k8s_api_core_v1_AttachedVolume[];
/**
* Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
*/
allocatable?: Record<string, any>;
/**
* Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/reference/node/node-status/#capacity
*/
capacity?: Record<string, any>;
/**
* Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/reference/node/node-status/#condition
* @isArray
*/
conditions?: io_k8s_api_core_v1_NodeCondition[];
}

/**
* Create a new Nodestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeStatus(data?: Partial<io_k8s_api_core_v1_NodeStatus>): io_k8s_api_core_v1_NodeStatus {
 return {
   phase: data?.phase !== undefined ? data.phase : '',
   volumesInUse: data?.volumesInUse !== undefined ? data.volumesInUse : [],
   addresses: data?.addresses !== undefined ? data.addresses : [],
   features: data?.features !== undefined ? data.features : createio_k8s_api_core_v1_NodeFeatures(),
   nodeInfo: data?.nodeInfo !== undefined ? data.nodeInfo : createio_k8s_api_core_v1_NodeSystemInfo(),
   config: data?.config !== undefined ? data.config : createio_k8s_api_core_v1_NodeConfigStatus(),
   daemonEndpoints: data?.daemonEndpoints !== undefined ? data.daemonEndpoints : createio_k8s_api_core_v1_NodeDaemonEndpoints(),
   images: data?.images !== undefined ? data.images : [],
   runtimeHandlers: data?.runtimeHandlers !== undefined ? data.runtimeHandlers : [],
   volumesAttached: data?.volumesAttached !== undefined ? data.volumesAttached : [],
   allocatable: data?.allocatable !== undefined ? data.allocatable : {},
   capacity: data?.capacity !== undefined ? data.capacity : {},
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_AttachedVolume, createio_k8s_api_core_v1_AttachedVolume } from '../io.k8s.api.core.v1.AttachedVolume';
import { io_k8s_api_core_v1_ContainerImage, createio_k8s_api_core_v1_ContainerImage } from '../io.k8s.api.core.v1.ContainerImage';
import { io_k8s_api_core_v1_NodeAddress, createio_k8s_api_core_v1_NodeAddress } from '../io.k8s.api.core.v1.NodeAddress';
import { io_k8s_api_core_v1_NodeCondition, createio_k8s_api_core_v1_NodeCondition } from '../io.k8s.api.core.v1.NodeCondition';
import { io_k8s_api_core_v1_NodeConfigStatus, createio_k8s_api_core_v1_NodeConfigStatus } from '../nodeconfigstatus/io_k8s_api_core_v1_NodeConfigStatus';
import { io_k8s_api_core_v1_NodeDaemonEndpoints, createio_k8s_api_core_v1_NodeDaemonEndpoints } from '../nodedaemonendpoint/io_k8s_api_core_v1_NodeDaemonEndpoints';
import { io_k8s_api_core_v1_NodeFeatures, createio_k8s_api_core_v1_NodeFeatures } from '../nodefeature/io_k8s_api_core_v1_NodeFeatures';
import { io_k8s_api_core_v1_NodeRuntimeHandler, createio_k8s_api_core_v1_NodeRuntimeHandler } from '../io.k8s.api.core.v1.NodeRuntimeHandler';
import { io_k8s_api_core_v1_NodeSystemInfo, createio_k8s_api_core_v1_NodeSystemInfo } from '../nodesysteminfo/io_k8s_api_core_v1_NodeSystemInfo';
