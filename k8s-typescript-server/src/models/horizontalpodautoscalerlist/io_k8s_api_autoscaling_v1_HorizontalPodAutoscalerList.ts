/**
* list of horizontal pod autoscaler objects.
* @resourceType horizontalpodautoscalerlist
* @kind HorizontalpodautoscalerList
*/
export interface io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is the list of horizontal pod autoscaler objects.
* @required
* @isArray
* @references io.k8s.api.autoscaling.v2.HorizontalPodAutoscaler
*/
items: io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new HorizontalpodautoscalerList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList(data?: Partial<io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList>): io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler, createio_k8s_api_autoscaling_v2_HorizontalPodAutoscaler } from '../horizontalpodautoscaler/io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler';
