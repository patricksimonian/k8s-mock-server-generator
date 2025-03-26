/**
* Endpoint represents a single logical "backend" implementing a service.
* @resourceType endpoint
* @kind Endpoint
*/
export interface io_k8s_api_discovery_v1_Endpoint {
/**
* EndpointConditions represents the current condition of an endpoint.
* @isObject
*/
conditions?: { ready?: boolean; serving?: boolean; terminating?: boolean };
/**
* deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
*/
deprecatedTopology?: Record<string, any>;
/**
* EndpointHints provides hints describing how an endpoint should be consumed.
* @isObject
*/
hints?: { forZones?: Array<{ name: string }> };
/**
* hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
*/
hostname?: string;
/**
* nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
*/
nodeName?: string;
/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @isObject
*/
targetRef?: { apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string; resourceVersion?: string; uid?: string };
/**
* zone is the name of the Zone this endpoint exists in.
*/
zone?: string;
/**
* addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
* @required
* @isArray
*/
addresses: string[];
}

/**
* Create a new Endpoint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_discovery_v1_Endpoint instance with defaults applied
*/
export function createio_k8s_api_discovery_v1_Endpoint(data?: Partial<io_k8s_api_discovery_v1_Endpoint>): io_k8s_api_discovery_v1_Endpoint {
 return {
   conditions: data?.conditions !== undefined ? data.conditions : {},
   deprecatedTopology: data?.deprecatedTopology !== undefined ? data.deprecatedTopology : {},
   hints: data?.hints !== undefined ? data.hints : {},
   hostname: data?.hostname !== undefined ? data.hostname : '',
   nodeName: data?.nodeName !== undefined ? data.nodeName : '',
   targetRef: data?.targetRef !== undefined ? data.targetRef : {},
   zone: data?.zone !== undefined ? data.zone : '',
   addresses: data?.addresses !== undefined ? data.addresses : [],
 };
}
