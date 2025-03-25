/**
* Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
* @resourceType scheduling
* @kind Scheduling
*/
export interface io_k8s_api_node_v1_Scheduling {
/**
* nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
*/
nodeSelector?: Record<string, any>;
/**
* tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass.
* @isArray
*/
tolerations?: Array<{ value?: string; effect?: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key?: string; operator?: 'Equal' | 'Exists'; tolerationSeconds?: number }>;
}

/**
* Create a new Scheduling with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_node_v1_Scheduling instance with defaults applied
*/
export function createio_k8s_api_node_v1_Scheduling(data?: Partial<io_k8s_api_node_v1_Scheduling>): io_k8s_api_node_v1_Scheduling {
 return {
   nodeSelector: data?.nodeSelector !== undefined ? data.nodeSelector : {},
   tolerations: data?.tolerations !== undefined ? data.tolerations : [],
 };
}
