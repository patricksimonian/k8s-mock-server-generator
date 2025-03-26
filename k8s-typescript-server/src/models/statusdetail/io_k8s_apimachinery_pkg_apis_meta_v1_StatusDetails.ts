/**
* StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response. The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.
* @resourceType statusdetail
* @kind Statusdetail
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails {
/**
* UID of the resource. (when there is a single resource which can be described). More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
*/
uid?: string;
/**
* The Causes array includes more details associated with the StatusReason failure. Not all StatusReasons may provide detailed causes.
* @isArray
*/
causes?: Array<{ field?: string; message?: string; reason?: string }>;
/**
* The group attribute of the resource associated with the status StatusReason.
*/
group?: string;
/**
* The kind attribute of the resource associated with the status StatusReason. On some operations may differ from the requested resource Kind. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).
*/
name?: string;
/**
* If specified, the time in seconds before the operation should be retried. Some errors may indicate the client must take an alternate action - for those errors this field may indicate how long to wait before taking the alternate action.
*/
retryAfterSeconds?: number;
}

/**
* Create a new Statusdetail with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails>): io_k8s_apimachinery_pkg_apis_meta_v1_StatusDetails {
 return {
   uid: data?.uid !== undefined ? data.uid : '',
   causes: data?.causes !== undefined ? data.causes : [],
   group: data?.group !== undefined ? data.group : '',
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
   retryAfterSeconds: data?.retryAfterSeconds !== undefined ? data.retryAfterSeconds : 0,
 };
}
