/**
* CustomResourceDefinitionVersion describes a version for CRD.
* @resourceType customresourcedefinitionversion
* @kind Customresourcedefinitionversion
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion {
/**
* deprecated indicates this version of the custom resource API is deprecated. When set to true, API requests to this version receive a warning header in the server response. Defaults to false.
*/
deprecated?: boolean;
/**
* deprecationWarning overrides the default warning returned to API clients. May only be set when `deprecated` is true. The default warning indicates this version is deprecated and recommends use of the newest served version of equal or greater stability, if one exists.
*/
deprecationWarning?: string;
/**
* schema describes the schema used for validation, pruning, and defaulting of this version of the custom resource.
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceValidation
*/
schema?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation;
/**
* selectableFields specifies paths to fields that may be used as field selectors. A maximum of 8 selectable fields are allowed. See https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors
* @isArray
*/
selectableFields?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField[];
/**
* storage indicates this version should be used when persisting custom resources to storage. There must be exactly one version with storage=true.
* @required
*/
storage: boolean;
/**
* subresources specify what subresources this version of the defined custom resource have.
* @references io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceSubresources
*/
subresources?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources;
/**
* additionalPrinterColumns specifies additional columns returned in Table output. See https://kubernetes.io/docs/reference/using-api/api-concepts/#receiving-resources-as-tables for details. If no columns are specified, a single column displaying the age of the custom resource is used.
* @isArray
*/
additionalPrinterColumns?: io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition[];
/**
* name is the version name, e.g. “v1”, “v2beta1”, etc. The custom resources are served under this version at `/apis/<group>/<version>/...` if `served` is true.
* @required
*/
name: string;
/**
* served is a flag enabling/disabling this version from being served via REST APIs
* @required
*/
served: boolean;
}

/**
* Create a new Customresourcedefinitionversion with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionVersion {
 return {
   deprecated: data?.deprecated !== undefined ? data.deprecated : false,
   deprecationWarning: data?.deprecationWarning !== undefined ? data.deprecationWarning : '',
   schema: data?.schema !== undefined ? data.schema : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation(),
   selectableFields: data?.selectableFields !== undefined ? data.selectableFields : [],
   storage: data?.storage !== undefined ? data.storage : false,
   subresources: data?.subresources !== undefined ? data.subresources : createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources(),
   additionalPrinterColumns: data?.additionalPrinterColumns !== undefined ? data.additionalPrinterColumns : [],
   name: data?.name !== undefined ? data.name : '',
   served: data?.served !== undefined ? data.served : false,
 };
}
// Required imports
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceColumnDefinition } from '../io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.CustomResourceColumnDefinition';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources } from '../customresourcesubresource/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceSubresources';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation } from '../customresourcevalidation/io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceValidation';
import { io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField, createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_SelectableField } from '../io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.SelectableField';
