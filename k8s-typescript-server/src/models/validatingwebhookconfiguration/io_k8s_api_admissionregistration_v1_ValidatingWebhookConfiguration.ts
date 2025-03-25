/**
* ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
* @resourceType validatingwebhookconfiguration
* @kind Validatingwebhookconfiguration
*/
export interface io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
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
metadata?: { generateName?: string; generation?: number; managedFields?: Array<{ apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date }>; resourceVersion?: string; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; finalizers?: string[]; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; selfLink?: string; labels?: Record<string, any>; name?: string; namespace?: string };
/**
* Webhooks is a list of webhooks and the affected resources and operations.
* @isArray
*/
webhooks?: Array<{ sideEffects: 'None' | 'NoneOnDryRun' | 'Some' | 'Unknown'; admissionReviewVersions: string[]; clientConfig: { url?: string; caBundle?: string; service?: { path?: string; port?: number; name: string; namespace: string } }; failurePolicy?: 'Fail' | 'Ignore'; name: string; namespaceSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; rules?: Array<{ apiGroups?: string[]; apiVersions?: string[]; operations?: '*' | 'CONNECT' | 'CREATE' | 'DELETE' | 'UPDATE'[]; resources?: string[]; scope?: string }>; matchConditions?: Array<{ name: string; expression: string }>; matchPolicy?: 'Equivalent' | 'Exact'; objectSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; timeoutSeconds?: number }>;
}

/**
* Create a new Validatingwebhookconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration(data?: Partial<io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration>): io_k8s_api_admissionregistration_v1_ValidatingWebhookConfiguration {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   webhooks: data?.webhooks !== undefined ? data.webhooks : [],
 };
}
