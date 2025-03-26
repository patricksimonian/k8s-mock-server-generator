/**
* Adapts a ConfigMap into a volume.

The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
* @resourceType configmapvolumesource
* @kind Configmapvolumesource
*/
export interface io_k8s_api_core_v1_ConfigMapVolumeSource {
/**
* items if unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
* @isArray
*/
items?: Array<{ key: string; mode?: number; path: string }>;
/**
* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name?: string;
/**
* optional specify whether the ConfigMap or its keys must be defined
*/
optional?: boolean;
/**
* defaultMode is optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
*/
defaultMode?: number;
}

/**
* Create a new Configmapvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ConfigMapVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ConfigMapVolumeSource(data?: Partial<io_k8s_api_core_v1_ConfigMapVolumeSource>): io_k8s_api_core_v1_ConfigMapVolumeSource {
 return {
   items: data?.items !== undefined ? data.items : [],
   name: data?.name !== undefined ? data.name : '',
   optional: data?.optional !== undefined ? data.optional : false,
   defaultMode: data?.defaultMode !== undefined ? data.defaultMode : 0,
 };
}
