/**
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
* @resourceType flockervolumesource
* @kind Flockervolumesource
*/
export interface io_k8s_api_core_v1_FlockerVolumeSource {
/**
* datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
*/
datasetName?: string;
/**
* datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
*/
datasetUUID?: string;
}

/**
* Create a new Flockervolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_FlockerVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_FlockerVolumeSource(data?: Partial<io_k8s_api_core_v1_FlockerVolumeSource>): io_k8s_api_core_v1_FlockerVolumeSource {
 return {
   datasetName: data?.datasetName !== undefined ? data.datasetName : '',
   datasetUUID: data?.datasetUUID !== undefined ? data.datasetUUID : '',
 };
}
