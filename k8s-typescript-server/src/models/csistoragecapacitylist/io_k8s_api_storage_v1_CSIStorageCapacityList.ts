/**
* CSIStorageCapacityList is a collection of CSIStorageCapacity objects.
* @resourceType csistoragecapacitylist
* @kind CsistoragecapacityList
*/
export interface io_k8s_api_storage_v1_CSIStorageCapacityList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of CSIStorageCapacity objects.
* @required
* @isArray
* @references io.k8s.api.storage.v1.CSIStorageCapacity
*/
items: io_k8s_api_storage_v1_CSIStorageCapacity[];
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
* Create a new CsistoragecapacityList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_CSIStorageCapacityList instance with defaults applied
*/
export function createio_k8s_api_storage_v1_CSIStorageCapacityList(data?: Partial<io_k8s_api_storage_v1_CSIStorageCapacityList>): io_k8s_api_storage_v1_CSIStorageCapacityList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_storage_v1_CSIStorageCapacity, createio_k8s_api_storage_v1_CSIStorageCapacity } from '../csistoragecapacity/io_k8s_api_storage_v1_CSIStorageCapacity';
