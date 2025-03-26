/**
* CronJob represents the configuration of a single cron job.
* @resourceType cronjob
* @kind Cronjob
*/
export interface io_k8s_api_batch_v1_CronJob {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.batch.v1.CronJobSpec
*/
spec?: io_k8s_api_batch_v1_CronJobSpec;
/**
* Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.batch.v1.CronJobStatus
*/
status?: io_k8s_api_batch_v1_CronJobStatus;
}

/**
* Create a new Cronjob with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_CronJob instance with defaults applied
*/
export function createio_k8s_api_batch_v1_CronJob(data?: Partial<io_k8s_api_batch_v1_CronJob>): io_k8s_api_batch_v1_CronJob {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_batch_v1_CronJobSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_batch_v1_CronJobStatus(),
 };
}
// Required imports
import { io_k8s_api_batch_v1_CronJobSpec, createio_k8s_api_batch_v1_CronJobSpec } from '../cronjobspec/io_k8s_api_batch_v1_CronJobSpec';
import { io_k8s_api_batch_v1_CronJobStatus, createio_k8s_api_batch_v1_CronJobStatus } from '../cronjobstatus/io_k8s_api_batch_v1_CronJobStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
