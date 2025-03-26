/**
* EndpointHints provides hints describing how an endpoint should be consumed.
* @resourceType endpointhint
* @kind Endpointhint
*/
export interface io_k8s_api_discovery_v1_EndpointHints {
/**
* forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
* @isArray
*/
forZones?: io_k8s_api_discovery_v1_ForZone[];
}

/**
* Create a new Endpointhint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_discovery_v1_EndpointHints instance with defaults applied
*/
export function createio_k8s_api_discovery_v1_EndpointHints(data?: Partial<io_k8s_api_discovery_v1_EndpointHints>): io_k8s_api_discovery_v1_EndpointHints {
 return {
   forZones: data?.forZones !== undefined ? data.forZones : [],
 };
}
// Required imports
import { io_k8s_api_discovery_v1_ForZone, createio_k8s_api_discovery_v1_ForZone } from '../io.k8s.api.discovery.v1.ForZone';
