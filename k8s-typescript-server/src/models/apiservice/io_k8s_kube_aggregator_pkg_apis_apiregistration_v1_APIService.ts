/**
* APIService represents a server for a particular GroupVersion. Name must be "version.group".
* @resourceType apiservice
* @kind Apiservice
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService {
/**
* APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
* @isObject
*/
spec?: { caBundle?: string; group?: string; groupPriorityMinimum: number; insecureSkipTLSVerify?: boolean; service?: { name?: string; namespace?: string; port?: number }; version?: string; versionPriority: number };
/**
* APIServiceStatus contains derived information about an API server
* @isObject
*/
status?: { conditions?: Array<{ status: string; type: string; lastTransitionTime?: Date; message?: string; reason?: string }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { namespace?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; selfLink?: string; creationTimestamp?: Date; generateName?: string; labels?: Record<string, any>; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; uid?: string; deletionGracePeriodSeconds?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; name?: string; deletionTimestamp?: Date; resourceVersion?: string };
}

/**
* Create a new Apiservice with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService {
 return {
   spec: data?.spec !== undefined ? data.spec : { versionPriority: 0, groupPriorityMinimum: 0 },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
