/**
* Endpoint represents a single logical "backend" implementing a service.
* @resourceType endpoint
* @kind Endpoint
*/
export interface io_k8s_api_discovery_v1_Endpoint {
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
/**
* conditions contains information about the current status of the endpoint.
* @references io.k8s.api.discovery.v1.EndpointConditions
*/
conditions?: io_k8s_api_discovery_v1_EndpointConditions;
/**
* deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
*/
deprecatedTopology?: Record<string, any>;
/**
* hints contains information associated with how an endpoint should be consumed.
* @references io.k8s.api.discovery.v1.EndpointHints
*/
hints?: io_k8s_api_discovery_v1_EndpointHints;
/**
* hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
*/
hostname?: string;
/**
* nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
*/
nodeName?: string;
/**
* targetRef is a reference to a Kubernetes object that represents this endpoint.
* @references io.k8s.api.core.v1.ObjectReference
*/
targetRef?: io_k8s_api_core_v1_ObjectReference;
}

/**
* Create a new Endpoint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_discovery_v1_Endpoint instance with defaults applied
*/
export function createio_k8s_api_discovery_v1_Endpoint(data?: Partial<io_k8s_api_discovery_v1_Endpoint>): io_k8s_api_discovery_v1_Endpoint {
 return {
   zone: data?.zone !== undefined ? data.zone : '',
   addresses: data?.addresses !== undefined ? data.addresses : [],
   conditions: data?.conditions !== undefined ? data.conditions : createio_k8s_api_discovery_v1_EndpointConditions(),
   deprecatedTopology: data?.deprecatedTopology !== undefined ? data.deprecatedTopology : {},
   hints: data?.hints !== undefined ? data.hints : createio_k8s_api_discovery_v1_EndpointHints(),
   hostname: data?.hostname !== undefined ? data.hostname : '',
   nodeName: data?.nodeName !== undefined ? data.nodeName : '',
   targetRef: data?.targetRef !== undefined ? data.targetRef : createio_k8s_api_core_v1_ObjectReference(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ObjectReference, createio_k8s_api_core_v1_ObjectReference } from '../objectreference/io_k8s_api_core_v1_ObjectReference';
import { io_k8s_api_discovery_v1_EndpointConditions, createio_k8s_api_discovery_v1_EndpointConditions } from '../endpointcondition/io_k8s_api_discovery_v1_EndpointConditions';
import { io_k8s_api_discovery_v1_EndpointHints, createio_k8s_api_discovery_v1_EndpointHints } from '../endpointhint/io_k8s_api_discovery_v1_EndpointHints';
