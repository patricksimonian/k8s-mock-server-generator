/**
* EnvFromSource represents the source of a set of ConfigMaps
* @resourceType envfromsource
* @kind Envfromsource
*/
export interface io_k8s_api_core_v1_EnvFromSource {
/**
* The Secret to select from
* @references io.k8s.api.core.v1.SecretEnvSource
*/
secretRef?: io_k8s_api_core_v1_SecretEnvSource;
/**
* The ConfigMap to select from
* @references io.k8s.api.core.v1.ConfigMapEnvSource
*/
configMapRef?: io_k8s_api_core_v1_ConfigMapEnvSource;
/**
* An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
*/
prefix?: string;
}

/**
* Create a new Envfromsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EnvFromSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_EnvFromSource(data?: Partial<io_k8s_api_core_v1_EnvFromSource>): io_k8s_api_core_v1_EnvFromSource {
 return {
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_SecretEnvSource(),
   configMapRef: data?.configMapRef !== undefined ? data.configMapRef : createio_k8s_api_core_v1_ConfigMapEnvSource(),
   prefix: data?.prefix !== undefined ? data.prefix : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_ConfigMapEnvSource, createio_k8s_api_core_v1_ConfigMapEnvSource } from '../configmapenvsource/io_k8s_api_core_v1_ConfigMapEnvSource';
import { io_k8s_api_core_v1_SecretEnvSource, createio_k8s_api_core_v1_SecretEnvSource } from '../secretenvsource/io_k8s_api_core_v1_SecretEnvSource';
