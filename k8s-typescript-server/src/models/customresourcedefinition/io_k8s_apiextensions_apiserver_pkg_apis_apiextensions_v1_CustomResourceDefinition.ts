/**
* CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
* @resourceType customresourcedefinition
* @kind Customresourcedefinition
*/
export interface io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
/**
* CustomResourceDefinitionSpec describes how a user wants their resource to appear
* @required
* @isObject
*/
spec: { names: { categories?: string[]; kind: string; listKind?: string; plural: string; shortNames?: string[]; singular?: string }; preserveUnknownFields?: boolean; scope: string; versions: Array<{ served: boolean; storage: boolean; additionalPrinterColumns?: Array<{ description?: string; format?: string; jsonPath: string; name: string; priority?: number; type: string }>; deprecated?: boolean; schema?: { openAPIV3Schema?: Record<string, any> }; selectableFields?: Array<{ jsonPath: string }>; deprecationWarning?: string; name: string; subresources?: { status?: Record<string, any>; scale?: { labelSelectorPath?: string; specReplicasPath: string; statusReplicasPath: string } } }>; conversion?: { strategy: string; webhook?: { clientConfig?: { caBundle?: string; service?: { name: string; namespace: string; path?: string; port?: number }; url?: string }; conversionReviewVersions: string[] } }; group: string };
/**
* CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition
* @isObject
*/
status?: { storedVersions?: string[]; acceptedNames?: { listKind?: string; plural: string; shortNames?: string[]; singular?: string; categories?: string[]; kind: string }; conditions?: Array<{ lastTransitionTime?: Date; message?: string; reason?: string; status: string; type: string }> };
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
metadata?: { generation?: number; labels?: Record<string, any>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; annotations?: Record<string, any>; deletionGracePeriodSeconds?: number; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; selfLink?: string; name?: string; resourceVersion?: string; uid?: string; creationTimestamp?: Date; deletionTimestamp?: Date; finalizers?: string[]; generateName?: string; namespace?: string };
}

/**
* Create a new Customresourcedefinition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition instance with defaults applied
*/
export function createio_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition(data?: Partial<io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition>): io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinition {
 return {
   spec: data?.spec !== undefined ? data.spec : { names: { kind: '', plural: '' }, scope: '', versions: [], group: '' },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
