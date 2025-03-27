/**
* Scale represents a scaling request for a resource.
* @resourceType scale
* @kind Scale
*/
export interface io_k8s_api_autoscaling_v1_Scale {
/**
* status is the current status of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status. Read-only.
* @references io.k8s.api.autoscaling.v1.ScaleStatus
*/
status?: io_k8s_api_autoscaling_v1_ScaleStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object metadata; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* spec defines the behavior of the scale. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
* @references io.k8s.api.autoscaling.v1.ScaleSpec
*/
spec?: io_k8s_api_autoscaling_v1_ScaleSpec;
}

/**
* Create a new Scale with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_Scale instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_Scale(data?: Partial<io_k8s_api_autoscaling_v1_Scale>): io_k8s_api_autoscaling_v1_Scale {
 return {
   status: data?.status !== undefined ? data.status : createio_k8s_api_autoscaling_v1_ScaleStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_autoscaling_v1_ScaleSpec(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v1_ScaleSpec, createio_k8s_api_autoscaling_v1_ScaleSpec } from '../scalespec/io_k8s_api_autoscaling_v1_ScaleSpec';
import { io_k8s_api_autoscaling_v1_ScaleStatus, createio_k8s_api_autoscaling_v1_ScaleStatus } from '../scalestatus/io_k8s_api_autoscaling_v1_ScaleStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
