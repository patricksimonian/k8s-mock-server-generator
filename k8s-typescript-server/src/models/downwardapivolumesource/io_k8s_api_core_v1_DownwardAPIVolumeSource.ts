/**
* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
* @resourceType downwardapivolumesource
* @kind Downwardapivolumesource
*/
export interface io_k8s_api_core_v1_DownwardAPIVolumeSource {
/**
* Items is a list of downward API volume file
* @isArray
*/
items?: Array<{ fieldRef?: { fieldPath: string; apiVersion?: string }; mode?: number; path: string; resourceFieldRef?: { divisor?: string; resource: string; containerName?: string } }>;
/**
* Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
*/
defaultMode?: number;
}

/**
* Create a new Downwardapivolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_DownwardAPIVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_DownwardAPIVolumeSource(data?: Partial<io_k8s_api_core_v1_DownwardAPIVolumeSource>): io_k8s_api_core_v1_DownwardAPIVolumeSource {
 return {
   items: data?.items !== undefined ? data.items : [],
   defaultMode: data?.defaultMode !== undefined ? data.defaultMode : 0,
 };
}
