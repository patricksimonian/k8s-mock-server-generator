/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time. How often to update the EventSeries is up to the event reporters. The default event reporter in "k8s.io/client-go/tools/events/event_broadcaster.go" shows how this struct is updated on heartbeats and can guide customized reporter implementations.
* @resourceType eventseries
* @kind Eventseries
*/
export interface io_k8s_api_events_v1_EventSeries {
/**
* MicroTime is version of Time with microsecond level precision.
* @required
*/
lastObservedTime: Date;
/**
* count is the number of occurrences in this series up to the last heartbeat time.
* @required
*/
count: number;
}

/**
* Create a new Eventseries with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_events_v1_EventSeries instance with defaults applied
*/
export function createio_k8s_api_events_v1_EventSeries(data?: Partial<io_k8s_api_events_v1_EventSeries>): io_k8s_api_events_v1_EventSeries {
 return {
   lastObservedTime: data?.lastObservedTime !== undefined ? data.lastObservedTime : '',
   count: data?.count !== undefined ? data.count : 0,
 };
}
