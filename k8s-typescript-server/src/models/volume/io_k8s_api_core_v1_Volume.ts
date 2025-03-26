/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
* @resourceType volume
* @kind Volume
*/
export interface io_k8s_api_core_v1_Volume {
/**
* AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
* @isObject
*/
azureFile?: { readOnly?: boolean; secretName: string; shareName: string };
/**
* Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
nfs?: { path: string; readOnly?: boolean; server: string };
/**
* Represents a projected volume source
* @isObject
*/
projected?: { defaultMode?: number; sources?: Array<{ clusterTrustBundle?: { name?: string; optional?: boolean; path: string; signerName?: string; labelSelector?: { matchLabels?: Record<string, any>; matchExpressions?: Array<{ key: string; operator: string; values?: string[] }> } }; configMap?: { name?: string; optional?: boolean; items?: Array<{ key: string; mode?: number; path: string }> }; downwardAPI?: { items?: Array<{ fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number; path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string } }> }; secret?: { items?: Array<{ path: string; key: string; mode?: number }>; name?: string; optional?: boolean }; serviceAccountToken?: { audience?: string; expirationSeconds?: number; path: string } }> };
/**
* Represents an ephemeral volume that is handled by a normal storage driver.
* @isObject
*/
ephemeral?: { volumeClaimTemplate?: { metadata?: { uid?: string; namespace?: string; resourceVersion?: string; name?: string; selfLink?: string; creationTimestamp?: Date; deletionGracePeriodSeconds?: number; generation?: number; managedFields?: Array<{ fieldsType?: string; fieldsV1?: Record<string, any>; manager?: string; operation?: string; subresource?: string; time?: Date; apiVersion?: string }>; finalizers?: string[]; generateName?: string; labels?: Record<string, any>; ownerReferences?: Array<{ apiVersion: string; blockOwnerDeletion?: boolean; controller?: boolean; kind: string; name: string; uid: string }>; annotations?: Record<string, any>; deletionTimestamp?: Date }; spec: { dataSourceRef?: { apiGroup?: string; kind: string; name: string; namespace?: string }; resources?: { limits?: Record<string, any>; requests?: Record<string, any> }; volumeName?: string; accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[]; dataSource?: { apiGroup?: string; kind: string; name: string }; selector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; storageClassName?: string; volumeAttributesClassName?: string; volumeMode?: 'Block' | 'Filesystem' } } };
/**
* Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
flocker?: { datasetName?: string; datasetUUID?: string };
/**
* Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
glusterfs?: { endpoints: string; path: string; readOnly?: boolean };
/**
* PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).
* @isObject
*/
persistentVolumeClaim?: { claimName: string; readOnly?: boolean };
/**
* Represents a StorageOS persistent volume resource.
* @isObject
*/
storageos?: { fsType?: string; readOnly?: boolean; secretRef?: { name?: string }; volumeName?: string; volumeNamespace?: string };
/**
* DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.
* @isObject
*/
downwardAPI?: { items?: Array<{ fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number; path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string } }>; defaultMode?: number };
/**
* ImageVolumeSource represents a image volume resource.
* @isObject
*/
image?: { pullPolicy?: 'Always' | 'IfNotPresent' | 'Never'; reference?: string };
/**
* Represents a Photon Controller persistent disk resource.
* @isObject
*/
photonPersistentDisk?: { fsType?: string; pdID: string };
/**
* ScaleIOVolumeSource represents a persistent ScaleIO volume
* @isObject
*/
scaleIO?: { gateway: string; protectionDomain?: string; readOnly?: boolean; sslEnabled?: boolean; storagePool?: string; system: string; volumeName?: string; fsType?: string; secretRef: { name?: string }; storageMode?: string };
/**
* Represents a Persistent Disk resource in AWS.

An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.
* @isObject
*/
awsElasticBlockStore?: { volumeID: string; fsType?: string; partition?: number; readOnly?: boolean };
/**
* Adapts a ConfigMap into a volume.

The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.
* @isObject
*/
configMap?: { defaultMode?: number; items?: Array<{ key: string; mode?: number; path: string }>; name?: string; optional?: boolean };
/**
* FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
* @isObject
*/
flexVolume?: { driver: string; fsType?: string; options?: Record<string, any>; readOnly?: boolean; secretRef?: { name?: string } };
/**
* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
* @isObject
*/
iscsi?: { initiatorName?: string; lun: number; readOnly?: boolean; targetPortal: string; chapAuthDiscovery?: boolean; chapAuthSession?: boolean; fsType?: string; iqn: string; iscsiInterface?: string; portals?: string[]; secretRef?: { name?: string } };
/**
* Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.
* @isObject
*/
emptyDir?: { medium?: string; sizeLimit?: string };
/**
* Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.
* @isObject
*/
fc?: { targetWWNs?: string[]; wwids?: string[]; fsType?: string; lun?: number; readOnly?: boolean };
/**
* Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.

DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
* @isObject
*/
gitRepo?: { directory?: string; repository: string; revision?: string };
/**
* Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.
* @isObject
*/
rbd?: { readOnly?: boolean; secretRef?: { name?: string }; user?: string; fsType?: string; image: string; keyring?: string; monitors: string[]; pool?: string };
/**
* Adapts a Secret into a volume.

The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.
* @isObject
*/
secret?: { secretName?: string; defaultMode?: number; items?: Array<{ path: string; key: string; mode?: number }>; optional?: boolean };
/**
* Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
cephfs?: { monitors: string[]; path?: string; readOnly?: boolean; secretFile?: string; secretRef?: { name?: string }; user?: string };
/**
* Represents a source location of a volume to mount, managed by an external CSI driver
* @isObject
*/
csi?: { driver: string; fsType?: string; nodePublishSecretRef?: { name?: string }; readOnly?: boolean; volumeAttributes?: Record<string, any> };
/**
* PortworxVolumeSource represents a Portworx volume resource.
* @isObject
*/
portworxVolume?: { fsType?: string; readOnly?: boolean; volumeID: string };
/**
* Represents a vSphere volume resource.
* @isObject
*/
vsphereVolume?: { fsType?: string; storagePolicyID?: string; storagePolicyName?: string; volumePath: string };
/**
* name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
* @required
*/
name: string;
/**
* Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
quobyte?: { readOnly?: boolean; registry: string; tenant?: string; user?: string; volume: string; group?: string };
/**
* AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
* @isObject
*/
azureDisk?: { diskURI: string; fsType?: string; kind?: 'Dedicated' | 'Managed' | 'Shared'; readOnly?: boolean; cachingMode?: 'None' | 'ReadOnly' | 'ReadWrite'; diskName: string };
/**
* Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.
* @isObject
*/
cinder?: { fsType?: string; readOnly?: boolean; secretRef?: { name?: string }; volumeID: string };
/**
* Represents a Persistent Disk resource in Google Compute Engine.

A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.
* @isObject
*/
gcePersistentDisk?: { fsType?: string; partition?: number; pdName: string; readOnly?: boolean };
/**
* Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
* @isObject
*/
hostPath?: { path: string; type?: '' | 'BlockDevice' | 'CharDevice' | 'Directory' | 'DirectoryOrCreate' | 'File' | 'FileOrCreate' | 'Socket' };
}

