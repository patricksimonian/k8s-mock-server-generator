/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
* @resourceType azurefilepersistentvolumesource
* @kind Azurefilepersistentvolumesource
*/
export interface io_k8s_api_core_v1_AzureFilePersistentVolumeSource {
/**
* shareName is the azure Share Name
* @required
*/
shareName: string;
/**
* readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
*/
readOnly?: boolean;
/**
* secretName is the name of secret that contains Azure Storage Account Name and Key
* @required
*/
secretName: string;
/**
* secretNamespace is the namespace of the secret that contains Azure Storage Account Name and Key default is the same as the Pod
*/
secretNamespace?: string;
}

/**
* Create a new Azurefilepersistentvolumesource with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_AzureFilePersistentVolumeSource instance with defaults applied
*/
export function createio_k8s_api_core_v1_AzureFilePersistentVolumeSource(data?: Partial<io_k8s_api_core_v1_AzureFilePersistentVolumeSource>): io_k8s_api_core_v1_AzureFilePersistentVolumeSource {
 return {
   shareName: data?.shareName !== undefined ? data.shareName : '',
   readOnly: data?.readOnly !== undefined ? data.readOnly : false,
   secretName: data?.secretName !== undefined ? data.secretName : '',
   secretNamespace: data?.secretNamespace !== undefined ? data.secretNamespace : '',
 };
}
