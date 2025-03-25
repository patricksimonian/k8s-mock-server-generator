/**
* The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
* @resourceType taint
* @kind Taint
*/
export interface io_k8s_api_core_v1_Taint {
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
/**
* Required. The taint key to be applied to a node.
* @required
*/
key: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
timeAdded?: Date;
}

/**
* Create a new Taint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Taint instance with defaults applied
*/
export function createio_k8s_api_core_v1_Taint(data?: Partial<io_k8s_api_core_v1_Taint>): io_k8s_api_core_v1_Taint {
 return {
   value: data?.value !== undefined ? data.value : '',
   effect: data?.effect !== undefined ? data.effect : '',
   key: data?.key !== undefined ? data.key : '',
   timeAdded: data?.timeAdded !== undefined ? data.timeAdded : '',
 };
}
