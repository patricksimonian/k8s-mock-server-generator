/**
* Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
* @resourceType role
* @kind Role
*/
export interface io_k8s_api_rbac_v1_Role {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { annotations?: Record<string, any>; uid?: string; finalizers?: string[]; generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; deletionTimestamp?: Date; namespace?: string; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; resourceVersion?: string; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generation?: number; name?: string };
/**
* Rules holds all the PolicyRules for this Role
* @isArray
*/
rules?: Array<{ resources?: string[]; verbs: string[]; apiGroups?: string[]; nonResourceURLs?: string[]; resourceNames?: string[] }>;
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
* Create a new Role with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_Role instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_Role(data?: Partial<io_k8s_api_rbac_v1_Role>): io_k8s_api_rbac_v1_Role {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   rules: data?.rules !== undefined ? data.rules : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
