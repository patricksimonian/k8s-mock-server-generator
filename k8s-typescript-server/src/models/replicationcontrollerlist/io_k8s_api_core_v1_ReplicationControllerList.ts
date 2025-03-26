/**
* ReplicationControllerList is a collection of replication controllers.
* @resourceType replicationcontrollerlist
* @kind ReplicationcontrollerList
*/
export interface io_k8s_api_core_v1_ReplicationControllerList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of replication controllers. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
* @required
* @isArray
* @references io.k8s.api.core.v1.ReplicationController
*/
items: io_k8s_api_core_v1_ReplicationController[];
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
* Create a new ReplicationcontrollerList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationControllerList instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationControllerList(data?: Partial<io_k8s_api_core_v1_ReplicationControllerList>): io_k8s_api_core_v1_ReplicationControllerList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_core_v1_ReplicationController, createio_k8s_api_core_v1_ReplicationController } from '../replicationcontroller/io_k8s_api_core_v1_ReplicationController';
