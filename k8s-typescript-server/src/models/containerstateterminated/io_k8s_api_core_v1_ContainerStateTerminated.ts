/**
* ContainerStateTerminated is a terminated state of a container.
* @resourceType containerstateterminated
* @kind Containerstateterminated
*/
export interface io_k8s_api_core_v1_ContainerStateTerminated {
/**
* Time at which previous execution of the container started
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
startedAt?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Container's ID in the format '<type>://<container_id>'
*/
containerID?: string;
/**
* Exit status from the last termination of the container
* @required
*/
exitCode: number;
/**
* Time at which the container last terminated
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
finishedAt?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Message regarding the last termination of the container
*/
message?: string;
/**
* (brief) reason from the last termination of the container
*/
reason?: string;
/**
* Signal from the last termination of the container
*/
signal?: number;
}

/**
* Create a new Containerstateterminated with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerStateTerminated instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerStateTerminated(data?: Partial<io_k8s_api_core_v1_ContainerStateTerminated>): io_k8s_api_core_v1_ContainerStateTerminated {
 return {
   startedAt: data?.startedAt !== undefined ? data.startedAt : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   containerID: data?.containerID !== undefined ? data.containerID : '',
   exitCode: data?.exitCode !== undefined ? data.exitCode : 0,
   finishedAt: data?.finishedAt !== undefined ? data.finishedAt : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
   signal: data?.signal !== undefined ? data.signal : 0,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
