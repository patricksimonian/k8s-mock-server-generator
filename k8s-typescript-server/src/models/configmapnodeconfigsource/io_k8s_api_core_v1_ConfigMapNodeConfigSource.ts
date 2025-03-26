/**
* ConfigMapNodeConfigSource contains the information to reference a ConfigMap as a config source for the Node. This API is deprecated since 1.22: https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration
* @resourceType configmapnodeconfigsource
* @kind Configmapnodeconfigsource
*/
export interface io_k8s_api_core_v1_ConfigMapNodeConfigSource {
/**
* Name is the metadata.name of the referenced ConfigMap. This field is required in all cases.
* @required
*/
name: string;
/**
* Namespace is the metadata.namespace of the referenced ConfigMap. This field is required in all cases.
* @required
*/
namespace: string;
/**
* ResourceVersion is the metadata.ResourceVersion of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
*/
resourceVersion?: string;
/**
* UID is the metadata.UID of the referenced ConfigMap. This field is forbidden in Node.Spec, and required in Node.Status.
*/
uid?: string;
/**
* KubeletConfigKey declares which key of the referenced ConfigMap corresponds to the KubeletConfiguration structure This field is required in all cases.
* @required
*/
kubeletConfigKey: string;
}

/**
* Create a new Configmapnodeconfigsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ConfigMapNodeConfigSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ConfigMapNodeConfigSource(data?: Partial<io_k8s_api_core_v1_ConfigMapNodeConfigSource>): io_k8s_api_core_v1_ConfigMapNodeConfigSource {
 return {
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
   resourceVersion: data?.resourceVersion !== undefined ? data.resourceVersion : '',
   uid: data?.uid !== undefined ? data.uid : '',
   kubeletConfigKey: data?.kubeletConfigKey !== undefined ? data.kubeletConfigKey : '',
 };
}
