/**
* Job represents the configuration of a single job.
* @resourceType job
* @kind Job
*/
export interface io_k8s_api_batch_v1_Job {
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
* Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.batch.v1.JobSpec
*/
spec?: io_k8s_api_batch_v1_JobSpec;
/**
* Current status of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.batch.v1.JobStatus
*/
status?: io_k8s_api_batch_v1_JobStatus;
}

/**
* Create a new Job with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_Job instance with defaults applied
*/
export function createio_k8s_api_batch_v1_Job(data?: Partial<io_k8s_api_batch_v1_Job>): io_k8s_api_batch_v1_Job {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_batch_v1_JobSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_batch_v1_JobStatus(),
 };
}
// Required imports
import { io_k8s_api_batch_v1_JobSpec, createio_k8s_api_batch_v1_JobSpec } from '../jobspec/io_k8s_api_batch_v1_JobSpec';
import { io_k8s_api_batch_v1_JobStatus, createio_k8s_api_batch_v1_JobStatus } from '../jobstatus/io_k8s_api_batch_v1_JobStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
