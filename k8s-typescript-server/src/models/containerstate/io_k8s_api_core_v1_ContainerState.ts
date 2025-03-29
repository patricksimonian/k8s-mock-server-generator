/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
* @resourceType containerstate
* @kind Containerstate
*/
export interface io_k8s_api_core_v1_ContainerState {
/**
* Details about a running container
* @references io.k8s.api.core.v1.ContainerStateRunning
*/
running?: io_k8s_api_core_v1_ContainerStateRunning;
/**
* Details about a terminated container
* @references io.k8s.api.core.v1.ContainerStateTerminated
*/
terminated?: io_k8s_api_core_v1_ContainerStateTerminated;
/**
* Details about a waiting container
* @references io.k8s.api.core.v1.ContainerStateWaiting
*/
waiting?: io_k8s_api_core_v1_ContainerStateWaiting;
}

/**
* Create a new Containerstate with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerState instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerState(data?: Partial<io_k8s_api_core_v1_ContainerState>): io_k8s_api_core_v1_ContainerState {
 return {
   running: data?.running !== undefined ? data.running : createio_k8s_api_core_v1_ContainerStateRunning(),
   terminated: data?.terminated !== undefined ? data.terminated : createio_k8s_api_core_v1_ContainerStateTerminated(),
   waiting: data?.waiting !== undefined ? data.waiting : createio_k8s_api_core_v1_ContainerStateWaiting(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ContainerStateRunning, createio_k8s_api_core_v1_ContainerStateRunning } from '../containerstaterunning/io_k8s_api_core_v1_ContainerStateRunning';
import { io_k8s_api_core_v1_ContainerStateTerminated, createio_k8s_api_core_v1_ContainerStateTerminated } from '../containerstateterminated/io_k8s_api_core_v1_ContainerStateTerminated';
import { io_k8s_api_core_v1_ContainerStateWaiting, createio_k8s_api_core_v1_ContainerStateWaiting } from '../containerstatewaiting/io_k8s_api_core_v1_ContainerStateWaiting';
