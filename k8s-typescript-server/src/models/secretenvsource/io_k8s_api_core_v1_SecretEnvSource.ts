/**
* SecretEnvSource selects a Secret to populate the environment variables with.

The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
* @resourceType secretenvsource
* @kind Secretenvsource
*/
export interface io_k8s_api_core_v1_SecretEnvSource {
/**
* Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name?: string;
/**
* Specify whether the Secret must be defined
*/
optional?: boolean;
}

/**
* Create a new Secretenvsource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_SecretEnvSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_SecretEnvSource(data?: Partial<io_k8s_api_core_v1_SecretEnvSource>): io_k8s_api_core_v1_SecretEnvSource {
 return {
   name: data?.name !== undefined ? data.name : '',
   optional: data?.optional !== undefined ? data.optional : false,
 };
}
