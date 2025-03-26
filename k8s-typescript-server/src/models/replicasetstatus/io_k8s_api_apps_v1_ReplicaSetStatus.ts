/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
* @resourceType replicasetstatus
* @kind Replicasetstatus
*/
export interface io_k8s_api_apps_v1_ReplicaSetStatus {
/**
* Represents the latest available observations of a replica set's current state.
* @isArray
*/
conditions?: io_k8s_api_apps_v1_ReplicaSetCondition[];
/**
* The number of pods that have labels matching the labels of the pod template of the replicaset.
*/
fullyLabeledReplicas?: number;
/**
* ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
*/
observedGeneration?: number;
/**
* readyReplicas is the number of pods targeted by this ReplicaSet with a Ready Condition.
*/
readyReplicas?: number;
/**
* Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
* @required
*/
replicas: number;
/**
* The number of available replicas (ready for at least minReadySeconds) for this replica set.
*/
availableReplicas?: number;
}

/**
* Create a new Replicasetstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ReplicaSetStatus instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ReplicaSetStatus(data?: Partial<io_k8s_api_apps_v1_ReplicaSetStatus>): io_k8s_api_apps_v1_ReplicaSetStatus {
 return {
   conditions: data?.conditions !== undefined ? data.conditions : [],
   fullyLabeledReplicas: data?.fullyLabeledReplicas !== undefined ? data.fullyLabeledReplicas : 0,
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   readyReplicas: data?.readyReplicas !== undefined ? data.readyReplicas : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   availableReplicas: data?.availableReplicas !== undefined ? data.availableReplicas : 0,
 };
}
// Required imports
import { io_k8s_api_apps_v1_ReplicaSetCondition, createio_k8s_api_apps_v1_ReplicaSetCondition } from '../io.k8s.api.apps.v1.ReplicaSetCondition';
