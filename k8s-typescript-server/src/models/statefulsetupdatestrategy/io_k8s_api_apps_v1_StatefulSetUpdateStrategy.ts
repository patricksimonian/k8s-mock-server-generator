/**
* StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
* @resourceType statefulsetupdatestrategy
* @kind Statefulsetupdatestrategy
*/
export interface io_k8s_api_apps_v1_StatefulSetUpdateStrategy {
/**
* Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.

Possible enum values:
 - `"OnDelete"` triggers the legacy behavior. Version tracking and ordered rolling restarts are disabled. Pods are recreated from the StatefulSetSpec when they are manually deleted. When a scale operation is performed with this strategy,specification version indicated by the StatefulSet's currentRevision.
 - `"RollingUpdate"` indicates that update will be applied to all Pods in the StatefulSet with respect to the StatefulSet ordering constraints. When a scale operation is performed with this strategy, new Pods will be created from the specification version indicated by the StatefulSet's updateRevision.
*/
type?: 'OnDelete' | 'RollingUpdate';
/**
* RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
* @references io.k8s.api.apps.v1.RollingUpdateStatefulSetStrategy
*/
rollingUpdate?: io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy;
}

/**
* Create a new Statefulsetupdatestrategy with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSetUpdateStrategy instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSetUpdateStrategy(data?: Partial<io_k8s_api_apps_v1_StatefulSetUpdateStrategy>): io_k8s_api_apps_v1_StatefulSetUpdateStrategy {
 return {
   type: data?.type !== undefined ? data.type : '',
   rollingUpdate: data?.rollingUpdate !== undefined ? data.rollingUpdate : createio_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy(),
 };
}
// Required imports
import { io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy, createio_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy } from '../rollingupdatestatefulsetstrategy/io_k8s_api_apps_v1_RollingUpdateStatefulSetStrategy';
