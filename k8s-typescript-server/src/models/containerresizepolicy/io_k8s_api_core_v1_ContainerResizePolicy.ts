/**
* ContainerResizePolicy represents resource resize policy for the container.
* @resourceType containerresizepolicy
* @kind Containerresizepolicy
*/
export interface io_k8s_api_core_v1_ContainerResizePolicy {
/**
* Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
* @required
*/
restartPolicy: string;
/**
* Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
* @required
*/
resourceName: string;
}

/**
* Create a new Containerresizepolicy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerResizePolicy instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerResizePolicy(data?: Partial<io_k8s_api_core_v1_ContainerResizePolicy>): io_k8s_api_core_v1_ContainerResizePolicy {
 return {
   restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
   resourceName: data?.resourceName !== undefined ? data.resourceName : '',
 };
}
