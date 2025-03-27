/**
* NetworkPolicyPeer describes a peer to allow traffic to/from. Only certain combinations of fields are allowed
* @resourceType networkpolicypeer
* @kind Networkpolicypeer
*/
export interface io_k8s_api_networking_v1_NetworkPolicyPeer {
/**
* namespaceSelector selects namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.

If podSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the namespaces selected by namespaceSelector. Otherwise it selects all pods in the namespaces selected by namespaceSelector.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
namespaceSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* podSelector is a label selector which selects pods. This field follows standard label selector semantics; if present but empty, it selects all pods.

If namespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the pods matching podSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the pods matching podSelector in the policy's own namespace.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
podSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* ipBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
* @references io.k8s.api.networking.v1.IPBlock
*/
ipBlock?: io_k8s_api_networking_v1_IPBlock;
}

/**
* Create a new Networkpolicypeer with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_NetworkPolicyPeer instance with defaults applied
*/
export function createio_k8s_api_networking_v1_NetworkPolicyPeer(data?: Partial<io_k8s_api_networking_v1_NetworkPolicyPeer>): io_k8s_api_networking_v1_NetworkPolicyPeer {
 return {
   namespaceSelector: data?.namespaceSelector !== undefined ? data.namespaceSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   podSelector: data?.podSelector !== undefined ? data.podSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   ipBlock: data?.ipBlock !== undefined ? data.ipBlock : createio_k8s_api_networking_v1_IPBlock(),
 };
}
// Required imports
import { io_k8s_api_networking_v1_IPBlock, createio_k8s_api_networking_v1_IPBlock } from '../ipblock/io_k8s_api_networking_v1_IPBlock';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
