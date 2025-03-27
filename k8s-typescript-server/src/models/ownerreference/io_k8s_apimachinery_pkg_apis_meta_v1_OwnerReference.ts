/**
* OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
* @resourceType ownerreference
* @kind Ownerreference
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference {
/**
* API version of the referent.
* @required
*/
apiVersion: string;
/**
* If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
*/
blockOwnerDeletion?: boolean;
/**
* If true, this reference points to the managing controller.
*/
controller?: boolean;
/**
* Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* @required
*/
kind: string;
/**
* Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
* @required
*/
name: string;
/**
* UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
* @required
*/
uid: string;
}

/**
* Create a new Ownerreference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference>): io_k8s_apimachinery_pkg_apis_meta_v1_OwnerReference {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   blockOwnerDeletion: data?.blockOwnerDeletion !== undefined ? data.blockOwnerDeletion : false,
   controller: data?.controller !== undefined ? data.controller : false,
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
   uid: data?.uid !== undefined ? data.uid : '',
 };
}
