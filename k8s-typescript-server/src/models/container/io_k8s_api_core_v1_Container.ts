/**
* A single application container that you want to run within a pod.
* @resourceType container
* @kind Container
*/
export interface io_k8s_api_core_v1_Container {
/**
* Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
command?: string[];
/**
* Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
*/
image?: string;
/**
* Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
* @references io.k8s.api.core.v1.Probe
*/
livenessProbe?: io_k8s_api_core_v1_Probe;
/**
* Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
*/
stdinOnce?: boolean;
/**
* Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
*/
terminationMessagePath?: string;
/**
* Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.

Possible enum values:
 - `"FallbackToLogsOnError"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.
 - `"File"` is the default behavior and will set the container status message to the contents of the container's terminationMessagePath when the container exits.
*/
terminationMessagePolicy?: 'FallbackToLogsOnError' | 'File';
/**
* Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images

Possible enum values:
 - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
 - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
 - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
*/
imagePullPolicy?: 'Always' | 'IfNotPresent' | 'Never';
/**
* Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
* @required
*/
name: string;
/**
* RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is "Always". For non-init containers or when this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Setting the RestartPolicy as "Always" for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy "Always" will be shut down. This lifecycle differs from normal init containers and is often referred to as a "sidecar" container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
*/
restartPolicy?: string;
/**
* Pod volumes to mount into the container's filesystem. Cannot be updated.
* @isArray
*/
volumeMounts?: io_k8s_api_core_v1_VolumeMount[];
/**
* Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
args?: string[];
/**
* List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
* @isArray
*/
envFrom?: io_k8s_api_core_v1_EnvFromSource[];
/**
* Resources resize policy for the container.
* @isArray
*/
resizePolicy?: io_k8s_api_core_v1_ContainerResizePolicy[];
/**
* Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
* @references io.k8s.api.core.v1.ResourceRequirements
*/
resources?: io_k8s_api_core_v1_ResourceRequirements;
/**
* SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
* @references io.k8s.api.core.v1.SecurityContext
*/
securityContext?: io_k8s_api_core_v1_SecurityContext;
/**
* StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
* @references io.k8s.api.core.v1.Probe
*/
startupProbe?: io_k8s_api_core_v1_Probe;
/**
* Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
*/
stdin?: boolean;
/**
* List of environment variables to set in the container. Cannot be updated.
* @isArray
*/
env?: io_k8s_api_core_v1_EnvVar[];
/**
* Actions that the management system should take in response to container lifecycle events. Cannot be updated.
* @references io.k8s.api.core.v1.Lifecycle
*/
lifecycle?: io_k8s_api_core_v1_Lifecycle;
/**
* List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
* @isArray
*/
ports?: io_k8s_api_core_v1_ContainerPort[];
/**
* Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
* @references io.k8s.api.core.v1.Probe
*/
readinessProbe?: io_k8s_api_core_v1_Probe;
/**
* Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
*/
tty?: boolean;
/**
* volumeDevices is the list of block devices to be used by the container.
* @isArray
*/
volumeDevices?: io_k8s_api_core_v1_VolumeDevice[];
/**
* Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
*/
workingDir?: string;
}

/**
* Create a new Container with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Container instance with defaults applied
*/
export function createio_k8s_api_core_v1_Container(data?: Partial<io_k8s_api_core_v1_Container>): io_k8s_api_core_v1_Container {
 return {
   command: data?.command !== undefined ? data.command : [],
   image: data?.image !== undefined ? data.image : '',
   livenessProbe: data?.livenessProbe !== undefined ? data.livenessProbe : createio_k8s_api_core_v1_Probe(),
   stdinOnce: data?.stdinOnce !== undefined ? data.stdinOnce : false,
   terminationMessagePath: data?.terminationMessagePath !== undefined ? data.terminationMessagePath : '',
   terminationMessagePolicy: data?.terminationMessagePolicy !== undefined ? data.terminationMessagePolicy : '',
   imagePullPolicy: data?.imagePullPolicy !== undefined ? data.imagePullPolicy : '',
   name: data?.name !== undefined ? data.name : '',
   restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
   volumeMounts: data?.volumeMounts !== undefined ? data.volumeMounts : [],
   args: data?.args !== undefined ? data.args : [],
   envFrom: data?.envFrom !== undefined ? data.envFrom : [],
   resizePolicy: data?.resizePolicy !== undefined ? data.resizePolicy : [],
   resources: data?.resources !== undefined ? data.resources : createio_k8s_api_core_v1_ResourceRequirements(),
   securityContext: data?.securityContext !== undefined ? data.securityContext : createio_k8s_api_core_v1_SecurityContext(),
   startupProbe: data?.startupProbe !== undefined ? data.startupProbe : createio_k8s_api_core_v1_Probe(),
   stdin: data?.stdin !== undefined ? data.stdin : false,
   env: data?.env !== undefined ? data.env : [],
   lifecycle: data?.lifecycle !== undefined ? data.lifecycle : createio_k8s_api_core_v1_Lifecycle(),
   ports: data?.ports !== undefined ? data.ports : [],
   readinessProbe: data?.readinessProbe !== undefined ? data.readinessProbe : createio_k8s_api_core_v1_Probe(),
   tty: data?.tty !== undefined ? data.tty : false,
   volumeDevices: data?.volumeDevices !== undefined ? data.volumeDevices : [],
   workingDir: data?.workingDir !== undefined ? data.workingDir : '',
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
