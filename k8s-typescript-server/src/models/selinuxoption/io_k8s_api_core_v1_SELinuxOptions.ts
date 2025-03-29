/**
* SELinuxOptions are the labels to be applied to the container
* @resourceType selinuxoption
* @kind Selinuxoption
*/
export interface io_k8s_api_core_v1_SELinuxOptions {
/**
* Level is SELinux level label that applies to the container.
*/
level?: string;
/**
* Role is a SELinux role label that applies to the container.
*/
role?: string;
/**
* Type is a SELinux type label that applies to the container.
*/
type?: string;
/**
* User is a SELinux user label that applies to the container.
*/
user?: string;
}

/**
* Create a new Selinuxoption with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_SELinuxOptions instance with defaults applied
*/
export function createio_k8s_api_core_v1_SELinuxOptions(data?: Partial<io_k8s_api_core_v1_SELinuxOptions>): io_k8s_api_core_v1_SELinuxOptions {
 return {
   level: data?.level !== undefined ? data.level : '',
   role: data?.role !== undefined ? data.role : '',
   type: data?.type !== undefined ? data.type : '',
   user: data?.user !== undefined ? data.user : '',
 };
}
