/**
* JobTemplateSpec describes the data a Job should have when created from a template
* @resourceType jobtemplatespec
* @kind Jobtemplatespec
*/
export interface io_k8s_api_batch_v1_JobTemplateSpec {
/**
* Standard object's metadata of the jobs created from this template. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Specification of the desired behavior of the job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.batch.v1.JobSpec
*/
spec?: io_k8s_api_batch_v1_JobSpec;
}

/**
* Create a new Jobtemplatespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_JobTemplateSpec instance with defaults applied
*/
export function createio_k8s_api_batch_v1_JobTemplateSpec(data?: Partial<io_k8s_api_batch_v1_JobTemplateSpec>): io_k8s_api_batch_v1_JobTemplateSpec {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_batch_v1_JobSpec(),
 };
}
// Required imports
import { io_k8s_api_batch_v1_JobSpec, createio_k8s_api_batch_v1_JobSpec } from '../jobspec/io_k8s_api_batch_v1_JobSpec';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
