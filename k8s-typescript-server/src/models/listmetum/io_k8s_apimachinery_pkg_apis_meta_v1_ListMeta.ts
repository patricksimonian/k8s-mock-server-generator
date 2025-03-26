/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @resourceType listmetum
* @kind Listmetum
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta {
/**
* Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
*/
selfLink?: string;
/**
* continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.
*/
continue?: string;
/**
* remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.
*/
remainingItemCount?: number;
/**
* String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
*/
resourceVersion?: string;
}

/**
* Create a new Listmetum with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta>): io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta {
 return {
   selfLink: data?.selfLink !== undefined ? data.selfLink : '',
   continue: data?.continue !== undefined ? data.continue : '',
   remainingItemCount: data?.remainingItemCount !== undefined ? data.remainingItemCount : 0,
   resourceVersion: data?.resourceVersion !== undefined ? data.resourceVersion : '',
 };
}
