/**
* ConfigMapList is a resource containing a list of ConfigMap objects.
* @resourceType configmaplist
* @kind ConfigmapList
*/
export interface io_k8s_api_core_v1_ConfigMapList {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is the list of ConfigMaps.
* @required
* @isArray
* @references io.k8s.api.core.v1.ConfigMap
*/
items: io_k8s_api_core_v1_ConfigMap[];
}

/**
* Create a new ConfigmapList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ConfigMapList instance with defaults applied
*/
export function createio_k8s_api_core_v1_ConfigMapList(data?: Partial<io_k8s_api_core_v1_ConfigMapList>): io_k8s_api_core_v1_ConfigMapList {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
 };
}
// Required imports
import { io_k8s_api_core_v1_ConfigMap, createio_k8s_api_core_v1_ConfigMap } from '../configmap/io_k8s_api_core_v1_ConfigMap';
