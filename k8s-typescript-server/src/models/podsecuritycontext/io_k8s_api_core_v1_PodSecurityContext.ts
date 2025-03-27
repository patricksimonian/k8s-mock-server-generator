/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
* @resourceType podsecuritycontext
* @kind Podsecuritycontext
*/
export interface io_k8s_api_core_v1_PodSecurityContext {
/**
* The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
* @references io.k8s.api.core.v1.SeccompProfile
*/
seccompProfile?: io_k8s_api_core_v1_SeccompProfile;
/**
* A list of groups applied to the first process run in each container, in addition to the container's primary GID and fsGroup (if specified).  If the SupplementalGroupsPolicy feature is enabled, the supplementalGroupsPolicy field determines whether these are in addition to or instead of any group memberships defined in the container image. If unspecified, no additional groups are added, though group memberships defined in the container image may still be used, depending on the supplementalGroupsPolicy field. Note that this field cannot be set when spec.os.name is windows.
* @isArray
*/
supplementalGroups?: number[];
/**
* The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
* @references io.k8s.api.core.v1.WindowsSecurityContextOptions
*/
windowsOptions?: io_k8s_api_core_v1_WindowsSecurityContextOptions;
/**
* appArmorProfile is the AppArmor options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.
* @references io.k8s.api.core.v1.AppArmorProfile
*/
appArmorProfile?: io_k8s_api_core_v1_AppArmorProfile;
/**
* A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:

1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----

If unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.
*/
fsGroup?: number;
/**
* Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
*/
runAsNonRoot?: boolean;
/**
* seLinuxChangePolicy defines how the container's SELinux label is applied to all volumes used by the Pod. It has no effect on nodes that do not support SELinux or to volumes does not support SELinux. Valid values are "MountOption" and "Recursive".

"Recursive" means relabeling of all files on all Pod volumes by the container runtime. This may be slow for large volumes, but allows mixing privileged and unprivileged Pods sharing the same volume on the same node.

"MountOption" mounts all eligible Pod volumes with `-o context` mount option. This requires all Pods that share the same volume to use the same SELinux label. It is not possible to share the same volume among privileged and unprivileged Pods. Eligible volumes are in-tree FibreChannel and iSCSI volumes, and all CSI volumes whose CSI driver announces SELinux support by setting spec.seLinuxMount: true in their CSIDriver instance. Other volumes are always re-labelled recursively. "MountOption" value is allowed only when SELinuxMount feature gate is enabled.

If not specified and SELinuxMount feature gate is enabled, "MountOption" is used. If not specified and SELinuxMount feature gate is disabled, "MountOption" is used for ReadWriteOncePod volumes and "Recursive" for all other volumes.

This field affects only Pods that have SELinux label set, either in PodSecurityContext or in SecurityContext of all containers.

All Pods that use the same volume should use the same seLinuxChangePolicy, otherwise some pods can get stuck in ContainerCreating state. Note that this field cannot be set when spec.os.name is windows.
*/
seLinuxChangePolicy?: string;
/**
* Defines how supplemental groups of the first container processes are calculated. Valid values are "Merge" and "Strict". If not specified, "Merge" is used. (Alpha) Using the field requires the SupplementalGroupsPolicy feature gate to be enabled and the container runtime must implement support for this feature. Note that this field cannot be set when spec.os.name is windows.

Possible enum values:
 - `"Merge"` means that the container's provided SupplementalGroups and FsGroup (specified in SecurityContext) will be merged with the primary user's groups as defined in the container image (in /etc/group).
 - `"Strict"` means that the container's provided SupplementalGroups and FsGroup (specified in SecurityContext) will be used instead of any groups defined in the container image.
*/
supplementalGroupsPolicy?: 'Merge' | 'Strict';
/**
* Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.
* @isArray
*/
sysctls?: io_k8s_api_core_v1_Sysctl[];
/**
* fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows.

Possible enum values:
 - `"Always"` indicates that volume's ownership and permissions should always be changed whenever volume is mounted inside a Pod. This the default behavior.
 - `"OnRootMismatch"` indicates that volume's ownership and permissions will be changed only when permission and ownership of root directory does not match with expected permissions on the volume. This can help shorten the time it takes to change ownership and permissions of a volume.
*/
fsGroupChangePolicy?: 'Always' | 'OnRootMismatch';
/**
* The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
*/
runAsGroup?: number;
/**
* The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
*/
runAsUser?: number;
/**
* The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.
* @references io.k8s.api.core.v1.SELinuxOptions
*/
seLinuxOptions?: io_k8s_api_core_v1_SELinuxOptions;
}

/**
* Create a new Podsecuritycontext with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodSecurityContext instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodSecurityContext(data?: Partial<io_k8s_api_core_v1_PodSecurityContext>): io_k8s_api_core_v1_PodSecurityContext {
 return {
   seccompProfile: data?.seccompProfile !== undefined ? data.seccompProfile : createio_k8s_api_core_v1_SeccompProfile(),
   supplementalGroups: data?.supplementalGroups !== undefined ? data.supplementalGroups : [],
   windowsOptions: data?.windowsOptions !== undefined ? data.windowsOptions : createio_k8s_api_core_v1_WindowsSecurityContextOptions(),
   appArmorProfile: data?.appArmorProfile !== undefined ? data.appArmorProfile : createio_k8s_api_core_v1_AppArmorProfile(),
   fsGroup: data?.fsGroup !== undefined ? data.fsGroup : 0,
   runAsNonRoot: data?.runAsNonRoot !== undefined ? data.runAsNonRoot : false,
   seLinuxChangePolicy: data?.seLinuxChangePolicy !== undefined ? data.seLinuxChangePolicy : '',
   supplementalGroupsPolicy: data?.supplementalGroupsPolicy !== undefined ? data.supplementalGroupsPolicy : '',
   sysctls: data?.sysctls !== undefined ? data.sysctls : [],
   fsGroupChangePolicy: data?.fsGroupChangePolicy !== undefined ? data.fsGroupChangePolicy : '',
   runAsGroup: data?.runAsGroup !== undefined ? data.runAsGroup : 0,
   runAsUser: data?.runAsUser !== undefined ? data.runAsUser : 0,
   seLinuxOptions: data?.seLinuxOptions !== undefined ? data.seLinuxOptions : createio_k8s_api_core_v1_SELinuxOptions(),
 };
}
// Required imports
import { io_k8s_api_core_v1_AppArmorProfile, createio_k8s_api_core_v1_AppArmorProfile } from '../apparmorprofile/io_k8s_api_core_v1_AppArmorProfile';
import { io_k8s_api_core_v1_SELinuxOptions, createio_k8s_api_core_v1_SELinuxOptions } from '../selinuxoption/io_k8s_api_core_v1_SELinuxOptions';
import { io_k8s_api_core_v1_SeccompProfile, createio_k8s_api_core_v1_SeccompProfile } from '../seccompprofile/io_k8s_api_core_v1_SeccompProfile';
import { io_k8s_api_core_v1_Sysctl, createio_k8s_api_core_v1_Sysctl } from '../io.k8s.api.core.v1.Sysctl';
import { io_k8s_api_core_v1_WindowsSecurityContextOptions, createio_k8s_api_core_v1_WindowsSecurityContextOptions } from '../windowssecuritycontextoption/io_k8s_api_core_v1_WindowsSecurityContextOptions';
