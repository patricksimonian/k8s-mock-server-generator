/**
* ReplicaSetList is a collection of ReplicaSets.
* @resourceType replicasetlist
* @kind ReplicasetList
*/
export interface io_k8s_api_apps_v1_ReplicaSetList {
/**
* Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of ReplicaSets. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller
* @required
* @isArray
* @references io.k8s.api.apps.v1.ReplicaSet
*/
items: io_k8s_api_apps_v1_ReplicaSet[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new ReplicasetList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ReplicaSetList instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ReplicaSetList(data?: Partial<io_k8s_api_apps_v1_ReplicaSetList>): io_k8s_api_apps_v1_ReplicaSetList {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_apps_v1_ReplicaSet, createio_k8s_api_apps_v1_ReplicaSet } from '../replicaset/io_k8s_api_apps_v1_ReplicaSet';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ListMeta } from '../listmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ListMeta';
