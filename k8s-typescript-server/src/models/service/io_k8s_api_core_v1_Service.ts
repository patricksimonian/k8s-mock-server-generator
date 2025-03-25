/**
* Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
* @resourceType service
* @kind Service
*/
export interface io_k8s_api_core_v1_Service {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { generateName?: string; namespace?: string; resourceVersion?: string; selfLink?: string; deletionTimestamp?: Date; uid?: string; name?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; finalizers?: string[]; generation?: number; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; annotations?: Record<string, any>; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; labels?: Record<string, any> };
/**
* ServiceSpec describes the attributes that a user creates on a service.
* @isObject
*/
spec?: Record<string, any>;
/**
* ServiceStatus represents the current status of a service.
* @isObject
*/
status?: { conditions?: Array<{ observedGeneration?: number; reason: string; status: string; type: string; lastTransitionTime: Date; message: string }>; loadBalancer?: { ingress?: Array<{ hostname?: string; ip?: string; ipMode?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }> }> } };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Service with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Service instance with defaults applied
*/
export function createio_k8s_api_core_v1_Service(data?: Partial<io_k8s_api_core_v1_Service>): io_k8s_api_core_v1_Service {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
