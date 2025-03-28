/**
* NodeConfigStatus describes the status of the config assigned by Node.Spec.ConfigSource.
* @resourceType nodeconfigstatus
* @kind Nodeconfigstatus
*/
export interface io_k8s_api_core_v1_NodeConfigStatus {
/**
* Active reports the checkpointed config the node is actively using. Active will represent either the current version of the Assigned config, or the current LastKnownGood config, depending on whether attempting to use the Assigned config results in an error.
* @references io.k8s.api.core.v1.NodeConfigSource
*/
active?: io_k8s_api_core_v1_NodeConfigSource;
/**
* Assigned reports the checkpointed config the node will try to use. When Node.Spec.ConfigSource is updated, the node checkpoints the associated config payload to local disk, along with a record indicating intended config. The node refers to this record to choose its config checkpoint, and reports this record in Assigned. Assigned only updates in the status after the record has been checkpointed to disk. When the Kubelet is restarted, it tries to make the Assigned config the Active config by loading and validating the checkpointed payload identified by Assigned.
* @references io.k8s.api.core.v1.NodeConfigSource
*/
assigned?: io_k8s_api_core_v1_NodeConfigSource;
/**
* Error describes any problems reconciling the Spec.ConfigSource to the Active config. Errors may occur, for example, attempting to checkpoint Spec.ConfigSource to the local Assigned record, attempting to checkpoint the payload associated with Spec.ConfigSource, attempting to load or validate the Assigned config, etc. Errors may occur at different points while syncing config. Earlier errors (e.g. download or checkpointing errors) will not result in a rollback to LastKnownGood, and may resolve across Kubelet retries. Later errors (e.g. loading or validating a checkpointed config) will result in a rollback to LastKnownGood. In the latter case, it is usually possible to resolve the error by fixing the config assigned in Spec.ConfigSource. You can find additional information for debugging by searching the error message in the Kubelet log. Error is a human-readable description of the error state; machines can check whether or not Error is empty, but should not rely on the stability of the Error text across Kubelet versions.
*/
error?: string;
/**
* LastKnownGood reports the checkpointed config the node will fall back to when it encounters an error attempting to use the Assigned config. The Assigned config becomes the LastKnownGood config when the node determines that the Assigned config is stable and correct. This is currently implemented as a 10-minute soak period starting when the local record of Assigned config is updated. If the Assigned config is Active at the end of this period, it becomes the LastKnownGood. Note that if Spec.ConfigSource is reset to nil (use local defaults), the LastKnownGood is also immediately reset to nil, because the local default config is always assumed good. You should not make assumptions about the node's method of determining config stability and correctness, as this may change or become configurable in the future.
* @references io.k8s.api.core.v1.NodeConfigSource
*/
lastKnownGood?: io_k8s_api_core_v1_NodeConfigSource;
}

/**
* Create a new Nodeconfigstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeConfigStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeConfigStatus(data?: Partial<io_k8s_api_core_v1_NodeConfigStatus>): io_k8s_api_core_v1_NodeConfigStatus {
 return {
   active: data?.active !== undefined ? data.active : createio_k8s_api_core_v1_NodeConfigSource(),
   assigned: data?.assigned !== undefined ? data.assigned : createio_k8s_api_core_v1_NodeConfigSource(),
   error: data?.error !== undefined ? data.error : '',
   lastKnownGood: data?.lastKnownGood !== undefined ? data.lastKnownGood : createio_k8s_api_core_v1_NodeConfigSource(),
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeConfigSource, createio_k8s_api_core_v1_NodeConfigSource } from '../nodeconfigsource/io_k8s_api_core_v1_NodeConfigSource';
