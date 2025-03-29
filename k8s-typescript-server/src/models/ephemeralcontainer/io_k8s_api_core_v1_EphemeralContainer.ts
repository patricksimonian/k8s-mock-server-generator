/**
* An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.

To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
* @resourceType ephemeralcontainer
* @kind Ephemeralcontainer
*/
export interface io_k8s_api_core_v1_EphemeralContainer {
/**
* List of environment variables to set in the container. Cannot be updated.
* @isArray
*/
env?: io_k8s_api_core_v1_EnvVar[];
/**
* Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images

Possible enum values:
 - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
 - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
 - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
*/
imagePullPolicy?: 'Always' | 'IfNotPresent' | 'Never';
/**
* Probes are not allowed for ephemeral containers.
* @references io.k8s.api.core.v1.Probe
*/
readinessProbe?: io_k8s_api_core_v1_Probe;
/**
* Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
*/
stdin?: boolean;
/**
* Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.

Possible enum values:
 - `"FallbackToLogsOnError"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.
 - `"File"` is the default behavior and will set the container status message to the contents of the container's terminationMessagePath when the container exits.
*/
terminationMessagePolicy?: 'FallbackToLogsOnError' | 'File';
/**
* Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
*/
tty?: boolean;
/**
* Arguments to the entrypoint. The image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
args?: string[];
/**
* Entrypoint array. Not executed within a shell. The image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
command?: string[];
/**
* volumeDevices is the list of block devices to be used by the container.
* @isArray
*/
volumeDevices?: io_k8s_api_core_v1_VolumeDevice[];
/**
* Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated.
* @isArray
*/
volumeMounts?: io_k8s_api_core_v1_VolumeMount[];
/**
* Probes are not allowed for ephemeral containers.
* @references io.k8s.api.core.v1.Probe
*/
startupProbe?: io_k8s_api_core_v1_Probe;
/**
* Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.
* @required
*/
name: string;
/**
* Resources resize policy for the container.
* @isArray
*/
resizePolicy?: io_k8s_api_core_v1_ContainerResizePolicy[];
/**
* Resources are not allowed for ephemeral containers. Ephemeral containers use spare resources already allocated to the pod.
* @references io.k8s.api.core.v1.ResourceRequirements
*/
resources?: io_k8s_api_core_v1_ResourceRequirements;
/**
* If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.

The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
*/
targetContainerName?: string;
/**
* List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
* @isArray
*/
envFrom?: io_k8s_api_core_v1_EnvFromSource[];
/**
* Probes are not allowed for ephemeral containers.
* @references io.k8s.api.core.v1.Probe
*/
livenessProbe?: io_k8s_api_core_v1_Probe;
/**
* Ports are not allowed for ephemeral containers.
* @isArray
*/
ports?: io_k8s_api_core_v1_ContainerPort[];
/**
* Restart policy for the container to manage the restart behavior of each container within a pod. This may only be set for init containers. You cannot set this field on ephemeral containers.
*/
restartPolicy?: string;
/**
* Optional: SecurityContext defines the security options the ephemeral container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.
* @references io.k8s.api.core.v1.SecurityContext
*/
securityContext?: io_k8s_api_core_v1_SecurityContext;
/**
* Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
*/
stdinOnce?: boolean;
/**
* Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
*/
terminationMessagePath?: string;
/**
* Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
*/
workingDir?: string;
/**
* Container image name. More info: https://kubernetes.io/docs/concepts/containers/images
*/
image?: string;
/**
* Lifecycle is not allowed for ephemeral containers.
* @references io.k8s.api.core.v1.Lifecycle
*/
lifecycle?: io_k8s_api_core_v1_Lifecycle;
}

