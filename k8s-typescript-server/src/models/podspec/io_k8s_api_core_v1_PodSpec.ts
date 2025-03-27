/**
* PodSpec is a description of a pod.
* @resourceType podspec
* @kind Podspec
*/
export interface io_k8s_api_core_v1_PodSpec {
/**
* ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
*/
serviceAccountName?: string;
/**
* TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
* @isArray
*/
topologySpreadConstraints?: io_k8s_api_core_v1_TopologySpreadConstraint[];
/**
* If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.
*/
subdomain?: string;
/**
* Specifies the DNS parameters of a pod. Parameters specified here will be merged to the generated DNS configuration based on DNSPolicy.
* @references io.k8s.api.core.v1.PodDNSConfig
*/
dnsConfig?: io_k8s_api_core_v1_PodDNSConfig;
/**
* List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource.
* @isArray
*/
ephemeralContainers?: io_k8s_api_core_v1_EphemeralContainer[];
/**
* Use the host's user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature.
*/
hostUsers?: boolean;
/**
* PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.

Possible enum values:
 - `"Never"` means that pod never preempts other pods with lower priority.
 - `"PreemptLowerPriority"` means that pod can preempt other pods with lower priority.
*/
preemptionPolicy?: 'Never' | 'PreemptLowerPriority';
/**
* If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
*/
priorityClassName?: string;
/**
* If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
*/
schedulerName?: string;
/**
* AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
*/
automountServiceAccountToken?: boolean;
/**
* Use the host's ipc namespace. Optional: Default to false.
*/
hostIPC?: boolean;
/**
* Specifies the OS of the containers in the pod. Some pod and container fields are restricted if this is set.

If the OS field is set to linux, the following fields must be unset: -securityContext.windowsOptions

If the OS field is set to windows, following fields must be unset: - spec.hostPID - spec.hostIPC - spec.hostUsers - spec.securityContext.appArmorProfile - spec.securityContext.seLinuxOptions - spec.securityContext.seccompProfile - spec.securityContext.fsGroup - spec.securityContext.fsGroupChangePolicy - spec.securityContext.sysctls - spec.shareProcessNamespace - spec.securityContext.runAsUser - spec.securityContext.runAsGroup - spec.securityContext.supplementalGroups - spec.securityContext.supplementalGroupsPolicy - spec.containers[*].securityContext.appArmorProfile - spec.containers[*].securityContext.seLinuxOptions - spec.containers[*].securityContext.seccompProfile - spec.containers[*].securityContext.capabilities - spec.containers[*].securityContext.readOnlyRootFilesystem - spec.containers[*].securityContext.privileged - spec.containers[*].securityContext.allowPrivilegeEscalation - spec.containers[*].securityContext.procMount - spec.containers[*].securityContext.runAsUser - spec.containers[*].securityContext.runAsGroup
* @references io.k8s.api.core.v1.PodOS
*/
os?: io_k8s_api_core_v1_PodOS;
/**
* ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name.

This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.

This field is immutable.
* @isArray
*/
resourceClaims?: io_k8s_api_core_v1_PodResourceClaim[];
/**
* Resources is the total amount of CPU and Memory resources required by all containers in the pod. It supports specifying Requests and Limits for "cpu" and "memory" resource names only. ResourceClaims are not supported.

This field enables fine-grained control over resource allocation for the entire pod, allowing resource sharing among containers in a pod.

This is an alpha field and requires enabling the PodLevelResources feature gate.
* @references io.k8s.api.core.v1.ResourceRequirements
*/
resources?: io_k8s_api_core_v1_ResourceRequirements;
/**
* If specified, the pod's tolerations.
* @isArray
*/
tolerations?: io_k8s_api_core_v1_Toleration[];
/**
* Set DNS policy for the pod. Defaults to "ClusterFirst". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.

Possible enum values:
 - `"ClusterFirst"` indicates that the pod should use cluster DNS first unless hostNetwork is true, if it is available, then fall back on the default (as determined by kubelet) DNS settings.
 - `"ClusterFirstWithHostNet"` indicates that the pod should use cluster DNS first, if it is available, then fall back on the default (as determined by kubelet) DNS settings.
 - `"Default"` indicates that the pod should use the default (as determined by kubelet) DNS settings.
 - `"None"` indicates that the pod should use empty DNS settings. DNS parameters such as nameservers and search paths should be defined via DNSConfig.
*/
dnsPolicy?: 'ClusterFirst' | 'ClusterFirstWithHostNet' | 'Default' | 'None';
/**
* Use the host's pid namespace. Optional: Default to false.
*/
hostPID?: boolean;
/**
* Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
*/
hostname?: string;
/**
* The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
*/
priority?: number;
/**
* Restart policy for all containers within the pod. One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy

Possible enum values:
 - `"Always"`
 - `"Never"`
 - `"OnFailure"`
*/
restartPolicy?: 'Always' | 'Never' | 'OnFailure';
/**
* NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
*/
nodeSelector?: Record<string, any>;
/**
* If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates
* @isArray
*/
readinessGates?: io_k8s_api_core_v1_PodReadinessGate[];
/**
* RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
*/
runtimeClassName?: string;
/**
* SchedulingGates is an opaque list of values that if specified will block scheduling the pod. If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the scheduler will not attempt to schedule the pod.

SchedulingGates can only be set at pod creation time, and be removed only afterwards.
* @isArray
*/
schedulingGates?: io_k8s_api_core_v1_PodSchedulingGate[];
/**
* If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.
*/
setHostnameAsFQDN?: boolean;
/**
* SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.
* @references io.k8s.api.core.v1.PodSecurityContext
*/
securityContext?: io_k8s_api_core_v1_PodSecurityContext;
/**
* Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
*/
terminationGracePeriodSeconds?: number;
/**
* Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
*/
activeDeadlineSeconds?: number;
/**
* If specified, the pod's scheduling constraints
* @references io.k8s.api.core.v1.Affinity
*/
affinity?: io_k8s_api_core_v1_Affinity;
/**
* HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified.
* @isArray
*/
hostAliases?: io_k8s_api_core_v1_HostAlias[];
/**
* NodeName indicates in which node this pod is scheduled. If empty, this pod is a candidate for scheduling by the scheduler defined in schedulerName. Once this field is set, the kubelet for this node becomes responsible for the lifecycle of this pod. This field should not be used to express a desire for the pod to be scheduled on a specific node. https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename
*/
nodeName?: string;
/**
* Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md
*/
overhead?: Record<string, any>;
/**
* EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.
*/
enableServiceLinks?: boolean;
/**
* List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
* @isArray
*/
initContainers?: io_k8s_api_core_v1_Container[];
/**
* Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.
*/
shareProcessNamespace?: boolean;
/**
* List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
* @required
* @isArray
*/
containers: io_k8s_api_core_v1_Container[];
/**
* Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
*/
hostNetwork?: boolean;
/**
* ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
* @isArray
*/
imagePullSecrets?: io_k8s_api_core_v1_LocalObjectReference[];
/**
* DeprecatedServiceAccount is a deprecated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
*/
serviceAccount?: string;
/**
* List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
* @isArray
*/
volumes?: io_k8s_api_core_v1_Volume[];
}

