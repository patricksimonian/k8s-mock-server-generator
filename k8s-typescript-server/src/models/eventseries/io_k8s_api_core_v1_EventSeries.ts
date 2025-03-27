/**
* EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
* @resourceType eventseries
* @kind Eventseries
*/
export interface io_k8s_api_core_v1_EventSeries {
/**
* Time of the last occurrence observed
* @references io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime
*/
lastObservedTime?: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
/**
* Number of occurrences in this series up to the last heartbeat time
*/
count?: number;
}

/**
* Create a new Eventseries with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EventSeries instance with defaults applied
*/
export function createio_k8s_api_core_v1_EventSeries(data?: Partial<io_k8s_api_core_v1_EventSeries>): io_k8s_api_core_v1_EventSeries {
 return {
   lastObservedTime: data?.lastObservedTime !== undefined ? data.lastObservedTime : createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime(),
   count: data?.count !== undefined ? data.count : 0,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime, createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime } from '../microtime/io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime';