/**
* Create a new Ephemeralcontainer with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EphemeralContainer instance with defaults applied
*/
export function createio_k8s_api_core_v1_EphemeralContainer(data?: Partial<io_k8s_api_core_v1_EphemeralContainer>): io_k8s_api_core_v1_EphemeralContainer {
 return {
   env: data?.env !== undefined ? data.env : [],
   imagePullPolicy: data?.imagePullPolicy !== undefined ? data.imagePullPolicy : '',
   readinessProbe: data?.readinessProbe !== undefined ? data.readinessProbe : createio_k8s_api_core_v1_Probe(),
   stdin: data?.stdin !== undefined ? data.stdin : false,
   terminationMessagePolicy: data?.terminationMessagePolicy !== undefined ? data.terminationMessagePolicy : '',
   tty: data?.tty !== undefined ? data.tty : false,
   args: data?.args !== undefined ? data.args : [],
   command: data?.command !== undefined ? data.command : [],
   volumeDevices: data?.volumeDevices !== undefined ? data.volumeDevices : [],
   volumeMounts: data?.volumeMounts !== undefined ? data.volumeMounts : [],
   startupProbe: data?.startupProbe !== undefined ? data.startupProbe : createio_k8s_api_core_v1_Probe(),
   name: data?.name !== undefined ? data.name : '',
   resizePolicy: data?.resizePolicy !== undefined ? data.resizePolicy : [],
   resources: data?.resources !== undefined ? data.resources : createio_k8s_api_core_v1_ResourceRequirements(),
   targetContainerName: data?.targetContainerName !== undefined ? data.targetContainerName : '',
   envFrom: data?.envFrom !== undefined ? data.envFrom : [],
   livenessProbe: data?.livenessProbe !== undefined ? data.livenessProbe : createio_k8s_api_core_v1_Probe(),
   ports: data?.ports !== undefined ? data.ports : [],
   restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
   securityContext: data?.securityContext !== undefined ? data.securityContext : createio_k8s_api_core_v1_SecurityContext(),
   stdinOnce: data?.stdinOnce !== undefined ? data.stdinOnce : false,
   terminationMessagePath: data?.terminationMessagePath !== undefined ? data.terminationMessagePath : '',
   workingDir: data?.workingDir !== undefined ? data.workingDir : '',
   image: data?.image !== undefined ? data.image : '',
   lifecycle: data?.lifecycle !== undefined ? data.lifecycle : createio_k8s_api_core_v1_Lifecycle(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ContainerPort, createio_k8s_api_core_v1_ContainerPort } from '../io.k8s.api.core.v1.ContainerPort';
import { io_k8s_api_core_v1_ContainerResizePolicy, createio_k8s_api_core_v1_ContainerResizePolicy } from '../io.k8s.api.core.v1.ContainerResizePolicy';
import { io_k8s_api_core_v1_EnvFromSource, createio_k8s_api_core_v1_EnvFromSource } from '../io.k8s.api.core.v1.EnvFromSource';
import { io_k8s_api_core_v1_EnvVar, createio_k8s_api_core_v1_EnvVar } from '../io.k8s.api.core.v1.EnvVar';
import { io_k8s_api_core_v1_Lifecycle, createio_k8s_api_core_v1_Lifecycle } from '../lifecycle/io_k8s_api_core_v1_Lifecycle';
import { io_k8s_api_core_v1_Probe, createio_k8s_api_core_v1_Probe } from '../probe/io_k8s_api_core_v1_Probe';
import { io_k8s_api_core_v1_ResourceRequirements, createio_k8s_api_core_v1_ResourceRequirements } from '../resourcerequirement/io_k8s_api_core_v1_ResourceRequirements';
import { io_k8s_api_core_v1_SecurityContext, createio_k8s_api_core_v1_SecurityContext } from '../securitycontext/io_k8s_api_core_v1_SecurityContext';
import { io_k8s_api_core_v1_VolumeDevice, createio_k8s_api_core_v1_VolumeDevice } from '../io.k8s.api.core.v1.VolumeDevice';
import { io_k8s_api_core_v1_VolumeMount, createio_k8s_api_core_v1_VolumeMount } from '../io.k8s.api.core.v1.VolumeMount';
