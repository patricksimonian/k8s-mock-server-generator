/**
* PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.
* @resourceType poddisruptionbudgetspec
* @kind Poddisruptionbudgetspec
*/
export interface io_k8s_api_policy_v1_PodDisruptionBudgetSpec {
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
*/
minAvailable?: string;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @isObject
*/
selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
/**
* UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type="Ready",status="True".

Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.

IfHealthyBudget policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.

AlwaysAllow policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.

Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.

This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).

Possible enum values:
 - `"AlwaysAllow"` policy means that all running pods (status.phase="Running"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.
 - `"IfHealthyBudget"` policy means that running pods (status.phase="Running"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.
*/
unhealthyPodEvictionPolicy?: 'AlwaysAllow' | 'IfHealthyBudget';
/**
* IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
*/
maxUnavailable?: string;
}

/**
* Create a new Poddisruptionbudgetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_policy_v1_PodDisruptionBudgetSpec instance with defaults applied
*/
export function createio_k8s_api_policy_v1_PodDisruptionBudgetSpec(data?: Partial<io_k8s_api_policy_v1_PodDisruptionBudgetSpec>): io_k8s_api_policy_v1_PodDisruptionBudgetSpec {
 return {
   minAvailable: data?.minAvailable !== undefined ? data.minAvailable : '',
   selector: data?.selector !== undefined ? data.selector : {},
   unhealthyPodEvictionPolicy: data?.unhealthyPodEvictionPolicy !== undefined ? data.unhealthyPodEvictionPolicy : '',
   maxUnavailable: data?.maxUnavailable !== undefined ? data.maxUnavailable : '',
 };
}
