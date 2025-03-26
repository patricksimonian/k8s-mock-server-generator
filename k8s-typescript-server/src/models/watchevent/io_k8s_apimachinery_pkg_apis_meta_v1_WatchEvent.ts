/**
* Event represents a single event to a watched resource.
* @resourceType watchevent
* @kind Watchevent
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent {
/**
* Object is:
 * If Type is Added or Modified: the new state of the object.
 * If Type is Deleted: the state of the object immediately before deletion.
 * If Type is Error: *Status is recommended; other types may make sense
   depending on context.
* @required
* @references io.k8s.apimachinery.pkg.runtime.RawExtension
*/
object: io_k8s_apimachinery_pkg_runtime_RawExtension;
/**
* 
* @required
*/
type: string;
}

/**
* Create a new Watchevent with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent>): io_k8s_apimachinery_pkg_apis_meta_v1_WatchEvent {
 return {
   object: data?.object !== undefined ? data.object : createio_k8s_apimachinery_pkg_runtime_RawExtension(),
   type: data?.type !== undefined ? data.type : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_runtime_RawExtension, createio_k8s_apimachinery_pkg_runtime_RawExtension } from '../rawextension/io_k8s_apimachinery_pkg_runtime_RawExtension';
