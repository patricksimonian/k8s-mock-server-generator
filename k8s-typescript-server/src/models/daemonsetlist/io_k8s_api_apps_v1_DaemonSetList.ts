/**
* DaemonSetList is a collection of daemon sets.
* @resourceType daemonsetlist
* @kind DaemonsetList
*/
export interface io_k8s_api_apps_v1_DaemonSetList {
/**
* A list of daemon sets.
* @required
* @isArray
* @references io.k8s.api.apps.v1.DaemonSet
*/
items: io_k8s_api_apps_v1_DaemonSet[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { resourceVersion?: string; selfLink?: string; continue?: string; remainingItemCount?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new DaemonsetList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSetList instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSetList(data?: Partial<io_k8s_api_apps_v1_DaemonSetList>): io_k8s_api_apps_v1_DaemonSetList {
 return {
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_apps_v1_DaemonSet, createio_k8s_api_apps_v1_DaemonSet } from '../daemonset/io_k8s_api_apps_v1_DaemonSet';
