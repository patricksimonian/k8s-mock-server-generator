/**
* FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
* @resourceType flowschema
* @kind Flowschema
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchema {
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { generateName?: string; labels?: Record<string, any>; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; deletionGracePeriodSeconds?: number; deletionTimestamp?: Date; resourceVersion?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }>; uid?: string; annotations?: Record<string, any>; creationTimestamp?: Date; namespace?: string; selfLink?: string; finalizers?: string[]; generation?: number; name?: string };
/**
* FlowSchemaSpec describes how the FlowSchema's specification looks like.
* @isObject
*/
spec?: { distinguisherMethod?: { type: string }; matchingPrecedence?: number; priorityLevelConfiguration: { name: string }; rules?: Array<{ nonResourceRules?: Array<{ verbs: string[]; nonResourceURLs: string[] }>; resourceRules?: Array<{ apiGroups: string[]; clusterScope?: boolean; namespaces?: string[]; resources: string[]; verbs: string[] }>; subjects: Array<{ group?: { name: string }; kind: string; serviceAccount?: { name: string; namespace: string }; user?: { name: string } }> }> };
/**
* FlowSchemaStatus represents the current state of a FlowSchema.
* @isObject
*/
status?: { conditions?: Array<{ reason?: string; status?: string; type?: string; lastTransitionTime?: Date; message?: string }> };
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
}

/**
* Create a new Flowschema with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_FlowSchema instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchema(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchema>): io_k8s_api_flowcontrol_v1_FlowSchema {
 return {
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { priorityLevelConfiguration: { name: '' } },
   status: data?.status !== undefined ? data.status : {},
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
