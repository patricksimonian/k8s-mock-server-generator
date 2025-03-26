/**
* Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.
* @resourceType event
* @kind Event
*/
export interface io_k8s_api_core_v1_Event {
/**
* MicroTime is version of Time with microsecond level precision.
*/
eventTime?: Date;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @required
* @isObject
*/
metadata: { annotations?: Record<string, any>; deletionTimestamp?: Date; name?: string; resourceVersion?: string; selfLink?: string; uid?: string; finalizers?: string[]; generateName?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; namespace?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number };
/**
* This should be a short, machine understandable string that gives the reason for the transition into the object's current status.
*/
reason?: string;
/**
* Type of this event (Normal, Warning), new types could be added in the future
*/
type?: string;
/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
* @isObject
*/
series?: { count?: number; lastObservedTime?: Date };
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
firstTimestamp?: Date;
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @required
* @isObject
*/
involvedObject: { fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string };
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* A human-readable description of the status of this operation.
*/
message?: string;
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
related?: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string };
/**
* Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.
*/
reportingComponent?: string;
/**
* EventSource contains information for an event.
* @isObject
*/
source?: { component?: string; host?: string };
/**
* What action was taken/failed regarding to the Regarding object.
*/
action?: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* The number of times this event has occurred.
*/
count?: number;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTimestamp?: Date;
/**
* ID of the controller instance, e.g. `kubelet-xyzf`.
*/
reportingInstance?: string;
}

/**
* Create a new Event with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Event instance with defaults applied
*/
export function createio_k8s_api_core_v1_Event(data?: Partial<io_k8s_api_core_v1_Event>): io_k8s_api_core_v1_Event {
 return {
   eventTime: data?.eventTime !== undefined ? data.eventTime : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   reason: data?.reason !== undefined ? data.reason : '',
   type: data?.type !== undefined ? data.type : '',
   series: data?.series !== undefined ? data.series : {},
   firstTimestamp: data?.firstTimestamp !== undefined ? data.firstTimestamp : '',
   involvedObject: data?.involvedObject !== undefined ? data.involvedObject : {},
   kind: data?.kind !== undefined ? data.kind : '',
   message: data?.message !== undefined ? data.message : '',
   related: data?.related !== undefined ? data.related : {},
   reportingComponent: data?.reportingComponent !== undefined ? data.reportingComponent : '',
   source: data?.source !== undefined ? data.source : {},
   action: data?.action !== undefined ? data.action : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   count: data?.count !== undefined ? data.count : 0,
   lastTimestamp: data?.lastTimestamp !== undefined ? data.lastTimestamp : '',
   reportingInstance: data?.reportingInstance !== undefined ? data.reportingInstance : '',
 };
}
