/**
* EventList is a list of events.
* @resourceType eventlist
* @kind EventList
*/
export interface io_k8s_api_core_v1_EventList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of events
* @required
* @isArray
* @references io.k8s.api.events.v1.Event
*/
items: io_k8s_api_events_v1_Event[];
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
* Create a new EventList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EventList instance with defaults applied
*/
export function createio_k8s_api_core_v1_EventList(data?: Partial<io_k8s_api_core_v1_EventList>): io_k8s_api_core_v1_EventList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_events_v1_Event, createio_k8s_api_events_v1_Event } from '../event/io_k8s_api_events_v1_Event';
