/**
* ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
* @resourceType clusterrole
* @kind Clusterrole
*/
export interface io_k8s_api_rbac_v1_ClusterRole {
/**
* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
* @isObject
*/
aggregationRule?: { clusterRoleSelectors?: Array<{ matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generateName?: string; labels?: Record<string, any>; name?: string; ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; finalizers?: string[]; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; namespace?: string; uid?: string; deletionTimestamp?: Date; generation?: number; selfLink?: string; resourceVersion?: string };
/**
* Rules holds all the PolicyRules for this ClusterRole
* @isArray
*/
rules?: Array<{ apiGroups?: string[]; nonResourceURLs?: string[]; resourceNames?: string[]; resources?: string[]; verbs: string[] }>;
}

/**
* Create a new Clusterrole with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_ClusterRole instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_ClusterRole(data?: Partial<io_k8s_api_rbac_v1_ClusterRole>): io_k8s_api_rbac_v1_ClusterRole {
 return {
   aggregationRule: data?.aggregationRule !== undefined ? data.aggregationRule : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   rules: data?.rules !== undefined ? data.rules : [],
 };
}
