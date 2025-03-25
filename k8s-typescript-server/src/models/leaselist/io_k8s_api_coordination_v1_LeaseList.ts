/**
* LeaseList is a list of Lease objects.
* @resourceType leaselist
* @kind LeaseList
*/
export interface io_k8s_api_coordination_v1_LeaseList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is a list of schema objects.
* @required
* @isArray
* @references io.k8s.api.coordination.v1.Lease
*/
items: io_k8s_api_coordination_v1_Lease[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new LeaseList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_coordination_v1_LeaseList instance with defaults applied
*/
export function createio_k8s_api_coordination_v1_LeaseList(data?: Partial<io_k8s_api_coordination_v1_LeaseList>): io_k8s_api_coordination_v1_LeaseList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_coordination_v1_Lease, createio_k8s_api_coordination_v1_Lease } from '../lease/io_k8s_api_coordination_v1_Lease';
