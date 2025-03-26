/**
* ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.
* @resourceType clustertrustbundleprojection
* @kind Clustertrustbundleprojection
*/
export interface io_k8s_api_core_v1_ClusterTrustBundleProjection {
/**
* Relative path from the volume root to write the bundle.
* @required
*/
path: string;
/**
* Select all ClusterTrustBundles that match this signer name. Mutually-exclusive with name.  The contents of all selected ClusterTrustBundles will be unified and deduplicated.
*/
signerName?: string;
/**
* Select all ClusterTrustBundles that match this label selector.  Only has effect if signerName is set.  Mutually-exclusive with name.  If unset, interpreted as "match nothing".  If set but empty, interpreted as "match everything".
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
labelSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* Select a single ClusterTrustBundle by object name.  Mutually-exclusive with signerName and labelSelector.
*/
name?: string;
/**
* If true, don't block pod startup if the referenced ClusterTrustBundle(s) aren't available.  If using name, then the named ClusterTrustBundle is allowed not to exist.  If using signerName, then the combination of signerName and labelSelector is allowed to match zero ClusterTrustBundles.
*/
optional?: boolean;
}

/**
* Create a new Clustertrustbundleprojection with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ClusterTrustBundleProjection instance with defaults applied
*/
export function createio_k8s_api_core_v1_ClusterTrustBundleProjection(data?: Partial<io_k8s_api_core_v1_ClusterTrustBundleProjection>): io_k8s_api_core_v1_ClusterTrustBundleProjection {
 return {
   path: data?.path !== undefined ? data.path : '',
   signerName: data?.signerName !== undefined ? data.signerName : '',
   labelSelector: data?.labelSelector !== undefined ? data.labelSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   name: data?.name !== undefined ? data.name : '',
   optional: data?.optional !== undefined ? data.optional : false,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
