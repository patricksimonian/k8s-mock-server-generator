/**
* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
* @resourceType poddisruptionbudgetspec
* @kind Poddisruptionbudgetspec
*/
export interface io_k8s_api_policy_v1_PodDisruptionBudgetSpec {
/**
* UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".

Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.

IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.

AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.

Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.

This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).

Possible enum values:
 - `"AlwaysAllow"` policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
 - `"IfHealthyBudget"` policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
*/
unhealthyPodEvictionPolicy?: 'AlwaysAllow' | 'IfHealthyBudget';
/**
* An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".
* @references io.k8s.apimachinery.pkg.util.intstr.IntOrString
*/
maxUnavailable?: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
/**
* An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".
* @references io.k8s.apimachinery.pkg.util.intstr.IntOrString
*/
minAvailable?: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
/**
* Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
selector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
}

/**
* Create a new Poddisruptionbudgetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_PodDisruptionBudgetSpec instance with defaults applied
*/
export function createio_k8s_api_policy_v1_PodDisruptionBudgetSpec(data?: Partial<io_k8s_api_policy_v1_PodDisruptionBudgetSpec>): io_k8s_api_policy_v1_PodDisruptionBudgetSpec {
 return {
   unhealthyPodEvictionPolicy: data?.unhealthyPodEvictionPolicy !== undefined ? data.unhealthyPodEvictionPolicy : '',
   maxUnavailable: data?.maxUnavailable !== undefined ? data.maxUnavailable : createio_k8s_apimachinery_pkg_util_intstr_IntOrString(),
   minAvailable: data?.minAvailable !== undefined ? data.minAvailable : createio_k8s_apimachinery_pkg_util_intstr_IntOrString(),
   selector: data?.selector !== undefined ? data.selector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
import { io_k8s_apimachinery_pkg_util_intstr_IntOrString, createio_k8s_apimachinery_pkg_util_intstr_IntOrString } from '../intorstring/io_k8s_apimachinery_pkg_util_intstr_IntOrString';
