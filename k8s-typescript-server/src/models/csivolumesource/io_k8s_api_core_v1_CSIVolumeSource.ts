/**
* Represents a source location of a volume to mount, managed by an external CSI driver
* @resourceType csivolumesource
* @kind Csivolumesource
*/
export interface io_k8s_api_core_v1_CSIVolumeSource {
/**
* driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
* @required
*/
driver: string;
/**
* fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
*/
fsType?: string;
/**
* nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
* @references io.k8s.api.core.v1.LocalObjectReference
*/
nodePublishSecretRef?: io_k8s_api_core_v1_LocalObjectReference;
/**
* readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
*/
readOnly?: boolean;
/**
* volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
*/
volumeAttributes?: Record<string, any>;
}

/**
* Create a new Csivolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_CSIVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_CSIVolumeSource(data?: Partial<io_k8s_api_core_v1_CSIVolumeSource>): io_k8s_api_core_v1_CSIVolumeSource {
 return {
   driver: data?.driver !== undefined ? data.driver : '',
   fsType: data?.fsType !== undefined ? data.fsType : '',
   nodePublishSecretRef: data?.nodePublishSecretRef !== undefined ? data.nodePublishSecretRef : createio_k8s_api_core_v1_LocalObjectReference(),
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   volumeAttributes: data?.volumeAttributes !== undefined ? data.volumeAttributes : {},
 };
}
// Required imports
import { io_k8s_api_core_v1_LocalObjectReference, createio_k8s_api_core_v1_LocalObjectReference } from '../localobjectreference/io_k8s_api_core_v1_LocalObjectReference';
