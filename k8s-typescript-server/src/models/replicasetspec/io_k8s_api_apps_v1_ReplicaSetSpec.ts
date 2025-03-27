/**
* ReplicaSetSpec is the specification of a ReplicaSet.
* @resourceType replicasetspec
* @kind Replicasetspec
*/
export interface io_k8s_api_apps_v1_ReplicaSetSpec {
/**
* Template is the object that describes the pod that will be created if insufficient replicas are detected. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
* @references io.k8s.api.core.v1.PodTemplateSpec
*/
template?: io_k8s_api_core_v1_PodTemplateSpec;
/**
* Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
*/
minReadySeconds?: number;
/**
* Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
*/
replicas?: number;
/**
* Selector is a label query over pods that should match the replica count. Label keys and values that must match in order to be controlled by this replica set. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
* @required
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
selector: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
}

/**
* Create a new Replicasetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ReplicaSetSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ReplicaSetSpec(data?: Partial<io_k8s_api_apps_v1_ReplicaSetSpec>): io_k8s_api_apps_v1_ReplicaSetSpec {
 return {
   template: data?.template !== undefined ? data.template : createio_k8s_api_core_v1_PodTemplateSpec(),
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   selector: data?.selector !== undefined ? data.selector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
 };
}
// Required imports
import { io_k8s_api_core_v1_PodTemplateSpec, createio_k8s_api_core_v1_PodTemplateSpec } from '../podtemplatespec/io_k8s_api_core_v1_PodTemplateSpec';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
