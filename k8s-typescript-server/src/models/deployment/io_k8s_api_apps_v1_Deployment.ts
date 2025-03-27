/**
* Deployment enables declarative updates for Pods and ReplicaSets.
* @resourceType deployment
* @kind Deployment
*/
export interface io_k8s_api_apps_v1_Deployment {
/**
* Specification of the desired behavior of the Deployment.
* @references io.k8s.api.apps.v1.DeploymentSpec
*/
spec?: io_k8s_api_apps_v1_DeploymentSpec;
/**
* Most recently observed status of the Deployment.
* @references io.k8s.api.apps.v1.DeploymentStatus
*/
status?: io_k8s_api_apps_v1_DeploymentStatus;
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
* Create a new Deployment with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_Deployment instance with defaults applied
*/
export function createio_k8s_api_apps_v1_Deployment(data?: Partial<io_k8s_api_apps_v1_Deployment>): io_k8s_api_apps_v1_Deployment {
 return {
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_apps_v1_DeploymentSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_apps_v1_DeploymentStatus(),
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
 };
}
// Required imports
import { io_k8s_api_apps_v1_DeploymentSpec, createio_k8s_api_apps_v1_DeploymentSpec } from '../deploymentspec/io_k8s_api_apps_v1_DeploymentSpec';
import { io_k8s_api_apps_v1_DeploymentStatus, createio_k8s_api_apps_v1_DeploymentStatus } from '../deploymentstatus/io_k8s_api_apps_v1_DeploymentStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
