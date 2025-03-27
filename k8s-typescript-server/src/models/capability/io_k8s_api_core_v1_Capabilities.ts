/**
* Adds and removes POSIX capabilities from running containers.
* @resourceType capability
* @kind Capability
*/
export interface io_k8s_api_core_v1_Capabilities {
/**
* Added capabilities
* @isArray
*/
add?: string[];
/**
* Removed capabilities
* @isArray
*/
drop?: string[];
}

/**
* Create a new Capability with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Capabilities instance with defaults applied
*/
export function createio_k8s_api_core_v1_Capabilities(data?: Partial<io_k8s_api_core_v1_Capabilities>): io_k8s_api_core_v1_Capabilities {
 return {
   add: data?.add !== undefined ? data.add : [],
   drop: data?.drop !== undefined ? data.drop : [],
 };
}
