/**
* ObjectReference contains enough information to let you inspect or modify the referred object.
* @resourceType objectreference
* @kind Objectreference
*/
export interface io_k8s_api_core_v1_ObjectReference {
/**
* API version of the referent.
*/
apiVersion?: string;
/**
* If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
*/
fieldPath?: string;
/**
* Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
*/
name?: string;
/**
* Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
*/
namespace?: string;
/**
* Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
*/
resourceVersion?: string;
/**
* UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
*/
uid?: string;
}

/**
* Create a new Objectreference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ObjectReference instance with defaults applied
*/
export function createio_k8s_api_core_v1_ObjectReference(data?: Partial<io_k8s_api_core_v1_ObjectReference>): io_k8s_api_core_v1_ObjectReference {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   fieldPath: data?.fieldPath !== undefined ? data.fieldPath : '',
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
   namespace: data?.namespace !== undefined ? data.namespace : '',
   resourceVersion: data?.resourceVersion !== undefined ? data.resourceVersion : '',
   uid: data?.uid !== undefined ? data.uid : '',
 };
}
