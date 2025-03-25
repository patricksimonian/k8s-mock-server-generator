/**
* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
* @resourceType customresourcedefinition
* @kind Customresourcedefinition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { resourceVersion?: string; deletionGracePeriodSeconds?: number; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; generateName?: string; name?: string; namespace?: string; selfLink?: string; labels?: Record<string, any>; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; deletionTimestamp?: Date; finalizers?: string[]; generation?: number; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date };
/**
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
* @required
* @isObject
*/
spec: { conversion?: { strategy: string; webhook?: { clientConfig?: { url?: string; caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number } }; conversionReviewVersions: string[] } }; group: string; names: { kind: string; listKind?: string; plural: string; shortNames?: string[]; singular?: string; categories?: string[] }; preserveUnknownFields?: boolean; scope: string; versions: Array<{ deprecated?: boolean; deprecationWarning?: string; name: string; selectableFields?: Array<{ jsonPath: string }>; subresources?: { scale?: { labelSelectorPath?: string; specReplicasPath: string; statusReplicasPath: string }; status?: Record<string, any> }; additionalPrinterColumns?: Array<{ description?: string; format?: string; jsonPath: string; name: string; priority?: number; type: string }>; schema?: { openAPIV3Schema?: Record<string, any> }; served: boolean; storage: boolean }> };
/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
* @isObject
*/
status?: { storedVersions?: string[]; acceptedNames?: { singular?: string; categories?: string[]; kind: string; listKind?: string; plural: string; shortNames?: string[] }; conditions?: Array<{ reason?: string; status: string; type: string; lastTransitionTime?: Date; message?: string }> };
}

/**
* Create a new Customresourcedefinition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { group: '', names: { kind: '', plural: '' }, scope: '', versions: [] },
   status: data?.status !== undefined ? data.status : {},
 };
}
