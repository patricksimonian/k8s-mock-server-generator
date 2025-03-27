/**
* ContainerStatus contains details for the current status of this container.
* @resourceType containerstatus
* @kind Containerstatus
*/
export interface io_k8s_api_core_v1_ContainerStatus {
/**
* LastTerminationState holds the last termination state of the container to help debug container crashes and restarts. This field is not populated if the container is still running and RestartCount is 0.
* @references io.k8s.api.core.v1.ContainerState
*/
lastState?: io_k8s_api_core_v1_ContainerState;
/**
* Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
* @required
*/
name: string;
/**
* Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
*/
started?: boolean;
/**
* User represents user identity information initially attached to the first process of the container
* @references io.k8s.api.core.v1.ContainerUser
*/
user?: io_k8s_api_core_v1_ContainerUser;
/**
* State holds details about the container's current condition.
* @references io.k8s.api.core.v1.ContainerState
*/
state?: io_k8s_api_core_v1_ContainerState;
/**
* Status of volume mounts.
* @isArray
*/
volumeMounts?: io_k8s_api_core_v1_VolumeMountStatus[];
/**
* AllocatedResourcesStatus represents the status of various resources allocated for this Pod.
* @isArray
*/
allocatedResourcesStatus?: io_k8s_api_core_v1_ResourceStatus[];
/**
* ContainerID is the ID of the container in the format '<type>://<container_id>'. Where type is a container runtime identifier, returned from Version call of CRI API (for example "containerd").
*/
containerID?: string;
/**
* Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
* @required
*/
image: string;
/**
* ImageID is the image ID of the container's image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
* @required
*/
imageID: string;
/**
* Resources represents the compute resource requests and limits that have been successfully enacted on the running container after it has been started or has been successfully resized.
* @references io.k8s.api.core.v1.ResourceRequirements
*/
resources?: io_k8s_api_core_v1_ResourceRequirements;
/**
* AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
*/
allocatedResources?: Record<string, any>;
/**
* Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).

The value is typically used to determine whether a container is ready to accept traffic.
* @required
*/
ready: boolean;
/**
* RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
* @required
*/
restartCount: number;
}

/**
* Create a new Containerstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerStatus(data?: Partial<io_k8s_api_core_v1_ContainerStatus>): io_k8s_api_core_v1_ContainerStatus {
 return {
   lastState: data?.lastState !== undefined ? data.lastState : createio_k8s_api_core_v1_ContainerState(),
   name: data?.name !== undefined ? data.name : '',
   started: data?.started !== undefined ? data.started : false,
   user: data?.user !== undefined ? data.user : createio_k8s_api_core_v1_ContainerUser(),
   state: data?.state !== undefined ? data.state : createio_k8s_api_core_v1_ContainerState(),
   volumeMounts: data?.volumeMounts !== undefined ? data.volumeMounts : [],
   allocatedResourcesStatus: data?.allocatedResourcesStatus !== undefined ? data.allocatedResourcesStatus : [],
   containerID: data?.containerID !== undefined ? data.containerID : '',
   image: data?.image !== undefined ? data.image : '',
   imageID: data?.imageID !== undefined ? data.imageID : '',
   resources: data?.resources !== undefined ? data.resources : createio_k8s_api_core_v1_ResourceRequirements(),
   allocatedResources: data?.allocatedResources !== undefined ? data.allocatedResources : {},
   ready: data?.ready !== undefined ? data.ready : false,
   restartCount: data?.restartCount !== undefined ? data.restartCount : 0,
 };
}
// Required imports
import { io_k8s_api_core_v1_ContainerState, createio_k8s_api_core_v1_ContainerState } from '../containerstate/io_k8s_api_core_v1_ContainerState';
import { io_k8s_api_core_v1_ContainerUser, createio_k8s_api_core_v1_ContainerUser } from '../containeruser/io_k8s_api_core_v1_ContainerUser';
import { io_k8s_api_core_v1_ResourceRequirements, createio_k8s_api_core_v1_ResourceRequirements } from '../resourcerequirement/io_k8s_api_core_v1_ResourceRequirements';
import { io_k8s_api_core_v1_ResourceStatus, createio_k8s_api_core_v1_ResourceStatus } from '../io.k8s.api.core.v1.ResourceStatus';
import { io_k8s_api_core_v1_VolumeMountStatus, createio_k8s_api_core_v1_VolumeMountStatus } from '../io.k8s.api.core.v1.VolumeMountStatus';
