/**
* Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system. Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
* @resourceType event
* @kind Event
*/
export interface io_k8s_api_events_v1_Event {
/**
* deprecatedCount is the deprecated field assuring backward compatibility with core.v1 Event type.
*/
deprecatedCount?: number;
/**
* deprecatedLastTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
deprecatedLastTimestamp?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* deprecatedSource is the deprecated field assuring backward compatibility with core.v1 Event type.
* @references io.k8s.api.core.v1.EventSource
*/
deprecatedSource?: io_k8s_api_core_v1_EventSource;
/**
* reason is why the action was taken. It is human-readable. This field cannot be empty for new Events and it can have at most 128 characters.
*/
reason?: string;
/**
* reportingInstance is the ID of the controller instance, e.g. `kubelet-xyzf`. This field cannot be empty for new Events and it can have at most 128 characters.
*/
reportingInstance?: string;
/**
* series is data about the Event series this event represents or nil if it's a singleton Event.
* @references io.k8s.api.events.v1.EventSeries
*/
series?: io_k8s_api_events_v1_EventSeries;
/**
* type is the type of this event (Normal, Warning), new types could be added in the future. It is machine-readable. This field cannot be empty for new Events.
*/
type?: string;
/**
* action is what action was taken/failed regarding to the regarding object. It is machine-readable. This field cannot be empty for new Events and it can have at most 128 characters.
*/
action?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* deprecatedFirstTimestamp is the deprecated field assuring backward compatibility with core.v1 Event type.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
deprecatedFirstTimestamp?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* eventTime is the time when this Event was first observed. It is required.
* @required
* @references io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime
*/
eventTime: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* note is a human-readable description of the status of this operation. Maximal length of the note is 1kB, but libraries should be prepared to handle values up to 64kB.
*/
note?: string;
/**
* regarding contains the object this Event is about. In most cases it's an Object reporting controller implements, e.g. ReplicaSetController implements ReplicaSets and this event is emitted because it acts on some changes in a ReplicaSet object.
* @references io.k8s.api.core.v1.ObjectReference
*/
regarding?: io_k8s_api_core_v1_ObjectReference;
/**
* related is the optional secondary object for more complex actions. E.g. when regarding object triggers a creation or deletion of related object.
* @references io.k8s.api.core.v1.ObjectReference
*/
related?: io_k8s_api_core_v1_ObjectReference;
/**
* reportingController is the name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`. This field cannot be empty for new Events.
*/
reportingController?: string;
}

/**
* Create a new Event with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_events_v1_Event instance with defaults applied
*/
export function createio_k8s_api_events_v1_Event(data?: Partial<io_k8s_api_events_v1_Event>): io_k8s_api_events_v1_Event {
 return {
   deprecatedCount: data?.deprecatedCount !== undefined ? data.deprecatedCount : 0,
   deprecatedLastTimestamp: data?.deprecatedLastTimestamp !== undefined ? data.deprecatedLastTimestamp : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   deprecatedSource: data?.deprecatedSource !== undefined ? data.deprecatedSource : createio_k8s_api_core_v1_EventSource(),
   reason: data?.reason !== undefined ? data.reason : '',
   reportingInstance: data?.reportingInstance !== undefined ? data.reportingInstance : '',
   series: data?.series !== undefined ? data.series : createio_k8s_api_events_v1_EventSeries(),
   type: data?.type !== undefined ? data.type : '',
   action: data?.action !== undefined ? data.action : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   deprecatedFirstTimestamp: data?.deprecatedFirstTimestamp !== undefined ? data.deprecatedFirstTimestamp : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   eventTime: data?.eventTime !== undefined ? data.eventTime : createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime(),
   kind: data?.kind !== undefined ? data.kind : '',
   note: data?.note !== undefined ? data.note : '',
   regarding: data?.regarding !== undefined ? data.regarding : createio_k8s_api_core_v1_ObjectReference(),
   related: data?.related !== undefined ? data.related : createio_k8s_api_core_v1_ObjectReference(),
   reportingController: data?.reportingController !== undefined ? data.reportingController : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_EventSource, createio_k8s_api_core_v1_EventSource } from '../eventsource/io_k8s_api_core_v1_EventSource';
import { io_k8s_api_core_v1_ObjectReference, createio_k8s_api_core_v1_ObjectReference } from '../objectreference/io_k8s_api_core_v1_ObjectReference';
import { io_k8s_api_events_v1_EventSeries, createio_k8s_api_events_v1_EventSeries } from '../eventseries/io_k8s_api_events_v1_EventSeries';
import { io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime, createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime } from '../microtime/io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
