/**
* NodeSystemInfo is a set of ids/uuids to uniquely identify the node.
* @resourceType nodesysteminfo
* @kind Nodesysteminfo
*/
export interface io_k8s_api_core_v1_NodeSystemInfo {
/**
* MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html
* @required
*/
machineID: string;
/**
* The Operating System reported by the node
* @required
*/
operatingSystem: string;
/**
* The Architecture reported by the node
* @required
*/
architecture: string;
/**
* Boot ID reported by the node.
* @required
*/
bootID: string;
/**
* ContainerRuntime Version reported by the node through runtime remote API (e.g. containerd://1.4.2).
* @required
*/
containerRuntimeVersion: string;
/**
* Kernel Version reported by the node from 'uname -r' (e.g. 3.16.0-0.bpo.4-amd64).
* @required
*/
kernelVersion: string;
/**
* Deprecated: KubeProxy Version reported by the node.
* @required
*/
kubeProxyVersion: string;
/**
* Kubelet Version reported by the node.
* @required
*/
kubeletVersion: string;
/**
* OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)).
* @required
*/
osImage: string;
/**
* SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/rhsm/uuid
* @required
*/
systemUUID: string;
}

/**
* Create a new Nodesysteminfo with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NodeSystemInfo instance with defaults applied
*/
export function createio_k8s_api_core_v1_NodeSystemInfo(data?: Partial<io_k8s_api_core_v1_NodeSystemInfo>): io_k8s_api_core_v1_NodeSystemInfo {
 return {
   machineID: data?.machineID !== undefined ? data.machineID : '',
   operatingSystem: data?.operatingSystem !== undefined ? data.operatingSystem : '',
   architecture: data?.architecture !== undefined ? data.architecture : '',
   bootID: data?.bootID !== undefined ? data.bootID : '',
   containerRuntimeVersion: data?.containerRuntimeVersion !== undefined ? data.containerRuntimeVersion : '',
   kernelVersion: data?.kernelVersion !== undefined ? data.kernelVersion : '',
   kubeProxyVersion: data?.kubeProxyVersion !== undefined ? data.kubeProxyVersion : '',
   kubeletVersion: data?.kubeletVersion !== undefined ? data.kubeletVersion : '',
   osImage: data?.osImage !== undefined ? data.osImage : '',
   systemUUID: data?.systemUUID !== undefined ? data.systemUUID : '',
 };
}
