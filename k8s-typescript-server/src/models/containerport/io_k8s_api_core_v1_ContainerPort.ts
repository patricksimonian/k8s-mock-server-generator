/**
* ContainerPort represents a network port in a single container.
* @resourceType containerport
* @kind Containerport
*/
export interface io_k8s_api_core_v1_ContainerPort {
/**
* Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
* @required
*/
containerPort: number;
/**
* What host IP to bind the external port to.
*/
hostIP?: string;
/**
* Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
*/
hostPort?: number;
/**
* If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
*/
name?: string;
/**
* Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".

Possible enum values:
 - `"SCTP"` is the SCTP protocol.
 - `"TCP"` is the TCP protocol.
 - `"UDP"` is the UDP protocol.
*/
protocol?: 'SCTP' | 'TCP' | 'UDP';
}

/**
* Create a new Containerport with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ContainerPort instance with defaults applied
*/
export function createio_k8s_api_core_v1_ContainerPort(data?: Partial<io_k8s_api_core_v1_ContainerPort>): io_k8s_api_core_v1_ContainerPort {
 return {
   containerPort: data?.containerPort !== undefined ? data.containerPort : 0,
   hostIP: data?.hostIP !== undefined ? data.hostIP : '',
   hostPort: data?.hostPort !== undefined ? data.hostPort : 0,
   name: data?.name !== undefined ? data.name : '',
   protocol: data?.protocol !== undefined ? data.protocol : '',
 };
}
