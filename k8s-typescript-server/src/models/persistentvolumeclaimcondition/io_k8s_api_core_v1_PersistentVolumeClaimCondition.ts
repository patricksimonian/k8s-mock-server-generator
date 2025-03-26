/**
* PersistentVolumeClaimCondition contains details about state of pvc
* @resourceType persistentvolumeclaimcondition
* @kind Persistentvolumeclaimcondition
*/
export interface io_k8s_api_core_v1_PersistentVolumeClaimCondition {
/**
* Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=state%20of%20pvc-,conditions.status,-(string)%2C%20required
* @required
*/
status: string;
/**
* Type is the type of the condition. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=set%20to%20%27ResizeStarted%27.-,PersistentVolumeClaimCondition,-contains%20details%20about
* @required
*/
type: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastProbeTime?: Date;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
lastTransitionTime?: Date;
/**
* message is the human-readable message indicating details about last transition.
*/
message?: string;
/**
* reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "Resizing" that means the underlying persistent volume is being resized.
*/
reason?: string;
}

/**
* Create a new Persistentvolumeclaimcondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeClaimCondition instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeClaimCondition(data?: Partial<io_k8s_api_core_v1_PersistentVolumeClaimCondition>): io_k8s_api_core_v1_PersistentVolumeClaimCondition {
 return {
   status: data?.status !== undefined ? data.status : '',
   type: data?.type !== undefined ? data.type : '',
   lastProbeTime: data?.lastProbeTime !== undefined ? data.lastProbeTime : '',
   lastTransitionTime: data?.lastTransitionTime !== undefined ? data.lastTransitionTime : '',
   message: data?.message !== undefined ? data.message : '',
   reason: data?.reason !== undefined ? data.reason : '',
 };
}
