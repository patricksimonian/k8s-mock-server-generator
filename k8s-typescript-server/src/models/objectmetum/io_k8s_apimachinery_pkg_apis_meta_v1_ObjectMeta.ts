/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @resourceType objectmetum
* @kind Objectmetum
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta {
/**
* CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.

Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
creationTimestamp?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
*/
deletionGracePeriodSeconds?: number;
/**
* An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
*/
resourceVersion?: string;
/**
* Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
*/
selfLink?: string;
/**
* Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
*/
annotations?: Record<string, any>;
/**
* DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.

Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
deletionTimestamp?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
/**
* Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
* @isArray
*/
finalizers?: string[];
/**
* Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
*/
name?: string;
/**
* List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
* @isArray
*/
ownerReferences?: io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference[];
/**
* GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will return a 409.

Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
*/
generateName?: string;
/**
* A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
*/
generation?: number;
/**
* Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
*/
labels?: Record<string, any>;
/**
* ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
* @isArray
*/
managedFields?: io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry[];
/**
* Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
*/
namespace?: string;
/**
* UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
*/
uid?: string;
}

/**
* Create a new Objectmetum with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta>): io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta {
 return {
   creationTimestamp: data?.creationTimestamp !== undefined ? data.creationTimestamp : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   deletionGracePeriodSeconds: data?.deletionGracePeriodSeconds !== undefined ? data.deletionGracePeriodSeconds : 0,
   resourceVersion: data?.resourceVersion !== undefined ? data.resourceVersion : '',
   selfLink: data?.selfLink !== undefined ? data.selfLink : '',
   annotations: data?.annotations !== undefined ? data.annotations : {},
   deletionTimestamp: data?.deletionTimestamp !== undefined ? data.deletionTimestamp : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
   finalizers: data?.finalizers !== undefined ? data.finalizers : [],
   name: data?.name !== undefined ? data.name : '',
   ownerReferences: data?.ownerReferences !== undefined ? data.ownerReferences : [],
   generateName: data?.generateName !== undefined ? data.generateName : '',
   generation: data?.generation !== undefined ? data.generation : 0,
   labels: data?.labels !== undefined ? data.labels : {},
   managedFields: data?.managedFields !== undefined ? data.managedFields : [],
   namespace: data?.namespace !== undefined ? data.namespace : '',
   uid: data?.uid !== undefined ? data.uid : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry, createio_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry } from '../io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry';
import { io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference, createio_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference } from '../io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
