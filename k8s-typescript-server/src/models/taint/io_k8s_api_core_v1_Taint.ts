/**
* The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
* @resourceType taint
* @kind Taint
*/
export interface io_k8s_api_core_v1_Taint {
/**
* Required. The taint key to be applied to a node.
* @required
*/
key: string;
/**
* TimeAdded represents the time at which the taint was added. It is only written for NoExecute taints.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
timeAdded?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* The taint value corresponding to the taint key.
*/
value?: string;
/**
* Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.

Possible enum values:
 - `"NoExecute"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.
 - `"NoSchedule"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.
 - `"PreferNoSchedule"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
* @required
*/
effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule';
}

/**
* Create a new Taint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Taint instance with defaults applied
*/
export function createio_k8s_api_core_v1_Taint(data?: Partial<io_k8s_api_core_v1_Taint>): io_k8s_api_core_v1_Taint {
 return {
   key: data?.key !== undefined ? data.key : '',
   timeAdded: data?.timeAdded !== undefined ? data.timeAdded : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   value: data?.value !== undefined ? data.value : '',
   effect: data?.effect !== undefined ? data.effect : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
