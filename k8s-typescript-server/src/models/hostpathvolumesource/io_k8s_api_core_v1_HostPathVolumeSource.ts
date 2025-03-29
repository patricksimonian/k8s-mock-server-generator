/**
* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
* @resourceType hostpathvolumesource
* @kind Hostpathvolumesource
*/
export interface io_k8s_api_core_v1_HostPathVolumeSource {
/**
* type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath

Possible enum values:
 - `""` For backwards compatible, leave it empty if unset
 - `"BlockDevice"` A block device must exist at the given path
 - `"CharDevice"` A character device must exist at the given path
 - `"Directory"` A directory must exist at the given path
 - `"DirectoryOrCreate"` If nothing exists at the given path, an empty directory will be created there as needed with file mode 0755, having the same group and ownership with Kubelet.
 - `"File"` A file must exist at the given path
 - `"FileOrCreate"` If nothing exists at the given path, an empty file will be created there as needed with file mode 0644, having the same group and ownership with Kubelet.
 - `"Socket"` A UNIX socket must exist at the given path
*/
type?: '' | 'BlockDevice' | 'CharDevice' | 'Directory' | 'DirectoryOrCreate' | 'File' | 'FileOrCreate' | 'Socket';
/**
* path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
* @required
*/
path: string;
}

/**
* Create a new Hostpathvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_HostPathVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_HostPathVolumeSource(data?: Partial<io_k8s_api_core_v1_HostPathVolumeSource>): io_k8s_api_core_v1_HostPathVolumeSource {
 return {
   type: data?.type !== undefined ? data.type : '',
   path: data?.path !== undefined ? data.path : '',
 };
}
