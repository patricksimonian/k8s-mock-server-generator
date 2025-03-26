/**
* ResourceQuota sets aggregate quota restrictions enforced per namespace
* @resourceType resourcequotum
* @kind Resourcequotum
*/
export interface io_k8s_api_core_v1_ResourceQuota {
/**
* ResourceQuotaStatus defines the enforced hard limits and observed use.
* @isObject
*/
status?: { hard?: Record<string, any>; used?: Record<string, any> };
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
metadata?: { ownerReferences?: Array<{ controller?: boolean; kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean }>; selfLink?: string; uid?: string; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; resourceVersion?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; name?: string; namespace?: string; deletionTimestamp?: Date; generation?: number };
/**
* ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
* @isObject
*/
spec?: { hard?: Record<string, any>; scopeSelector?: { matchExpressions?: Array<{ operator: 'DoesNotExist' | 'Exists' | 'In' | 'NotIn'; scopeName: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'; values?: string[] }> }; scopes?: 'BestEffort' | 'CrossNamespacePodAffinity' | 'NotBestEffort' | 'NotTerminating' | 'PriorityClass' | 'Terminating'[] };
}

/**
* Create a new Resourcequotum with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ResourceQuota instance with defaults applied
*/
export function createio_k8s_api_core_v1_ResourceQuota(data?: Partial<io_k8s_api_core_v1_ResourceQuota>): io_k8s_api_core_v1_ResourceQuota {
 return {
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
 };
}
