/**
* Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
* @resourceType service
* @kind Service
*/
export interface io_k8s_api_core_v1_Service {
/**
* ServiceSpec describes the attributes that a user creates on a service.
* @isObject
*/
spec?: Record<string, any>;
/**
* ServiceStatus represents the current status of a service.
* @isObject
*/
status?: { conditions?: Array<{ lastTransitionTime: Date; message: string; observedGeneration?: number; reason: string; status: string; type: string }>; loadBalancer?: { ingress?: Array<{ hostname?: string; ip?: string; ipMode?: string; ports?: Array<{ error?: string; port: number; protocol: 'SCTP' | 'TCP' | 'UDP' }> }> } };
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
metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; finalizers?: string[]; generation?: number; resourceVersion?: string; selfLink?: string; uid?: string; deletionTimestamp?: Date; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; generateName?: string; deletionGracePeriodSeconds?: number; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; name?: string; namespace?: string };
}

/**
* Create a new Service with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Service instance with defaults applied
*/
export function createio_k8s_api_core_v1_Service(data?: Partial<io_k8s_api_core_v1_Service>): io_k8s_api_core_v1_Service {
 return {
   spec: data?.spec !== undefined ? data.spec : {},
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
