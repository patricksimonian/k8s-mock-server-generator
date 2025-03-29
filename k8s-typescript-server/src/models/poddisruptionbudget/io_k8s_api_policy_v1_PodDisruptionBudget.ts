/**
* PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
* @resourceType poddisruptionbudget
* @kind Poddisruptionbudget
*/
export interface io_k8s_api_policy_v1_PodDisruptionBudget {
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* Specification of the desired behavior of the PodDisruptionBudget.
* @references io.k8s.api.policy.v1.PodDisruptionBudgetSpec
*/
spec?: io_k8s_api_policy_v1_PodDisruptionBudgetSpec;
/**
* Most recently observed status of the PodDisruptionBudget.
* @references io.k8s.api.policy.v1.PodDisruptionBudgetStatus
*/
status?: io_k8s_api_policy_v1_PodDisruptionBudgetStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Poddisruptionbudget with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_PodDisruptionBudget instance with defaults applied
*/
export function createio_k8s_api_policy_v1_PodDisruptionBudget(data?: Partial<io_k8s_api_policy_v1_PodDisruptionBudget>): io_k8s_api_policy_v1_PodDisruptionBudget {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_policy_v1_PodDisruptionBudgetSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_policy_v1_PodDisruptionBudgetStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_policy_v1_PodDisruptionBudgetSpec, createio_k8s_api_policy_v1_PodDisruptionBudgetSpec } from '../poddisruptionbudgetspec/io_k8s_api_policy_v1_PodDisruptionBudgetSpec';
import { io_k8s_api_policy_v1_PodDisruptionBudgetStatus, createio_k8s_api_policy_v1_PodDisruptionBudgetStatus } from '../poddisruptionbudgetstatus/io_k8s_api_policy_v1_PodDisruptionBudgetStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
