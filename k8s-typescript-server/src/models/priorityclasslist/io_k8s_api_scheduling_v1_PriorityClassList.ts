/**
* PriorityClassList is a collection of priority classes.
* @resourceType priorityclasslist
* @kind PriorityclassList
*/
export interface io_k8s_api_scheduling_v1_PriorityClassList {
/**
* items is the list of PriorityClasses
* @required
* @isArray
* @references io.k8s.api.scheduling.v1.PriorityClass
*/
items: io_k8s_api_scheduling_v1_PriorityClass[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard list metadata More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new PriorityclassList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_scheduling_v1_PriorityClassList instance with defaults applied
*/
export function createio_k8s_api_scheduling_v1_PriorityClassList(data?: Partial<io_k8s_api_scheduling_v1_PriorityClassList>): io_k8s_api_scheduling_v1_PriorityClassList {
 return {
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
// Required imports
import { io_k8s_api_scheduling_v1_PriorityClass, createio_k8s_api_scheduling_v1_PriorityClass } from '../priorityclass/io_k8s_api_scheduling_v1_PriorityClass';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
