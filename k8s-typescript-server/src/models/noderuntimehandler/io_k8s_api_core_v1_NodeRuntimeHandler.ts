/**
* NodeRuntimeHandler is a set of runtime handler information.
* @resourceType noderuntimehandler
* @kind Noderuntimehandler
*/
export interface io_k8s_api_core_v1_NodeRuntimeHandler {
/**
* Supported features.
* @references io.k8s.api.core.v1.NodeRuntimeHandlerFeatures
*/
features?: io_k8s_api_core_v1_NodeRuntimeHandlerFeatures;
/**
* Runtime handler name. Empty for the default runtime handler.
*/
name?: string;
}

/**
* Create a new Noderuntimehandler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeRuntimeHandler instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeRuntimeHandler(data?: Partial<io_k8s_api_core_v1_NodeRuntimeHandler>): io_k8s_api_core_v1_NodeRuntimeHandler {
 return {
   features: data?.features !== undefined ? data.features : createio_k8s_api_core_v1_NodeRuntimeHandlerFeatures(),
   name: data?.name !== undefined ? data.name : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeRuntimeHandlerFeatures, createio_k8s_api_core_v1_NodeRuntimeHandlerFeatures } from '../noderuntimehandlerfeature/io_k8s_api_core_v1_NodeRuntimeHandlerFeatures';
