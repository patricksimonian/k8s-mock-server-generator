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
active?: Array<{ apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string }>;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastScheduleTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastSuccessfulTime?: Date;
}

/**
* Create a new Cronjobstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_CronJobStatus instance with defaults applied
*/
export function createio_k8s_api_batch_v1_CronJobStatus(data?: Partial<io_k8s_api_batch_v1_CronJobStatus>): io_k8s_api_batch_v1_CronJobStatus {
 return {
   active: data?.active !== undefined ? data.active : [],
   lastScheduleTime: data?.lastScheduleTime !== undefined ? data.lastScheduleTime : '',
   lastSuccessfulTime: data?.lastSuccessfulTime !== undefined ? data.lastSuccessfulTime : '',
 };
}
