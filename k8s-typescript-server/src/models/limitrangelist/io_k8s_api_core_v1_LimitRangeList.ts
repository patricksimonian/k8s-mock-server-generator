/**
* LimitRangeList is a list of LimitRange items.
* @resourceType limitrangelist
* @kind LimitrangeList
*/
export interface io_k8s_api_core_v1_LimitRangeList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of LimitRange objects. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
* @required
* @isArray
* @references io.k8s.api.core.v1.LimitRange
*/
items: io_k8s_api_core_v1_LimitRange[];
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
* Create a new LimitrangeList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LimitRangeList instance with defaults applied
*/
export function createio_k8s_api_core_v1_LimitRangeList(data?: Partial<io_k8s_api_core_v1_LimitRangeList>): io_k8s_api_core_v1_LimitRangeList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_core_v1_LimitRange, createio_k8s_api_core_v1_LimitRange } from '../limitrange/io_k8s_api_core_v1_LimitRange';
