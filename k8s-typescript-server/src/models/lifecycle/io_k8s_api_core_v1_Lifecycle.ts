/**
* Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
* @resourceType lifecycle
* @kind Lifecycle
*/
export interface io_k8s_api_core_v1_Lifecycle {
/**
* PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
* @references io.k8s.api.core.v1.LifecycleHandler
*/
postStart?: io_k8s_api_core_v1_LifecycleHandler;
/**
* PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
* @references io.k8s.api.core.v1.LifecycleHandler
*/
preStop?: io_k8s_api_core_v1_LifecycleHandler;
}

/**
* Create a new Lifecycle with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Lifecycle instance with defaults applied
*/
export function createio_k8s_api_core_v1_Lifecycle(data?: Partial<io_k8s_api_core_v1_Lifecycle>): io_k8s_api_core_v1_Lifecycle {
 return {
   postStart: data?.postStart !== undefined ? data.postStart : createio_k8s_api_core_v1_LifecycleHandler(),
   preStop: data?.preStop !== undefined ? data.preStop : createio_k8s_api_core_v1_LifecycleHandler(),
 };
}
// Required imports
import { io_k8s_api_core_v1_LifecycleHandler, createio_k8s_api_core_v1_LifecycleHandler } from '../lifecyclehandler/io_k8s_api_core_v1_LifecycleHandler';
