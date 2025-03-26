/**
* configuration of a horizontal pod autoscaler.
* @resourceType horizontalpodautoscaler
* @kind Horizontalpodautoscaler
*/
export interface io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler {
/**
* spec defines the behaviour of autoscaler. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status.
* @references io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerSpec
*/
spec?: io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec;
/**
* status is the current information about the autoscaler.
* @references io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerStatus
*/
status?: io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
}

/**
* Create a new Horizontalpodautoscaler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_HorizontalPodAutoscaler(data?: Partial<io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler>): io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler {
 return {
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
 };
}
// Required imports
import { io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec, createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec } from '../horizontalpodautoscalerspec/io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec';
import { io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus, createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus } from '../horizontalpodautoscalerstatus/io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
