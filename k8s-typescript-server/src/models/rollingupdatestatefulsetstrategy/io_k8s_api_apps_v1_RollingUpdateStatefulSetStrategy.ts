/**
* RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
* @resourceType rollingupdatestatefulsetstrategy
* @kind Rollingupdatestatefulsetstrategy
*/
export interface io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy {
/**
* The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding up. This can not be 0. Defaults to 1. This field is alpha-level and is only honored by servers that enable the MaxUnavailableStatefulSet feature. The field applies to all pods in the range 0 to Replicas-1. That means if there is any unavailable pod in the range 0 to Replicas-1, it will be counted towards MaxUnavailable.
* @references io.k8s.apimachinery.pkg.util.intstr.IntOrString
*/
maxUnavailable?: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
/**
* Partition indicates the ordinal at which the StatefulSet should be partitioned for updates. During a rolling update, all pods from ordinal Replicas-1 to Partition are updated. All pods from ordinal Partition-1 to 0 remain untouched. This is helpful in being able to do a canary based deployment. The default value is 0.
*/
partition?: number;
}

/**
* Create a new Rollingupdatestatefulsetstrategy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy instance with defaults applied
*/
export function createio_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy(data?: Partial<io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy>): io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy {
 return {
   maxUnavailable: data?.maxUnavailable !== undefined ? data.maxUnavailable : createio_k8s_apimachinery_pkg_util_intstr_IntOrString(),
   partition: data?.partition !== undefined ? data.partition : 0,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_util_intstr_IntOrString, createio_k8s_apimachinery_pkg_util_intstr_IntOrString } from '../intorstring/io_k8s_apimachinery_pkg_util_intstr_IntOrString';
