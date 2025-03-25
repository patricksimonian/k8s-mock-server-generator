/**
* DeleteOptions may be provided when deleting an API object.
* @resourceType deleteoption
* @kind Deleteoption
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions {
/**
* Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
* @isObject
*/
preconditions?: { resourceVersion?: string; uid?: string };
/**
* Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.
*/
propagationPolicy?: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed
* @isArray
*/
dryRun?: string[];
/**
* The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
*/
gracePeriodSeconds?: number;
/**
* if set to true, it will trigger an unsafe deletion of the resource in case the normal deletion flow fails with a corrupt object error. A resource is considered corrupt if it can not be retrieved from the underlying storage successfully because of a) its data can not be transformed e.g. decryption failure, or b) it fails to decode into an object. NOTE: unsafe deletion ignores finalizer constraints, skips precondition checks, and removes the object from the storage. WARNING: This may potentially break the cluster if the workload associated with the resource being unsafe-deleted relies on normal deletion flow. Use only if you REALLY know what you are doing. The default value is false, and the user must opt in to enable it
*/
ignoreStoreReadErrorWithClusterBreakingPotential?: boolean;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
*/
orphanDependents?: boolean;
}

/**
* Create a new Deleteoption with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions>): io_k8s_apimachinery_pkg_apis_meta_v1_DeleteOptions {
 return {
   preconditions: data?.preconditions !== undefined ? data.preconditions : {},
   propagationPolicy: data?.propagationPolicy !== undefined ? data.propagationPolicy : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   dryRun: data?.dryRun !== undefined ? data.dryRun : [],
   gracePeriodSeconds: data?.gracePeriodSeconds !== undefined ? data.gracePeriodSeconds : 0,
   ignoreStoreReadErrorWithClusterBreakingPotential: data?.ignoreStoreReadErrorWithClusterBreakingPotential !== undefined ? data.ignoreStoreReadErrorWithClusterBreakingPotential : false,
   kind: data?.kind !== undefined ? data.kind : '',
   orphanDependents: data?.orphanDependents !== undefined ? data.orphanDependents : false,
 };
}
