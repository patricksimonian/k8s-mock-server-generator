/**
* DownwardAPIVolumeFile represents information to create the file containing the pod field
* @resourceType downwardapivolumefile
* @kind Downwardapivolumefile
*/
export interface io_k8s_api_core_v1_DownwardAPIVolumeFile {
/**
* Required: Selects a field of the pod: only annotations, labels, name, namespace and uid are supported.
* @references io.k8s.api.core.v1.ObjectFieldSelector
*/
fieldRef?: io_k8s_api_core_v1_ObjectFieldSelector;
/**
* Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
*/
mode?: number;
/**
* Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
* @required
*/
path: string;
/**
* Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
* @references io.k8s.api.core.v1.ResourceFieldSelector
*/
resourceFieldRef?: io_k8s_api_core_v1_ResourceFieldSelector;
}

/**
* Create a new Downwardapivolumefile with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_DownwardAPIVolumeFile instance with defaults applied
*/
export function createio_k8s_api_core_v1_DownwardAPIVolumeFile(data?: Partial<io_k8s_api_core_v1_DownwardAPIVolumeFile>): io_k8s_api_core_v1_DownwardAPIVolumeFile {
 return {
   fieldRef: data?.fieldRef !== undefined ? data.fieldRef : createio_k8s_api_core_v1_ObjectFieldSelector(),
   mode: data?.mode !== undefined ? data.mode : 0,
   path: data?.path !== undefined ? data.path : '',
   resourceFieldRef: data?.resourceFieldRef !== undefined ? data.resourceFieldRef : createio_k8s_api_core_v1_ResourceFieldSelector(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ObjectFieldSelector, createio_k8s_api_core_v1_ObjectFieldSelector } from '../objectfieldselector/io_k8s_api_core_v1_ObjectFieldSelector';
import { io_k8s_api_core_v1_ResourceFieldSelector, createio_k8s_api_core_v1_ResourceFieldSelector } from '../resourcefieldselector/io_k8s_api_core_v1_ResourceFieldSelector';
