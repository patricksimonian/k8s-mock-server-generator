/**
* CronJobStatus represents the current state of a cron job.
* @resourceType cronjobstatus
* @kind Cronjobstatus
*/
export interface io_k8s_api_batch_v1_CronJobStatus {
/**
* A list of pointers to currently running jobs.
* @isArray
*/
active?: io_k8s_api_core_v1_ObjectReference[];
/**
* Information when was the last time the job was successfully scheduled.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastScheduleTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Information when was the last time the job successfully completed.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
lastSuccessfulTime?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
}

/**
* Create a new Cronjobstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_CronJobStatus instance with defaults applied
*/
export function createio_k8s_api_batch_v1_CronJobStatus(data?: Partial<io_k8s_api_batch_v1_CronJobStatus>): io_k8s_api_batch_v1_CronJobStatus {
 return {
   active: data?.active !== undefined ? data.active : [],
   lastScheduleTime: data?.lastScheduleTime !== undefined ? data.lastScheduleTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   lastSuccessfulTime: data?.lastSuccessfulTime !== undefined ? data.lastSuccessfulTime : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ObjectReference, createio_k8s_api_core_v1_ObjectReference } from '../io.k8s.api.core.v1.ObjectReference';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
