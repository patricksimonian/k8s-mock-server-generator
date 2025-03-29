/**
* VolumeMount describes a mounting of a Volume within a container.
* @resourceType volumemount
* @kind Volumemount
*/
export interface io_k8s_api_core_v1_VolumeMount {
/**
* mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).

Possible enum values:
 - `"Bidirectional"` means that the volume in a container will receive new mounts from the host or other containers, and its own mounts will be propagated from the container to the host or other containers. Note that this mode is recursively applied to all mounts in the volume ("rshared" in Linux terminology).
 - `"HostToContainer"` means that the volume in a container will receive new mounts from the host or other containers, but filesystems mounted inside the container won't be propagated to the host or other containers. Note that this mode is recursively applied to all mounts in the volume ("rslave" in Linux terminology).
 - `"None"` means that the volume in a container will not receive new mounts from the host or other containers, and filesystems mounted inside the container won't be propagated to the host or other containers. Note that this mode corresponds to "private" in Linux terminology.
*/
mountPropagation?: 'Bidirectional' | 'HostToContainer' | 'None';
/**
* This must match the Name of a Volume.
* @required
*/
name: string;
/**
* Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
*/
readOnly?: boolean;
/**
* RecursiveReadOnly specifies whether read-only mounts should be handled recursively.

If ReadOnly is false, this field has no meaning and must be unspecified.

If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only.  If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime.  If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason.

If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None).

If this field is not specified, it is treated as an equivalent of Disabled.
*/
recursiveReadOnly?: string;
/**
* Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root).
*/
subPath?: string;
/**
* Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to "" (volume's root). SubPathExpr and SubPath are mutually exclusive.
*/
subPathExpr?: string;
/**
* Path within the container at which the volume should be mounted.  Must not contain ':'.
* @required
*/
mountPath: string;
}

/**
* Create a new Volumemount with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_VolumeMount instance with defaults applied
*/
export function createio_k8s_api_core_v1_VolumeMount(data?: Partial<io_k8s_api_core_v1_VolumeMount>): io_k8s_api_core_v1_VolumeMount {
 return {
   mountPropagation: data?.mountPropagation !== undefined ? data.mountPropagation : '',
   name: data?.name !== undefined ? data.name : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   recursiveReadOnly: data?.recursiveReadOnly !== undefined ? data.recursiveReadOnly : '',
   subPath: data?.subPath !== undefined ? data.subPath : '',
   subPathExpr: data?.subPathExpr !== undefined ? data.subPathExpr : '',
   mountPath: data?.mountPath !== undefined ? data.mountPath : '',
 };
}
