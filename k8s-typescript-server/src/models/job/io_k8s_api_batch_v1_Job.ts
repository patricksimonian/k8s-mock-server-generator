/**
* Job represents the configuration of a single job.
* @resourceType job
* @kind Job
*/
export interface io_k8s_api_batch_v1_Job {
/**
* JobSpec describes how the job execution will look like.
* @isObject
*/
spec?: Record<string, any>;
/**
* JobStatus represents the current state of a Job.
* @isObject
*/
status?: { startTime?: Date; succeeded?: number; active?: number; failedIndexes?: string; ready?: number; failed?: number; terminating?: number; uncountedTerminatedPods?: { failed?: string[]; succeeded?: string[] }; completedIndexes?: string; completionTime?: Date; conditions?: Array<{ type: string; lastProbeTime?: Date; lastTransitionTime?: Date; message?: string; reason?: string; status: string }> };
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
metadata?: { annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; uid?: string; creationTimestamp?: Date; namespace?: string; selfLink?: string; generateName?: string; generation?: number; deletionGracePeriodSeconds?: number; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; resourceVersion?: string };
}

/**
* Create a new Job with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_Job instance with defaults applied
*/
export function createio_k8s_api_batch_v1_Job(data?: Partial<io_k8s_api_batch_v1_Job>): io_k8s_api_batch_v1_Job {
 return {
   spec: data?.spec !== undefined ? data.spec : { template: {} },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
