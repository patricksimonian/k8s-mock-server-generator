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
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
* @isArray
*/
subsets?: io_k8s_api_core_v1_EndpointSubset[];
}

/**
* Create a new Endpoint with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Endpoints instance with defaults applied
*/
export function createio_k8s_api_core_v1_Endpoints(data?: Partial<io_k8s_api_core_v1_Endpoints>): io_k8s_api_core_v1_Endpoints {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   subsets: data?.subsets !== undefined ? data.subsets : [],
 };
}
// Required imports
import { io_k8s_api_core_v1_EndpointSubset, createio_k8s_api_core_v1_EndpointSubset } from '../io.k8s.api.core.v1.EndpointSubset';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
