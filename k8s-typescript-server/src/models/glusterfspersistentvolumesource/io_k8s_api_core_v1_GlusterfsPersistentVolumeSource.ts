/**
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
* @resourceType glusterfspersistentvolumesource
* @kind Glusterfspersistentvolumesource
*/
export interface io_k8s_api_core_v1_GlusterfsPersistentVolumeSource {
/**
* endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
* @required
*/
endpoints: string;
/**
* endpointsNamespace is the namespace that contains Glusterfs endpoint. If this field is empty, the EndpointNamespace defaults to the same namespace as the bound PVC. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
*/
endpointsNamespace?: string;
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
* Create a new Glusterfspersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_GlusterfsPersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_GlusterfsPersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_GlusterfsPersistentVolumeSource>): io_k8s_api_core_v1_GlusterfsPersistentVolumeSource {
 return {
   endpoints: data?.endpoints !== undefined ? data.endpoints : '',
   endpointsNamespace: data?.endpointsNamespace !== undefined ? data.endpointsNamespace : '',
   path: data?.path !== undefined ? data.path : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
 };
}
