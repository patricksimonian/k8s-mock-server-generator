/**
* Sysctl defines a kernel parameter to be set
* @resourceType sysctl
* @kind Sysctl
*/
export interface io_k8s_api_core_v1_Sysctl {
/**
* Name of a property to set
* @required
*/
name: string;
/**
* Value of a property to set
* @required
*/
value: string;
}

/**
* Create a new Sysctl with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Sysctl instance with defaults applied
*/
export function createio_k8s_api_core_v1_Sysctl(data?: Partial<io_k8s_api_core_v1_Sysctl>): io_k8s_api_core_v1_Sysctl {
 return {
   name: data?.name !== undefined ? data.name : '',
   value: data?.value !== undefined ? data.value : '',
 };
}
