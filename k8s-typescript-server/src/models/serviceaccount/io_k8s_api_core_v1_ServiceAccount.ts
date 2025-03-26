/**
* ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
* @resourceType serviceaccount
* @kind Serviceaccount
*/
export interface io_k8s_api_core_v1_ServiceAccount {
/**
* AutomountServiceAccountToken indicates whether pods running as this service account should have an API token automatically mounted. Can be overridden at the pod level.
*/
automountServiceAccountToken?: boolean;
/**
* ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod
* @isArray
*/
imagePullSecrets?: Array<{ name?: string }>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { creationTimestamp?: Date; uid?: string; deletionTimestamp?: Date; generateName?: string; name?: string; namespace?: string; annotations?: Record<string, any>; finalizers?: string[]; generation?: number; labels?: Record<string, any>; selfLink?: string; deletionGracePeriodSeconds?: number; managedFields?: Array<{ operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string }>; ownerReferences?: Array<{ uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string }>; resourceVersion?: string };
/**
* Secrets is a list of the secrets in the same namespace that pods running using this ServiceAccount are allowed to use. Pods are only limited to this list if this service account has a "kubernetes.io/enforce-mountable-secrets" annotation set to "true". The "kubernetes.io/enforce-mountable-secrets" annotation is deprecated since v1.32. Prefer separate namespaces to isolate access to mounted secrets. This field should not be used to find auto-generated service account token secrets for use outside of pods. Instead, tokens can be requested directly using the TokenRequest API, or service account token secrets can be manually created. More info: https://kubernetes.io/docs/concepts/configuration/secret
* @isArray
*/
secrets?: Array<{ resourceVersion?: string; uid?: string; apiVersion?: string; fieldPath?: string; kind?: string; name?: string; namespace?: string }>;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Serviceaccount with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ServiceAccount instance with defaults applied
*/
export function createio_k8s_api_core_v1_ServiceAccount(data?: Partial<io_k8s_api_core_v1_ServiceAccount>): io_k8s_api_core_v1_ServiceAccount {
 return {
   automountServiceAccountToken: data?.automountServiceAccountToken !== undefined ? data.automountServiceAccountToken : false,
   imagePullSecrets: data?.imagePullSecrets !== undefined ? data.imagePullSecrets : [],
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   secrets: data?.secrets !== undefined ? data.secrets : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
