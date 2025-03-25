/**
* EndpointsList is a list of endpoints.
* @resourceType endpointslist
* @kind Endpointslist
*/
export interface io_k8s_api_core_v1_EndpointsList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of endpoints.
* @required
* @isArray
*/
items: Array<{ subsets?: Array<{ notReadyAddresses?: Array<{ ip: string; nodeName?: string; targetRef?: { resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string }; hostname?: string }>; ports?: Array<{ appProtocol?: string; name?: string; port: number; protocol?: 'SCTP' | 'TCP' | 'UDP' }>; addresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string } }> }>; apiVersion?: string; kind?: string; metadata?: { generateName?: string; labels?: Record<string, any>; selfLink?: string; generation?: number; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; ownerReferences?: Array<{ kind: string; name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean }>; annotations?: Record<string, any>; deletionTimestamp?: Date; finalizers?: string[]; name?: string; uid?: string; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; namespace?: string } }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { remainingItemCount?: number; resourceVersion?: string; selfLink?: string; continue?: string };
}

/**
* Create a new Endpointslist with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EndpointsList instance with defaults applied
*/
export function createio_k8s_api_core_v1_EndpointsList(data?: Partial<io_k8s_api_core_v1_EndpointsList>): io_k8s_api_core_v1_EndpointsList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : [],
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
