/**
* JobSpec describes how the job execution will look like.
* @resourceType jobspec
* @kind Jobspec
*/
export interface io_k8s_api_batch_v1_JobSpec {
/**
* podReplacementPolicy specifies when to create replacement Pods. Possible values are: - TerminatingOrFailed means that we recreate pods
  when they are terminating (has a metadata.deletionTimestamp) or failed.
- Failed means to wait until a previously created Pod is fully terminated (has phase
  Failed or Succeeded) before creating a replacement Pod.

When using podFailurePolicy, Failed is the the only allowed value. TerminatingOrFailed and Failed are allowed values when podFailurePolicy is not in use. This is an beta field. To use this, enable the JobPodReplacementPolicy feature toggle. This is on by default.

Possible enum values:
 - `"Failed"` means to wait until a previously created Pod is fully terminated (has phase Failed or Succeeded) before creating a replacement Pod.
 - `"TerminatingOrFailed"` means that we recreate pods when they are terminating (has a metadata.deletionTimestamp) or failed.
*/
podReplacementPolicy?: 'Failed' | 'TerminatingOrFailed';
/**
* Specifies the number of retries before marking this job failed. Defaults to 6
*/
backoffLimit?: number;
/**
* completionMode specifies how Pod completions are tracked. It can be `NonIndexed` (default) or `Indexed`.

`NonIndexed` means that the Job is considered complete when there have been .spec.completions successfully completed Pods. Each Pod completion is homologous to each other.

`Indexed` means that the Pods of a Job get an associated completion index from 0 to (.spec.completions - 1), available in the annotation batch.kubernetes.io/job-completion-index. The Job is considered complete when there is one successfully completed Pod for each index. When value is `Indexed`, .spec.completions must be specified and `.spec.parallelism` must be less than or equal to 10^5. In addition, The Pod name takes the form `$(job-name)-$(index)-$(random-string)`, the Pod hostname takes the form `$(job-name)-$(index)`.

More completion modes can be added in the future. If the Job controller observes a mode that it doesn't recognize, which is possible during upgrades due to version skew, the controller skips updates for the Job.

Possible enum values:
 - `"Indexed"` is a Job completion mode. In this mode, the Pods of a Job get an associated completion index from 0 to (.spec.completions - 1). The Job is considered complete when a Pod completes for each completion index.
 - `"NonIndexed"` is a Job completion mode. In this mode, the Job is considered complete when there have been .spec.completions successfully completed Pods. Pod completions are homologous to each other.
*/
completionMode?: 'Indexed' | 'NonIndexed';
/**
* Specifies the desired number of successfully finished pods the job should be run with.  Setting to null means that the success of any pod signals the success of all pods, and allows parallelism to have any positive value.  Setting to 1 means that parallelism is limited to 1 and the success of that pod signals the success of the job. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
*/
completions?: number;
/**
* Specifies the maximal number of failed indexes before marking the Job as failed, when backoffLimitPerIndex is set. Once the number of failed indexes exceeds this number the entire Job is marked as Failed and its execution is terminated. When left as null the job continues execution of all of its indexes and is marked with the `Complete` Job condition. It can only be specified when backoffLimitPerIndex is set. It can be null or up to completions. It is required and must be less than or equal to 10^4 when is completions greater than 10^5. This field is beta-level. It can be used when the `JobBackoffLimitPerIndex` feature gate is enabled (enabled by default).
*/
maxFailedIndexes?: number;
/**
* PodTemplateSpec describes the data a pod should have when created from a template
* @required
* @isObject
*/
template: { metadata?: { generateName?: string; namespace?: string; resourceVersion?: string; selfLink?: string; uid?: string; name?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generation?: number; labels?: Record<string, any>; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; deletionTimestamp?: Date; finalizers?: string[] }; spec?: Record<string, any> };
/**
* ManagedBy field indicates the controller that manages a Job. The k8s Job controller reconciles jobs which don't have this field at all or the field value is the reserved string `kubernetes.io/job-controller`, but skips reconciling Jobs with a custom value for this field. The value must be a valid domain-prefixed path (e.g. acme.io/foo) - all characters before the first "/" must be a valid subdomain as defined by RFC 1123. All characters trailing the first "/" must be valid HTTP Path characters as defined by RFC 3986. The value cannot exceed 63 characters. This field is immutable.

This field is beta-level. The job controller accepts setting the field when the feature gate JobManagedBy is enabled (enabled by default).
*/
managedBy?: string;
/**
* manualSelector controls generation of pod labels and pod selectors. Leave `manualSelector` unset unless you are certain what you are doing. When false or unset, the system pick labels unique to this job and appends those labels to the pod template.  When true, the user is responsible for picking unique labels and specifying the selector.  Failure to pick a unique label may cause this and other jobs to not function correctly.  However, You may see `manualSelector=true` in jobs that were created with the old `extensions/v1beta1` API. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#specifying-your-own-pod-selector
*/
manualSelector?: boolean;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @isObject
*/
selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
/**
* SuccessPolicy describes when a Job can be declared as succeeded based on the success of some indexes.
* @isObject
*/
successPolicy?: { rules: Array<{ succeededIndexes?: string; succeededCount?: number }> };
/**
* Specifies the limit for the number of retries within an index before marking this index as failed. When enabled the number of failures per index is kept in the pod's batch.kubernetes.io/job-index-failure-count annotation. It can only be set when Job's completionMode=Indexed, and the Pod's restart policy is Never. The field is immutable. This field is beta-level. It can be used when the `JobBackoffLimitPerIndex` feature gate is enabled (enabled by default).
*/
backoffLimitPerIndex?: number;
/**
* Specifies the maximum desired number of pods the job should run at any given time. The actual number of pods running in steady state will be less than this number when ((.spec.completions - .status.successful) < .spec.parallelism), i.e. when the work left to do is less than max parallelism. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
*/
parallelism?: number;
/**
* PodFailurePolicy describes how failed pods influence the backoffLimit.
* @isObject
*/
podFailurePolicy?: { rules: Array<{ onPodConditions?: Array<{ status: string; type: string }>; action: 'Count' | 'FailIndex' | 'FailJob' | 'Ignore'; onExitCodes?: { operator: 'In' | 'NotIn'; values: number[]; containerName?: string } }> };
/**
* ttlSecondsAfterFinished limits the lifetime of a Job that has finished execution (either Complete or Failed). If this field is set, ttlSecondsAfterFinished after the Job finishes, it is eligible to be automatically deleted. When the Job is being deleted, its lifecycle guarantees (e.g. finalizers) will be honored. If this field is unset, the Job won't be automatically deleted. If this field is set to zero, the Job becomes eligible to be deleted immediately after it finishes.
*/
ttlSecondsAfterFinished?: number;
/**
* Specifies the duration in seconds relative to the startTime that the job may be continuously active before the system tries to terminate it; value must be positive integer. If a Job is suspended (at creation or through an update), this timer will effectively be stopped and reset when the Job is resumed again.
*/
activeDeadlineSeconds?: number;
/**
* suspend specifies whether the Job controller should create Pods or not. If a Job is created with suspend set to true, no Pods are created by the Job controller. If a Job is suspended after creation (i.e. the flag goes from false to true), the Job controller will delete all active Pods associated with this Job. Users must design their workload to gracefully handle this. Suspending a Job will reset the StartTime field of the Job, effectively resetting the ActiveDeadlineSeconds timer too. Defaults to false.
*/
suspend?: boolean;
}

