/**
* PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.
* @resourceType poddisruptionbudgetstatus
* @kind Poddisruptionbudgetstatus
*/
export interface io_k8s_api_policy_v1_PodDisruptionBudgetStatus {
/**
* total number of pods counted by this disruption budget
* @required
*/
expectedPods: number;
/**
* Most recent generation observed when updating this PDB status. DisruptionsAllowed and other status information is valid only if observedGeneration equals to PDB's object generation.
*/
observedGeneration?: number;
/**
* Conditions contain conditions for PDB. The disruption controller sets the DisruptionAllowed condition. The following are known values for the reason field (additional reasons could be added in the future): - SyncFailed: The controller encountered an error and wasn't able to compute
              the number of allowed disruptions. Therefore no disruptions are
              allowed and the status of the condition will be False.
- InsufficientPods: The number of pods are either at or below the number
                    required by the PodDisruptionBudget. No disruptions are
                    allowed and the status of the condition will be False.
- SufficientPods: There are more pods than required by the PodDisruptionBudget.
                  The condition will be True, and the number of allowed
                  disruptions are provided by the disruptionsAllowed property.
* @isArray
*/
conditions?: io_k8s_apimachinery_pkg_apis_meta_v1_Condition[];
/**
* current number of healthy pods
* @required
*/
currentHealthy: number;
/**
* minimum desired number of healthy pods
* @required
*/
desiredHealthy: number;
/**
* DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn't occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
*/
disruptedPods?: Record<string, any>;
/**
* Number of pod disruptions that are currently allowed.
* @required
*/
disruptionsAllowed: number;
}

/**
* Create a new Poddisruptionbudgetstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_PodDisruptionBudgetStatus instance with defaults applied
*/
export function createio_k8s_api_policy_v1_PodDisruptionBudgetStatus(data?: Partial<io_k8s_api_policy_v1_PodDisruptionBudgetStatus>): io_k8s_api_policy_v1_PodDisruptionBudgetStatus {
 return {
   expectedPods: data?.expectedPods !== undefined ? data.expectedPods : 0,
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   conditions: data?.conditions !== undefined ? data.conditions : [],
   currentHealthy: data?.currentHealthy !== undefined ? data.currentHealthy : 0,
   desiredHealthy: data?.desiredHealthy !== undefined ? data.desiredHealthy : 0,
   disruptedPods: data?.disruptedPods !== undefined ? data.disruptedPods : {},
   disruptionsAllowed: data?.disruptionsAllowed !== undefined ? data.disruptionsAllowed : 0,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_Condition, createio_k8s_apimachinery_pkg_apis_meta_v1_Condition } from '../io.k8s.apimachinery.pkg.apis.meta.v1.Condition';