/**
* Create a new Volume with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Volume instance with defaults applied
*/
export function createio_k8s_api_core_v1_Volume(data?: Partial<io_k8s_api_core_v1_Volume>): io_k8s_api_core_v1_Volume {
 return {
   azureFile: data?.azureFile !== undefined ? data.azureFile : { secretName: '', shareName: '' },
   nfs: data?.nfs !== undefined ? data.nfs : { server: '', path: '' },
   projected: data?.projected !== undefined ? data.projected : {},
   ephemeral: data?.ephemeral !== undefined ? data.ephemeral : {},
   flocker: data?.flocker !== undefined ? data.flocker : {},
   glusterfs: data?.glusterfs !== undefined ? data.glusterfs : { endpoints: '', path: '' },
   persistentVolumeClaim: data?.persistentVolumeClaim !== undefined ? data.persistentVolumeClaim : { claimName: '' },
   storageos: data?.storageos !== undefined ? data.storageos : {},
   downwardAPI: data?.downwardAPI !== undefined ? data.downwardAPI : {},
   image: data?.image !== undefined ? data.image : {},
   photonPersistentDisk: data?.photonPersistentDisk !== undefined ? data.photonPersistentDisk : { pdID: '' },
   scaleIO: data?.scaleIO !== undefined ? data.scaleIO : { system: '', gateway: '', secretRef: {} },
   awsElasticBlockStore: data?.awsElasticBlockStore !== undefined ? data.awsElasticBlockStore : { volumeID: '' },
   configMap: data?.configMap !== undefined ? data.configMap : {},
   flexVolume: data?.flexVolume !== undefined ? data.flexVolume : { driver: '' },
   iscsi: data?.iscsi !== undefined ? data.iscsi : { lun: 0, targetPortal: '', iqn: '' },
   emptyDir: data?.emptyDir !== undefined ? data.emptyDir : {},
   fc: data?.fc !== undefined ? data.fc : {},
   gitRepo: data?.gitRepo !== undefined ? data.gitRepo : { repository: '' },
   rbd: data?.rbd !== undefined ? data.rbd : { image: '', monitors: [] },
   secret: data?.secret !== undefined ? data.secret : {},
   cephfs: data?.cephfs !== undefined ? data.cephfs : { monitors: [] },
   csi: data?.csi !== undefined ? data.csi : { driver: '' },
   portworxVolume: data?.portworxVolume !== undefined ? data.portworxVolume : { volumeID: '' },
   vsphereVolume: data?.vsphereVolume !== undefined ? data.vsphereVolume : { volumePath: '' },
   name: data?.name !== undefined ? data.name : '',
   quobyte: data?.quobyte !== undefined ? data.quobyte : { registry: '', volume: '' },
   azureDisk: data?.azureDisk !== undefined ? data.azureDisk : { diskURI: '', diskName: '' },
   cinder: data?.cinder !== undefined ? data.cinder : { volumeID: '' },
   gcePersistentDisk: data?.gcePersistentDisk !== undefined ? data.gcePersistentDisk : { pdName: '' },
   hostPath: data?.hostPath !== undefined ? data.hostPath : { path: '' },
 };
}
