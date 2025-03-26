/**
* ReplicationControllerSpec is the specification of a replication controller.
* @resourceType replicationcontrollerspec
* @kind Replicationcontrollerspec
*/
export interface io_k8s_api_core_v1_ReplicationControllerSpec {
/**
* Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
*/
minReadySeconds?: number;
/**
* Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
*/
replicas?: number;
/**
* Selector is a label query over pods that should match the Replicas count. If Selector is empty, it is defaulted to the labels present on the Pod template. Label keys and values that must match in order to be controlled by this replication controller, if empty defaulted to labels on Pod template. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
*/
selector?: Record<string, any>;
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @isObject
*/
template?: { metadata?: { creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; name?: string; resourceVersion?: string; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; generation?: number; namespace?: string; selfLink?: string; deletionGracePeriodSeconds?: number }; spec?: Record<string, any> };
}

/**
* Create a new Replicationcontrollerspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationControllerSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationControllerSpec(data?: Partial<io_k8s_api_core_v1_ReplicationControllerSpec>): io_k8s_api_core_v1_ReplicationControllerSpec {
 return {
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   selector: data?.selector !== undefined ? data.selector : {},
   template: data?.template !== undefined ? data.template : {},
 };
}
