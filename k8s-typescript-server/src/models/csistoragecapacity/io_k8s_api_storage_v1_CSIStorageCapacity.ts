/**
* CSIStorageCapacity stores the result of one CSI GetCapacity call. For a given StorageClass, this describes the available capacity in a particular topology segment.  This can be used when considering where to instantiate new PersistentVolumes.

For example this can express things like: - StorageClass "standard" has "1234 GiB" available in "topology.kubernetes.io/zone=us-east1" - StorageClass "localssd" has "10 GiB" available in "kubernetes.io/hostname=knode-abc123"

The following three cases all imply that no capacity is available for a certain combination: - no object exists with suitable topology and storage class name - such an object exists, but the capacity is unset - such an object exists, but the capacity is zero

The producer of these objects can decide which approach is more suitable.

They are consumed by the kube-scheduler when a CSI driver opts into capacity-aware scheduling with CSIDriverSpec.StorageCapacity. The scheduler compares the MaximumVolumeSize against the requested size of pending volumes to filter out unsuitable nodes. If MaximumVolumeSize is unset, it falls back to a comparison against the less precise Capacity. If that is also unset, the scheduler assumes that capacity is insufficient and tries some other node.
* @resourceType csistoragecapacity
* @kind Csistoragecapacity
*/
export interface io_k8s_api_storage_v1_CSIStorageCapacity {
/**
* storageClassName represents the name of the StorageClass that the reported capacity applies to. It must meet the same requirements as the name of a StorageClass object (non-empty, DNS subdomain). If that object no longer exists, the CSIStorageCapacity object is obsolete and should be removed by its creator. This field is immutable.
* @required
*/
storageClassName: string;
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* capacity is the value reported by the CSI driver in its GetCapacityResponse for a GetCapacityRequest with topology and parameters that match the previous fields.

The semantic is currently (CSI spec 1.2) defined as: The available capacity, in bytes, of the storage that can be used to provision volumes. If not set, that information is currently unavailable.
* @references io.k8s.apimachinery.pkg.api.resource.Quantity
*/
capacity?: io_k8s_apimachinery_pkg_api_resource_Quantity;
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* maximumVolumeSize is the value reported by the CSI driver in its GetCapacityResponse for a GetCapacityRequest with topology and parameters that match the previous fields.

This is defined since CSI spec 1.4.0 as the largest size that may be used in a CreateVolumeRequest.capacity_range.required_bytes field to create a volume with the same parameters as those in GetCapacityRequest. The corresponding value in the Kubernetes API is ResourceRequirements.Requests in a volume claim.
* @references io.k8s.apimachinery.pkg.api.resource.Quantity
*/
maximumVolumeSize?: io_k8s_apimachinery_pkg_api_resource_Quantity;
/**
* Standard object's metadata. The name has no particular meaning. It must be a DNS subdomain (dots allowed, 253 characters). To ensure that there are no conflicts with other CSI drivers on the cluster, the recommendation is to use csisc-<uuid>, a generated name, or a reverse-domain name which ends with the unique CSI driver name.

Objects are namespaced.

More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
* @references io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta
*/
metadata?: io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta;
/**
* nodeTopology defines which nodes have access to the storage for which capacity was reported. If not set, the storage is not accessible from any node in the cluster. If empty, the storage is accessible from all nodes. This field is immutable.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
nodeTopology?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
}

/**
* Create a new Csistoragecapacity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_storage_v1_CSIStorageCapacity instance with defaults applied
*/
export function createio_k8s_api_storage_v1_CSIStorageCapacity(data?: Partial<io_k8s_api_storage_v1_CSIStorageCapacity>): io_k8s_api_storage_v1_CSIStorageCapacity {
 return {
   storageClassName: data?.storageClassName !== undefined ? data.storageClassName : '',
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   capacity: data?.capacity !== undefined ? data.capacity : createio_k8s_apimachinery_pkg_api_resource_Quantity(),
   kind: data?.kind !== undefined ? data.kind : '',
   maximumVolumeSize: data?.maximumVolumeSize !== undefined ? data.maximumVolumeSize : createio_k8s_apimachinery_pkg_api_resource_Quantity(),
   metadata: data?.metadata !== undefined ? data.metadata : createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta(),
   nodeTopology: data?.nodeTopology !== undefined ? data.nodeTopology : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_api_resource_Quantity, createio_k8s_apimachinery_pkg_api_resource_Quantity } from '../quantity/io_k8s_apimachinery_pkg_api_resource_Quantity';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
import { io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta, createio_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta } from '../objectmetum/io_k8s_apimachinery_pkg_apis_meta_v1_ObjectMeta';
