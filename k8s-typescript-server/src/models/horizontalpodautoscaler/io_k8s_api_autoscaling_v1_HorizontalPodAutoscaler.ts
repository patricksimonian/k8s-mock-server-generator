/**
* configuration of a horizontal pod autoscaler.
* @resourceType horizontalpodautoscaler
* @kind Horizontalpodautoscaler
*/
export interface io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; deletionGracePeriodSeconds?: number; generation?: number; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; deletionTimestamp?: Date; finalizers?: string[]; name?: string; resourceVersion?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; selfLink?: string; uid?: string };
/**
* specification of a horizontal pod autoscaler.
* @isObject
*/
spec?: { minReplicas?: number; scaleTargetRef: { apiVersion?: string; kind: string; name: string }; targetCPUUtilizationPercentage?: number; maxReplicas: number };
/**
* current status of a horizontal pod autoscaler
* @isObject
*/
status?: { observedGeneration?: number; currentCPUUtilizationPercentage?: number; currentReplicas: number; desiredReplicas: number; lastScaleTime?: Date };
}

/**
* Create a new Horizontalpodautoscaler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v1_HorizontalPodAutoscaler(data?: Partial<io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler>): io_k8s_api_autoscaling_v1_HorizontalPodAutoscaler {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { maxReplicas: 0, scaleTargetRef: { kind: '', name: '' } },
   status: data?.status !== undefined ? data.status : { currentReplicas: 0, desiredReplicas: 0 },
 };
}
