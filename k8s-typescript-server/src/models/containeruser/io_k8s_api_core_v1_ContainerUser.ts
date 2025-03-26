/**
* ContainerUser represents user identity information
* @resourceType containeruser
* @kind Containeruser
*/
export interface io_k8s_api_core_v1_ContainerUser {
/**
* Linux holds user identity information initially attached to the first process of the containers in Linux. Note that the actual running identity can be changed if the process has enough privilege to do so.
* @references io.k8s.api.core.v1.LinuxContainerUser
*/
linux?: io_k8s_api_core_v1_LinuxContainerUser;
}

/**
* Create a new Containeruser with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerUser instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerUser(data?: Partial<io_k8s_api_core_v1_ContainerUser>): io_k8s_api_core_v1_ContainerUser {
 return {
   linux: data?.linux !== undefined ? data.linux : createio_k8s_api_core_v1_LinuxContainerUser(),
 };
}
// Required imports
import { io_k8s_api_core_v1_LinuxContainerUser, createio_k8s_api_core_v1_LinuxContainerUser } from '../linuxcontaineruser/io_k8s_api_core_v1_LinuxContainerUser';
