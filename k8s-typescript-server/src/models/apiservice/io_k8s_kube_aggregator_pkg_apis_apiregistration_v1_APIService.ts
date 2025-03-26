/**
* APIService represents a server for a particular GroupVersion. Name must be "version.group".
* @resourceType apiservice
* @kind Apiservice
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService {
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
metadata?: { generation?: number; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; annotations?: Record<string, any>; finalizers?: string[]; name?: string; namespace?: string; resourceVersion?: string; deletionTimestamp?: Date; generateName?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; selfLink?: string; creationTimestamp?: Date; labels?: Record<string, any>; uid?: string; deletionGracePeriodSeconds?: number };
/**
* APIServiceSpec contains information for locating and communicating with a server. Only https is supported, though you are able to disable certificate verification.
* @isObject
*/
spec?: { version?: string; versionPriority: number; caBundle?: string; group?: string; groupPriorityMinimum: number; insecureSkipTLSVerify?: boolean; service?: { name?: string; namespace?: string; port?: number } };
/**
* APIServiceStatus contains derived information about an API server
* @isObject
*/
status?: { conditions?: Array<{ message?: string; reason?: string; status: string; type: string; lastTransitionTime?: Date }> };
}

/**
* Create a new Apiservice with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { groupPriorityMinimum: 0, versionPriority: 0 },
   status: data?.status !== undefined ? data.status : {},
 };
}
