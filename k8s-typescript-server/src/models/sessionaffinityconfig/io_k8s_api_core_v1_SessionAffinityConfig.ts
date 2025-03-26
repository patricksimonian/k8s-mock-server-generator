/**
* SessionAffinityConfig represents the configurations of session affinity.
* @resourceType sessionaffinityconfig
* @kind Sessionaffinityconfig
*/
export interface io_k8s_api_core_v1_SessionAffinityConfig {
/**
* clientIP contains the configurations of Client IP based session affinity.
* @references io.k8s.api.core.v1.ClientIPConfig
*/
clientIP?: io_k8s_api_core_v1_ClientIPConfig;
}

/**
* Create a new Sessionaffinityconfig with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_SessionAffinityConfig instance with defaults applied
*/
export function createio_k8s_api_core_v1_SessionAffinityConfig(data?: Partial<io_k8s_api_core_v1_SessionAffinityConfig>): io_k8s_api_core_v1_SessionAffinityConfig {
 return {
   clientIP: data?.clientIP !== undefined ? data.clientIP : createio_k8s_api_core_v1_ClientIPConfig(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ClientIPConfig, createio_k8s_api_core_v1_ClientIPConfig } from '../clientipconfig/io_k8s_api_core_v1_ClientIPConfig';
