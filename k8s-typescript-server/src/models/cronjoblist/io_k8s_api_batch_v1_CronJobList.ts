/**
* CronJobList is a collection of cron jobs.
* @resourceType cronjoblist
* @kind CronjobList
*/
export interface io_k8s_api_batch_v1_CronJobList {
/**
* items is the list of CronJobs.
* @required
* @isArray
* @references io.k8s.api.batch.v1.CronJob
*/
items: io_k8s_api_batch_v1_CronJob[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new CronjobList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_CronJobList instance with defaults applied
*/
export function createio_k8s_api_batch_v1_CronJobList(data?: Partial<io_k8s_api_batch_v1_CronJobList>): io_k8s_api_batch_v1_CronJobList {
 return {
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_batch_v1_CronJob, createio_k8s_api_batch_v1_CronJob } from '../cronjob/io_k8s_api_batch_v1_CronJob';
