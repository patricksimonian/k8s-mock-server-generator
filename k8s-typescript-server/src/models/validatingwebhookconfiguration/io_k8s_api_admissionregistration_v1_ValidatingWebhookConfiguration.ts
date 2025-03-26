/**
* ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
* @resourceType validatingwebhookconfiguration
* @kind Validatingwebhookconfiguration
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { finalizers?: string[]; generation?: number; uid?: string; annotations?: Record<string, any>; deletionTimestamp?: Date; name?: string; resourceVersion?: string; deletionGracePeriodSeconds?: number; generateName?: string; managedFields?: Array<{ time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string }>; namespace?: string; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; selfLink?: string; creationTimestamp?: Date; labels?: Record<string, any> };
/**
* Webhooks is a list of webhooks and the affected resources and operations.
* @isArray
*/
webhooks?: Array<{ timeoutSeconds?: number; clientConfig: { service?: { port?: number; name: string; namespace: string; path?: string }; url?: string; caBundle?: string }; matchConditions?: Array<{ expression: string; name: string }>; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name: string; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; rules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string }>; sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; admissionReviewVersions: string[]; failurePolicy?: 'Fail' | 'Ignore'; matchPolicy?: 'Equivalent' | 'Exact' }>;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Validatingwebhookconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : {},
   webhooks: data?.webhooks !== undefined ? data.webhooks : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
