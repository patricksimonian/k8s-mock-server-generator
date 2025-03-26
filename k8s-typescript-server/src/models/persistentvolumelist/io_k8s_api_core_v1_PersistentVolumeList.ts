/**
* PersistentVolumeList is a list of PersistentVolume items.
* @resourceType persistentvolumelist
* @kind PersistentvolumeList
*/
export interface io_k8s_api_core_v1_PersistentVolumeList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* items is a list of persistent volumes. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
* @required
* @isArray
* @references io.k8s.api.core.v1.PersistentVolume
*/
items: io_k8s_api_core_v1_PersistentVolume[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new PersistentvolumeList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeList instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeList(data?: Partial<io_k8s_api_core_v1_PersistentVolumeList>): io_k8s_api_core_v1_PersistentVolumeList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_core_v1_PersistentVolume, createio_k8s_api_core_v1_PersistentVolume } from '../persistentvolume/io_k8s_api_core_v1_PersistentVolume';
