/**
* Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
* @resourceType secretvolumesource
* @kind Secretvolumesource
*/
export interface io_k8s_api_core_v1_SecretVolumeSource {
/**
* defaultMode is Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
*/
defaultMode?: number;
/**
* items If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
* @isArray
*/
items?: io_k8s_api_core_v1_KeyToPath[];
/**
* optional field specify whether the Secret or its keys must be defined
*/
optional?: boolean;
/**
* secretName is the name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
*/
secretName?: string;
}

/**
* Create a new Secretvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_SecretVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_SecretVolumeSource(data?: Partial<io_k8s_api_core_v1_SecretVolumeSource>): io_k8s_api_core_v1_SecretVolumeSource {
 return {
   defaultMode: data?.defaultMode !== undefined ? data.defaultMode : 0,
   items: data?.items !== undefined ? data.items : [],
   optional: data?.optional !== undefined ? data.optional : false,
   secretName: data?.secretName !== undefined ? data.secretName : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_KeyToPath, createio_k8s_api_core_v1_KeyToPath } from '../io.k8s.api.core.v1.KeyToPath';
