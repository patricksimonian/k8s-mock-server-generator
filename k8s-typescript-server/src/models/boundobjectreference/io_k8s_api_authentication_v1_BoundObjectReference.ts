/**
* BoundObjectReference is a reference to an object that a token is bound to.
* @resourceType boundobjectreference
* @kind Boundobjectreference
*/
export interface io_k8s_api_authentication_v1_BoundObjectReference {
/**
* UID of the referent.
*/
uid?: string;
/**
* API version of the referent.
*/
apiVersion?: string;
/**
* Kind of the referent. Valid kinds are 'Pod' and 'Secret'.
*/
kind?: string;
/**
* Name of the referent.
*/
name?: string;
}

/**
* Create a new Boundobjectreference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authentication_v1_BoundObjectReference instance with defaults applied
*/
export function createio_k8s_api_authentication_v1_BoundObjectReference(data?: Partial<io_k8s_api_authentication_v1_BoundObjectReference>): io_k8s_api_authentication_v1_BoundObjectReference {
 return {
   uid: data?.uid !== undefined ? data.uid : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
 };
}
