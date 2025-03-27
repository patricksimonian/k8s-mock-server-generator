/**
* GroupVersion contains the "group/version" and "version" string of a version. It is made a struct to keep extensibility.
* @resourceType groupversionfordiscovery
* @kind Groupversionfordiscovery
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery {
/**
* version specifies the version in the form of "version". This is to save the clients the trouble of splitting the GroupVersion.
* @required
*/
version: string;
/**
* groupVersion specifies the API group and version in the form "group/version"
* @required
*/
groupVersion: string;
}

/**
* Create a new Groupversionfordiscovery with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery>): io_k8s_apimachinery_pkg_apis_meta_v1_GroupVersionForDiscovery {
 return {
   version: data?.version !== undefined ? data.version : '',
   groupVersion: data?.groupVersion !== undefined ? data.groupVersion : '',
 };
}
