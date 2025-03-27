/**
* NetworkPolicySpec provides the specification of a NetworkPolicy
* @resourceType networkpolicyspec
* @kind Networkpolicyspec
*/
export interface io_k8s_api_networking_v1_NetworkPolicySpec {
/**
* podSelector selects the pods to which this NetworkPolicy object applies. The array of ingress rules is applied to any pods selected by this field. Multiple network policies can select the same set of pods. In this case, the ingress rules for each are combined additively. This field is NOT optional and follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
* @required
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
podSelector: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* policyTypes is a list of rule types that the NetworkPolicy relates to. Valid options are ["Ingress"], ["Egress"], or ["Ingress", "Egress"]. If this field is not specified, it will default based on the existence of ingress or egress rules; policies that contain an egress section are assumed to affect egress, and all policies (whether or not they contain an ingress section) are assumed to affect ingress. If you want to write an egress-only policy, you must explicitly specify policyTypes [ "Egress" ]. Likewise, if you want to write a policy that specifies that no egress is allowed, you must specify a policyTypes value that include "Egress" (since such a policy would not include an egress section and would otherwise default to just [ "Ingress" ]). This field is beta-level in 1.8
* @isArray
*/
policyTypes?: 'Egress' | 'Ingress'[];
/**
* egress is a list of egress rules to be applied to the selected pods. Outgoing traffic is allowed if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic matches at least one egress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy limits all outgoing traffic (and serves solely to ensure that the pods it selects are isolated by default). This field is beta-level in 1.8
* @isArray
*/
egress?: io_k8s_api_networking_v1_NetworkPolicyEgressRule[];
/**
* ingress is a list of ingress rules to be applied to the selected pods. Traffic is allowed to a pod if there are no NetworkPolicies selecting the pod (and cluster policy otherwise allows the traffic), OR if the traffic source is the pod's local node, OR if the traffic matches at least one ingress rule across all of the NetworkPolicy objects whose podSelector matches the pod. If this field is empty then this NetworkPolicy does not allow any traffic (and serves solely to ensure that the pods it selects are isolated by default)
* @isArray
*/
ingress?: io_k8s_api_networking_v1_NetworkPolicyIngressRule[];
}

/**
* Create a new Networkpolicyspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_NetworkPolicySpec instance with defaults applied
*/
export function createio_k8s_api_networking_v1_NetworkPolicySpec(data?: Partial<io_k8s_api_networking_v1_NetworkPolicySpec>): io_k8s_api_networking_v1_NetworkPolicySpec {
 return {
   podSelector: data?.podSelector !== undefined ? data.podSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   policyTypes: data?.policyTypes !== undefined ? data.policyTypes : [],
   egress: data?.egress !== undefined ? data.egress : [],
   ingress: data?.ingress !== undefined ? data.ingress : [],
 };
}
// Required imports
import { io_k8s_api_networking_v1_NetworkPolicyEgressRule, createio_k8s_api_networking_v1_NetworkPolicyEgressRule } from '../io.k8s.api.networking.v1.NetworkPolicyEgressRule';
import { io_k8s_api_networking_v1_NetworkPolicyIngressRule, createio_k8s_api_networking_v1_NetworkPolicyIngressRule } from '../io.k8s.api.networking.v1.NetworkPolicyIngressRule';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
