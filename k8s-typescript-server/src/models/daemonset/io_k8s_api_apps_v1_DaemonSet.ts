/**
* DaemonSet represents the configuration of a daemon set.
* @resourceType daemonset
* @kind Daemonset
*/
export interface io_k8s_api_apps_v1_DaemonSet {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; resourceVersion?: string; deletionTimestamp?: Date; generateName?: string; namespace?: string; uid?: string; finalizers?: string[]; generation?: number; creationTimestamp?: Date; labels?: Record<string, any>; selfLink?: string; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number };
/**
* DaemonSetSpec is the specification of a daemon set.
* @isObject
*/
spec?: { minReadySeconds?: number; revisionHistoryLimit?: number; selector: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; template: { metadata?: { managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; name?: string; resourceVersion?: string; selfLink?: string; labels?: Record<string, any>; namespace?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; uid?: string; finalizers?: string[]; generateName?: string; generation?: number }; spec?: Record<string, any> }; updateStrategy?: { type?: 'OnDelete' | 'RollingUpdate'; rollingUpdate?: { maxSurge?: string; maxUnavailable?: string } } };
/**
* DaemonSetStatus represents the current status of a daemon set.
* @isObject
*/
status?: { currentNumberScheduled: number; numberMisscheduled: number; numberUnavailable?: number; observedGeneration?: number; collisionCount?: number; conditions?: Array<{ type: string; lastTransitionTime?: Date; message?: string; reason?: string; status: string }>; desiredNumberScheduled: number; numberAvailable?: number; numberReady: number; updatedNumberScheduled?: number };
}

/**
* Create a new Daemonset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSet(data?: Partial<io_k8s_api_apps_v1_DaemonSet>): io_k8s_api_apps_v1_DaemonSet {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { selector: {}, template: {} },
   status: data?.status !== undefined ? data.status : { currentNumberScheduled: 0, numberMisscheduled: 0, desiredNumberScheduled: 0, numberReady: 0 },
 };
}
