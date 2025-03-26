/**
* LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
* @resourceType lifecyclehandler
* @kind Lifecyclehandler
*/
export interface io_k8s_api_core_v1_LifecycleHandler {
/**
* HTTPGet specifies an HTTP GET request to perform.
* @references io.k8s.api.core.v1.HTTPGetAction
*/
httpGet?: io_k8s_api_core_v1_HTTPGetAction;
/**
* Sleep represents a duration that the container should sleep.
* @references io.k8s.api.core.v1.SleepAction
*/
sleep?: io_k8s_api_core_v1_SleepAction;
/**
* Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for backward compatibility. There is no validation of this field and lifecycle hooks will fail at runtime when it is specified.
* @references io.k8s.api.core.v1.TCPSocketAction
*/
tcpSocket?: io_k8s_api_core_v1_TCPSocketAction;
/**
* Exec specifies a command to execute in the container.
* @references io.k8s.api.core.v1.ExecAction
*/
exec?: io_k8s_api_core_v1_ExecAction;
}

/**
* Create a new Lifecyclehandler with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LifecycleHandler instance with defaults applied
*/
export function createio_k8s_api_core_v1_LifecycleHandler(data?: Partial<io_k8s_api_core_v1_LifecycleHandler>): io_k8s_api_core_v1_LifecycleHandler {
 return {
   httpGet: data?.httpGet !== undefined ? data.httpGet : createio_k8s_api_core_v1_HTTPGetAction(),
   sleep: data?.sleep !== undefined ? data.sleep : createio_k8s_api_core_v1_SleepAction(),
   tcpSocket: data?.tcpSocket !== undefined ? data.tcpSocket : createio_k8s_api_core_v1_TCPSocketAction(),
   exec: data?.exec !== undefined ? data.exec : createio_k8s_api_core_v1_ExecAction(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ExecAction, createio_k8s_api_core_v1_ExecAction } from '../execaction/io_k8s_api_core_v1_ExecAction';
import { io_k8s_api_core_v1_HTTPGetAction, createio_k8s_api_core_v1_HTTPGetAction } from '../httpgetaction/io_k8s_api_core_v1_HTTPGetAction';
import { io_k8s_api_core_v1_SleepAction, createio_k8s_api_core_v1_SleepAction } from '../sleepaction/io_k8s_api_core_v1_SleepAction';
import { io_k8s_api_core_v1_TCPSocketAction, createio_k8s_api_core_v1_TCPSocketAction } from '../tcpsocketaction/io_k8s_api_core_v1_TCPSocketAction';
