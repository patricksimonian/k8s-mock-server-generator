/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
* @resourceType nodeconfigsource
* @kind Nodeconfigsource
*/
export interface io_k8s_api_core_v1_NodeConfigSource {
/**
* ConfigMap is a reference to a Node's ConfigMap
* @references io.k8s.api.core.v1.ConfigMapNodeConfigSource
*/
configMap?: io_k8s_api_core_v1_ConfigMapNodeConfigSource;
}

/**
* Create a new Nodeconfigsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeConfigSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeConfigSource(data?: Partial<io_k8s_api_core_v1_NodeConfigSource>): io_k8s_api_core_v1_NodeConfigSource {
 return {
   configMap: data?.configMap !== undefined ? data.configMap : createio_k8s_api_core_v1_ConfigMapNodeConfigSource(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ConfigMapNodeConfigSource, createio_k8s_api_core_v1_ConfigMapNodeConfigSource } from '../configmapnodeconfigsource/io_k8s_api_core_v1_ConfigMapNodeConfigSource';
