/**
* NodeSpec describes the attributes that a node is created with.
* @resourceType nodespec
* @kind Nodespec
*/
export interface io_k8s_api_core_v1_NodeSpec {
/**
* If specified, the node's taints.
* @isArray
*/
taints?: Array<{ effect: 'NoExecute' | 'NoSchedule' | 'PreferNoSchedule'; key: string; timeAdded?: Date; value?: string }>;
/**
* Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
*/
unschedulable?: boolean;
/**
* NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
* @isObject
*/
configSource?: { configMap?: { kubeletConfigKey: string; name: string; namespace: string; resourceVersion?: string; uid?: string } };
/**
* Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
*/
externalID?: string;
/**
* PodCIDR represents the pod IP range assigned to the node.
*/
podCIDR?: string;
/**
* podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
* @isArray
*/
podCIDRs?: string[];
/**
* ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
*/
providerID?: string;
}

/**
* Create a new Nodespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeSpec(data?: Partial<io_k8s_api_core_v1_NodeSpec>): io_k8s_api_core_v1_NodeSpec {
 return {
   taints: data?.taints !== undefined ? data.taints : [],
   unschedulable: data?.unschedulable !== undefined ? data.unschedulable : false,
   configSource: data?.configSource !== undefined ? data.configSource : {},
   externalID: data?.externalID !== undefined ? data.externalID : '',
   podCIDR: data?.podCIDR !== undefined ? data.podCIDR : '',
   podCIDRs: data?.podCIDRs !== undefined ? data.podCIDRs : [],
   providerID: data?.providerID !== undefined ? data.providerID : '',
 };
}
