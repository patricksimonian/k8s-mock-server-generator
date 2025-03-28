/**
* MutatingWebhook describes an admission webhook and the resources and operations it applies to.
* @resourceType mutatingwebhook
* @kind Mutatingwebhook
*/
export interface io_k8s_api_admissionregistration_v1_MutatingWebhook {
/**
* ClientConfig defines how to communicate with the hook. Required
* @required
* @references io.k8s.api.admissionregistration.v1.WebhookClientConfig
*/
clientConfig: io_k8s_api_admissionregistration_v1_WebhookClientConfig;
/**
* FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.

Possible enum values:
 - `"Fail"` means that an error calling the webhook causes the admission to fail.
 - `"Ignore"` means that an error calling the webhook is ignored.
*/
failurePolicy?: 'Fail' | 'Ignore';
/**
* MatchConditions is a list of conditions that must be met for a request to be sent to this webhook. Match conditions filter requests that have already been matched by the rules, namespaceSelector, and objectSelector. An empty list of matchConditions matches all requests. There are a maximum of 64 match conditions allowed.

The exact matching logic is (in order):
  1. If ANY matchCondition evaluates to FALSE, the webhook is skipped.
  2. If ALL matchConditions evaluate to TRUE, the webhook is called.
  3. If any matchCondition evaluates to an error (but none are FALSE):
     - If failurePolicy=Fail, reject the request
     - If failurePolicy=Ignore, the error is ignored and the webhook is skipped
* @isArray
*/
matchConditions?: io_k8s_api_admissionregistration_v1_MatchCondition[];
/**
* matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"

Possible enum values:
 - `"Equivalent"` means requests should be sent to the webhook if they modify a resource listed in rules via another API group or version.
 - `"Exact"` means requests should only be sent to the webhook if they exactly match a given rule.
*/
matchPolicy?: 'Equivalent' | 'Exact';
/**
* The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
* @required
*/
name: string;
/**
* ObjectSelector decides whether to run the webhook based on if the object has matching labels. objectSelector is evaluated against both the oldObject and newObject that would be sent to the webhook, and is considered to match if either object matches the selector. A null object (oldObject in the case of create, or newObject in the case of delete) or an object that cannot have labels (like a DeploymentRollback or a PodProxyOptions object) is not considered to match. Use the object selector only if the webhook is opt-in, because end users may skip the admission webhook by setting the labels. Default to the empty LabelSelector, which matches everything.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
objectSelector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
*/
timeoutSeconds?: number;
/**
* AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
* @required
* @isArray
*/
admissionReviewVersions: string[];
/**
* NamespaceSelector decides whether to run the webhook on an object based on whether the namespace for that object matches the selector. If the object itself is a namespace, the matching is performed on object.metadata.labels. If the object is another cluster scoped resource, it never skips the webhook.

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

If instead you want to only run the webhook on any objects whose namespace is associated with the "environment" of "prod" or "staging"; you will set the selector as follows: "namespaceSelector": {
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
/**
* reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never".

Possible enum values:
 - `"IfNeeded"` indicates that the mutation may be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial mutation call.
 - `"Never"` indicates that the mutation must not be called more than once in a single admission evaluation.
*/
reinvocationPolicy?: 'IfNeeded' | 'Never';
/**
* Rules describes what operations on what resources/subresources the webhook cares about. The webhook cares about an operation if it matches _any_ Rule. However, in order to prevent ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks from putting the cluster in a state which cannot be recovered from without completely disabling the plugin, ValidatingAdmissionWebhooks and MutatingAdmissionWebhooks are never called on admission requests for ValidatingWebhookConfiguration and MutatingWebhookConfiguration objects.
* @isArray
*/
rules?: io_k8s_api_admissionregistration_v1_RuleWithOperations[];
/**
* SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.

Possible enum values:
 - `"None"` means that calling the webhook will have no side effects.
 - `"NoneOnDryRun"` means that calling the webhook will possibly have side effects, but if the request being reviewed has the dry-run attribute, the side effects will be suppressed.
 - `"Some"` means that calling the webhook will possibly have side effects. If a request with the dry-run attribute would trigger a call to this webhook, the request will instead fail.
 - `"Unknown"` means that no information is known about the side effects of calling the webhook. If a request with the dry-run attribute would trigger a call to this webhook, the request will instead fail.
* @required
*/
sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown';
}

/**
* Create a new Mutatingwebhook with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_MutatingWebhook instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_MutatingWebhook(data?: Partial<io_k8s_api_admissionregistration_v1_MutatingWebhook>): io_k8s_api_admissionregistration_v1_MutatingWebhook {
 return {
   clientConfig: data?.clientConfig !== undefined ? data.clientConfig : createio_k8s_api_admissionregistration_v1_WebhookClientConfig(),
   failurePolicy: data?.failurePolicy !== undefined ? data.failurePolicy : '',
   matchConditions: data?.matchConditions !== undefined ? data.matchConditions : [],
   matchPolicy: data?.matchPolicy !== undefined ? data.matchPolicy : '',
   name: data?.name !== undefined ? data.name : '',
   objectSelector: data?.objectSelector !== undefined ? data.objectSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   timeoutSeconds: data?.timeoutSeconds !== undefined ? data.timeoutSeconds : 0,
   admissionReviewVersions: data?.admissionReviewVersions !== undefined ? data.admissionReviewVersions : [],
   namespaceSelector: data?.namespaceSelector !== undefined ? data.namespaceSelector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   reinvocationPolicy: data?.reinvocationPolicy !== undefined ? data.reinvocationPolicy : '',
   rules: data?.rules !== undefined ? data.rules : [],
   sideEffects: data?.sideEffects !== undefined ? data.sideEffects : '',
 };
}
// Required imports
import { io_k8s_api_admissionregistration_v1_MatchCondition, createio_k8s_api_admissionregistration_v1_MatchCondition } from '../io.k8s.api.admissionregistration.v1.MatchCondition';
import { io_k8s_api_admissionregistration_v1_RuleWithOperations, createio_k8s_api_admissionregistration_v1_RuleWithOperations } from '../io.k8s.api.admissionregistration.v1.RuleWithOperations';
import { io_k8s_api_admissionregistration_v1_WebhookClientConfig, createio_k8s_api_admissionregistration_v1_WebhookClientConfig } from '../webhookclientconfig/io_k8s_api_admissionregistration_v1_WebhookClientConfig';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
