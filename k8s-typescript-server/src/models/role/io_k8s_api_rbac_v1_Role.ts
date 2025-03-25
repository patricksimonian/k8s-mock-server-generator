/**
* Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
* @resourceType role
* @kind Role
*/
export interface io_k8s_api_rbac_v1_Role {
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
metadata?: { name?: string; generateName?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; deletionGracePeriodSeconds?: number; finalizers?: string[]; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; creationTimestamp?: Date; deletionTimestamp?: Date; labels?: Record<string, any>; namespace?: string; resourceVersion?: string; selfLink?: string; annotations?: Record<string, any> };
/**
* Rules holds all the PolicyRules for this Role
* @isArray
*/
rules?: Array<{ apiGroups?: string[]; nonResourceURLs?: string[]; resourceNames?: string[]; resources?: string[]; verbs: string[] }>;
}

/**
* Create a new Role with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_Role instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_Role(data?: Partial<io_k8s_api_rbac_v1_Role>): io_k8s_api_rbac_v1_Role {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   rules: data?.rules !== undefined ? data.rules : [],
 };
}
