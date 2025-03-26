/**
* Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
* @resourceType emptydirvolumesource
* @kind Emptydirvolumesource
*/
export interface io_k8s_api_core_v1_EmptyDirVolumeSource {
/**
* sizeLimit is the total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
* @references io.k8s.apimachinery.pkg.api.resource.Quantity
*/
sizeLimit?: io_k8s_apimachinery_pkg_api_resource_Quantity;
/**
* medium represents what type of storage medium should back this directory. The default is "" which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
*/
medium?: string;
}

/**
* Create a new Emptydirvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_EmptyDirVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_EmptyDirVolumeSource(data?: Partial<io_k8s_api_core_v1_EmptyDirVolumeSource>): io_k8s_api_core_v1_EmptyDirVolumeSource {
 return {
   sizeLimit: data?.sizeLimit !== undefined ? data.sizeLimit : createio_k8s_apimachinery_pkg_api_resource_Quantity(),
   medium: data?.medium !== undefined ? data.medium : '',
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_api_resource_Quantity, createio_k8s_apimachinery_pkg_api_resource_Quantity } from '../quantity/io_k8s_apimachinery_pkg_api_resource_Quantity';
