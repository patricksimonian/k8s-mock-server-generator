/**
* Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
* @resourceType gitrepovolumesource
* @kind Gitrepovolumesource
*/
export interface io_k8s_api_core_v1_GitRepoVolumeSource {
/**
* revision is the commit hash for the specified revision.
*/
revision?: string;
/**
* directory is the target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
*/
directory?: string;
/**
* repository is the URL
* @required
*/
repository: string;
}

/**
* Create a new Gitrepovolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_GitRepoVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_GitRepoVolumeSource(data?: Partial<io_k8s_api_core_v1_GitRepoVolumeSource>): io_k8s_api_core_v1_GitRepoVolumeSource {
 return {
   revision: data?.revision !== undefined ? data.revision : '',
   directory: data?.directory !== undefined ? data.directory : '',
   repository: data?.repository !== undefined ? data.repository : '',
 };
}
