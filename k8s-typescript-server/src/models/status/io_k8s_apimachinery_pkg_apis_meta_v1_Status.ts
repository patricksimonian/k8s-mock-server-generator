/**
* Status is a return value for calls that don't return other objects.
* @resourceType status
* @kind Status
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_Status {
/**
* A human-readable description of the status of this operation.
*/
message?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { selfLink?: string; continue?: string; remainingItemCount?: number; resourceVersion?: string };
/**
* A machine-readable description of why this operation is in the "Failure" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
*/
reason?: string;
/**
* Status of the operation. One of: "Success" or "Failure". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
*/
status?: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Suggested HTTP return code for this status, 0 if not set.
*/
code?: number;
/**
* StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
* @isObject
*/
details?: { causes?: Array<{ reason?: string; field?: string; message?: string }>; group?: string; kind?: string; name?: string; retryAfterSeconds?: number; uid?: string };
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Status with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_Status instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_Status(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_Status>): io_k8s_apimachinery_pkg_apis_meta_v1_Status {
 return {
   message: data?.message !== undefined ? data.message : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   code: data?.code !== undefined ? data.code : 0,
   details: data?.details !== undefined ? data.details : {},
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
