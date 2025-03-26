/**
* CSINodeDriver holds information about the specification of one CSI driver installed on a node
* @resourceType csinodedriver
* @kind Csinodedriver
*/
export interface io_k8s_api_storage_v1_CSINodeDriver {
/**
* VolumeNodeResources is a set of resource limits for scheduling of volumes.
* @isObject
*/
allocatable?: { count?: number };
/**
* name represents the name of the CSI driver that this object refers to. This MUST be the same name returned by the CSI GetPluginName() call for that driver.
* @required
*/
name: string;
/**
* nodeID of the node from the driver point of view. This field enables Kubernetes to communicate with storage systems that do not share the same nomenclature for nodes. For example, Kubernetes may refer to a given node as "node1", but the storage system may refer to the same node as "nodeA". When Kubernetes issues a command to the storage system to attach a volume to a specific node, it can use this field to refer to the node name using the ID that the storage system will understand, e.g. "nodeA" instead of "node1". This field is required.
* @required
*/
nodeID: string;
/**
* topologyKeys is the list of keys supported by the driver. When a driver is initialized on a cluster, it provides a set of topology keys that it understands (e.g. "company.com/zone", "company.com/region"). When a driver is initialized on a node, it provides the same topology keys along with values. Kubelet will expose these topology keys as labels on its own node object. When Kubernetes does topology aware provisioning, it can use this list to determine which labels it should retrieve from the node object and pass back to the driver. It is possible for different nodes to use different topology keys. This can be empty if driver does not support topology.
* @isArray
*/
topologyKeys?: string[];
}

/**
* Create a new Csinodedriver with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_CSINodeDriver instance with defaults applied
*/
export function createio_k8s_api_storage_v1_CSINodeDriver(data?: Partial<io_k8s_api_storage_v1_CSINodeDriver>): io_k8s_api_storage_v1_CSINodeDriver {
 return {
   allocatable: data?.allocatable !== undefined ? data.allocatable : {},
   name: data?.name !== undefined ? data.name : '',
   nodeID: data?.nodeID !== undefined ? data.nodeID : '',
   topologyKeys: data?.topologyKeys !== undefined ? data.topologyKeys : [],
 };
}
