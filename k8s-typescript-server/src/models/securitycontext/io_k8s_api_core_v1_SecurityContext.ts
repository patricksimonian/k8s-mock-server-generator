/**
* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
* @resourceType securitycontext
* @kind Securitycontext
*/
export interface io_k8s_api_core_v1_SecurityContext {
/**
* Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
*/
privileged?: boolean;
/**
* Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
*/
readOnlyRootFilesystem?: boolean;
/**
* The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
*/
runAsUser?: number;
/**
* The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
* @references io.k8s.api.core.v1.SELinuxOptions
*/
seLinuxOptions?: io_k8s_api_core_v1_SELinuxOptions;
/**
* The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
* @references io.k8s.api.core.v1.WindowsSecurityContextOptions
*/
windowsOptions?: io_k8s_api_core_v1_WindowsSecurityContextOptions;
/**
* AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
*/
allowPrivilegeEscalation?: boolean;
/**
* appArmorProfile is the AppArmor options to use by this container. If set, this profile overrides the pod's appArmorProfile. Note that this field cannot be set when spec.os.name is windows.
* @references io.k8s.api.core.v1.AppArmorProfile
*/
appArmorProfile?: io_k8s_api_core_v1_AppArmorProfile;
/**
* The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
* @references io.k8s.api.core.v1.Capabilities
*/
capabilities?: io_k8s_api_core_v1_Capabilities;
/**
* procMount denotes the type of proc mount to use for the containers. The default value is Default which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.

Possible enum values:
 - `"Default"` uses the container runtime defaults for readonly and masked paths for /proc. Most container runtimes mask certain paths in /proc to avoid accidental security exposure of special devices or information.
 - `"Unmasked"` bypasses the default masking behavior of the container runtime and ensures the newly created /proc the container stays in tact with no modifications.
*/
procMount?: 'Default' | 'Unmasked';
/**
* The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
*/
runAsGroup?: number;
/**
* Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
*/
runAsNonRoot?: boolean;
/**
* The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
* @references io.k8s.api.core.v1.SeccompProfile
*/
seccompProfile?: io_k8s_api_core_v1_SeccompProfile;
}

/**
* Create a new Securitycontext with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_SecurityContext instance with defaults applied
*/
export function createio_k8s_api_core_v1_SecurityContext(data?: Partial<io_k8s_api_core_v1_SecurityContext>): io_k8s_api_core_v1_SecurityContext {
 return {
   privileged: data?.privileged !== undefined ? data.privileged : false,
   readOnlyRootFilesystem: data?.readOnlyRootFilesystem !== undefined ? data.readOnlyRootFilesystem : false,
   runAsUser: data?.runAsUser !== undefined ? data.runAsUser : 0,
   seLinuxOptions: data?.seLinuxOptions !== undefined ? data.seLinuxOptions : createio_k8s_api_core_v1_SELinuxOptions(),
   windowsOptions: data?.windowsOptions !== undefined ? data.windowsOptions : createio_k8s_api_core_v1_WindowsSecurityContextOptions(),
   allowPrivilegeEscalation: data?.allowPrivilegeEscalation !== undefined ? data.allowPrivilegeEscalation : false,
   appArmorProfile: data?.appArmorProfile !== undefined ? data.appArmorProfile : createio_k8s_api_core_v1_AppArmorProfile(),
   capabilities: data?.capabilities !== undefined ? data.capabilities : createio_k8s_api_core_v1_Capabilities(),
   procMount: data?.procMount !== undefined ? data.procMount : '',
   runAsGroup: data?.runAsGroup !== undefined ? data.runAsGroup : 0,
   runAsNonRoot: data?.runAsNonRoot !== undefined ? data.runAsNonRoot : false,
   seccompProfile: data?.seccompProfile !== undefined ? data.seccompProfile : createio_k8s_api_core_v1_SeccompProfile(),
 };
}
// Required imports
import { io_k8s_api_core_v1_AppArmorProfile, createio_k8s_api_core_v1_AppArmorProfile } from '../apparmorprofile/io_k8s_api_core_v1_AppArmorProfile';
import { io_k8s_api_core_v1_Capabilities, createio_k8s_api_core_v1_Capabilities } from '../capability/io_k8s_api_core_v1_Capabilities';
import { io_k8s_api_core_v1_SELinuxOptions, createio_k8s_api_core_v1_SELinuxOptions } from '../selinuxoption/io_k8s_api_core_v1_SELinuxOptions';
import { io_k8s_api_core_v1_SeccompProfile, createio_k8s_api_core_v1_SeccompProfile } from '../seccompprofile/io_k8s_api_core_v1_SeccompProfile';
import { io_k8s_api_core_v1_WindowsSecurityContextOptions, createio_k8s_api_core_v1_WindowsSecurityContextOptions } from '../windowssecuritycontextoption/io_k8s_api_core_v1_WindowsSecurityContextOptions';
