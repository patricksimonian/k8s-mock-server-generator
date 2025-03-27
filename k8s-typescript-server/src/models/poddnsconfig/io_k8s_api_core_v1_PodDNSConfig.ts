/**
* PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
* @resourceType poddnsconfig
* @kind Poddnsconfig
*/
export interface io_k8s_api_core_v1_PodDNSConfig {
/**
* A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
* @isArray
*/
nameservers?: string[];
/**
* A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
* @isArray
*/
options?: io_k8s_api_core_v1_PodDNSConfigOption[];
/**
* A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
* @isArray
*/
searches?: string[];
}

/**
* Create a new Poddnsconfig with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodDNSConfig instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodDNSConfig(data?: Partial<io_k8s_api_core_v1_PodDNSConfig>): io_k8s_api_core_v1_PodDNSConfig {
 return {
   nameservers: data?.nameservers !== undefined ? data.nameservers : [],
   options: data?.options !== undefined ? data.options : [],
   searches: data?.searches !== undefined ? data.searches : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_PodDNSConfigOption, createio_k8s_api_core_v1_PodDNSConfigOption } from '../io.k8s.api.core.v1.PodDNSConfigOption';
