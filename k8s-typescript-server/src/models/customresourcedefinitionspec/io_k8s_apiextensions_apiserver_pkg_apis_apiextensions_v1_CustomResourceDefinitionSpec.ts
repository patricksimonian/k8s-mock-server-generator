/**
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
* @resourceType customresourcedefinitionspec
* @kind Customresourcedefinitionspec
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec {
/**
* group is the API group of the defined custom resource. The custom resources are served under `/apis/<group>/...`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`).
* @required
*/
group: string;
/**
* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
* @required
* @isObject
*/
names: { shortNames?: string[]; singular?: string; categories?: string[]; kind: string; listKind?: string; plural: string };
/**
* preserveUnknownFields indicates that object fields which are not specified in the OpenAPI schema should be preserved when persisting to storage. apiVersion, kind, metadata and known fields inside metadata are always preserved. This field is deprecated in favor of setting `x-preserve-unknown-fields` to true in `spec.versions[*].schema.openAPIV3Schema`. See https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#field-pruning for details.
*/
preserveUnknownFields?: boolean;
/**
* scope indicates whether the defined custom resource is cluster- or namespace-scoped. Allowed values are `Cluster` and `Namespaced`.
* @required
*/
scope: string;
/**
* versions is the list of all API versions of the defined custom resource. Version names are used to compute the order in which served versions are listed in API discovery. If the version string is "kube-like", it will sort above non "kube-like" version strings, which are ordered lexicographically. "Kube-like" versions start with a "v", then are followed by a number (the major version), then optionally the string "alpha" or "beta" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
* @required
* @isArray
*/
versions: Array<{ deprecationWarning?: string; schema?: { openAPIV3Schema?: Record<string, any> }; additionalPrinterColumns?: Array<{ format?: string; jsonPath: string; name: string; priority?: number; type: string; description?: string }>; deprecated?: boolean; name: string; selectableFields?: Array<{ jsonPath: string }>; served: boolean; storage: boolean; subresources?: { scale?: { labelSelectorPath?: string; specReplicasPath: string; statusReplicasPath: string }; status?: Record<string, any> } }>;
/**
* CustomResourceConversion describes how to convert different versions of a CR.
* @isObject
*/
conversion?: { strategy: string; webhook?: { conversionReviewVersions: string[]; clientConfig?: { caBundle?: string; service?: { port?: number; name: string; namespace: string; path?: string }; url?: string } } };
}

/**
* Create a new Customresourcedefinitionspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionSpec {
 return {
   group: data?.group !== undefined ? data.group : '',
   names: data?.names !== undefined ? data.names : { kind: '', plural: '' },
   preserveUnknownFields: data?.preserveUnknownFields !== undefined ? data.preserveUnknownFields : false,
   scope: data?.scope !== undefined ? data.scope : '',
   versions: data?.versions !== undefined ? data.versions : [],
   conversion: data?.conversion !== undefined ? data.conversion : { strategy: '' },
 };
}
