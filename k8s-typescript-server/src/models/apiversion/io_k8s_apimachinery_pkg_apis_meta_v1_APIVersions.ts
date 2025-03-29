/**
* APIVersions lists the versions that are available, to allow clients to discover the API at /api, which is the root path of the legacy v1 API.
* @resourceType apiversion
* @kind Apiversion
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
* @required
* @isArray
*/
serverAddressByClientCIDRs: io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR[];
/**
* versions are the api versions that are available.
* @required
* @isArray
*/
versions: string[];
}

/**
* Create a new Apiversion with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_APIVersions(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions>): io_k8s_apimachinery_pkg_apis_meta_v1_APIVersions {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   serverAddressByClientCIDRs: data?.serverAddressByClientCIDRs !== undefined ? data.serverAddressByClientCIDRs : [],
   versions: data?.versions !== undefined ? data.versions : [],
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR, createio_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR } from '../io.k8s.apimachinery.pkg.apis.meta.v1.ServerAddressByClientCIDR';
