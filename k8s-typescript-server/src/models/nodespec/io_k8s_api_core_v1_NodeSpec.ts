/**
* NodeSpec describes the attributes that a node is created with.
* @resourceType nodespec
* @kind Nodespec
*/
export interface io_k8s_api_core_v1_NodeSpec {
/**
* podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
* @isArray
*/
podCIDRs?: string[];
/**
* ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
*/
providerID?: string;
/**
* If specified, the node's taints.
* @isArray
*/
taints?: io_k8s_api_core_v1_Taint[];
/**
* Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
*/
unschedulable?: boolean;
/**
* Deprecated: Previously used to specify the source of the node's configuration for the DynamicKubeletConfig feature. This feature is removed.
* @references io.k8s.api.core.v1.NodeConfigSource
*/
configSource?: io_k8s_api_core_v1_NodeConfigSource;
/**
* Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
*/
externalID?: string;
/**
* PodCIDR represents the pod IP range assigned to the node.
*/
podCIDR?: string;
}

/**
* Create a new Nodespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeSpec(data?: Partial<io_k8s_api_core_v1_NodeSpec>): io_k8s_api_core_v1_NodeSpec {
 return {
   podCIDRs: data?.podCIDRs !== undefined ? data.podCIDRs : [],
   providerID: data?.providerID !== undefined ? data.providerID : '',
   taints: data?.taints !== undefined ? data.taints : [],
   unschedulable: data?.unschedulable !== undefined ? data.unschedulable : false,
   configSource: data?.configSource !== undefined ? data.configSource : createio_k8s_api_core_v1_NodeConfigSource(),
   externalID: data?.externalID !== undefined ? data.externalID : '',
   podCIDR: data?.podCIDR !== undefined ? data.podCIDR : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeConfigSource, createio_k8s_api_core_v1_NodeConfigSource } from '../nodeconfigsource/io_k8s_api_core_v1_NodeConfigSource';
import { io_k8s_api_core_v1_Taint, createio_k8s_api_core_v1_Taint } from '../io.k8s.api.core.v1.Taint';
