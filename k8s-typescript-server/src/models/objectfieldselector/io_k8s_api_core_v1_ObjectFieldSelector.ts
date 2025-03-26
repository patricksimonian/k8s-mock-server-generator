/**
* ObjectFieldSelector selects an APIVersioned field of an object.
* @resourceType objectfieldselector
* @kind Objectfieldselector
*/
export interface io_k8s_api_core_v1_ObjectFieldSelector {
/**
* Path of the field to select in the specified API version.
* @required
*/
fieldPath: string;
/**
* Version of the schema the FieldPath is written in terms of, defaults to "v1".
*/
apiVersion?: string;
}

/**
* Create a new Objectfieldselector with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ObjectFieldSelector instance with defaults applied
*/
export function createio_k8s_api_core_v1_ObjectFieldSelector(data?: Partial<io_k8s_api_core_v1_ObjectFieldSelector>): io_k8s_api_core_v1_ObjectFieldSelector {
 return {
   fieldPath: data?.fieldPath !== undefined ? data.fieldPath : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
