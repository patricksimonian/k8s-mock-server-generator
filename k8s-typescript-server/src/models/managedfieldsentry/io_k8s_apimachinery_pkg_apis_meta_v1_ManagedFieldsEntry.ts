/**
* ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
* @resourceType managedfieldsentry
* @kind Managedfieldsentry
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry {
/**
* APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
*/
apiVersion?: string;
/**
* FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
*/
fieldsType?: string;
/**
* FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1
*/
fieldsV1?: io_k8s_apimachinery_pkg_apis_meta_v1_FieldsV1;
/**
* Manager is an identifier of the workflow managing these fields.
*/
manager?: string;
/**
* Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
*/
operation?: string;
/**
* Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
*/
subresource?: string;
/**
* Time is the timestamp of when the ManagedFields entry was added. The timestamp will also be updated if a field is added, the manager changes any of the owned fields value or removes a field. The timestamp does not update when a field is removed from the entry because another manager took it over.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.Time
*/
time?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
}

/**
* Create a new Managedfieldsentry with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry>): io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   fieldsType: data?.fieldsType !== undefined ? data.fieldsType : '',
   fieldsV1: data?.fieldsV1 !== undefined ? data.fieldsV1 : createio_k8s_apimachinery_pkg_apis_meta_v1_FieldsV1(),
   manager: data?.manager !== undefined ? data.manager : '',
   operation: data?.operation !== undefined ? data.operation : '',
   subresource: data?.subresource !== undefined ? data.subresource : '',
   time: data?.time !== undefined ? data.time : createio_k8s_apimachinery_pkg_apis_meta_v1_Time(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_FieldsV1, createio_k8s_apimachinery_pkg_apis_meta_v1_FieldsV1 } from '../fieldsv1/io_k8s_apimachinery_pkg_apis_meta_v1_FieldsV1';
import { io_k8s_apimachinery_pkg_apis_meta_v1_Time, createio_k8s_apimachinery_pkg_apis_meta_v1_Time } from '../time/io_k8s_apimachinery_pkg_apis_meta_v1_Time';
