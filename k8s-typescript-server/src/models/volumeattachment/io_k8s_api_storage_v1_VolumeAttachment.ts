/**
* VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
* @resourceType volumeattachment
* @kind Volumeattachment
*/
export interface io_k8s_api_storage_v1_VolumeAttachment {
/**
* VolumeAttachmentStatus is the status of a VolumeAttachment request.
* @isObject
*/
status?: { attachmentMetadata?: Record<string, any>; detachError?: { message?: string; time?: Date }; attachError?: { message?: string; time?: Date }; attached: boolean };
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
metadata?: { annotations?: Record<string, any>; creationTimestamp?: Date; generateName?: string; name?: string; namespace?: string; deletionTimestamp?: Date; finalizers?: string[]; labels?: Record<string, any>; managedFields?: Array<{ fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string }>; resourceVersion?: string; deletionGracePeriodSeconds?: number; generation?: number; selfLink?: string; uid?: string; ownerReferences?: Array<{ name: string; uid: string; apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string }> };
/**
* VolumeAttachmentSpec is the specification of a VolumeAttachment request.
* @required
* @isObject
*/
spec: { attacher: string; nodeName: string; source: { inlineVolumeSpec?: Record<string, any>; persistentVolumeName?: string } };
}

/**
* Create a new Volumeattachment with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_VolumeAttachment instance with defaults applied
*/
export function createio_k8s_api_storage_v1_VolumeAttachment(data?: Partial<io_k8s_api_storage_v1_VolumeAttachment>): io_k8s_api_storage_v1_VolumeAttachment {
 return {
   status: data?.status !== undefined ? data.status : { attached: false },
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
   spec: data?.spec !== undefined ? data.spec : { attacher: '', nodeName: '', source: {} },
 };
}
