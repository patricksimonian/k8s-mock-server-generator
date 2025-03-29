/**
* DeploymentStrategy describes how to replace existing pods with new ones.
* @resourceType deploymentstrategy
* @kind Deploymentstrategy
*/
export interface io_k8s_api_apps_v1_DeploymentStrategy {
/**
* Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.

Possible enum values:
 - `"Recreate"` Kill all existing pods before creating new ones.
 - `"RollingUpdate"` Replace the old ReplicaSets by new one using rolling update i.e gradually scale down the old ReplicaSets and scale up the new one.
*/
type?: 'Recreate' | 'RollingUpdate';
/**
* Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate.
* @references io.k8s.api.apps.v1.RollingUpdateDeployment
*/
rollingUpdate?: io_k8s_api_apps_v1_RollingUpdateDeployment;
}

/**
* Create a new Deploymentstrategy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DeploymentStrategy instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DeploymentStrategy(data?: Partial<io_k8s_api_apps_v1_DeploymentStrategy>): io_k8s_api_apps_v1_DeploymentStrategy {
 return {
   type: data?.type !== undefined ? data.type : '',
   rollingUpdate: data?.rollingUpdate !== undefined ? data.rollingUpdate : createio_k8s_api_apps_v1_RollingUpdateDeployment(),
 };
}
// Required imports
import { io_k8s_api_apps_v1_RollingUpdateDeployment, createio_k8s_api_apps_v1_RollingUpdateDeployment } from '../rollingupdatedeployment/io_k8s_api_apps_v1_RollingUpdateDeployment';
