/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
* @resourceType deploymentspec
* @kind Deploymentspec
*/
export interface io_k8s_api_apps_v1_DeploymentSpec {
/**
* Template describes the pods that will be created. The only allowed template.spec.restartPolicy value is "Always".
* @required
* @references io.k8s.api.core.v1.PodTemplateSpec
*/
template: io_k8s_api_core_v1_PodTemplateSpec;
/**
* Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
*/
minReadySeconds?: number;
/**
* Indicates that the deployment is paused.
*/
paused?: boolean;
/**
* The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s.
*/
progressDeadlineSeconds?: number;
/**
* Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
*/
replicas?: number;
/**
* The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
*/
revisionHistoryLimit?: number;
/**
* Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels.
* @required
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
selector: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* The deployment strategy to use to replace existing pods with new ones.
* @references io.k8s.api.apps.v1.DeploymentStrategy
*/
strategy?: io_k8s_api_apps_v1_DeploymentStrategy;
}

/**
* Create a new Deploymentspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DeploymentSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DeploymentSpec(data?: Partial<io_k8s_api_apps_v1_DeploymentSpec>): io_k8s_api_apps_v1_DeploymentSpec {
 return {
   template: data?.template !== undefined ? data.template : createio_k8s_api_core_v1_PodTemplateSpec(),
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   paused: data?.paused !== undefined ? data.paused : false,
   progressDeadlineSeconds: data?.progressDeadlineSeconds !== undefined ? data.progressDeadlineSeconds : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   revisionHistoryLimit: data?.revisionHistoryLimit !== undefined ? data.revisionHistoryLimit : 0,
   selector: data?.selector !== undefined ? data.selector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   strategy: data?.strategy !== undefined ? data.strategy : createio_k8s_api_apps_v1_DeploymentStrategy(),
 };
}
// Required imports
import { io_k8s_api_apps_v1_DeploymentStrategy, createio_k8s_api_apps_v1_DeploymentStrategy } from '../deploymentstrategy/io_k8s_api_apps_v1_DeploymentStrategy';
import { io_k8s_api_core_v1_PodTemplateSpec, createio_k8s_api_core_v1_PodTemplateSpec } from '../podtemplatespec/io_k8s_api_core_v1_PodTemplateSpec';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
