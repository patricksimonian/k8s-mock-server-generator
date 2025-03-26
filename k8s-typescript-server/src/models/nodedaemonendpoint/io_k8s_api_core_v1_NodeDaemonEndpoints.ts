/**
* NodeDaemonEndpoints lists ports opened by daemons running on the Node.
* @resourceType nodedaemonendpoint
* @kind Nodedaemonendpoint
*/
export interface io_k8s_api_core_v1_NodeDaemonEndpoints {
/**
* Endpoint on which Kubelet is listening.
* @references io.k8s.api.core.v1.DaemonEndpoint
*/
kubeletEndpoint?: io_k8s_api_core_v1_DaemonEndpoint;
}

/**
* Create a new Nodedaemonendpoint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeDaemonEndpoints instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeDaemonEndpoints(data?: Partial<io_k8s_api_core_v1_NodeDaemonEndpoints>): io_k8s_api_core_v1_NodeDaemonEndpoints {
 return {
   kubeletEndpoint: data?.kubeletEndpoint !== undefined ? data.kubeletEndpoint : createio_k8s_api_core_v1_DaemonEndpoint(),
 };
}
// Required imports
import { io_k8s_api_core_v1_DaemonEndpoint, createio_k8s_api_core_v1_DaemonEndpoint } from '../daemonendpoint/io_k8s_api_core_v1_DaemonEndpoint';
