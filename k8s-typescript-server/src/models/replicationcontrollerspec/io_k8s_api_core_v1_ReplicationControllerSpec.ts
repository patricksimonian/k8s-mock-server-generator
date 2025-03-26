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
* Template is the object that describes the pod that will be created if insufficient replicas are detected. This takes precedence over a TemplateRef. The only allowed template.spec.restartPolicy value is "Always". More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
* @references io.k8s.api.core.v1.PodTemplateSpec
*/
template?: io_k8s_api_core_v1_PodTemplateSpec;
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
   template: data?.template !== undefined ? data.template : createio_k8s_api_core_v1_PodTemplateSpec(),
 };
}
// Required imports
import { io_k8s_api_core_v1_PodTemplateSpec, createio_k8s_api_core_v1_PodTemplateSpec } from '../podtemplatespec/io_k8s_api_core_v1_PodTemplateSpec';
