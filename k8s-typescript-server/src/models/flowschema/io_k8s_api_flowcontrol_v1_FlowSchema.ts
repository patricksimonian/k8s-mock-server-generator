/**
* FlowSchema defines the schema of a group of flows. Note that a flow is made up of a set of inbound API requests with similar attributes and is identified by a pair of strings: the name of the FlowSchema and a "flow distinguisher".
* @resourceType flowschema
* @kind Flowschema
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchema {
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
* `spec` is the specification of the desired behavior of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.flowcontrol.v1.FlowSchemaSpec
*/
spec?: io_k8s_api_flowcontrol_v1_FlowSchemaSpec;
/**
* `status` is the current status of a FlowSchema. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
* @references io.k8s.api.flowcontrol.v1.FlowSchemaStatus
*/
status?: io_k8s_api_flowcontrol_v1_FlowSchemaStatus;
}

/**
* Create a new Flowschema with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_FlowSchema instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchema(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchema>): io_k8s_api_flowcontrol_v1_FlowSchema {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   spec: data?.spec !== undefined ? data.spec : createio_k8s_api_flowcontrol_v1_FlowSchemaSpec(),
   status: data?.status !== undefined ? data.status : createio_k8s_api_flowcontrol_v1_FlowSchemaStatus(),
 };
}
// Required imports
import { io_k8s_api_flowcontrol_v1_FlowSchemaSpec, createio_k8s_api_flowcontrol_v1_FlowSchemaSpec } from '../flowschemaspec/io_k8s_api_flowcontrol_v1_FlowSchemaSpec';
import { io_k8s_api_flowcontrol_v1_FlowSchemaStatus, createio_k8s_api_flowcontrol_v1_FlowSchemaStatus } from '../flowschemastatus/io_k8s_api_flowcontrol_v1_FlowSchemaStatus';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
