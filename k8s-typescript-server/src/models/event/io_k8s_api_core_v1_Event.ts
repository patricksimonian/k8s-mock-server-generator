/**
* Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
* @resourceType event
* @kind Event
*/
export interface io_k8s_api_core_v1_Event {
/**
* This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
*/
reason?: string;
/**
* The number of times this event has occurred.
*/
count?: number;
/**
* The object that this event is about.
* @required
* @references io.k8s.api.core.v1.ObjectReference
*/
involvedObject: io_k8s_api_core_v1_ObjectReference;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @required
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Data about the Event series this event represents or nil if it's a singleton Event.
* @references io.k8s.api.core.v1.EventSeries
*/
series?: io_k8s_api_core_v1_EventSeries;
/**
* The component reporting this event. Should be a short machine understandable string.
* @references io.k8s.api.core.v1.EventSource
*/
source?: io_k8s_api_core_v1_EventSource;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* A human-readable description of the status of this operation.
*/
message?: string;
/**
* The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
firstTimestamp?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* The time at which the most recent occurrence of this event was recorded.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastTimestamp?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Optional secondary object for more complex actions.
* @references io.k8s.api.core.v1.ObjectReference
*/
related?: io_k8s_api_core_v1_ObjectReference;
/**
* Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
*/
reportingComponent?: string;
/**
* ID of the controller instance, e.g. `kubelet-xyzf`.
*/
reportingInstance?: string;
/**
* What action was taken/failed regarding to the Regarding object.
*/
action?: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Time when this Event was first observed.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime
*/
eventTime?: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
/**
* Type of this event (Normal, Warning), new types could be added in the future
*/
type?: string;
}

/**
* Create a new Event with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Event instance with defaults applied
*/
export function createio_k8s_api_core_v1_Event(data?: Partial<io_k8s_api_core_v1_Event>): io_k8s_api_core_v1_Event {
 return {
   reason: data?.reason !== undefined ? data.reason : '',
   count: data?.count !== undefined ? data.count : 0,
   involvedObject: data?.involvedObject !== undefined ? data.involvedObject : createio_k8s_api_core_v1_ObjectReference(),
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   series: data?.series !== undefined ? data.series : createio_k8s_api_core_v1_EventSeries(),
   source: data?.source !== undefined ? data.source : createio_k8s_api_core_v1_EventSource(),
   kind: data?.kind !== undefined ? data.kind : '',
   message: data?.message !== undefined ? data.message : '',
   firstTimestamp: data?.firstTimestamp !== undefined ? data.firstTimestamp : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   lastTimestamp: data?.lastTimestamp !== undefined ? data.lastTimestamp : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   related: data?.related !== undefined ? data.related : createio_k8s_api_core_v1_ObjectReference(),
   reportingComponent: data?.reportingComponent !== undefined ? data.reportingComponent : '',
   reportingInstance: data?.reportingInstance !== undefined ? data.reportingInstance : '',
   action: data?.action !== undefined ? data.action : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   eventTime: data?.eventTime !== undefined ? data.eventTime : createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime(),
   type: data?.type !== undefined ? data.type : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_EventSeries, createio_k8s_api_core_v1_EventSeries } from '../eventseries/io_k8s_api_core_v1_EventSeries';
import { io_k8s_api_core_v1_EventSource, createio_k8s_api_core_v1_EventSource } from '../eventsource/io_k8s_api_core_v1_EventSource';
import { io_k8s_api_core_v1_ObjectReference, createio_k8s_api_core_v1_ObjectReference } from '../objectreference/io_k8s_api_core_v1_ObjectReference';
import { io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime, createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime } from '../microtime/io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
