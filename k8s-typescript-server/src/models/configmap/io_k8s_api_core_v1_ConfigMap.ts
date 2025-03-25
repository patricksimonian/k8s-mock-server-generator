/**
* ConfigMap holds configuration data for pods to consume.
* @resourceType configmap
* @kind Configmap
*/
export interface io_k8s_api_core_v1_ConfigMap {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* BinaryData contains the binary data. Each key must consist of alphanumeric characters, '-', '_' or '.'. BinaryData can contain byte sequences that are not in the UTF-8 range. The keys stored in BinaryData must not overlap with the ones in the Data field, this is enforced during validation process. Using this field will require 1.10+ apiserver and kubelet.
*/
binaryData?: Record<string, any>;
/**
* Data contains the configuration data. Each key must consist of alphanumeric characters, '-', '_' or '.'. Values with non-UTF-8 byte sequences must use the BinaryData field. The keys stored in Data must not overlap with the keys in the BinaryData field, this is enforced during validation process.
*/
data?: Record<string, any>;
/**
* Immutable, if set to true, ensures that data stored in the ConfigMap cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
*/
immutable?: boolean;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; annotations?: Record<string, any>; generateName?: string; generation?: number; labels?: Record<string, any>; finalizers?: string[]; name?: string; namespace?: string; selfLink?: string; deletionTimestamp?: Date; deletionGracePeriodSeconds?: number; resourceVersion?: string; uid?: string; creationTimestamp?: Date };
}

/**
* Create a new Configmap with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ConfigMap instance with defaults applied
*/
export function createio_k8s_api_core_v1_ConfigMap(data?: Partial<io_k8s_api_core_v1_ConfigMap>): io_k8s_api_core_v1_ConfigMap {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   binaryData: data?.binaryData !== undefined ? data.binaryData : {},
   data: data?.data !== undefined ? data.data : {},
   immutable: data?.immutable !== undefined ? data.immutable : false,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
