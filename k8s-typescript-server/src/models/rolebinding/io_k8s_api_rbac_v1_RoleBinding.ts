/**
* RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
* @resourceType rolebinding
* @kind Rolebinding
*/
export interface io_k8s_api_rbac_v1_RoleBinding {
/**
* Subjects holds references to the objects the role applies to.
* @isArray
*/
subjects?: Array<{ apiGroup?: string; kind: string; name: string; namespace?: string }>;
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
metadata?: { deletionGracePeriodSeconds?: number; finalizers?: string[]; deletionTimestamp?: Date; generation?: number; labels?: Record<string, any>; selfLink?: string; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; name?: string; resourceVersion?: string };
/**
* RoleRef contains information that points to the role being used
* @required
* @isObject
*/
roleRef: { apiGroup: string; kind: string; name: string };
}

/**
* Create a new Rolebinding with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_RoleBinding instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_RoleBinding(data?: Partial<io_k8s_api_rbac_v1_RoleBinding>): io_k8s_api_rbac_v1_RoleBinding {
 return {
   subjects: data?.subjects !== undefined ? data.subjects : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   roleRef: data?.roleRef !== undefined ? data.roleRef : { apiGroup: '', kind: '', name: '' },
 };
}
