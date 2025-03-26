/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
* @resourceType nodeconfigsource
* @kind Nodeconfigsource
*/
export interface io_k8s_api_core_v1_NodeConfigSource {
/**
* ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration
* @isObject
*/
configMap?: { uid?: string; kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string };
}

/**
* Create a new Nodeconfigsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeConfigSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeConfigSource(data?: Partial<io_k8s_api_core_v1_NodeConfigSource>): io_k8s_api_core_v1_NodeConfigSource {
 return {
   configMap: data?.configMap !== undefined ? data.configMap : { namespace: '', kubeletConfigKey: '', name: '' },
 };
}
