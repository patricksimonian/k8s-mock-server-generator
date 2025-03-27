/**
* APIService represents a server for a particular GroupVersion. Name must be "version.group".
* @resourceType apiservice
* @kind Apiservice
*/
export interface io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService {
/**
* Status contains derived information about an API server
* @references io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceStatus
*/
status?: io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus;
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
/**
* Spec contains information for locating and communicating with a server
* @references io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceSpec
*/
spec?: io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec;
}

/**
* Create a new Apiservice with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService instance with defaults applied
*/
export function createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService(data?: Partial<io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService>): io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIService {
 return {
   status: data?.status !== undefined ? data.status : createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
import { io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec, createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec } from '../apiservicespec/io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceSpec';
import { io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus, createio_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus } from '../apiservicestatus/io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus';
