/**
* ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
* @resourceType managedfieldsentry
* @kind Managedfieldsentry
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry {
/**
* FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
*/
fieldsType?: string;
/**
* FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.

Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.

The exact format is defined in sigs.k8s.io/structured-merge-diff
*/
fieldsV1?: Record<string, any>;
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
* Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
*/
time?: Date;
/**
* APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
*/
apiVersion?: string;
}

/**
* Create a new Managedfieldsentry with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry>): io_k8s_apimachinery_pkg_apis_meta_v1_ManagedFieldsEntry {
 return {
   fieldsType: data?.fieldsType !== undefined ? data.fieldsType : '',
   fieldsV1: data?.fieldsV1 !== undefined ? data.fieldsV1 : {},
   manager: data?.manager !== undefined ? data.manager : '',
   operation: data?.operation !== undefined ? data.operation : '',
   subresource: data?.subresource !== undefined ? data.subresource : '',
   time: data?.time !== undefined ? data.time : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
 };
}
