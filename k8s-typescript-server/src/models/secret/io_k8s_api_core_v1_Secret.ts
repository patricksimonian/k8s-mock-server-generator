/**
* Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
* @resourceType secret
* @kind Secret
*/
export interface io_k8s_api_core_v1_Secret {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { generateName?: string; labels?: Record<string, any>; namespace?: string; deletionTimestamp?: Date; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; resourceVersion?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; annotations?: Record<string, any>; generation?: number; name?: string; selfLink?: string; uid?: string };
/**
* stringData allows specifying non-binary secret data in string form. It is provided as a write-only input field for convenience. All keys and values are merged into the data field on write, overwriting any existing values. The stringData field is never output when reading from the API.
*/
stringData?: Record<string, any>;
/**
* Used to facilitate programmatic handling of secret data. More info: https://kubernetes.io/docs/concepts/configuration/secret/#secret-types
*/
type?: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Data contains the secret data. Each key must consist of alphanumeric characters, '-', '_' or '.'. The serialized form of the secret data is a base64 encoded string, representing the arbitrary (possibly non-string) data value here. Described in https://tools.ietf.org/html/rfc4648#section-4
*/
data?: Record<string, any>;
/**
* Immutable, if set to true, ensures that data stored in the Secret cannot be updated (only object metadata can be modified). If not set to true, the field can be modified at any time. Defaulted to nil.
*/
immutable?: boolean;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Secret with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Secret instance with defaults applied
*/
export function createio_k8s_api_core_v1_Secret(data?: Partial<io_k8s_api_core_v1_Secret>): io_k8s_api_core_v1_Secret {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   stringData: data?.stringData !== undefined ? data.stringData : {},
   type: data?.type !== undefined ? data.type : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   data: data?.data !== undefined ? data.data : {},
   immutable: data?.immutable !== undefined ? data.immutable : false,
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
