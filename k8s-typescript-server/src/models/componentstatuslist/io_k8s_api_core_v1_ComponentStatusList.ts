/**
* Status of all the conditions for the component as a list of ComponentStatus objects. Deprecated: This API is deprecated in v1.19+
* @resourceType componentstatuslist
* @kind ComponentstatusList
*/
export interface io_k8s_api_core_v1_ComponentStatusList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of ComponentStatus objects.
* @required
* @isArray
* @references io.k8s.api.core.v1.ComponentStatus
*/
items: io_k8s_api_core_v1_ComponentStatus[];
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
* Create a new ComponentstatusList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ComponentStatusList instance with defaults applied
*/
export function createio_k8s_api_core_v1_ComponentStatusList(data?: Partial<io_k8s_api_core_v1_ComponentStatusList>): io_k8s_api_core_v1_ComponentStatusList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ComponentStatus, createio_k8s_api_core_v1_ComponentStatus } from '../componentstatus/io_k8s_api_core_v1_ComponentStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
