/**
* StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
* @resourceType storageclass
* @kind Storageclass
*/
export interface io_k8s_api_storage_v1_StorageClass {
/**
* allowVolumeExpansion shows whether the storage class allow volume expand.
*/
allowVolumeExpansion?: boolean;
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
* reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete.

Possible enum values:
 - `"Delete"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.
 - `"Recycle"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.
 - `"Retain"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
*/
reclaimPolicy?: 'Delete' | 'Recycle' | 'Retain';
/**
* volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature.

Possible enum values:
 - `"Immediate"` indicates that PersistentVolumeClaims should be immediately provisioned and bound. This is the default mode.
 - `"WaitForFirstConsumer"` indicates that PersistentVolumeClaims should not be provisioned and bound until the first Pod is created that references the PeristentVolumeClaim. The volume provisioning and binding will occur during Pod scheduing.
*/
volumeBindingMode?: 'Immediate' | 'WaitForFirstConsumer';
/**
* allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature.
* @isArray
*/
allowedTopologies?: io_k8s_api_core_v1_TopologySelectorTerm[];
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. ["ro", "soft"]. Not validated - mount of the PVs will simply fail if one is invalid.
* @isArray
*/
mountOptions?: string[];
/**
* parameters holds the parameters for the provisioner that should create volumes of this storage class.
*/
parameters?: Record<string, any>;
/**
* provisioner indicates the type of the provisioner.
* @required
*/
provisioner: string;
}

/**
* Create a new Storageclass with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_StorageClass instance with defaults applied
*/
export function createio_k8s_api_storage_v1_StorageClass(data?: Partial<io_k8s_api_storage_v1_StorageClass>): io_k8s_api_storage_v1_StorageClass {
 return {
   allowVolumeExpansion: data?.allowVolumeExpansion !== undefined ? data.allowVolumeExpansion : false,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   reclaimPolicy: data?.reclaimPolicy !== undefined ? data.reclaimPolicy : '',
   volumeBindingMode: data?.volumeBindingMode !== undefined ? data.volumeBindingMode : '',
   allowedTopologies: data?.allowedTopologies !== undefined ? data.allowedTopologies : [],
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   mountOptions: data?.mountOptions !== undefined ? data.mountOptions : [],
   parameters: data?.parameters !== undefined ? data.parameters : {},
   provisioner: data?.provisioner !== undefined ? data.provisioner : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_TopologySelectorTerm, createio_k8s_api_core_v1_TopologySelectorTerm } from '../io.k8s.api.core.v1.TopologySelectorTerm';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
