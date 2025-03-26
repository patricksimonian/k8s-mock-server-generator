/**
* Endpoints is a collection of endpoints that implement the actual service. Example:

	 Name: "mysvc",
	 Subsets: [
	   {
	     Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
	     Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
	   },
	   {
	     Addresses: [{"ip": "10.10.3.3"}],
	     Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
	   },
	]
* @resourceType endpoint
* @kind Endpoint
*/
export interface io_k8s_api_core_v1_Endpoints {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { resourceVersion?: string; selfLink?: string; annotations?: Record<string, any>; generation?: number; name?: string; finalizers?: string[]; generateName?: string; namespace?: string; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; uid?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date };
/**
* The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
* @isArray
*/
subsets?: Array<{ addresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string } }>; notReadyAddresses?: Array<{ hostname?: string; ip: string; nodeName?: string; targetRef?: { name?: string; namespace?: string; resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string } }>; ports?: Array<{ protocol?: 'SCTP' | 'TCP' | 'UDP'; appProtocol?: string; name?: string; port: number }> }>;
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
* Create a new Endpoint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Endpoints instance with defaults applied
*/
export function createio_k8s_api_core_v1_Endpoints(data?: Partial<io_k8s_api_core_v1_Endpoints>): io_k8s_api_core_v1_Endpoints {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   subsets: data?.subsets !== undefined ? data.subsets : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
