/**
* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
* @resourceType downwardapiprojection
* @kind Downwardapiprojection
*/
export interface io_k8s_api_core_v1_DownwardAPIProjection {
/**
* Items is a list of DownwardAPIVolume file
* @isArray
*/
items?: io_k8s_api_core_v1_DownwardAPIVolumeFile[];
}

/**
* Create a new Downwardapiprojection with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_DownwardAPIProjection instance with defaults applied
*/
export function createio_k8s_api_core_v1_DownwardAPIProjection(data?: Partial<io_k8s_api_core_v1_DownwardAPIProjection>): io_k8s_api_core_v1_DownwardAPIProjection {
 return {
   items: data?.items !== undefined ? data.items : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_DownwardAPIVolumeFile, createio_k8s_api_core_v1_DownwardAPIVolumeFile } from '../io.k8s.api.core.v1.DownwardAPIVolumeFile';
