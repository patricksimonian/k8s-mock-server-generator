/**
* HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
* @resourceType horizontalpodautoscaler
* @kind Horizontalpodautoscaler
*/
export interface io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionGracePeriodSeconds?: number; generation?: number; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; resourceVersion?: string; selfLink?: string; uid?: string; creationTimestamp?: Date; finalizers?: string[]; generateName?: string; name?: string; deletionTimestamp?: Date; namespace?: string; labels?: Record<string, any>; annotations?: Record<string, any> };
/**
* HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
* @isObject
*/
spec?: { maxReplicas: number; metrics?: Array<{ containerResource?: { name: string; target: { type: string; value?: string; averageUtilization?: number; averageValue?: string }; container: string }; external?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { type: string; value?: string; averageUtilization?: number; averageValue?: string } }; object?: { describedObject: { apiVersion?: string; kind: string; name: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; pods?: { metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; target: { value?: string; averageUtilization?: number; averageValue?: string; type: string } }; resource?: { name: string; target: { averageUtilization?: number; averageValue?: string; type: string; value?: string } }; type: string }>; minReplicas?: number; scaleTargetRef: { apiVersion?: string; kind: string; name: string }; behavior?: { scaleDown?: { policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number }; scaleUp?: { policies?: Array<{ periodSeconds: number; type: string; value: number }>; selectPolicy?: string; stabilizationWindowSeconds?: number } } };
/**
* HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.
* @isObject
*/
status?: { conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }>; currentMetrics?: Array<{ containerResource?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string; container: string }; external?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ values?: string[]; key: string; operator: string }> } } }; object?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; describedObject: { name: string; apiVersion?: string; kind: string }; metric: { name: string; selector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> } } }; pods?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; metric: { name: string; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } } }; resource?: { current: { averageUtilization?: number; averageValue?: string; value?: string }; name: string }; type: string }>; currentReplicas?: number; desiredReplicas: number; lastScaleTime?: Date; observedGeneration?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Horizontalpodautoscaler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_HorizontalPodAutoscaler(data?: Partial<io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler>): io_k8s_api_autoscaling_v2_HorizontalPodAutoscaler {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { maxReplicas: 0, scaleTargetRef: { kind: '', name: '' } },
   status: data?.status !== undefined ? data.status : { desiredReplicas: 0 },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
