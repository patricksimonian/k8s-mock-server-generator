/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @resourceType probe
* @kind Probe
*/
export interface io_k8s_api_core_v1_Probe {
/**
* Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
*/
successThreshold?: number;
/**
* TCPSocketAction describes an action based on opening a socket
* @isObject
*/
tcpSocket?: { host?: string; port: string };
/**
* Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
*/
terminationGracePeriodSeconds?: number;
/**
* Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
*/
initialDelaySeconds?: number;
/**
* Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
*/
failureThreshold?: number;
/**
* GRPCAction specifies an action involving a GRPC service.
* @isObject
*/
grpc?: { port: number; service?: string };
/**
* HTTPGetAction describes an action based on HTTP Get requests.
* @isObject
*/
httpGet?: { httpHeaders?: Array<{ name: string; value: string }>; path?: string; port: string; scheme?: 'HTTP' | 'HTTPS'; host?: string };
/**
* How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
*/
periodSeconds?: number;
/**
* Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
*/
timeoutSeconds?: number;
/**
* ExecAction describes a "run in container" action.
* @isObject
*/
exec?: { command?: string[] };
}

/**
* Create a new Probe with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Probe instance with defaults applied
*/
export function createio_k8s_api_core_v1_Probe(data?: Partial<io_k8s_api_core_v1_Probe>): io_k8s_api_core_v1_Probe {
 return {
   successThreshold: data?.successThreshold !== undefined ? data.successThreshold : 0,
   tcpSocket: data?.tcpSocket !== undefined ? data.tcpSocket : { port: '' },
   terminationGracePeriodSeconds: data?.terminationGracePeriodSeconds !== undefined ? data.terminationGracePeriodSeconds : 0,
   initialDelaySeconds: data?.initialDelaySeconds !== undefined ? data.initialDelaySeconds : 0,
   failureThreshold: data?.failureThreshold !== undefined ? data.failureThreshold : 0,
   grpc: data?.grpc !== undefined ? data.grpc : { port: 0 },
   httpGet: data?.httpGet !== undefined ? data.httpGet : { port: '' },
   periodSeconds: data?.periodSeconds !== undefined ? data.periodSeconds : 0,
   timeoutSeconds: data?.timeoutSeconds !== undefined ? data.timeoutSeconds : 0,
   exec: data?.exec !== undefined ? data.exec : {},
 };
}
