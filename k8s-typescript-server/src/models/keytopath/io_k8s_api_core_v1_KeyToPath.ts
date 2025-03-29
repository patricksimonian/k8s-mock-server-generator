/**
* Maps a string key to a path within a volume.
* @resourceType keytopath
* @kind Keytopath
*/
export interface io_k8s_api_core_v1_KeyToPath {
/**
* key is the key to project.
* @required
*/
key: string;
/**
* mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
*/
mode?: number;
/**
* path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
* @required
*/
path: string;
}

/**
* Create a new Keytopath with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_KeyToPath instance with defaults applied
*/
export function createio_k8s_api_core_v1_KeyToPath(data?: Partial<io_k8s_api_core_v1_KeyToPath>): io_k8s_api_core_v1_KeyToPath {
 return {
   key: data?.key !== undefined ? data.key : '',
   mode: data?.mode !== undefined ? data.mode : 0,
   path: data?.path !== undefined ? data.path : '',
 };
}
