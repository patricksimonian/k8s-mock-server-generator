/**
* JobList is a collection of jobs.
* @resourceType joblist
* @kind JobList
*/
export interface io_k8s_api_batch_v1_JobList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of Jobs.
* @required
* @isArray
* @references io.k8s.api.batch.v1.Job
*/
items: io_k8s_api_batch_v1_Job[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
}

/**
* Create a new JobList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_JobList instance with defaults applied
*/
export function createio_k8s_api_batch_v1_JobList(data?: Partial<io_k8s_api_batch_v1_JobList>): io_k8s_api_batch_v1_JobList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
 };
}
// Required imports
import { io_k8s_api_batch_v1_Job, createio_k8s_api_batch_v1_Job } from '../job/io_k8s_api_batch_v1_Job';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
