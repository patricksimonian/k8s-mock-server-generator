/**
* EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
* @resourceType endpointslice
* @kind Endpointslice
*/
export interface io_k8s_api_discovery_v1_EndpointSlice {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
* @required
* @isArray
*/
endpoints: io_k8s_api_discovery_v1_Endpoint[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports.
* @isArray
*/
ports?: io_k8s_api_discovery_v1_EndpointPort[];
/**
* addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.

Possible enum values:
 - `"FQDN"` represents a FQDN.
 - `"IPv4"` represents an IPv4 Address.
 - `"IPv6"` represents an IPv6 Address.
* @required
*/
addressType: 'FQDN' | 'IPv4' | 'IPv6';
}

/**
* Create a new Endpointslice with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_discovery_v1_EndpointSlice instance with defaults applied
*/
export function createio_k8s_api_discovery_v1_EndpointSlice(data?: Partial<io_k8s_api_discovery_v1_EndpointSlice>): io_k8s_api_discovery_v1_EndpointSlice {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   endpoints: data?.endpoints !== undefined ? data.endpoints : [],
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   ports: data?.ports !== undefined ? data.ports : [],
   addressType: data?.addressType !== undefined ? data.addressType : '',
 };
}
// Required imports
import { io_k8s_api_discovery_v1_Endpoint, createio_k8s_api_discovery_v1_Endpoint } from '../io.k8s.api.discovery.v1.Endpoint';
import { io_k8s_api_discovery_v1_EndpointPort, createio_k8s_api_discovery_v1_EndpointPort } from '../io.k8s.api.discovery.v1.EndpointPort';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
