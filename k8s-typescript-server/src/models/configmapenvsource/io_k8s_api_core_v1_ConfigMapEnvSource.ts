/**
* ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.

The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
* @resourceType configmapenvsource
* @kind Configmapenvsource
*/
export interface io_k8s_api_core_v1_ConfigMapEnvSource {
/**
* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name?: string;
/**
* Specify whether the ConfigMap must be defined
*/
optional?: boolean;
}

/**
* Create a new Configmapenvsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ConfigMapEnvSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_ConfigMapEnvSource(data?: Partial<io_k8s_api_core_v1_ConfigMapEnvSource>): io_k8s_api_core_v1_ConfigMapEnvSource {
 return {
   name: data?.name !== undefined ? data.name : '',
   optional: data?.optional !== undefined ? data.optional : false,
 };
}
