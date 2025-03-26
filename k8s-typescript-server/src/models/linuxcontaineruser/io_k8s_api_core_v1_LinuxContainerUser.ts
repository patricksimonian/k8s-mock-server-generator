/**
* LinuxContainerUser represents user identity information in Linux containers
* @resourceType linuxcontaineruser
* @kind Linuxcontaineruser
*/
export interface io_k8s_api_core_v1_LinuxContainerUser {
/**
* GID is the primary gid initially attached to the first process in the container
* @required
*/
gid: number;
/**
* SupplementalGroups are the supplemental groups initially attached to the first process in the container
* @isArray
*/
supplementalGroups?: number[];
/**
* UID is the primary uid initially attached to the first process in the container
* @required
*/
uid: number;
}

/**
* Create a new Linuxcontaineruser with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LinuxContainerUser instance with defaults applied
*/
export function createio_k8s_api_core_v1_LinuxContainerUser(data?: Partial<io_k8s_api_core_v1_LinuxContainerUser>): io_k8s_api_core_v1_LinuxContainerUser {
 return {
   gid: data?.gid !== undefined ? data.gid : 0,
   supplementalGroups: data?.supplementalGroups !== undefined ? data.supplementalGroups : [],
   uid: data?.uid !== undefined ? data.uid : 0,
 };
}
