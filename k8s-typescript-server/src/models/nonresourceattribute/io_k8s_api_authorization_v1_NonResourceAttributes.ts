/**
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
* @resourceType nonresourceattribute
* @kind Nonresourceattribute
*/
export interface io_k8s_api_authorization_v1_NonResourceAttributes {
/**
* Verb is the standard HTTP verb
*/
verb?: string;
/**
* Path is the URL path of the request
*/
path?: string;
}

/**
* Create a new Nonresourceattribute with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_NonResourceAttributes instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_NonResourceAttributes(data?: Partial<io_k8s_api_authorization_v1_NonResourceAttributes>): io_k8s_api_authorization_v1_NonResourceAttributes {
 return {
   verb: data?.verb !== undefined ? data.verb : '',
   path: data?.path !== undefined ? data.path : '',
 };
}
