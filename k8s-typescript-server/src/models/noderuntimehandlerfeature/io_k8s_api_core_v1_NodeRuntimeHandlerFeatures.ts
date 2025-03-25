/**
* NodeRuntimeHandlerFeatures is a set of features implemented by the runtime handler.
* @resourceType noderuntimehandlerfeature
* @kind Noderuntimehandlerfeature
*/
export interface io_k8s_api_core_v1_NodeRuntimeHandlerFeatures {
/**
* RecursiveReadOnlyMounts is set to true if the runtime handler supports RecursiveReadOnlyMounts.
*/
recursiveReadOnlyMounts?: boolean;
/**
* UserNamespaces is set to true if the runtime handler supports UserNamespaces, including for volumes.
*/
userNamespaces?: boolean;
}

/**
* Create a new Noderuntimehandlerfeature with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeRuntimeHandlerFeatures instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeRuntimeHandlerFeatures(data?: Partial<io_k8s_api_core_v1_NodeRuntimeHandlerFeatures>): io_k8s_api_core_v1_NodeRuntimeHandlerFeatures {
 return {
   recursiveReadOnlyMounts: data?.recursiveReadOnlyMounts !== undefined ? data.recursiveReadOnlyMounts : false,
   userNamespaces: data?.userNamespaces !== undefined ? data.userNamespaces : false,
 };
}
