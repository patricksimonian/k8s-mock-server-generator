/**
* EndpointsList is a list of endpoints.
* @resourceType endpointslist
* @kind Endpointslist
*/
export interface io_k8s_api_core_v1_EndpointsList {
/**
* List of endpoints.
* @required
* @isArray
*/
items: Array<{ kind?: string; metadata?: { deletionGracePeriodSeconds?: number; labels?: Record<string, any>; name?: string; generateName?: string; generation?: number; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; resourceVersion?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; creationTimestamp?: Date; namespace?: string; selfLink?: string; uid?: string }; subsets?: Array<{ addresses?: Array<{ ip: string; nodeName?: string; targetRef?: { namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string }; hostname?: string }>; notReadyAddresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string } }>; ports?: Array<{ appProtocol?: string; name?: string; port: number; protocol?: 'SCTP' | 'TCP' | 'UDP' }> }>; apiVersion?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { resourceVersion?: string; selfLink?: string; continue?: string; remainingItemCount?: number };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Endpointslist with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EndpointsList instance with defaults applied
*/
export function createio_k8s_api_core_v1_EndpointsList(data?: Partial<io_k8s_api_core_v1_EndpointsList>): io_k8s_api_core_v1_EndpointsList {
 return {
   items: data?.items !== undefined ? data.items : [],
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
