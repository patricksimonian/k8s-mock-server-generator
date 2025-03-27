/**
* DaemonSet represents the configuration of a daemon set.
* @resourceType daemonset
* @kind Daemonset
*/
export interface io_k8s_api_apps_v1_DaemonSet {
/**
* Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* The desired behavior of this daemon set. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.apps.v1.DaemonSetSpec
*/
spec?: io_k8s_api_apps_v1_DaemonSetSpec;
/**
* The current status of this daemon set. This data may be out of date by some window of time. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.apps.v1.DaemonSetStatus
*/
status?: io_k8s_api_apps_v1_DaemonSetStatus;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
}

/**
* Create a new Daemonset with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_DaemonSet instance with defaults applied
*/
export function createio_k8s_api_apps_v1_DaemonSet(data?: Partial<io_k8s_api_apps_v1_DaemonSet>): io_k8s_api_apps_v1_DaemonSet {
 return {
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_apps_v1_DaemonSetSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_apps_v1_DaemonSetStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
// Required imports
import { io_k8s_api_apps_v1_DaemonSetSpec, createio_k8s_api_apps_v1_DaemonSetSpec } from '../daemonsetspec/io_k8s_api_apps_v1_DaemonSetSpec';
import { io_k8s_api_apps_v1_DaemonSetStatus, createio_k8s_api_apps_v1_DaemonSetStatus } from '../daemonsetstatus/io_k8s_api_apps_v1_DaemonSetStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