/**
* Create a new Jobspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_batch_v1_JobSpec instance with defaults applied
*/
export function createio_k8s_api_batch_v1_JobSpec(data?: Partial<io_k8s_api_batch_v1_JobSpec>): io_k8s_api_batch_v1_JobSpec {
 return {
   podReplacementPolicy: data?.podReplacementPolicy !== undefined ? data.podReplacementPolicy : '',
   backoffLimit: data?.backoffLimit !== undefined ? data.backoffLimit : 0,
   completionMode: data?.completionMode !== undefined ? data.completionMode : '',
   completions: data?.completions !== undefined ? data.completions : 0,
   maxFailedIndexes: data?.maxFailedIndexes !== undefined ? data.maxFailedIndexes : 0,
   template: data?.template !== undefined ? data.template : {},
   managedBy: data?.managedBy !== undefined ? data.managedBy : '',
   manualSelector: data?.manualSelector !== undefined ? data.manualSelector : false,
   selector: data?.selector !== undefined ? data.selector : {},
   successPolicy: data?.successPolicy !== undefined ? data.successPolicy : { rules: [] },
   backoffLimitPerIndex: data?.backoffLimitPerIndex !== undefined ? data.backoffLimitPerIndex : 0,
   parallelism: data?.parallelism !== undefined ? data.parallelism : 0,
   podFailurePolicy: data?.podFailurePolicy !== undefined ? data.podFailurePolicy : { rules: [] },
   ttlSecondsAfterFinished: data?.ttlSecondsAfterFinished !== undefined ? data.ttlSecondsAfterFinished : 0,
   activeDeadlineSeconds: data?.activeDeadlineSeconds !== undefined ? data.activeDeadlineSeconds : 0,
   suspend: data?.suspend !== undefined ? data.suspend : false,
 };
}
