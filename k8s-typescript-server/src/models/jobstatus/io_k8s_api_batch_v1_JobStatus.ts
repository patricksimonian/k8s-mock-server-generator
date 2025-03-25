/**
* JobStatus represents the current state of a Job.
* @resourceType jobstatus
* @kind Jobstatus
*/
export interface io_k8s_api_batch_v1_JobStatus {
/**
* FailedIndexes holds the failed indexes when spec.backoffLimitPerIndex is set. The indexes are represented in the text format analogous as for the `completedIndexes` field, ie. they are kept as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the failed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7". The set of failed indexes cannot overlap with the set of completed indexes.

This field is beta-level. It can be used when the `JobBackoffLimitPerIndex` feature gate is enabled (enabled by default).
*/
failedIndexes?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
startTime?: Date;
/**
* The number of pods which reached phase Succeeded. The value increases monotonically for a given spec. However, it may decrease in reaction to scale down of elastic indexed jobs.
*/
succeeded?: number;
/**
* The number of pending and running pods which are not terminating (without a deletionTimestamp). The value is zero for finished jobs.
*/
active?: number;
/**
* completedIndexes holds the completed indexes when .spec.completionMode = "Indexed" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7".
*/
completedIndexes?: string;
/**
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
completionTime?: Date;
/**
* The number of pods which reached phase Failed. The value increases monotonically.
*/
failed?: number;
/**
* The latest available observations of an object's current state. When a Job fails, one of the conditions will have type "Failed" and status true. When a Job is suspended, one of the conditions will have type "Suspended" and status true; when the Job is resumed, the status of this condition will become false. When a Job is completed, one of the conditions will have type "Complete" and status true.

A job is considered finished when it is in a terminal condition, either "Complete" or "Failed". A Job cannot have both the "Complete" and "Failed" conditions. Additionally, it cannot be in the "Complete" and "FailureTarget" conditions. The "Complete", "Failed" and "FailureTarget" conditions cannot be disabled.

More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
* @isArray
*/
conditions?: Array<{ reason?: string; status: string; type: string; lastProbeTime?: Date; lastTransitionTime?: Date; message?: string }>;
/**
* The number of active pods which have a Ready condition and are not terminating (without a deletionTimestamp).
*/
ready?: number;
/**
* The number of pods which are terminating (in phase Pending or Running and have a deletionTimestamp).

This field is beta-level. The job controller populates the field when the feature gate JobPodReplacementPolicy is enabled (enabled by default).
*/
terminating?: number;
/**
* UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
* @isObject
*/
uncountedTerminatedPods?: { failed?: string[]; succeeded?: string[] };
}

/**
* Create a new Jobstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_JobStatus instance with defaults applied
*/
export function createio_k8s_api_batch_v1_JobStatus(data?: Partial<io_k8s_api_batch_v1_JobStatus>): io_k8s_api_batch_v1_JobStatus {
 return {
   failedIndexes: data?.failedIndexes !== undefined ? data.failedIndexes : '',
   startTime: data?.startTime !== undefined ? data.startTime : '',
   succeeded: data?.succeeded !== undefined ? data.succeeded : 0,
   active: data?.active !== undefined ? data.active : 0,
   completedIndexes: data?.completedIndexes !== undefined ? data.completedIndexes : '',
   completionTime: data?.completionTime !== undefined ? data.completionTime : '',
   failed: data?.failed !== undefined ? data.failed : 0,
   conditions: data?.conditions !== undefined ? data.conditions : [],
   ready: data?.ready !== undefined ? data.ready : 0,
   terminating: data?.terminating !== undefined ? data.terminating : 0,
   uncountedTerminatedPods: data?.uncountedTerminatedPods !== undefined ? data.uncountedTerminatedPods : {},
 };
}
