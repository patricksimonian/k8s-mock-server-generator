/**
* NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
* @resourceType nodeconfigstatus
* @kind Nodeconfigstatus
*/
export interface io_k8s_api_core_v1_NodeConfigStatus {
/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
* @isObject
*/
lastKnownGood?: { configMap?: { uid?: string; kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string } };
/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
* @isObject
*/
active?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } };
/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
* @isObject
*/
assigned?: { configMap?: { namespace: string; resourceVersion?: string; uid?: string; kubeletConfigKey: string; name: string } };
/**
* Error describes any problems reconciling the Spec.ConfigSource to the Active config. Errors may occur, for example, attempting to checkpoint Spec.ConfigSource to the local Assigned record, attempting to checkpoint the payload associated with Spec.ConfigSource, attempting to load or validate the Assigned config, etc. Errors may occur at different points while syncing config. Earlier errors (e.g. download or checkpointing errors) will not result in a rollback to LastKnownGood, and may resolve across Kubelet retries. Later errors (e.g. loading or validating a checkpointed config) will result in a rollback to LastKnownGood. In the latter case, it is usually possible to resolve the error by fixing the config assigned in Spec.ConfigSource. You can find additional information for debugging by searching the error message in the Kubelet log. Error is a human-readable description of the error state; machines can check whether or not Error is empty, but should not rely on the stability of the Error text across Kubelet versions.
*/
error?: string;
}

/**
* Create a new Nodeconfigstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeConfigStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeConfigStatus(data?: Partial<io_k8s_api_core_v1_NodeConfigStatus>): io_k8s_api_core_v1_NodeConfigStatus {
 return {
   lastKnownGood: data?.lastKnownGood !== undefined ? data.lastKnownGood : {},
   active: data?.active !== undefined ? data.active : {},
   assigned: data?.assigned !== undefined ? data.assigned : {},
   error: data?.error !== undefined ? data.error : '',
 };
}
