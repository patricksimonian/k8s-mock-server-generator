/**
* ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
* @resourceType controllerrevision
* @kind Controllerrevision
*/
export interface io_k8s_api_apps_v1_ControllerRevision {
/**
* Revision indicates the revision of the state represented by Data.
* @required
*/
revision: number;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* RawExtension is used to hold extensions in external versions.

To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.

// Internal package:

	type MyAPIObject struct {
		runtime.TypeMeta `json:",inline"`
		MyPlugin runtime.Object `json:"myPlugin"`
	}

	type PluginA struct {
		AOption string `json:"aOption"`
	}

// External package:

	type MyAPIObject struct {
		runtime.TypeMeta `json:",inline"`
		MyPlugin runtime.RawExtension `json:"myPlugin"`
	}

	type PluginA struct {
		AOption string `json:"aOption"`
	}

// On the wire, the JSON will look something like this:

	{
		"kind":"MyAPIObject",
		"apiVersion":"v1",
		"myPlugin": {
			"kind":"PluginA",
			"aOption":"foo",
		},
	}

So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
*/
data?: Record<string, any>;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
* @isObject
*/
metadata?: { deletionGracePeriodSeconds?: number; resourceVersion?: string; finalizers?: string[]; generateName?: string; namespace?: string; ownerReferences?: Array<{ blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string; apiVersion: string }>; deletionTimestamp?: Date; managedFields?: Array<{ manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string; fieldsType?: string; fieldsV1?: Record<string, any> }>; selfLink?: string; uid?: string; name?: string; annotations?: Record<string, any>; creationTimestamp?: Date; generation?: number; labels?: Record<string, any> };
}

/**
* Create a new Controllerrevision with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_ControllerRevision instance with defaults applied
*/
export function createio_k8s_api_apps_v1_ControllerRevision(data?: Partial<io_k8s_api_apps_v1_ControllerRevision>): io_k8s_api_apps_v1_ControllerRevision {
 return {
   revision: data?.revision !== undefined ? data.revision : 0,
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   data: data?.data !== undefined ? data.data : {},
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
