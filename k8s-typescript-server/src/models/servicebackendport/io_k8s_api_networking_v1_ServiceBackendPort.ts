/**
* ServiceBackendPort is the service port being referenced.
* @resourceType servicebackendport
* @kind Servicebackendport
*/
export interface io_k8s_api_networking_v1_ServiceBackendPort {
/**
* number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".
*/
number?: number;
/**
* name is the name of the port on the Service. This is a mutually exclusive setting with "Number".
*/
name?: string;
}

/**
* Create a new Servicebackendport with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_ServiceBackendPort instance with defaults applied
*/
export function createio_k8s_api_networking_v1_ServiceBackendPort(data?: Partial<io_k8s_api_networking_v1_ServiceBackendPort>): io_k8s_api_networking_v1_ServiceBackendPort {
 return {
   number: data?.number !== undefined ? data.number : 0,
   name: data?.name !== undefined ? data.name : '',
 };
}
