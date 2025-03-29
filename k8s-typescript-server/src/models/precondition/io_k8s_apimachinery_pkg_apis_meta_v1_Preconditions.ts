/**
* Preconditions must be fulfilled before an operation (update, delete, etc.) is carried out.
* @resourceType precondition
* @kind Precondition
*/
export interface io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions {
/**
* Specifies the target ResourceVersion
*/
resourceVersion?: string;
/**
* Specifies the target UID.
*/
uid?: string;
}

/**
* Create a new Precondition with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions instance with defaults applied
*/
export function createio_k8s_apimachinery_pkg_apis_meta_v1_Preconditions(data?: Partial<io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions>): io_k8s_apimachinery_pkg_apis_meta_v1_Preconditions {
 return {
   resourceVersion: data?.resourceVersion !== undefined ? data.resourceVersion : '',
   uid: data?.uid !== undefined ? data.uid : '',
 };
}
