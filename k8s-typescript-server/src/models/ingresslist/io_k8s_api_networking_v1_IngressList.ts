/**
* IngressList is a collection of Ingress.
* @resourceType ingresslist
* @kind IngressList
*/
export interface io_k8s_api_networking_v1_IngressList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of Ingress.
* @required
* @isArray
* @references io.k8s.api.networking.v1.Ingress
*/
items: io_k8s_api_networking_v1_Ingress[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { resourceVersion?: string; selfLink?: string; continue?: string; remainingItemCount?: number };
}

/**
* Create a new IngressList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IngressList instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IngressList(data?: Partial<io_k8s_api_networking_v1_IngressList>): io_k8s_api_networking_v1_IngressList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_networking_v1_Ingress, createio_k8s_api_networking_v1_Ingress } from '../ingress/io_k8s_api_networking_v1_Ingress';
