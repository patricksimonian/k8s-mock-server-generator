/**
* ResourceFieldSelector represents container resources (cpu, memory) and their output format
* @resourceType resourcefieldselector
* @kind Resourcefieldselector
*/
export interface io_k8s_api_core_v1_ResourceFieldSelector {
/**
* Container name: required for volumes, optional for env vars
*/
containerName?: string;
/**
* Specifies the output format of the exposed resources, defaults to "1"
* @references io.k8s.apimachinery.pkg.api.resource.Quantity
*/
divisor?: io_k8s_apimachinery_pkg_api_resource_Quantity;
/**
* Required: resource to select
* @required
*/
resource: string;
}

/**
* Create a new Resourcefieldselector with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceFieldSelector instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceFieldSelector(data?: Partial<io_k8s_api_core_v1_ResourceFieldSelector>): io_k8s_api_core_v1_ResourceFieldSelector {
 return {
   containerName: data?.containerName !== undefined ? data.containerName : '',
   divisor: data?.divisor !== undefined ? data.divisor : createio_k8s_apimachinery_pkg_api_resource_Quantity(),
   resource: data?.resource !== undefined ? data.resource : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_api_resource_Quantity, createio_k8s_apimachinery_pkg_api_resource_Quantity } from '../quantity/io_k8s_apimachinery_pkg_api_resource_Quantity';
