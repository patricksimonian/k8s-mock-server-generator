/**
* Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
* @resourceType probe
* @kind Probe
*/
export interface io_k8s_api_core_v1_Probe {
/**
* How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
*/
periodSeconds?: number;
/**
* Exec specifies a command to execute in the container.
* @references io.k8s.api.core.v1.ExecAction
*/
exec?: io_k8s_api_core_v1_ExecAction;
/**
* Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
*/
failureThreshold?: number;
/**
* Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
*/
initialDelaySeconds?: number;
/**
* Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
*/
successThreshold?: number;
/**
* TCPSocket specifies a connection to a TCP port.
* @references io.k8s.api.core.v1.TCPSocketAction
*/
tcpSocket?: io_k8s_api_core_v1_TCPSocketAction;
/**
* Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
*/
terminationGracePeriodSeconds?: number;
/**
* Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
*/
timeoutSeconds?: number;
/**
* GRPC specifies a GRPC HealthCheckRequest.
* @references io.k8s.api.core.v1.GRPCAction
*/
grpc?: io_k8s_api_core_v1_GRPCAction;
/**
* HTTPGet specifies an HTTP GET request to perform.
* @references io.k8s.api.core.v1.HTTPGetAction
*/
httpGet?: io_k8s_api_core_v1_HTTPGetAction;
}

/**
* Create a new Probe with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Probe instance with defaults applied
*/
export function createio_k8s_api_core_v1_Probe(data?: Partial<io_k8s_api_core_v1_Probe>): io_k8s_api_core_v1_Probe {
 return {
   periodSeconds: data?.periodSeconds !== undefined ? data.periodSeconds : 0,
   exec: data?.exec !== undefined ? data.exec : createio_k8s_api_core_v1_ExecAction(),
   failureThreshold: data?.failureThreshold !== undefined ? data.failureThreshold : 0,
   initialDelaySeconds: data?.initialDelaySeconds !== undefined ? data.initialDelaySeconds : 0,
   successThreshold: data?.successThreshold !== undefined ? data.successThreshold : 0,
   tcpSocket: data?.tcpSocket !== undefined ? data.tcpSocket : createio_k8s_api_core_v1_TCPSocketAction(),
   terminationGracePeriodSeconds: data?.terminationGracePeriodSeconds !== undefined ? data.terminationGracePeriodSeconds : 0,
   timeoutSeconds: data?.timeoutSeconds !== undefined ? data.timeoutSeconds : 0,
   grpc: data?.grpc !== undefined ? data.grpc : createio_k8s_api_core_v1_GRPCAction(),
   httpGet: data?.httpGet !== undefined ? data.httpGet : createio_k8s_api_core_v1_HTTPGetAction(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ExecAction, createio_k8s_api_core_v1_ExecAction } from '../execaction/io_k8s_api_core_v1_ExecAction';
import { io_k8s_api_core_v1_GRPCAction, createio_k8s_api_core_v1_GRPCAction } from '../grpcaction/io_k8s_api_core_v1_GRPCAction';
import { io_k8s_api_core_v1_HTTPGetAction, createio_k8s_api_core_v1_HTTPGetAction } from '../httpgetaction/io_k8s_api_core_v1_HTTPGetAction';
import { io_k8s_api_core_v1_TCPSocketAction, createio_k8s_api_core_v1_TCPSocketAction } from '../tcpsocketaction/io_k8s_api_core_v1_TCPSocketAction';
