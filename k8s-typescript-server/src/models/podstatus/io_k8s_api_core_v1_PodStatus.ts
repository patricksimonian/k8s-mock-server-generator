/**
* PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
* @resourceType podstatus
* @kind Podstatus
*/
export interface io_k8s_api_core_v1_PodStatus {
/**
* Statuses of init containers in this pod. The most recent successful non-restartable init container will have ready = true, the most recently started container will have startTime set. Each init container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-and-container-status
* @isArray
*/
initContainerStatuses?: Array<{ state?: { waiting?: { message?: string; reason?: string }; running?: { startedAt?: Date }; terminated?: { containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date } }; allocatedResourcesStatus?: Array<{ resources?: Array<{ health?: string; resourceID: string }>; name: string }>; name: string; resources?: { claims?: Array<{ name: string; request?: string }>; limits?: Record<string, any>; requests?: Record<string, any> }; restartCount: number; started?: boolean; ready: boolean; allocatedResources?: Record<string, any>; image: string; imageID: string; lastState?: { running?: { startedAt?: Date }; terminated?: { finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date; containerID?: string; exitCode: number }; waiting?: { message?: string; reason?: string } }; containerID?: string; user?: { linux?: { gid: number; supplementalGroups?: number[]; uid: number } }; volumeMounts?: Array<{ readOnly?: boolean; recursiveReadOnly?: string; mountPath: string; name: string }> }>;
/**
* nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
*/
nominatedNodeName?: string;
/**
* A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted'
*/
reason?: string;
/**
* Status of resource claims.
* @isArray
*/
resourceClaimStatuses?: Array<{ name: string; resourceClaimName?: string }>;
/**
* Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
* @isArray
*/
conditions?: Array<{ reason?: string; status: string; type: string; lastProbeTime?: Date; lastTransitionTime?: Date; message?: string }>;
/**
* Statuses for any ephemeral containers that have run in this pod. Each ephemeral container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
* @isArray
*/
ephemeralContainerStatuses?: Array<{ allocatedResourcesStatus?: Array<{ name: string; resources?: Array<{ health?: string; resourceID: string }> }>; image: string; imageID: string; state?: { running?: { startedAt?: Date }; terminated?: { finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date; containerID?: string; exitCode: number }; waiting?: { message?: string; reason?: string } }; user?: { linux?: { gid: number; supplementalGroups?: number[]; uid: number } }; volumeMounts?: Array<{ mountPath: string; name: string; readOnly?: boolean; recursiveReadOnly?: string }>; allocatedResources?: Record<string, any>; containerID?: string; ready: boolean; resources?: { claims?: Array<{ name: string; request?: string }>; limits?: Record<string, any>; requests?: Record<string, any> }; restartCount: number; started?: boolean; lastState?: { running?: { startedAt?: Date }; terminated?: { startedAt?: Date; containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number }; waiting?: { message?: string; reason?: string } }; name: string }>;
/**
* podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet.
* @isArray
*/
podIPs?: Array<{ ip: string }>;
/**
* hostIPs holds the IP addresses allocated to the host. If this field is specified, the first entry must match the hostIP field. This list is empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns means that HostIPs will not be updated even if there is a node is assigned to this pod.
* @isArray
*/
hostIPs?: Array<{ ip: string }>;
/**
* podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
*/
podIP?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
startTime?: Date;
/**
* Statuses of containers in this pod. Each container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
* @isArray
*/
containerStatuses?: Array<{ ready: boolean; started?: boolean; volumeMounts?: Array<{ mountPath: string; name: string; readOnly?: boolean; recursiveReadOnly?: string }>; imageID: string; lastState?: { waiting?: { message?: string; reason?: string }; running?: { startedAt?: Date }; terminated?: { exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date; containerID?: string } }; name: string; resources?: { limits?: Record<string, any>; requests?: Record<string, any>; claims?: Array<{ name: string; request?: string }> }; allocatedResources?: Record<string, any>; allocatedResourcesStatus?: Array<{ name: string; resources?: Array<{ health?: string; resourceID: string }> }>; image: string; state?: { running?: { startedAt?: Date }; terminated?: { reason?: string; signal?: number; startedAt?: Date; containerID?: string; exitCode: number; finishedAt?: Date; message?: string }; waiting?: { message?: string; reason?: string } }; containerID?: string; restartCount: number; user?: { linux?: { gid: number; supplementalGroups?: number[]; uid: number } } }>;
/**
* hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod
*/
hostIP?: string;
/**
* The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#quality-of-service-classes

Possible enum values:
 - `"BestEffort"` is the BestEffort qos class.
 - `"Burstable"` is the Burstable qos class.
 - `"Guaranteed"` is the Guaranteed qos class.
*/
qosClass?: 'BestEffort' | 'Burstable' | 'Guaranteed';
/**
* Status of resources resize desired for pod's containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to "Proposed"
*/
resize?: string;
/**
* A human readable message indicating details about why the pod is in this condition.
*/
message?: string;
/**
* The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod's status. There are five possible phase values:

Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.

More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase

Possible enum values:
 - `"Failed"` means that all containers in the pod have terminated, and at least one container has terminated in a failure (exited with a non-zero exit code or was stopped by the system).
 - `"Pending"` means the pod has been accepted by the system, but one or more of the containers has not been started. This includes time before being bound to a node, as well as time spent pulling images onto the host.
 - `"Running"` means the pod has been bound to a node and all of the containers have been started. At least one container is still running or is in the process of being restarted.
 - `"Succeeded"` means that all containers in the pod have voluntarily terminated with a container exit code of 0, and the system is not going to restart any of these containers.
 - `"Unknown"` means that for some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod. Deprecated: It isn't being set since 2015 (74da3b14b0c0f658b3bb8d2def5094686d0e9095)
*/
phase?: 'Failed' | 'Pending' | 'Running' | 'Succeeded' | 'Unknown';
}

/**
* Create a new Podstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodStatus(data?: Partial<io_k8s_api_core_v1_PodStatus>): io_k8s_api_core_v1_PodStatus {
 return {
   initContainerStatuses: data?.initContainerStatuses !== undefined ? data.initContainerStatuses : [],
   nominatedNodeName: data?.nominatedNodeName !== undefined ? data.nominatedNodeName : '',
   reason: data?.reason !== undefined ? data.reason : '',
   resourceClaimStatuses: data?.resourceClaimStatuses !== undefined ? data.resourceClaimStatuses : [],
   conditions: data?.conditions !== undefined ? data.conditions : [],
   ephemeralContainerStatuses: data?.ephemeralContainerStatuses !== undefined ? data.ephemeralContainerStatuses : [],
   podIPs: data?.podIPs !== undefined ? data.podIPs : [],
   hostIPs: data?.hostIPs !== undefined ? data.hostIPs : [],
   podIP: data?.podIP !== undefined ? data.podIP : '',
   startTime: data?.startTime !== undefined ? data.startTime : '',
   containerStatuses: data?.containerStatuses !== undefined ? data.containerStatuses : [],
   hostIP: data?.hostIP !== undefined ? data.hostIP : '',
   qosClass: data?.qosClass !== undefined ? data.qosClass : '',
   resize: data?.resize !== undefined ? data.resize : '',
   message: data?.message !== undefined ? data.message : '',
   phase: data?.phase !== undefined ? data.phase : '',
 };
}
