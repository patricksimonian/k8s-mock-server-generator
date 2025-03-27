/**
* NamespaceStatus is information about the current status of a Namespace.
* @resourceType namespacestatus
* @kind Namespacestatus
*/
export interface io_k8s_api_core_v1_NamespaceStatus {
/**
* Phase is the current lifecycle phase of the namespace. More info: https://kubernetes.io/docs/tasks/administer-cluster/namespaces/

Possible enum values:
 - `"Active"` means the namespace is available for use in the system
 - `"Terminating"` means the namespace is undergoing graceful termination
*/
phase?: 'Active' | 'Terminating';
/**
* Represents the latest available observations of a namespace's current state.
* @isArray
*/
conditions?: io_k8s_api_core_v1_NamespaceCondition[];
}

/**
* Create a new Namespacestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_NamespaceStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_NamespaceStatus(data?: Partial<io_k8s_api_core_v1_NamespaceStatus>): io_k8s_api_core_v1_NamespaceStatus {
 return {
   phase: data?.phase !== undefined ? data.phase : '',
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_NamespaceCondition, createio_k8s_api_core_v1_NamespaceCondition } from '../io.k8s.api.core.v1.NamespaceCondition';
