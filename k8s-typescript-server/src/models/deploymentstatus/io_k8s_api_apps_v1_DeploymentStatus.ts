/**
* DeploymentStatus is the most recently observed status of the Deployment.
* @resourceType deploymentstatus
* @kind Deploymentstatus
*/
export interface io_k8s_api_apps_v1_DeploymentStatus {
/**
* The generation observed by the deployment controller.
*/
observedGeneration?: number;
/**
* readyReplicas is the number of pods targeted by this Deployment with a Ready Condition.
*/
readyReplicas?: number;
/**
* Total number of non-terminated pods targeted by this deployment (their labels match the selector).
*/
replicas?: number;
/**
* Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
*/
unavailableReplicas?: number;
/**
* Total number of non-terminated pods targeted by this deployment that have the desired template spec.
*/
updatedReplicas?: number;
/**
* Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.
*/
availableReplicas?: number;
/**
* Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
*/
collisionCount?: number;
/**
* Represents the latest available observations of a deployment's current state.
* @isArray
*/
conditions?: io_k8s_api_apps_v1_DeploymentCondition[];
}

/**
* Create a new Deploymentstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DeploymentStatus instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DeploymentStatus(data?: Partial<io_k8s_api_apps_v1_DeploymentStatus>): io_k8s_api_apps_v1_DeploymentStatus {
 return {
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   readyReplicas: data?.readyReplicas !== undefined ? data.readyReplicas : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   unavailableReplicas: data?.unavailableReplicas !== undefined ? data.unavailableReplicas : 0,
   updatedReplicas: data?.updatedReplicas !== undefined ? data.updatedReplicas : 0,
   availableReplicas: data?.availableReplicas !== undefined ? data.availableReplicas : 0,
   collisionCount: data?.collisionCount !== undefined ? data.collisionCount : 0,
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
// Required imports
import { io_k8s_api_apps_v1_DeploymentCondition, createio_k8s_api_apps_v1_DeploymentCondition } from '../io.k8s.api.apps.v1.DeploymentCondition';
