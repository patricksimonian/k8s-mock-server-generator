/**
* StatefulSet represents a set of pods with consistent identities. Identities are defined as:
  - Network: A single stable DNS and hostname.
  - Storage: As many VolumeClaims as requested.

The StatefulSet guarantees that a given network identity will always map to the same storage identity.
* @resourceType statefulset
* @kind Statefulset
*/
export interface io_k8s_api_apps_v1_StatefulSet {
/**
* Spec defines the desired identities of pods in this set.
* @references io.k8s.api.apps.v1.StatefulSetSpec
*/
spec?: io_k8s_api_apps_v1_StatefulSetSpec;
/**
* Status is the current status of Pods in this StatefulSet. This data may be out of date by some window of time.
* @references io.k8s.api.apps.v1.StatefulSetStatus
*/
status?: io_k8s_api_apps_v1_StatefulSetStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
}

/**
* Create a new Statefulset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSet(data?: Partial<io_k8s_api_apps_v1_StatefulSet>): io_k8s_api_apps_v1_StatefulSet {
 return {
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_apps_v1_StatefulSetSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_apps_v1_StatefulSetStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
 };
}
// Required imports
import { io_k8s_api_apps_v1_StatefulSetSpec, createio_k8s_api_apps_v1_StatefulSetSpec } from '../statefulsetspec/io_k8s_api_apps_v1_StatefulSetSpec';
import { io_k8s_api_apps_v1_StatefulSetStatus, createio_k8s_api_apps_v1_StatefulSetStatus } from '../statefulsetstatus/io_k8s_api_apps_v1_StatefulSetStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
