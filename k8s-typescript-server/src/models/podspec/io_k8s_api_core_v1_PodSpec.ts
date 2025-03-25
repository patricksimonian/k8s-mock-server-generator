/**
* PodSpec is a description of a pod.
* @resourceType podspec
* @kind Podspec
*/
export interface io_k8s_api_core_v1_PodSpec {
/**
* Overhead represents the resource overhead associated with running a pod for a given RuntimeClass. This field will be autopopulated at admission time by the RuntimeClass admission controller. If the RuntimeClass admission controller is enabled, overhead must not be set in Pod create requests. The RuntimeClass admission controller will reject Pod create requests which have the overhead already set. If RuntimeClass is configured and selected in the PodSpec, Overhead will be set to the value defined in the corresponding RuntimeClass, otherwise it will remain unset and treated as zero. More info: https://git.k8s.io/enhancements/keps/sig-node/688-pod-overhead/README.md
*/
overhead?: Record<string, any>;
/**
* RuntimeClassName refers to a RuntimeClass object in the node.k8s.io group, which should be used to run this pod.  If no RuntimeClass resource matches the named class, the pod will not be run. If unset or empty, the "legacy" RuntimeClass will be used, which is an implicit class with an empty definition that uses the default runtime handler. More info: https://git.k8s.io/enhancements/keps/sig-node/585-runtime-class
*/
runtimeClassName?: string;
/**
* If specified, the pod's tolerations.
* @isArray
*/
tolerations?: Array<{ effect?: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key?: string; operator?: 'Equal' | 'Exists'; tolerationSeconds?: number; value?: string }>;
/**
* Use the host's pid namespace. Optional: Default to false.
*/
hostPID?: boolean;
/**
* Specifies the hostname of the Pod If not specified, the pod's hostname will be set to a system-defined value.
*/
hostname?: string;
/**
* PodOS defines the OS parameters of a pod.
* @isObject
*/
os?: { name: string };
/**
* The priority value. Various system components use this field to find the priority of the pod. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority.
*/
priority?: number;
/**
* HostAliases is an optional list of hosts and IPs that will be injected into the pod's hosts file if specified.
* @isArray
*/
hostAliases?: Array<{ hostnames?: string[]; ip: string }>;
/**
* If specified, all readiness gates will be evaluated for pod readiness. A pod is ready when all its containers are ready AND all conditions specified in the readiness gates have status equal to "True" More info: https://git.k8s.io/enhancements/keps/sig-network/580-pod-readiness-gates
* @isArray
*/
readinessGates?: Array<{ conditionType: string }>;
/**
* ResourceClaims defines which ResourceClaims must be allocated and reserved before the Pod is allowed to start. The resources will be made available to those containers which consume them by name.

This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.

This field is immutable.
* @isArray
*/
resourceClaims?: Array<{ name: string; resourceClaimName?: string; resourceClaimTemplateName?: string }>;
/**
* PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.
* @isObject
*/
securityContext?: { supplementalGroups?: number[]; fsGroupChangePolicy?: 'Always' | 'OnRootMismatch'; runAsGroup?: number; runAsUser?: number; seLinuxChangePolicy?: string; seLinuxOptions?: { level?: string; role?: string; type?: string; user?: string }; seccompProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' }; supplementalGroupsPolicy?: 'Merge' | 'Strict'; sysctls?: Array<{ name: string; value: string }>; appArmorProfile?: { localhostProfile?: string; type: 'Localhost' | 'RuntimeDefault' | 'Unconfined' }; fsGroup?: number; runAsNonRoot?: boolean; windowsOptions?: { hostProcess?: boolean; runAsUserName?: string; gmsaCredentialSpec?: string; gmsaCredentialSpecName?: string } };
/**
* Affinity is a group of affinity scheduling rules.
* @isObject
*/
affinity?: { nodeAffinity?: { requiredDuringSchedulingIgnoredDuringExecution?: { nodeSelectorTerms: Array<{ matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }> }; preferredDuringSchedulingIgnoredDuringExecution?: Array<{ preference: { matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }; weight: number }> }; podAffinity?: { preferredDuringSchedulingIgnoredDuringExecution?: Array<{ podAffinityTerm: { namespaces?: string[]; topologyKey: string; labelSelector?: { matchExpressions?: Array<{ values?: string[]; key: string; operator: string }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> } }; weight: number }>; requiredDuringSchedulingIgnoredDuringExecution?: Array<{ topologyKey: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[] }> }; podAntiAffinity?: { requiredDuringSchedulingIgnoredDuringExecution?: Array<{ labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string }>; preferredDuringSchedulingIgnoredDuringExecution?: Array<{ podAffinityTerm: { matchLabelKeys?: string[]; mismatchLabelKeys?: string[]; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; namespaces?: string[]; topologyKey: string; labelSelector?: { matchExpressions?: Array<{ operator: string; values?: string[]; key: string }>; matchLabels?: Record<string, any> } }; weight: number }> } };
/**
* EnableServiceLinks indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links. Optional: Defaults to true.
*/
enableServiceLinks?: boolean;
/**
* Use the host's user namespace. Optional: Default to true. If set to true or not present, the pod will be run in the host user namespace, useful for when the pod needs a feature only available to the host user namespace, such as loading a kernel module with CAP_SYS_MODULE. When set to false, a new userns is created for the pod. Setting false is useful for mitigating container breakout vulnerabilities even allowing users to run their containers as root without actually having root privileges on the host. This field is alpha-level and is only honored by servers that enable the UserNamespacesSupport feature.
*/
hostUsers?: boolean;
/**
* If specified, indicates the pod's priority. "system-node-critical" and "system-cluster-critical" are two special keywords which indicate the highest priorities with the former being the highest priority. Any other name must be defined by creating a PriorityClass object with that name. If not specified, the pod priority will be default or zero if there is no default.
*/
priorityClassName?: string;
/**
* ResourceRequirements describes the compute resource requirements.
* @isObject
*/
resources?: { claims?: Array<{ name: string; request?: string }>; limits?: Record<string, any>; requests?: Record<string, any> };
/**
* If specified, the pod will be dispatched by specified scheduler. If not specified, the pod will be dispatched by default scheduler.
*/
schedulerName?: string;
/**
* List of containers belonging to the pod. Containers cannot currently be added or removed. There must be at least one container in a Pod. Cannot be updated.
* @required
* @isArray
*/
containers: Array<Record<string, any>>;
/**
* List of ephemeral containers run in this pod. Ephemeral containers may be run in an existing pod to perform user-initiated actions such as debugging. This list cannot be specified when creating a pod, and it cannot be modified by updating the pod spec. In order to add an ephemeral container to an existing pod, use the pod's ephemeralcontainers subresource.
* @isArray
*/
ephemeralContainers?: Array<Record<string, any>>;
/**
* Host networking requested for this pod. Use the host's network namespace. If this option is set, the ports that will be used must be specified. Default to false.
*/
hostNetwork?: boolean;
/**
* List of initialization containers belonging to the pod. Init containers are executed in order prior to containers being started. If any init container fails, the pod is considered to have failed and is handled according to its restartPolicy. The name for an init container or normal container must be unique among all containers. Init containers may not have Lifecycle actions, Readiness probes, Liveness probes, or Startup probes. The resourceRequirements of an init container are taken into account during scheduling by finding the highest request/limit for each resource type, and then using the max of of that value or the sum of the normal containers. Limits are applied to init containers in a similar fashion. Init containers cannot currently be added or removed. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/init-containers/
* @isArray
*/
initContainers?: Array<Record<string, any>>;
/**
* List of volumes that can be mounted by containers belonging to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes
* @isArray
*/
volumes?: Array<Record<string, any>>;
/**
* Optional duration in seconds the pod may be active on the node relative to StartTime before the system will actively try to mark it failed and kill associated containers. Value must be a positive integer.
*/
activeDeadlineSeconds?: number;
/**
* AutomountServiceAccountToken indicates whether a service account token should be automatically mounted.
*/
automountServiceAccountToken?: boolean;
/**
* Use the host's ipc namespace. Optional: Default to false.
*/
hostIPC?: boolean;
/**
* NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
*/
nodeSelector?: Record<string, any>;
/**
* If true the pod's hostname will be configured as the pod's FQDN, rather than the leaf name (the default). In Linux containers, this means setting the FQDN in the hostname field of the kernel (the nodename field of struct utsname). In Windows containers, this means setting the registry value of hostname for the registry key HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters to FQDN. If a pod does not have FQDN, this has no effect. Default to false.
*/
setHostnameAsFQDN?: boolean;
/**
* If specified, the fully qualified Pod hostname will be "<hostname>.<subdomain>.<pod namespace>.svc.<cluster domain>". If not specified, the pod will not have a domainname at all.
*/
subdomain?: string;
/**
* ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec. If specified, these secrets will be passed to individual puller implementations for them to use. More info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod
* @isArray
*/
imagePullSecrets?: Array<{ name?: string }>;
/**
* SchedulingGates is an opaque list of values that if specified will block scheduling the pod. If schedulingGates is not empty, the pod will stay in the SchedulingGated state and the scheduler will not attempt to schedule the pod.

SchedulingGates can only be set at pod creation time, and be removed only afterwards.
* @isArray
*/
schedulingGates?: Array<{ name: string }>;
/**
* DeprecatedServiceAccount is a deprecated alias for ServiceAccountName. Deprecated: Use serviceAccountName instead.
*/
serviceAccount?: string;
/**
* Share a single process namespace between all of the containers in a pod. When this is set containers will be able to view and signal processes from other containers in the same pod, and the first process in each container will not be assigned PID 1. HostPID and ShareProcessNamespace cannot both be set. Optional: Default to false.
*/
shareProcessNamespace?: boolean;
/**
* Optional duration in seconds the pod needs to terminate gracefully. May be decreased in delete request. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds.
*/
terminationGracePeriodSeconds?: number;
/**
* TopologySpreadConstraints describes how a group of pods ought to spread across topology domains. Scheduler will schedule pods in a way which abides by the constraints. All topologySpreadConstraints are ANDed.
* @isArray
*/
topologySpreadConstraints?: Array<{ whenUnsatisfiable: 'DoNotSchedule' | 'ScheduleAnyway'; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; matchLabelKeys?: string[]; maxSkew: number; minDomains?: number; nodeAffinityPolicy?: 'Honor' | 'Ignore'; nodeTaintsPolicy?: 'Honor' | 'Ignore'; topologyKey: string }>;
/**
* PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.
* @isObject
*/
dnsConfig?: { searches?: string[]; nameservers?: string[]; options?: Array<{ name?: string; value?: string }> };
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
* NodeName indicates in which node this pod is scheduled. If empty, this pod is a candidate for scheduling by the scheduler defined in schedulerName. Once this field is set, the kubelet for this node becomes responsible for the lifecycle of this pod. This field should not be used to express a desire for the pod to be scheduled on a specific node. https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodename
*/
nodeName?: string;
/**
* PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.

Possible enum values:
 - `"Never"` means that pod never preempts other pods with lower priority.
 - `"PreemptLowerPriority"` means that pod can preempt other pods with lower priority.
*/
preemptionPolicy?: 'Never' | 'PreemptLowerPriority';
/**
* Restart policy for all containers within the pod. One of Always, OnFailure, Never. In some contexts, only a subset of those values may be permitted. Default to Always. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy

Possible enum values:
 - `"Always"`
 - `"Never"`
 - `"OnFailure"`
*/
restartPolicy?: 'Always' | 'Never' | 'OnFailure';
/**
* ServiceAccountName is the name of the ServiceAccount to use to run this pod. More info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/
*/
serviceAccountName?: string;
}

/**
* Create a new Podspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodSpec(data?: Partial<io_k8s_api_core_v1_PodSpec>): io_k8s_api_core_v1_PodSpec {
 return {
   overhead: data?.overhead !== undefined ? data.overhead : {},
   runtimeClassName: data?.runtimeClassName !== undefined ? data.runtimeClassName : '',
   tolerations: data?.tolerations !== undefined ? data.tolerations : [],
   hostPID: data?.hostPID !== undefined ? data.hostPID : false,
   hostname: data?.hostname !== undefined ? data.hostname : '',
   os: data?.os !== undefined ? data.os : { name: '' },
   priority: data?.priority !== undefined ? data.priority : 0,
   hostAliases: data?.hostAliases !== undefined ? data.hostAliases : [],
   readinessGates: data?.readinessGates !== undefined ? data.readinessGates : [],
   resourceClaims: data?.resourceClaims !== undefined ? data.resourceClaims : [],
   securityContext: data?.securityContext !== undefined ? data.securityContext : {},
   affinity: data?.affinity !== undefined ? data.affinity : {},
   enableServiceLinks: data?.enableServiceLinks !== undefined ? data.enableServiceLinks : false,
   hostUsers: data?.hostUsers !== undefined ? data.hostUsers : false,
   priorityClassName: data?.priorityClassName !== undefined ? data.priorityClassName : '',
   resources: data?.resources !== undefined ? data.resources : {},
   schedulerName: data?.schedulerName !== undefined ? data.schedulerName : '',
   containers: data?.containers !== undefined ? data.containers : [],
   ephemeralContainers: data?.ephemeralContainers !== undefined ? data.ephemeralContainers : [],
   hostNetwork: data?.hostNetwork !== undefined ? data.hostNetwork : false,
   initContainers: data?.initContainers !== undefined ? data.initContainers : [],
   volumes: data?.volumes !== undefined ? data.volumes : [],
   activeDeadlineSeconds: data?.activeDeadlineSeconds !== undefined ? data.activeDeadlineSeconds : 0,
   automountServiceAccountToken: data?.automountServiceAccountToken !== undefined ? data.automountServiceAccountToken : false,
   hostIPC: data?.hostIPC !== undefined ? data.hostIPC : false,
   nodeSelector: data?.nodeSelector !== undefined ? data.nodeSelector : {},
   setHostnameAsFQDN: data?.setHostnameAsFQDN !== undefined ? data.setHostnameAsFQDN : false,
   subdomain: data?.subdomain !== undefined ? data.subdomain : '',
   imagePullSecrets: data?.imagePullSecrets !== undefined ? data.imagePullSecrets : [],
   schedulingGates: data?.schedulingGates !== undefined ? data.schedulingGates : [],
   serviceAccount: data?.serviceAccount !== undefined ? data.serviceAccount : '',
   shareProcessNamespace: data?.shareProcessNamespace !== undefined ? data.shareProcessNamespace : false,
   terminationGracePeriodSeconds: data?.terminationGracePeriodSeconds !== undefined ? data.terminationGracePeriodSeconds : 0,
   topologySpreadConstraints: data?.topologySpreadConstraints !== undefined ? data.topologySpreadConstraints : [],
   dnsConfig: data?.dnsConfig !== undefined ? data.dnsConfig : {},
   dnsPolicy: data?.dnsPolicy !== undefined ? data.dnsPolicy : '',
   nodeName: data?.nodeName !== undefined ? data.nodeName : '',
   preemptionPolicy: data?.preemptionPolicy !== undefined ? data.preemptionPolicy : '',
   restartPolicy: data?.restartPolicy !== undefined ? data.restartPolicy : '',
   serviceAccountName: data?.serviceAccountName !== undefined ? data.serviceAccountName : '',
 };
}
