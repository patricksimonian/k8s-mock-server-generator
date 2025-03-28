/**
* Spec to control the desired behavior of rolling update.
* @resourceType rollingupdatedeployment
* @kind Rollingupdatedeployment
*/
export interface io_k8s_api_apps_v1_RollingUpdateDeployment {
/**
* The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
* @references io.k8s.apimachinery.pkg.util.intstr.IntOrString
*/
maxUnavailable?: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
/**
* The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
* @references io.k8s.apimachinery.pkg.util.intstr.IntOrString
*/
maxSurge?: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
}

/**
* Create a new Rollingupdatedeployment with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_RollingUpdateDeployment instance with defaults applied
*/
export function createio_k8s_api_apps_v1_RollingUpdateDeployment(data?: Partial<io_k8s_api_apps_v1_RollingUpdateDeployment>): io_k8s_api_apps_v1_RollingUpdateDeployment {
 return {
   maxUnavailable: data?.maxUnavailable !== undefined ? data.maxUnavailable : createio_k8s_apimachinery_pkg_util_intstr_IntOrString(),
   maxSurge: data?.maxSurge !== undefined ? data.maxSurge : createio_k8s_apimachinery_pkg_util_intstr_IntOrString(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_util_intstr_IntOrString, createio_k8s_apimachinery_pkg_util_intstr_IntOrString } from '../intorstring/io_k8s_apimachinery_pkg_util_intstr_IntOrString';
