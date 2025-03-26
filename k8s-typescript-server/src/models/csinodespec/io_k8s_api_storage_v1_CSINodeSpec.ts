/**
* CSINodeSpec holds information about the specification of all CSI drivers installed on a node
* @resourceType csinodespec
* @kind Csinodespec
*/
export interface io_k8s_api_storage_v1_CSINodeSpec {
/**
* drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
* @required
* @isArray
*/
drivers: io_k8s_api_storage_v1_CSINodeDriver[];
}

/**
* Create a new Csinodespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_CSINodeSpec instance with defaults applied
*/
export function createio_k8s_api_storage_v1_CSINodeSpec(data?: Partial<io_k8s_api_storage_v1_CSINodeSpec>): io_k8s_api_storage_v1_CSINodeSpec {
 return {
   drivers: data?.drivers !== undefined ? data.drivers : [],
 };
}
// Required imports
import { io_k8s_api_storage_v1_CSINodeDriver, createio_k8s_api_storage_v1_CSINodeDriver } from '../io.k8s.api.storage.v1.CSINodeDriver';
