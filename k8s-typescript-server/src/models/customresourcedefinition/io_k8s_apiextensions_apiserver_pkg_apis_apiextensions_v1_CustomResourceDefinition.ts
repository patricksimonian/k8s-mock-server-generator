/**
* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
* @resourceType customresourcedefinition
* @kind Customresourcedefinition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
/**
* Standard object's metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* spec describes how the user wants the resources to appear
* @required
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionSpec
*/
spec: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec;
/**
* status indicates the actual state of the CustomResourceDefinition
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceDefinitionStatus
*/
status?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus;
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
* Create a new Customresourcedefinition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec } from '../customresourcedefinitionspec/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus } from '../customresourcedefinitionstatus/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
