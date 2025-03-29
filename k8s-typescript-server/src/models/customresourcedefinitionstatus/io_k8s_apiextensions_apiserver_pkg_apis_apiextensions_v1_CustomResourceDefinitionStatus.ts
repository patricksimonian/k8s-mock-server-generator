/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
* @resourceType customresourcedefinitionstatus
* @kind Customresourcedefinitionstatus
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus {
/**
* storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
* @isArray
*/
storedVersions?: string[];
/**
* acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionNames
*/
acceptedNames?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames;
/**
* conditions indicate state for particular aspects of a CustomResourceDefinition
* @isArray
*/
conditions?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition[];
}

/**
* Create a new Customresourcedefinitionstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus {
 return {
   storedVersions: data?.storedVersions !== undefined ? data.storedVersions : [],
   acceptedNames: data?.acceptedNames !== undefined ? data.acceptedNames : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames(),
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
// Required imports
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition } from '../io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionCondition';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames } from '../customresourcedefinitionname/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames';
