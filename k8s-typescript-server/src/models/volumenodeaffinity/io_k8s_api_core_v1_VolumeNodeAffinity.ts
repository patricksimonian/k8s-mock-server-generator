/**
* VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.
* @resourceType volumenodeaffinity
* @kind Volumenodeaffinity
*/
export interface io_k8s_api_core_v1_VolumeNodeAffinity {
/**
* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
* @isObject
*/
required?: { nodeSelectorTerms: Array<{ matchExpressions?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }>; matchFields?: Array<{ key: string; operator: 'DoesNotExist' | 'Exists' | 'Gt' | 'In' | 'Lt' | 'NotIn'; values?: string[] }> }> };
}

/**
* Create a new Volumenodeaffinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_VolumeNodeAffinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_VolumeNodeAffinity(data?: Partial<io_k8s_api_core_v1_VolumeNodeAffinity>): io_k8s_api_core_v1_VolumeNodeAffinity {
 return {
   required: data?.required !== undefined ? data.required : { nodeSelectorTerms: [] },
 };
}
