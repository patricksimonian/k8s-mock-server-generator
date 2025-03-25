/**
* ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
* @resourceType containerstate
* @kind Containerstate
*/
export interface io_k8s_api_core_v1_ContainerState {
/**
* ContainerStateRunning is a running state of a container.
* @isObject
*/
running?: { startedAt?: Date };
/**
* ContainerStateTerminated is a terminated state of a container.
* @isObject
*/
terminated?: { containerID?: string; exitCode: number; finishedAt?: Date; message?: string; reason?: string; signal?: number; startedAt?: Date };
/**
* ContainerStateWaiting is a waiting state of a container.
* @isObject
*/
waiting?: { message?: string; reason?: string };
}

/**
* Create a new Containerstate with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerState instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerState(data?: Partial<io_k8s_api_core_v1_ContainerState>): io_k8s_api_core_v1_ContainerState {
 return {
   running: data?.running !== undefined ? data.running : {},
   terminated: data?.terminated !== undefined ? data.terminated : { exitCode: 0 },
   waiting: data?.waiting !== undefined ? data.waiting : {},
 };
}
