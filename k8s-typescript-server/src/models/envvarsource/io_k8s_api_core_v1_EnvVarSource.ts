/**
* EnvVarSource represents a source for the value of an EnvVar.
* @resourceType envvarsource
* @kind Envvarsource
*/
export interface io_k8s_api_core_v1_EnvVarSource {
/**
* Selects a key of a ConfigMap.
* @references io.k8s.api.core.v1.ConfigMapKeySelector
*/
configMapKeyRef?: io_k8s_api_core_v1_ConfigMapKeySelector;
/**
* Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
* @references io.k8s.api.core.v1.ObjectFieldSelector
*/
fieldRef?: io_k8s_api_core_v1_ObjectFieldSelector;
/**
* Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
* @references io.k8s.api.core.v1.ResourceFieldSelector
*/
resourceFieldRef?: io_k8s_api_core_v1_ResourceFieldSelector;
/**
* Selects a key of a secret in the pod's namespace
* @references io.k8s.api.core.v1.SecretKeySelector
*/
secretKeyRef?: io_k8s_api_core_v1_SecretKeySelector;
}

/**
* Create a new Envvarsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EnvVarSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_EnvVarSource(data?: Partial<io_k8s_api_core_v1_EnvVarSource>): io_k8s_api_core_v1_EnvVarSource {
 return {
   configMapKeyRef: data?.configMapKeyRef !== undefined ? data.configMapKeyRef : createio_k8s_api_core_v1_ConfigMapKeySelector(),
   fieldRef: data?.fieldRef !== undefined ? data.fieldRef : createio_k8s_api_core_v1_ObjectFieldSelector(),
   resourceFieldRef: data?.resourceFieldRef !== undefined ? data.resourceFieldRef : createio_k8s_api_core_v1_ResourceFieldSelector(),
   secretKeyRef: data?.secretKeyRef !== undefined ? data.secretKeyRef : createio_k8s_api_core_v1_SecretKeySelector(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ConfigMapKeySelector, createio_k8s_api_core_v1_ConfigMapKeySelector } from '../configmapkeyselector/io_k8s_api_core_v1_ConfigMapKeySelector';
import { io_k8s_api_core_v1_ObjectFieldSelector, createio_k8s_api_core_v1_ObjectFieldSelector } from '../objectfieldselector/io_k8s_api_core_v1_ObjectFieldSelector';
import { io_k8s_api_core_v1_ResourceFieldSelector, createio_k8s_api_core_v1_ResourceFieldSelector } from '../resourcefieldselector/io_k8s_api_core_v1_ResourceFieldSelector';
import { io_k8s_api_core_v1_SecretKeySelector, createio_k8s_api_core_v1_SecretKeySelector } from '../secretkeyselector/io_k8s_api_core_v1_SecretKeySelector';
