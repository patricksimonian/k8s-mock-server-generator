/**
* ComponentStatus (and ComponentStatusList) holds the cluster validation info. Deprecated: This API is deprecated in v1.19+
* @resourceType componentstatus
* @kind Componentstatus
*/
export interface io_k8s_api_core_v1_ComponentStatus {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of component conditions observed
* @isArray
*/
conditions?: io_k8s_api_core_v1_ComponentCondition[];
}

/**
* Create a new Componentstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ComponentStatus instance with defaults applied
*/
export function createio_k8s_api_core_v1_ComponentStatus(data?: Partial<io_k8s_api_core_v1_ComponentStatus>): io_k8s_api_core_v1_ComponentStatus {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_ComponentCondition, createio_k8s_api_core_v1_ComponentCondition } from '../io.k8s.api.core.v1.ComponentCondition';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
