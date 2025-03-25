/**
* ContainerUser represents user identity information
* @resourceType containeruser
* @kind Containeruser
*/
export interface io_k8s_api_core_v1_ContainerUser {
/**
* LinuxContainerUser represents user identity information in Linux containers
* @isObject
*/
linux?: { gid: number; supplementalGroups?: number[]; uid: number };
}

/**
* Create a new Containeruser with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerUser instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerUser(data?: Partial<io_k8s_api_core_v1_ContainerUser>): io_k8s_api_core_v1_ContainerUser {
 return {
   linux: data?.linux !== undefined ? data.linux : { gid: 0, uid: 0 },
 };
}
