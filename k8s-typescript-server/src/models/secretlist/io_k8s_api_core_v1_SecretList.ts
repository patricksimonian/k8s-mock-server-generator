/**
* SecretList is a list of Secret.
* @resourceType secretlist
* @kind SecretList
*/
export interface io_k8s_api_core_v1_SecretList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Items is a list of secret objects. More info: https://kubernetes.io/docs/concepts/configuration/secret
* @required
* @isArray
* @references io.k8s.api.core.v1.Secret
*/
items: io_k8s_api_core_v1_Secret[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
}

/**
* Create a new SecretList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_SecretList instance with defaults applied
*/
export function createio_k8s_api_core_v1_SecretList(data?: Partial<io_k8s_api_core_v1_SecretList>): io_k8s_api_core_v1_SecretList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
 };
}
// Required imports
import { io_k8s_api_core_v1_Secret, createio_k8s_api_core_v1_Secret } from '../secret/io_k8s_api_core_v1_Secret';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
