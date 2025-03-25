/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
* @resourceType customresourcedefinitionstatus
* @kind Customresourcedefinitionstatus
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus {
/**
* conditions indicate state for particular aspects of a CustomResourceDefinition
* @isArray
*/
conditions?: Array<{ type: string; lastTransitionTime?: Date; message?: string; reason?: string; status: string }>;
/**
* storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
* @isArray
*/
storedVersions?: string[];
/**
* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
* @isObject
*/
acceptedNames?: { categories?: string[]; kind: string; listKind?: string; plural: string; shortNames?: string[]; singular?: string };
}

/**
* Create a new Customresourcedefinitionstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus {
 return {
   conditions: data?.conditions !== undefined ? data.conditions : [],
   storedVersions: data?.storedVersions !== undefined ? data.storedVersions : [],
   acceptedNames: data?.acceptedNames !== undefined ? data.acceptedNames : { kind: '', plural: '' },
 };
}
