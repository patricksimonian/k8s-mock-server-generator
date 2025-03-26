/**
* Deployment enables declarative updates for Pods and ReplicaSets.
* @resourceType deployment
* @kind Deployment
*/
export interface io_k8s_api_apps_v1_Deployment {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; resourceVersion?: string; generateName?: string; name?: string; uid?: string; generation?: number; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; selfLink?: string; deletionGracePeriodSeconds?: number; creationTimestamp?: Date; annotations?: Record<string, any> };
/**
* DeploymentSpec is the specification of the desired behavior of the Deployment.
* @isObject
*/
spec?: { progressDeadlineSeconds?: number; replicas?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; strategy?: { rollingUpdate?: { maxSurge?: string; maxUnavailable?: string }; type?: 'Recreate' | 'RollingUpdate' }; template: { metadata?: { selfLink?: string; generateName?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; labels?: Record<string, any>; deletionGracePeriodSeconds?: number; generation?: number; name?: string; resourceVersion?: string; uid?: string; finalizers?: string[]; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; deletionTimestamp?: Date; namespace?: string; annotations?: Record<string, any>; creationTimestamp?: Date }; spec?: Record<string, any> }; minReadySeconds?: number; paused?: boolean };
/**
* DeploymentStatus is the most recently observed status of the Deployment.
* @isObject
*/
status?: { unavailableReplicas?: number; updatedReplicas?: number; availableReplicas?: number; collisionCount?: number; conditions?: Array<{ reason?: string; status: string; type: string; lastTransitionTime?: Date; lastUpdateTime?: Date; message?: string }>; observedGeneration?: number; readyReplicas?: number; replicas?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Deployment with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_Deployment instance with defaults applied
*/
export function createio_k8s_api_apps_v1_Deployment(data?: Partial<io_k8s_api_apps_v1_Deployment>): io_k8s_api_apps_v1_Deployment {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { template: {}, selector: {} },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
