/**
* Represents storage that is managed by an external CSI volume driver
* @resourceType csipersistentvolumesource
* @kind Csipersistentvolumesource
*/
export interface io_k8s_api_core_v1_CSIPersistentVolumeSource {
/**
* controllerExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerExpandVolume call. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
* @references io.k8s.api.core.v1.SecretReference
*/
controllerExpandSecretRef?: io_k8s_api_core_v1_SecretReference;
/**
* driver is the name of the driver to use for this volume. Required.
* @required
*/
driver: string;
/**
* readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
*/
readOnly?: boolean;
/**
* volumeAttributes of the volume to publish.
*/
volumeAttributes?: Record<string, any>;
/**
* volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
* @required
*/
volumeHandle: string;
/**
* controllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
* @references io.k8s.api.core.v1.SecretReference
*/
controllerPublishSecretRef?: io_k8s_api_core_v1_SecretReference;
/**
* fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
*/
fsType?: string;
/**
* nodeExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeExpandVolume call. This field is optional, may be omitted if no secret is required. If the secret object contains more than one secret, all secrets are passed.
* @references io.k8s.api.core.v1.SecretReference
*/
nodeExpandSecretRef?: io_k8s_api_core_v1_SecretReference;
/**
* nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
* @references io.k8s.api.core.v1.SecretReference
*/
nodePublishSecretRef?: io_k8s_api_core_v1_SecretReference;
/**
* nodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
* @references io.k8s.api.core.v1.SecretReference
*/
nodeStageSecretRef?: io_k8s_api_core_v1_SecretReference;
}

/**
* Create a new Csipersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_CSIPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_CSIPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_CSIPersistentVolumeSource>): io_k8s_api_core_v1_CSIPersistentVolumeSource {
 return {
   controllerExpandSecretRef: data?.controllerExpandSecretRef !== undefined ? data.controllerExpandSecretRef : createio_k8s_api_core_v1_SecretReference(),
   driver: data?.driver !== undefined ? data.driver : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   volumeAttributes: data?.volumeAttributes !== undefined ? data.volumeAttributes : {},
   volumeHandle: data?.volumeHandle !== undefined ? data.volumeHandle : '',
   controllerPublishSecretRef: data?.controllerPublishSecretRef !== undefined ? data.controllerPublishSecretRef : createio_k8s_api_core_v1_SecretReference(),
   fsType: data?.fsType !== undefined ? data.fsType : '',
   nodeExpandSecretRef: data?.nodeExpandSecretRef !== undefined ? data.nodeExpandSecretRef : createio_k8s_api_core_v1_SecretReference(),
   nodePublishSecretRef: data?.nodePublishSecretRef !== undefined ? data.nodePublishSecretRef : createio_k8s_api_core_v1_SecretReference(),
   nodeStageSecretRef: data?.nodeStageSecretRef !== undefined ? data.nodeStageSecretRef : createio_k8s_api_core_v1_SecretReference(),
 };
}
// Required imports
import { io_k8s_api_core_v1_SecretReference, createio_k8s_api_core_v1_SecretReference } from '../secretreference/io_k8s_api_core_v1_SecretReference';
