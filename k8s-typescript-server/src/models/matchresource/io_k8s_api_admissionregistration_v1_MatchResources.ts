/**
* MatchResources decides whether to run the admission control policy on an object based on whether it meets the match criteria. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
* @resourceType matchresource
* @kind Matchresource
*/
export interface io_k8s_api_admissionregistration_v1_MatchResources {
/**
* ObjectSelector decides whether to run the validation based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the cel validation, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
objectSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. The policy cares about an operation if it matches _any_ Rule.
* @isArray
*/
resourceRules?: io_k8s_api_admissionregistration_v1_NamedRuleWithOperations[];
/**
* ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. The exclude rules take precedence over include rules (if a resource matches both, it is excluded)
* @isArray
*/
excludeResourceRules?: io_k8s_api_admissionregistration_v1_NamedRuleWithOperations[];
/**
* matchPolicy defines how the "MatchResources" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the ValidatingAdmissionPolicy.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the ValidatingAdmissionPolicy.

Defaults to "Equivalent"

Possible enum values:
 - `"Equivalent"` means requests should be sent to the webhook if they modify a resource listed in rules via another API group or version.
 - `"Exact"` means requests should only be sent to the webhook if they exactly match a given rule.
*/
matchPolicy?: 'Equivalent' | 'Exact';
/**
* NamespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the policy.

For example, to run the webhook on any objects whose namespace is not associated with "runlevel" of "0" or "1";  you will set the selector as follows: "namespaceSelector": {
  "matchExpressions": [
    {
      "key": "runlevel",
      "operator": "NotIn",
      "values": [
        "0",
        "1"
      ]
    }
  ]
}

If instead you want to only run the policy on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
  "matchExpressions": [
    {
      "key": "environment",
      "operator": "In",
      "values": [
        "prod",
        "staging"
      ]
    }
  ]
}

See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more examples of label selectors.

Default to the empty LabelSelector, which matches everything.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
namespaceSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
}

/**
* Create a new Matchresource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_MatchResources instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_MatchResources(data?: Partial<io_k8s_api_admissionregistration_v1_MatchResources>): io_k8s_api_admissionregistration_v1_MatchResources {
 return {
   objectSelector: data?.objectSelector !== undefined ? data.objectSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   resourceRules: data?.resourceRules !== undefined ? data.resourceRules : [],
   excludeResourceRules: data?.excludeResourceRules !== undefined ? data.excludeResourceRules : [],
   matchPolicy: data?.matchPolicy !== undefined ? data.matchPolicy : '',
   namespaceSelector: data?.namespaceSelector !== undefined ? data.namespaceSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_NamedRuleWithOperations, createio_k8s_api_admissionregistration_v1_NamedRuleWithOperations } from '../io.k8s.api.admissionregistration.v1.NamedRuleWithOperations';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
