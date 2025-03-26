/**
* ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.
* @resourceType paramref
* @kind Paramref
*/
export interface io_k8s_api_admissionregistration_v1_ParamRef {
/**
* name is the name of the resource being referenced.

One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.

A single parameter used for all admission requests can be configured by setting the `name` field, leaving `selector` blank, and setting namespace if `paramKind` is namespace-scoped.
*/
name?: string;
/**
* namespace is the namespace of the referenced resource. Allows limiting the search for params to a specific namespace. Applies to both `name` and `selector` fields.

A per-namespace parameter may be used by specifying a namespace-scoped `paramKind` in the policy and leaving this field empty.

- If `paramKind` is cluster-scoped, this field MUST be unset. Setting this field results in a configuration error.

- If `paramKind` is namespace-scoped, the namespace of the object being evaluated for admission will be used when this field is left unset. Take care that if this is left empty the binding must not match any cluster-scoped resources, which will result in an error.
*/
namespace?: string;
/**
* `parameterNotFoundAction` controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.

Allowed values are `Allow` or `Deny`

Required
*/
parameterNotFoundAction?: string;
/**
* selector can be used to match multiple param objects based on their labels. Supply selector: {} to match all resources of the ParamKind.

If multiple params are found, they are all evaluated with the policy expressions and the results are ANDed together.

One of `name` or `selector` must be set, but `name` and `selector` are mutually exclusive properties. If one is set, the other must be unset.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
selector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
}

/**
* Create a new Paramref with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ParamRef instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ParamRef(data?: Partial<io_k8s_api_admissionregistration_v1_ParamRef>): io_k8s_api_admissionregistration_v1_ParamRef {
 return {
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
   parameterNotFoundAction: data?.parameterNotFoundAction !== undefined ? data.parameterNotFoundAction : '',
   selector: data?.selector !== undefined ? data.selector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
