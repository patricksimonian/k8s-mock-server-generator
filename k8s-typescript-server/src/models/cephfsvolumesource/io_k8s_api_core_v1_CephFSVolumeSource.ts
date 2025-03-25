/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
* @resourceType cephfsvolumesource
* @kind Cephfsvolumesource
*/
export interface io_k8s_api_core_v1_CephFSVolumeSource {
/**
* readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
*/
readOnly?: boolean;
/**
* secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
*/
secretFile?: string;
/**
* LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
* @isObject
*/
secretRef?: { name?: string };
/**
* user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
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
* Create a new Cephfsvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_CephFSVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_CephFSVolumeSource(data?: Partial<io_k8s_api_core_v1_CephFSVolumeSource>): io_k8s_api_core_v1_CephFSVolumeSource {
 return {
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretFile: data?.secretFile !== undefined ? data.secretFile : '',
   secretRef: data?.secretRef !== undefined ? data.secretRef : {},
   user: data?.user !== undefined ? data.user : '',
   monitors: data?.monitors !== undefined ? data.monitors : [],
   path: data?.path !== undefined ? data.path : '',
 };
}
