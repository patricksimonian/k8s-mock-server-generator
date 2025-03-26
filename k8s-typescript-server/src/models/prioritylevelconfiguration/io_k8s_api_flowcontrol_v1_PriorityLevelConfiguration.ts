/**
* PriorityLevelConfiguration represents the configuration of a priority level.
* @resourceType prioritylevelconfiguration
* @kind Prioritylevelconfiguration
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* `metadata` is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* `spec` is the specification of the desired behavior of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationSpec
*/
spec?: io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec;
/**
* `status` is the current status of a "request-priority". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationStatus
*/
status?: io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus;
}

/**
* Create a new Prioritylevelconfiguration with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfiguration(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration>): io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus(),
 };
}
// Required imports
import { io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec, createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec } from '../prioritylevelconfigurationspec/io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec';
import { io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus, createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus } from '../prioritylevelconfigurationstatus/io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
