/**
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
* @resourceType quobytevolumesource
* @kind Quobytevolumesource
*/
export interface io_k8s_api_core_v1_QuobyteVolumeSource {
/**
* group to map volume access to Default is no group
*/
group?: string;
/**
* readOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
*/
readOnly?: boolean;
/**
* registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
* @required
*/
registry: string;
/**
* tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
*/
tenant?: string;
/**
* user to map volume access to Defaults to serivceaccount user
*/
user?: string;
/**
* volume is a string that references an already created Quobyte volume by name.
* @required
*/
volume: string;
}

/**
* Create a new Quobytevolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_QuobyteVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_QuobyteVolumeSource(data?: Partial<io_k8s_api_core_v1_QuobyteVolumeSource>): io_k8s_api_core_v1_QuobyteVolumeSource {
 return {
   group: data?.group !== undefined ? data.group : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   registry: data?.registry !== undefined ? data.registry : '',
   tenant: data?.tenant !== undefined ? data.tenant : '',
   user: data?.user !== undefined ? data.user : '',
   volume: data?.volume !== undefined ? data.volume : '',
 };
}
