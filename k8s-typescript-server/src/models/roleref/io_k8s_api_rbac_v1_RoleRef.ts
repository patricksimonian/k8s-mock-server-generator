/**
* RoleRef contains information that points to the role being used
* @resourceType roleref
* @kind Roleref
*/
export interface io_k8s_api_rbac_v1_RoleRef {
/**
* Name is the name of resource being referenced
* @required
*/
name: string;
/**
* APIGroup is the group for the resource being referenced
* @required
*/
apiGroup: string;
/**
* Kind is the type of resource being referenced
* @required
*/
kind: string;
}

/**
* Create a new Roleref with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_RoleRef instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_RoleRef(data?: Partial<io_k8s_api_rbac_v1_RoleRef>): io_k8s_api_rbac_v1_RoleRef {
 return {
   name: data?.name !== undefined ? data.name : '',
   apiGroup: data?.apiGroup !== undefined ? data.apiGroup : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
