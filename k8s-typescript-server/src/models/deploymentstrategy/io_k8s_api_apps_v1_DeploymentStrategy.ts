/**
* DeploymentStrategy describes how to replace existing pods with new ones.
* @resourceType deploymentstrategy
* @kind Deploymentstrategy
*/
export interface io_k8s_api_apps_v1_DeploymentStrategy {
/**
* Spec to control the desired behavior of rolling update.
* @isObject
*/
rollingUpdate?: { maxSurge?: string; maxUnavailable?: string };
/**
* Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.

Possible enum values:
 - `"Recreate"` Kill all existing pods before creating new ones.
 - `"RollingUpdate"` Replace the old ReplicaSets by new one using rolling update i.e gradually scale down the old ReplicaSets and scale up the new one.
*/
type?: 'Recreate' | 'RollingUpdate';
}

/**
* Create a new Deploymentstrategy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DeploymentStrategy instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DeploymentStrategy(data?: Partial<io_k8s_api_apps_v1_DeploymentStrategy>): io_k8s_api_apps_v1_DeploymentStrategy {
 return {
   rollingUpdate: data?.rollingUpdate !== undefined ? data.rollingUpdate : {},
   type: data?.type !== undefined ? data.type : '',
 };
}
