/**
* PodStatus represents information about the status of a pod. Status may trail the actual state of a system, especially if the node that hosts the pod cannot contact the control plane.
* @resourceType podstatus
* @kind Podstatus
*/
export interface io_k8s_api_core_v1_PodStatus {
/**
* hostIPs holds the IP addresses allocated to the host. If this field is specified, the first entry must match the hostIP field. This list is empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns means that HostIPs will not be updated even if there is a node is assigned to this pod.
* @isArray
*/
hostIPs?: io_k8s_api_core_v1_HostIP[];
/**
* The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#quality-of-service-classes

Possible enum values:
 - `"BestEffort"` is the BestEffort qos class.
 - `"Burstable"` is the Burstable qos class.
 - `"Guaranteed"` is the Guaranteed qos class.
*/
qosClass?: 'BestEffort' | 'Burstable' | 'Guaranteed';
/**
* RFC 3339 date and time at which the object was acknowledged by the Kubelet. This is before the Kubelet pulled the container image(s) for the pod.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
startTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Status of resources resize desired for pod's containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to "Proposed"
*/
resize?: string;
/**
* Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
* @isArray
*/
conditions?: io_k8s_api_core_v1_PodCondition[];
/**
* hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod
*/
hostIP?: string;
/**
* podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
*/
podIP?: string;
/**
* Status of resource claims.
* @isArray
*/
resourceClaimStatuses?: io_k8s_api_core_v1_PodResourceClaimStatus[];
/**
* A human readable message indicating details about why the pod is in this condition.
*/
message?: string;
/**
* nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
*/
nominatedNodeName?: string;
/**
* A brief CamelCase message indicating details about why the pod is in this state. e.g. 'Evicted'
*/
reason?: string;
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
/**
* podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet.
* @isArray
*/
podIPs?: io_k8s_api_core_v1_PodIP[];
/**
* Statuses of containers in this pod. Each container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
* @isArray
*/
containerStatuses?: io_k8s_api_core_v1_ContainerStatus[];
/**
* Statuses for any ephemeral containers that have run in this pod. Each ephemeral container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
* @isArray
*/
ephemeralContainerStatuses?: io_k8s_api_core_v1_ContainerStatus[];
/**
* Statuses of init containers in this pod. The most recent successful non-restartable init container will have ready = true, the most recently started container will have startTime set. Each init container in the pod should have at most one status in this list, and all statuses should be for containers in the pod. However this is not enforced. If a status for a non-existent container is present in the list, or the list has duplicate names, the behavior of various Kubernetes components is not defined and those statuses might be ignored. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-and-container-status
* @isArray
*/
initContainerStatuses?: io_k8s_api_core_v1_ContainerStatus[];
}

/**
* Create a new Podstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodStatus(data?: Partial<io_k8s_api_core_v1_PodStatus>): io_k8s_api_core_v1_PodStatus {
 return {
   hostIPs: data?.hostIPs !== undefined ? data.hostIPs : [],
   qosClass: data?.qosClass !== undefined ? data.qosClass : '',
   startTime: data?.startTime !== undefined ? data.startTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   resize: data?.resize !== undefined ? data.resize : '',
   conditions: data?.conditions !== undefined ? data.conditions : [],
   hostIP: data?.hostIP !== undefined ? data.hostIP : '',
   podIP: data?.podIP !== undefined ? data.podIP : '',
   resourceClaimStatuses: data?.resourceClaimStatuses !== undefined ? data.resourceClaimStatuses : [],
   message: data?.message !== undefined ? data.message : '',
   nominatedNodeName: data?.nominatedNodeName !== undefined ? data.nominatedNodeName : '',
   reason: data?.reason !== undefined ? data.reason : '',
   phase: data?.phase !== undefined ? data.phase : '',
   podIPs: data?.podIPs !== undefined ? data.podIPs : [],
   containerStatuses: data?.containerStatuses !== undefined ? data.containerStatuses : [],
   ephemeralContainerStatuses: data?.ephemeralContainerStatuses !== undefined ? data.ephemeralContainerStatuses : [],
   initContainerStatuses: data?.initContainerStatuses !== undefined ? data.initContainerStatuses : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_ContainerStatus, createio_k8s_api_core_v1_ContainerStatus } from '../io.k8s.api.core.v1.ContainerStatus';
import { io_k8s_api_core_v1_HostIP, createio_k8s_api_core_v1_HostIP } from '../io.k8s.api.core.v1.HostIP';
import { io_k8s_api_core_v1_PodCondition, createio_k8s_api_core_v1_PodCondition } from '../io.k8s.api.core.v1.PodCondition';
import { io_k8s_api_core_v1_PodIP, createio_k8s_api_core_v1_PodIP } from '../io.k8s.api.core.v1.PodIP';
import { io_k8s_api_core_v1_PodResourceClaimStatus, createio_k8s_api_core_v1_PodResourceClaimStatus } from '../io.k8s.api.core.v1.PodResourceClaimStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
