/**
* LimitRangeItem defines a min/max usage limit for any resource that matches on kind.
* @resourceType limitrangeitem
* @kind Limitrangeitem
*/
export interface io_k8s_api_core_v1_LimitRangeItem {
/**
* Default resource requirement limit value by resource name if resource limit is omitted.
*/
default?: Record<string, any>;
/**
* DefaultRequest is the default resource requirement request value by resource name if resource request is omitted.
*/
defaultRequest?: Record<string, any>;
/**
* Max usage constraints on this kind by resource name.
*/
max?: Record<string, any>;
/**
* MaxLimitRequestRatio if specified, the named resource must have a request and limit that are both non-zero where limit divided by request is less than or equal to the enumerated value; this represents the max burst for the named resource.
*/
maxLimitRequestRatio?: Record<string, any>;
/**
* Min usage constraints on this kind by resource name.
*/
min?: Record<string, any>;
/**
* Type of resource that this limit applies to.
* @required
*/
type: string;
}

/**
* Create a new Limitrangeitem with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_LimitRangeItem instance with defaults applied
*/
export function createio_k8s_api_core_v1_LimitRangeItem(data?: Partial<io_k8s_api_core_v1_LimitRangeItem>): io_k8s_api_core_v1_LimitRangeItem {
 return {
   default: data?.default !== undefined ? data.default : {},
   defaultRequest: data?.defaultRequest !== undefined ? data.defaultRequest : {},
   max: data?.max !== undefined ? data.max : {},
   maxLimitRequestRatio: data?.maxLimitRequestRatio !== undefined ? data.maxLimitRequestRatio : {},
   min: data?.min !== undefined ? data.min : {},
   type: data?.type !== undefined ? data.type : '',
 };
}
