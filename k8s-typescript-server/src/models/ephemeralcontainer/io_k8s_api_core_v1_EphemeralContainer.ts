/**
* An EphemeralContainer is a temporary container that you may add to an existing Pod for user-initiated activities such as debugging. Ephemeral containers have no resource or scheduling guarantees, and they will not be restarted when they exit or when a Pod is removed or restarted. The kubelet may evict a Pod if an ephemeral container causes the Pod to exceed its resource allocation.

To add an ephemeral container, use the ephemeralcontainers subresource of an existing Pod. Ephemeral containers may not be removed or restarted.
* @resourceType ephemeralcontainer
* @kind Ephemeralcontainer
*/
export interface io_k8s_api_core_v1_EphemeralContainer {
/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
* @isObject
*/
lifecycle?: { postStart?: { exec?: { command?: string[] }; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; sleep?: { seconds: number }; tcpSocket?: { host?: string; port: string } }; preStop?: { tcpSocket?: { host?: string; port: string }; exec?: { command?: string[] }; httpGet?: { httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string }; sleep?: { seconds: number } } };
/**
* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
* @isObject
*/
securityContext?: { privileged?: boolean; readOnlyRootFilesystem?: boolean; runAsNonRoot?: boolean; seLinuxOptions?: { user?: string; level?: string; role?: string; type?: string }; windowsOptions?: { gmsaCredentialSpec?: string; gmsaCredentialSpecName?: string; hostProcess?: boolean; runAsUserName?: string }; allowPrivilegeEscalation?: boolean; appArmorProfile?: { type: 'Localhost' | 'RuntimeDefault' | 'Unconfined'; localhostProfile?: string }; runAsGroup?: number; runAsUser?: number; seccompProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' }; capabilities?: { add?: string[]; drop?: string[] }; procMount?: 'Default' | 'Unmasked' };
/**
* If set, the name of the container from PodSpec that this ephemeral container targets. The ephemeral container will be run in the namespaces (IPC, PID, etc) of this container. If not set then the ephemeral container uses the namespaces configured in the Pod spec.

The container runtime must implement support for this feature. If the runtime does not support namespace targeting then the result of setting this field is undefined.
*/
targetContainerName?: string;
/**
* volumeDevices is the list of block devices to be used by the container.
* @isArray
*/
volumeDevices?: Array<{ devicePath: string; name: string }>;
/**
* Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
*/
stdin?: boolean;
/**
* Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
*/
workingDir?: string;
/**
* Arguments to the entrypoint. The image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
args?: string[];
/**
* List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
* @isArray
*/
envFrom?: Array<{ prefix?: string; secretRef?: { name?: string; optional?: boolean }; configMapRef?: { name?: string; optional?: boolean } }>;
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
livenessProbe?: { exec?: { command?: string[] }; grpc?: { port: number; service?: string }; initialDelaySeconds?: number; successThreshold?: number; tcpSocket?: { host?: string; port: string }; failureThreshold?: number; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; periodSeconds?: number; terminationGracePeriodSeconds?: number; timeoutSeconds?: number };
/**
* Name of the ephemeral container specified as a DNS_LABEL. This name must be unique among all containers, init containers and ephemeral containers.
* @required
*/
name: string;
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
readinessProbe?: { tcpSocket?: { host?: string; port: string }; timeoutSeconds?: number; httpGet?: { path?: string; port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string; httpHeaders?: Array<{ name: string; value: string }> }; successThreshold?: number; grpc?: { port: number; service?: string }; initialDelaySeconds?: number; periodSeconds?: number; terminationGracePeriodSeconds?: number; exec?: { command?: string[] }; failureThreshold?: number };
/**
* Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.

Possible enum values:
 - `"FallbackToLogsOnError"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.
 - `"File"` is the default behavior and will set the container status message to the contents of the container's terminationMessagePath when the container exits.
*/
terminationMessagePolicy?: 'FallbackToLogsOnError' | 'File';
/**
* Pod volumes to mount into the container's filesystem. Subpath mounts are not allowed for ephemeral containers. Cannot be updated.
* @isArray
*/
volumeMounts?: Array<{ mountPath: string; mountPropagation?: 'Bidirectional' | 'HostToContainer' | 'None'; name: string; readOnly?: boolean; recursiveReadOnly?: string; subPath?: string; subPathExpr?: string }>;
/**
* Entrypoint array. Not executed within a shell. The image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
* @isArray
*/
command?: string[];
/**
* Ports are not allowed for ephemeral containers.
* @isArray
*/
ports?: Array<{ hostPort?: number; name?: string; protocol?: 'SCTP' | 'TCP' | 'UDP'; containerPort: number; hostIP?: string }>;
/**
* Restart policy for the container to manage the restart behavior of each container within a pod. This may only be set for init containers. You cannot set this field on ephemeral containers.
*/
restartPolicy?: string;
/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @isObject
*/
startupProbe?: { exec?: { command?: string[] }; grpc?: { port: number; service?: string }; periodSeconds?: number; timeoutSeconds?: number; failureThreshold?: number; httpGet?: { host?: string; httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS' }; initialDelaySeconds?: number; successThreshold?: number; tcpSocket?: { host?: string; port: string }; terminationGracePeriodSeconds?: number };
/**
* Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
*/
terminationMessagePath?: string;
/**
* Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
*/
stdinOnce?: boolean;
/**
* Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
*/
tty?: boolean;
/**
* List of environment variables to set in the container. Cannot be updated.
* @isArray
*/
env?: Array<{ valueFrom?: { configMapKeyRef?: { key: string; name?: string; optional?: boolean }; fieldRef?: { apiVersion?: string; fieldPath: string }; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string }; secretKeyRef?: { key: string; name?: string; optional?: boolean } }; name: string; value?: string }>;
/**
* Container image name. More info: https://kubernetes.io/docs/concepts/containers/images
*/
image?: string;
/**
* Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images

Possible enum values:
 - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.
 - `"IfNotPresent"` means that kubelet pulls if the image isn't present on disk. Container will fail if the image isn't present and the pull fails.
 - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn't present
*/
imagePullPolicy?: 'Always' | 'IfNotPresent' | 'Never';
/**
* Resources resize policy for the container.
* @isArray
*/
resizePolicy?: Array<{ resourceName: string; restartPolicy: string }>;
/**
* ResourceRequirements describes the compute resource requirements.
* @isObject
*/
resources?: { limits?: Record<string, any>; requests?: Record<string, any>; claims?: Array<{ name: string; request?: string }> };
}

/**
* Create a new Ephemeralcontainer with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EphemeralContainer instance with defaults applied
*/
export function createio_k8s_api_core_v1_EphemeralContainer(data?: Partial<io_k8s_api_core_v1_EphemeralContainer>): io_k8s_api_core_v1_EphemeralContainer {
 return {
   lifecycle: data?.lifecycle !== undefined ? data.lifecycle : {},
   securityContext: data?.securityContext !== undefined ? data.securityContext : {},
   targetContainerName: data?.targetContainerName !== undefined ? data.targetContainerName : '',
   volumeDevices: data?.volumeDevices !== undefined ? data.volumeDevices : [],
   stdin: data?.stdin !== undefined ? data.stdin : false,
   workingDir: data?.workingDir !== undefined ? data.workingDir : '',
   args: data?.args !== undefined ? data.args : [],
   envFrom: data?.envFrom !== undefined ? data.envFrom : [],
   livenessProbe: data?.livenessProbe !== undefined ? data.livenessProbe : {},
   name: data?.name !== undefined ? data.name : '',
   readinessProbe: data?.readinessProbe !== undefined ? data.readinessProbe : {},
   terminationMessagePolicy: data?.terminationMessagePolicy !== undefined ? data.terminationMessagePolicy : '',
   volumeMounts: data?.volumeMounts !== undefined ? data.volumeMounts : [],
   command: data?.command !== undefined ? data.command : [],
   ports: data?.ports !== undefined ? data.ports : [],
   restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
   startupProbe: data?.startupProbe !== undefined ? data.startupProbe : {},
   terminationMessagePath: data?.terminationMessagePath !== undefined ? data.terminationMessagePath : '',
   stdinOnce: data?.stdinOnce !== undefined ? data.stdinOnce : false,
   tty: data?.tty !== undefined ? data.tty : false,
   env: data?.env !== undefined ? data.env : [],
   image: data?.image !== undefined ? data.image : '',
   imagePullPolicy: data?.imagePullPolicy !== undefined ? data.imagePullPolicy : '',
   resizePolicy: data?.resizePolicy !== undefined ? data.resizePolicy : [],
   resources: data?.resources !== undefined ? data.resources : {},
 };
}
