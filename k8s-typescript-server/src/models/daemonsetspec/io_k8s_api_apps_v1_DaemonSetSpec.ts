/**
* DaemonSetSpec is the specification of a daemon set.
* @resourceType daemonsetspec
* @kind Daemonsetspec
*/
export interface io_k8s_api_apps_v1_DaemonSetSpec {
/**
* The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
*/
minReadySeconds?: number;
/**
* The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
*/
revisionHistoryLimit?: number;
/**
* A label query over pods that are managed by the daemon set. Must match in order to be controlled. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
* @required
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
selector: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* An object that describes the pod that will be created. The DaemonSet will create exactly one copy of this pod on every node that matches the template's node selector (or on every node if no node selector is specified). The only allowed template.spec.restartPolicy value is "Always". More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template
* @required
* @references io.k8s.api.core.v1.PodTemplateSpec
*/
template: io_k8s_api_core_v1_PodTemplateSpec;
/**
* An update strategy to replace existing DaemonSet pods with new pods.
* @references io.k8s.api.apps.v1.DaemonSetUpdateStrategy
*/
updateStrategy?: io_k8s_api_apps_v1_DaemonSetUpdateStrategy;
}

/**
* Create a new Daemonsetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSetSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSetSpec(data?: Partial<io_k8s_api_apps_v1_DaemonSetSpec>): io_k8s_api_apps_v1_DaemonSetSpec {
 return {
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   revisionHistoryLimit: data?.revisionHistoryLimit !== undefined ? data.revisionHistoryLimit : 0,
   selector: data?.selector !== undefined ? data.selector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   template: data?.template !== undefined ? data.template : createio_k8s_api_core_v1_PodTemplateSpec(),
   updateStrategy: data?.updateStrategy !== undefined ? data.updateStrategy : createio_k8s_api_apps_v1_DaemonSetUpdateStrategy(),
 };
}
// Required imports
import { io_k8s_api_apps_v1_DaemonSetUpdateStrategy, createio_k8s_api_apps_v1_DaemonSetUpdateStrategy } from '../daemonsetupdatestrategy/io_k8s_api_apps_v1_DaemonSetUpdateStrategy';
import { io_k8s_api_core_v1_PodTemplateSpec, createio_k8s_api_core_v1_PodTemplateSpec } from '../podtemplatespec/io_k8s_api_core_v1_PodTemplateSpec';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
