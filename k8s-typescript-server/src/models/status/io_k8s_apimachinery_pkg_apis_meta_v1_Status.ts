/**
* Status is a return value for calls that don't return other objects.
* @resourceType status
* @kind Status
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_Status {
/**
* Extended data associated with the reason.  Each reason may define its own extended details. This field is optional and the data returned is not guaranteed to conform to any schema except that defined by the reason type.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.StatusDetails
*/
details?: io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* A human-readable description of the status of this operation.
*/
message?: string;
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
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
}

/**
* Create a new Status with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_Status instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_Status(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_Status>): io_k8s_apimachinery_pkg_apis_meta_v1_Status {
 return {
   details: data?.details !== undefined ? data.details : createio_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails(),
   kind: data?.kind !== undefined ? data.kind : '',
   message: data?.message !== undefined ? data.message : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   reason: data?.reason !== undefined ? data.reason : '',
   status: data?.status !== undefined ? data.status : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   code: data?.code !== undefined ? data.code : 0,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
import { io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails, createio_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails } from '../statusdetail/io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails';