/**
* Create a new Podspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodSpec(data?: Partial<io_k8s_api_core_v1_PodSpec>): io_k8s_api_core_v1_PodSpec {
 return {
   serviceAccountName: data?.serviceAccountName !== undefined ? data.serviceAccountName : '',
   topologySpreadConstraints: data?.topologySpreadConstraints !== undefined ? data.topologySpreadConstraints : [],
   subdomain: data?.subdomain !== undefined ? data.subdomain : '',
   dnsConfig: data?.dnsConfig !== undefined ? data.dnsConfig : createio_k8s_api_core_v1_PodDNSConfig(),
   ephemeralContainers: data?.ephemeralContainers !== undefined ? data.ephemeralContainers : [],
   hostUsers: data?.hostUsers !== undefined ? data.hostUsers : false,
   preemptionPolicy: data?.preemptionPolicy !== undefined ? data.preemptionPolicy : '',
   priorityClassName: data?.priorityClassName !== undefined ? data.priorityClassName : '',
   schedulerName: data?.schedulerName !== undefined ? data.schedulerName : '',
   automountServiceAccountToken: data?.automountServiceAccountToken !== undefined ? data.automountServiceAccountToken : false,
   hostIPC: data?.hostIPC !== undefined ? data.hostIPC : false,
   os: data?.os !== undefined ? data.os : createio_k8s_api_core_v1_PodOS(),
   resourceClaims: data?.resourceClaims !== undefined ? data.resourceClaims : [],
   resources: data?.resources !== undefined ? data.resources : createio_k8s_api_core_v1_ResourceRequirements(),
   tolerations: data?.tolerations !== undefined ? data.tolerations : [],
   dnsPolicy: data?.dnsPolicy !== undefined ? data.dnsPolicy : '',
   hostPID: data?.hostPID !== undefined ? data.hostPID : false,
   hostname: data?.hostname !== undefined ? data.hostname : '',
   priority: data?.priority !== undefined ? data.priority : 0,
   restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
   nodeSelector: data?.nodeSelector !== undefined ? data.nodeSelector : {},
   readinessGates: data?.readinessGates !== undefined ? data.readinessGates : [],
   runtimeClassName: data?.runtimeClassName !== undefined ? data.runtimeClassName : '',
   schedulingGates: data?.schedulingGates !== undefined ? data.schedulingGates : [],
   setHostnameAsFQDN: data?.setHostnameAsFQDN !== undefined ? data.setHostnameAsFQDN : false,
   securityContext: data?.securityContext !== undefined ? data.securityContext : createio_k8s_api_core_v1_PodSecurityContext(),
   terminationGracePeriodSeconds: data?.terminationGracePeriodSeconds !== undefined ? data.terminationGracePeriodSeconds : 0,
   activeDeadlineSeconds: data?.activeDeadlineSeconds !== undefined ? data.activeDeadlineSeconds : 0,
   affinity: data?.affinity !== undefined ? data.affinity : createio_k8s_api_core_v1_Affinity(),
   hostAliases: data?.hostAliases !== undefined ? data.hostAliases : [],
   nodeName: data?.nodeName !== undefined ? data.nodeName : '',
   overhead: data?.overhead !== undefined ? data.overhead : {},
   enableServiceLinks: data?.enableServiceLinks !== undefined ? data.enableServiceLinks : false,
   initContainers: data?.initContainers !== undefined ? data.initContainers : [],
   shareProcessNamespace: data?.shareProcessNamespace !== undefined ? data.shareProcessNamespace : false,
   containers: data?.containers !== undefined ? data.containers : [],
   hostNetwork: data?.hostNetwork !== undefined ? data.hostNetwork : false,
   imagePullSecrets: data?.imagePullSecrets !== undefined ? data.imagePullSecrets : [],
   serviceAccount: data?.serviceAccount !== undefined ? data.serviceAccount : '',
   volumes: data?.volumes !== undefined ? data.volumes : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_Affinity, createio_k8s_api_core_v1_Affinity } from '../affinity/io_k8s_api_core_v1_Affinity';
import { io_k8s_api_core_v1_Container, createio_k8s_api_core_v1_Container } from '../io.k8s.api.core.v1.Container';
import { io_k8s_api_core_v1_EphemeralContainer, createio_k8s_api_core_v1_EphemeralContainer } from '../io.k8s.api.core.v1.EphemeralContainer';
import { io_k8s_api_core_v1_HostAlias, createio_k8s_api_core_v1_HostAlias } from '../io.k8s.api.core.v1.HostAlias';
import { io_k8s_api_core_v1_LocalObjectReference, createio_k8s_api_core_v1_LocalObjectReference } from '../io.k8s.api.core.v1.LocalObjectReference';
import { io_k8s_api_core_v1_PodDNSConfig, createio_k8s_api_core_v1_PodDNSConfig } from '../poddnsconfig/io_k8s_api_core_v1_PodDNSConfig';
import { io_k8s_api_core_v1_PodOS, createio_k8s_api_core_v1_PodOS } from '../podo/io_k8s_api_core_v1_PodOS';
import { io_k8s_api_core_v1_PodReadinessGate, createio_k8s_api_core_v1_PodReadinessGate } from '../io.k8s.api.core.v1.PodReadinessGate';
import { io_k8s_api_core_v1_PodResourceClaim, createio_k8s_api_core_v1_PodResourceClaim } from '../io.k8s.api.core.v1.PodResourceClaim';
import { io_k8s_api_core_v1_PodSchedulingGate, createio_k8s_api_core_v1_PodSchedulingGate } from '../io.k8s.api.core.v1.PodSchedulingGate';
import { io_k8s_api_core_v1_PodSecurityContext, createio_k8s_api_core_v1_PodSecurityContext } from '../podsecuritycontext/io_k8s_api_core_v1_PodSecurityContext';
import { io_k8s_api_core_v1_ResourceRequirements, createio_k8s_api_core_v1_ResourceRequirements } from '../resourcerequirement/io_k8s_api_core_v1_ResourceRequirements';
import { io_k8s_api_core_v1_Toleration, createio_k8s_api_core_v1_Toleration } from '../io.k8s.api.core.v1.Toleration';
import { io_k8s_api_core_v1_TopologySpreadConstraint, createio_k8s_api_core_v1_TopologySpreadConstraint } from '../io.k8s.api.core.v1.TopologySpreadConstraint';
import { io_k8s_api_core_v1_Volume, createio_k8s_api_core_v1_Volume } from '../io.k8s.api.core.v1.Volume';
