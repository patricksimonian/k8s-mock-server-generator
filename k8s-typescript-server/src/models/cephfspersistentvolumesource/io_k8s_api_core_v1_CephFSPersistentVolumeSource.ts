/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
* @resourceType cephfspersistentvolumesource
* @kind Cephfspersistentvolumesource
*/
export interface io_k8s_api_core_v1_CephFSPersistentVolumeSource {
/**
* readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
*/
readOnly?: boolean;
/**
* secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
*/
secretFile?: string;
/**
* secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
* @references io.k8s.api.core.v1.SecretReference
*/
secretRef?: io_k8s_api_core_v1_SecretReference;
/**
* user is Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
*/
user?: string;
/**
* monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
* @required
* @isArray
*/
monitors: string[];
/**
* path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
*/
path?: string;
}

/**
* Create a new Cephfspersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_CephFSPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_CephFSPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_CephFSPersistentVolumeSource>): io_k8s_api_core_v1_CephFSPersistentVolumeSource {
 return {
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretFile: data?.secretFile !== undefined ? data.secretFile : '',
   secretRef: data?.secretRef !== undefined ? data.secretRef : createio_k8s_api_core_v1_SecretReference(),
   user: data?.user !== undefined ? data.user : '',
   monitors: data?.monitors !== undefined ? data.monitors : [],
   path: data?.path !== undefined ? data.path : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_SecretReference, createio_k8s_api_core_v1_SecretReference } from '../secretreference/io_k8s_api_core_v1_SecretReference';
