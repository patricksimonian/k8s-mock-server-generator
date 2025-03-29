/**
* StatefulSetStatus represents the current state of a StatefulSet.
* @resourceType statefulsetstatus
* @kind Statefulsetstatus
*/
export interface io_k8s_api_apps_v1_StatefulSetStatus {
/**
* Total number of available pods (ready for at least minReadySeconds) targeted by this statefulset.
*/
availableReplicas?: number;
/**
* readyReplicas is the number of pods created for this StatefulSet with a Ready Condition.
*/
readyReplicas?: number;
/**
* updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
*/
updatedReplicas?: number;
/**
* collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
*/
collisionCount?: number;
/**
* Represents the latest available observations of a statefulset's current state.
* @isArray
*/
conditions?: io_k8s_api_apps_v1_StatefulSetCondition[];
/**
* currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
*/
currentReplicas?: number;
/**
* currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
*/
currentRevision?: string;
/**
* observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.
*/
observedGeneration?: number;
/**
* replicas is the number of Pods created by the StatefulSet controller.
* @required
*/
replicas: number;
/**
* updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
*/
updateRevision?: string;
}

/**
* Create a new Statefulsetstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSetStatus instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSetStatus(data?: Partial<io_k8s_api_apps_v1_StatefulSetStatus>): io_k8s_api_apps_v1_StatefulSetStatus {
 return {
   availableReplicas: data?.availableReplicas !== undefined ? data.availableReplicas : 0,
   readyReplicas: data?.readyReplicas !== undefined ? data.readyReplicas : 0,
   updatedReplicas: data?.updatedReplicas !== undefined ? data.updatedReplicas : 0,
   collisionCount: data?.collisionCount !== undefined ? data.collisionCount : 0,
   conditions: data?.conditions !== undefined ? data.conditions : [],
   currentReplicas: data?.currentReplicas !== undefined ? data.currentReplicas : 0,
   currentRevision: data?.currentRevision !== undefined ? data.currentRevision : '',
   observedGeneration: data?.observedGeneration !== undefined ? data.observedGeneration : 0,
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   updateRevision: data?.updateRevision !== undefined ? data.updateRevision : '',
 };
}
// Required imports
import { io_k8s_api_apps_v1_StatefulSetCondition, createio_k8s_api_apps_v1_StatefulSetCondition } from '../io.k8s.api.apps.v1.StatefulSetCondition';
