/**
* DaemonSetStatus represents the current status of a daemon set.
* @resourceType daemonsetstatus
* @kind Daemonsetstatus
*/
export interface io_k8s_api_apps_v1_DaemonSetStatus {
/**
* The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)
*/
numberUnavailable?: number;
/**
* The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
* @required
*/
numberMisscheduled: number;
/**
* numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.
* @required
*/
numberReady: number;
/**
* The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
* @required
*/
currentNumberScheduled: number;
/**
* The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/
* @required
*/
desiredNumberScheduled: number;
/**
* The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)
*/
numberAvailable?: number;
/**
* The most recent generation observed by the daemon set controller.
*/
observedGeneration?: number;
/**
* The total number of nodes that are running updated daemon pod
*/
updatedNumberScheduled?: number;
/**
* Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
*/
collisionCount?: number;
/**
* Represents the latest available observations of a DaemonSet's current state.
* @isArray
*/
conditions?: io_k8s_api_apps_v1_DaemonSetCondition[];
}

/**
* Create a new Daemonsetstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSetStatus instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSetStatus(data?: Partial<io_k8s_api_apps_v1_DaemonSetStatus>): io_k8s_api_apps_v1_DaemonSetStatus {
 return {
   numberUnavailable: data?.numberUnavailable !== undefined ? data.numberUnavailable : 0,
   numberMisscheduled: data?.numberMisscheduled !== undefined ? data.numberMisscheduled : 0,
   numberReady: data?.numberReady !== undefined ? data.numberReady : 0,
   currentNumberScheduled: data?.currentNumberScheduled !== undefined ? data.currentNumberScheduled : 0,
   desiredNumberScheduled: data?.desiredNumberScheduled !== undefined ? data.desiredNumberScheduled : 0,
   numberAvailable: data?.numberAvailable !== undefined ? data.numberAvailable : 0,
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   updatedNumberScheduled: data?.updatedNumberScheduled !== undefined ? data.updatedNumberScheduled : 0,
   collisionCount: data?.collisionCount !== undefined ? data.collisionCount : 0,
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
// Required imports
import { io_k8s_api_apps_v1_DaemonSetCondition, createio_k8s_api_apps_v1_DaemonSetCondition } from '../io.k8s.api.apps.v1.DaemonSetCondition';
