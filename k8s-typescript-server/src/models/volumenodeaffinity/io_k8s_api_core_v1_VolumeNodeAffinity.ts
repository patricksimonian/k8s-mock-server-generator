/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
* @resourceType volumenodeaffinity
* @kind Volumenodeaffinity
*/
export interface io_k8s_api_core_v1_VolumeNodeAffinity {
/**
* required specifies hard node constraints that must be met.
* @references io.k8s.api.core.v1.NodeSelector
*/
required?: io_k8s_api_core_v1_NodeSelector;
}

/**
* Create a new Volumenodeaffinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_VolumeNodeAffinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_VolumeNodeAffinity(data?: Partial<io_k8s_api_core_v1_VolumeNodeAffinity>): io_k8s_api_core_v1_VolumeNodeAffinity {
 return {
   required: data?.required !== undefined ? data.required : createio_k8s_api_core_v1_NodeSelector(),
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeSelector, createio_k8s_api_core_v1_NodeSelector } from '../nodeselector/io_k8s_api_core_v1_NodeSelector';
