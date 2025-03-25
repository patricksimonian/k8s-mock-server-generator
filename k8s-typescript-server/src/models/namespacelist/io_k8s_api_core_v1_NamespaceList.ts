/**
* NamespaceList is a list of Namespaces.
* @resourceType namespacelist
* @kind NamespaceList
*/
export interface io_k8s_api_core_v1_NamespaceList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is the list of Namespace objects in the list. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
* @required
* @isArray
* @references io.k8s.api.core.v1.Namespace
*/
items: io_k8s_api_core_v1_Namespace[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { remainingItemCount?: number; resourceVersion?: string; selfLink?: string; continue?: string };
}

/**
* Create a new NamespaceList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NamespaceList instance with defaults applied
*/
export function createio_k8s_api_core_v1_NamespaceList(data?: Partial<io_k8s_api_core_v1_NamespaceList>): io_k8s_api_core_v1_NamespaceList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_core_v1_Namespace, createio_k8s_api_core_v1_Namespace } from '../namespace/io_k8s_api_core_v1_Namespace';
