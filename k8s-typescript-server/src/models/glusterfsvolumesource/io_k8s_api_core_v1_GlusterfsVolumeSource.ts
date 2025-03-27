/**
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
* @resourceType glusterfsvolumesource
* @kind Glusterfsvolumesource
*/
export interface io_k8s_api_core_v1_GlusterfsVolumeSource {
/**
* endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
* @required
*/
endpoints: string;
/**
* path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
* @required
*/
path: string;
/**
* readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
*/
readOnly?: boolean;
}

/**
* Create a new Glusterfsvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_GlusterfsVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_GlusterfsVolumeSource(data?: Partial<io_k8s_api_core_v1_GlusterfsVolumeSource>): io_k8s_api_core_v1_GlusterfsVolumeSource {
 return {
   endpoints: data?.endpoints !== undefined ? data.endpoints : '',
   path: data?.path !== undefined ? data.path : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
 };
}
