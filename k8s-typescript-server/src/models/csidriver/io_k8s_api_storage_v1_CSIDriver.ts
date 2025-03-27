/**
* CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
* @resourceType csidriver
* @kind Csidriver
*/
export interface io_k8s_api_storage_v1_CSIDriver {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* Standard object metadata. metadata.Name indicates the name of the CSI driver that this object refers to; it MUST be the same name returned by the CSI GetPluginName() call for that driver. The driver name must be 63 characters or less, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), dots (.), and alphanumerics between. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* spec represents the specification of the CSI Driver.
* @required
* @references io.k8s.api.storage.v1.CSIDriverSpec
*/
spec: io_k8s_api_storage_v1_CSIDriverSpec;
}

/**
* Create a new Csidriver with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_CSIDriver instance with defaults applied
*/
export function createio_k8s_api_storage_v1_CSIDriver(data?: Partial<io_k8s_api_storage_v1_CSIDriver>): io_k8s_api_storage_v1_CSIDriver {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_storage_v1_CSIDriverSpec(),
 };
}
// Required imports
import { io_k8s_api_storage_v1_CSIDriverSpec, createio_k8s_api_storage_v1_CSIDriverSpec } from '../csidriverspec/io_k8s_api_storage_v1_CSIDriverSpec';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
