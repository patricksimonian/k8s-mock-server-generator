/**
* ReplicationControllerStatus represents the current status of a replication controller.
* @resourceType replicationcontrollerstatus
* @kind Replicationcontrollerstatus
*/
export interface io_k8s_api_core_v1_ReplicationControllerStatus {
/**
* ObservedGeneration reflects the generation of the most recently observed replication controller.
*/
observedGeneration?: number;
/**
* The number of ready replicas for this replication controller.
*/
readyReplicas?: number;
/**
* Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller
* @required
*/
replicas: number;
/**
* The number of available replicas (ready for at least minReadySeconds) for this replication controller.
*/
availableReplicas?: number;
/**
* Represents the latest available observations of a replication controller's current state.
* @isArray
*/
conditions?: io_k8s_api_core_v1_ReplicationControllerCondition[];
/**
* The number of pods that have labels matching the labels of the pod template of the replication controller.
*/
fullyLabeledReplicas?: number;
}

/**
* Create a new Replicationcontrollerstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ReplicationControllerStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ReplicationControllerStatus(data?: Partial<io_k8s_api_core_v1_ReplicationControllerStatus>): io_k8s_api_core_v1_ReplicationControllerStatus {
 return {
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   readyReplicas: data?.readyReplicas !== undefined ? data.readyReplicas : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   availableReplicas: data?.availableReplicas !== undefined ? data.availableReplicas : 0,
   conditions: data?.conditions !== undefined ? data.conditions : [],
   fullyLabeledReplicas: data?.fullyLabeledReplicas !== undefined ? data.fullyLabeledReplicas : 0,
 };
}
// Required imports
import { io_k8s_api_core_v1_ReplicationControllerCondition, createio_k8s_api_core_v1_ReplicationControllerCondition } from '../io.k8s.api.core.v1.ReplicationControllerCondition';
