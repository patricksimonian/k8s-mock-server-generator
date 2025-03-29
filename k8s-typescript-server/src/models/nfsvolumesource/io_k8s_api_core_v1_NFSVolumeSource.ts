/**
* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
* @resourceType nfsvolumesource
* @kind Nfsvolumesource
*/
export interface io_k8s_api_core_v1_NFSVolumeSource {
/**
* path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
* @required
*/
path: string;
/**
* readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
*/
readOnly?: boolean;
/**
* server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
* @required
*/
server: string;
}

/**
* Create a new Nfsvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NFSVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_NFSVolumeSource(data?: Partial<io_k8s_api_core_v1_NFSVolumeSource>): io_k8s_api_core_v1_NFSVolumeSource {
 return {
   path: data?.path !== undefined ? data.path : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   server: data?.server !== undefined ? data.server : '',
 };
}
