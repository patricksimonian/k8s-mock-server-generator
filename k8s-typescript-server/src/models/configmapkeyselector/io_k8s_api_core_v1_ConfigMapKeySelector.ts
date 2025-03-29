/**
* Selects a key from a ConfigMap.
* @resourceType configmapkeyselector
* @kind Configmapkeyselector
*/
export interface io_k8s_api_core_v1_ConfigMapKeySelector {
/**
* The key to select.
* @required
*/
key: string;
/**
* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name?: string;
/**
* Specify whether the ConfigMap or its key must be defined
*/
optional?: boolean;
}

/**
* Create a new Configmapkeyselector with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ConfigMapKeySelector instance with defaults applied
*/
export function createio_k8s_api_core_v1_ConfigMapKeySelector(data?: Partial<io_k8s_api_core_v1_ConfigMapKeySelector>): io_k8s_api_core_v1_ConfigMapKeySelector {
 return {
   key: data?.key !== undefined ? data.key : '',
   name: data?.name !== undefined ? data.name : '',
   optional: data?.optional !== undefined ? data.optional : false,
 };
}
