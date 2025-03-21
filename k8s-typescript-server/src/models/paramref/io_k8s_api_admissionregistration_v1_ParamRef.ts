/**
* ParamRef describes how to locate the params to be used as input to expressions of rules applied by a policy binding.
* @resourceType paramref
* @kind Paramref
*/
export interface io_k8s_api_admissionregistration_v1_ParamRef {
/**
* `parameterNotFoundAction` controls the behavior of the binding when the resource exists, and name or selector is valid, but there are no parameters matched by the binding. If the value is set to `Allow`, then no matched parameters will be treated as successful validation by the binding. If set to `Deny`, then no matched parameters will be subject to the `failurePolicy` of the policy.

Allowed values are `Allow` or `Deny`

Required
*/
parameterNotFoundAction?: string;
/**
* A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.
* @isObject
*/
selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> };
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
}

/**
* Create a new Paramref with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ParamRef instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ParamRef(data?: Partial<io_k8s_api_admissionregistration_v1_ParamRef>): io_k8s_api_admissionregistration_v1_ParamRef {
 return {
   parameterNotFoundAction: data?.parameterNotFoundAction !== undefined ? data.parameterNotFoundAction : '',
   selector: data?.selector !== undefined ? data.selector : {},
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
 };
}
