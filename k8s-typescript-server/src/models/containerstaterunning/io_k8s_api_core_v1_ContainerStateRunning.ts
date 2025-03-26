/**
* ContainerStateRunning is a running state of a container.
* @resourceType containerstaterunning
* @kind Containerstaterunning
*/
export interface io_k8s_api_core_v1_ContainerStateRunning {
/**
* Time at which the container was last (re-)started
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
startedAt?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
}

/**
* Create a new Containerstaterunning with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerStateRunning instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerStateRunning(data?: Partial<io_k8s_api_core_v1_ContainerStateRunning>): io_k8s_api_core_v1_ContainerStateRunning {
 return {
   startedAt: data?.startedAt !== undefined ? data.startedAt : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
