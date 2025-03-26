/**
* HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
* @resourceType horizontalpodautoscalerlist
* @kind HorizontalpodautoscalerList
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* metadata is the standard list metadata.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of horizontal pod autoscaler objects.
* @required
* @isArray
* @references io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler
*/
items: io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler[];
}

/**
* Create a new HorizontalpodautoscalerList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerList {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
 };
}
// Required imports
import { io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler, createio_k8s_api_autoscaling_v1_HorizontalPodAutoscaler } from '../horizontalpodautoscaler/io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
