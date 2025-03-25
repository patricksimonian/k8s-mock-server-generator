/**
* volumeDevice describes a mapping of a raw block device within a container.
* @resourceType volumedevice
* @kind Volumedevice
*/
export interface io_k8s_api_core_v1_VolumeDevice {
/**
* devicePath is the path inside of the container that the device will be mapped to.
* @required
*/
devicePath: string;
/**
* name must match the name of a persistentVolumeClaim in the pod
* @required
*/
name: string;
}

/**
* Create a new Volumedevice with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_VolumeDevice instance with defaults applied
*/
export function createio_k8s_api_core_v1_VolumeDevice(data?: Partial<io_k8s_api_core_v1_VolumeDevice>): io_k8s_api_core_v1_VolumeDevice {
 return {
   devicePath: data?.devicePath !== undefined ? data.devicePath : '',
   name: data?.name !== undefined ? data.name : '',
 };
}
