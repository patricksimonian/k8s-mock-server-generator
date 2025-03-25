/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
* @resourceType azurefilevolumesource
* @kind Azurefilevolumesource
*/
export interface io_k8s_api_core_v1_AzureFileVolumeSource {
/**
* shareName is the azure share Name
* @required
*/
shareName: string;
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* secretName is the  name of secret that contains Azure Storage Account Name and Key
* @required
*/
secretName: string;
}

/**
* Create a new Azurefilevolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_AzureFileVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_AzureFileVolumeSource(data?: Partial<io_k8s_api_core_v1_AzureFileVolumeSource>): io_k8s_api_core_v1_AzureFileVolumeSource {
 return {
   shareName: data?.shareName !== undefined ? data.shareName : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretName: data?.secretName !== undefined ? data.secretName : '',
 };
}
