/**
* Volume represents a named volume in a pod that may be accessed by any container in the pod.
* @resourceType volume
* @kind Volume
*/
export interface io_k8s_api_core_v1_Volume {
/**
* secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
* @references io.k8s.api.core.v1.SecretVolumeSource
*/
secret?: io_k8s_api_core_v1_SecretVolumeSource;
/**
* storageOS represents a StorageOS volume attached and mounted on Kubernetes nodes. Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported.
* @references io.k8s.api.core.v1.StorageOSVolumeSource
*/
storageos?: io_k8s_api_core_v1_StorageOSVolumeSource;
/**
* csi (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers.
* @references io.k8s.api.core.v1.CSIVolumeSource
*/
csi?: io_k8s_api_core_v1_CSIVolumeSource;
/**
* configMap represents a configMap that should populate this volume
* @references io.k8s.api.core.v1.ConfigMapVolumeSource
*/
configMap?: io_k8s_api_core_v1_ConfigMapVolumeSource;
/**
* emptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
* @references io.k8s.api.core.v1.EmptyDirVolumeSource
*/
emptyDir?: io_k8s_api_core_v1_EmptyDirVolumeSource;
/**
* ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.

Use this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity
   tracking are needed,
c) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through
   a PersistentVolumeClaim (see EphemeralVolumeSource for more
   information on the connection between this volume type
   and PersistentVolumeClaim).

Use PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.

Use CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.

A pod can use both types of ephemeral volumes and persistent volumes at the same time.
* @references io.k8s.api.core.v1.EphemeralVolumeSource
*/
ephemeral?: io_k8s_api_core_v1_EphemeralVolumeSource;
/**
* fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
* @references io.k8s.api.core.v1.FCVolumeSource
*/
fc?: io_k8s_api_core_v1_FCVolumeSource;
/**
* nfs represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
* @references io.k8s.api.core.v1.NFSVolumeSource
*/
nfs?: io_k8s_api_core_v1_NFSVolumeSource;
/**
* azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver.
* @references io.k8s.api.core.v1.AzureDiskVolumeSource
*/
azureDisk?: io_k8s_api_core_v1_AzureDiskVolumeSource;
/**
* glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. More info: https://examples.k8s.io/volumes/glusterfs/README.md
* @references io.k8s.api.core.v1.GlusterfsVolumeSource
*/
glusterfs?: io_k8s_api_core_v1_GlusterfsVolumeSource;
/**
* rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported. More info: https://examples.k8s.io/volumes/rbd/README.md
* @references io.k8s.api.core.v1.RBDVolumeSource
*/
rbd?: io_k8s_api_core_v1_RBDVolumeSource;
/**
* cinder represents a cinder volume attached and mounted on kubelets host machine. Deprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
* @references io.k8s.api.core.v1.CinderVolumeSource
*/
cinder?: io_k8s_api_core_v1_CinderVolumeSource;
/**
* photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine. Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.
* @references io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource
*/
photonPersistentDisk?: io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource;
/**
* image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine. The volume is resolved at pod startup depending on which PullPolicy value is provided:

- Always: the kubelet always attempts to pull the reference. Container creation will fail If the pull fails. - Never: the kubelet never pulls the reference and only uses a local image or artifact. Container creation will fail if the reference isn't present. - IfNotPresent: the kubelet pulls if the reference isn't already present on disk. Container creation will fail if the reference isn't present and the pull fails.

The volume gets re-resolved if the pod gets deleted and recreated, which means that new remote content will become available on pod recreation. A failure to resolve or pull the image during pod startup will block containers from starting and may add significant latency. Failures will be retried using normal volume backoff and will be reported on the pod reason and message. The types of objects that may be mounted by this volume are defined by the container runtime implementation on a host machine and at minimum must include all valid types supported by the container image field. The OCI object gets mounted in a single directory (spec.containers[*].volumeMounts.mountPath) by merging the manifest layers in the same way as for container images. The volume will be mounted read-only (ro) and non-executable files (noexec). Sub path mounts for containers are not supported (spec.containers[*].volumeMounts.subpath). The field spec.securityContext.fsGroupChangePolicy has no effect on this volume type.
* @references io.k8s.api.core.v1.ImageVolumeSource
*/
image?: io_k8s_api_core_v1_ImageVolumeSource;
/**
* flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.
* @references io.k8s.api.core.v1.FlexVolumeSource
*/
flexVolume?: io_k8s_api_core_v1_FlexVolumeSource;
/**
* gitRepo represents a git repository at a particular revision. Deprecated: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
* @references io.k8s.api.core.v1.GitRepoVolumeSource
*/
gitRepo?: io_k8s_api_core_v1_GitRepoVolumeSource;
/**
* vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine. Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver.
* @references io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource
*/
vsphereVolume?: io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource;
/**
* cephFS represents a Ceph FS mount on the host that shares a pod's lifetime. Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.
* @references io.k8s.api.core.v1.CephFSVolumeSource
*/
cephfs?: io_k8s_api_core_v1_CephFSVolumeSource;
/**
* azureFile represents an Azure File Service mount on the host and bind mount to the pod. Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver.
* @references io.k8s.api.core.v1.AzureFileVolumeSource
*/
azureFile?: io_k8s_api_core_v1_AzureFileVolumeSource;
/**
* downwardAPI represents downward API about the pod that should populate this volume
* @references io.k8s.api.core.v1.DownwardAPIVolumeSource
*/
downwardAPI?: io_k8s_api_core_v1_DownwardAPIVolumeSource;
/**
* flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running. Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.
* @references io.k8s.api.core.v1.FlockerVolumeSource
*/
flocker?: io_k8s_api_core_v1_FlockerVolumeSource;
/**
* gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
* @references io.k8s.api.core.v1.GCEPersistentDiskVolumeSource
*/
gcePersistentDisk?: io_k8s_api_core_v1_GCEPersistentDiskVolumeSource;
/**
* hostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
* @references io.k8s.api.core.v1.HostPathVolumeSource
*/
hostPath?: io_k8s_api_core_v1_HostPathVolumeSource;
/**
* iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
* @references io.k8s.api.core.v1.ISCSIVolumeSource
*/
iscsi?: io_k8s_api_core_v1_ISCSIVolumeSource;
/**
* persistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
* @references io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource
*/
persistentVolumeClaim?: io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource;
/**
* awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
* @references io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource
*/
awsElasticBlockStore?: io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource;
/**
* quobyte represents a Quobyte mount on the host that shares a pod's lifetime. Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.
* @references io.k8s.api.core.v1.QuobyteVolumeSource
*/
quobyte?: io_k8s_api_core_v1_QuobyteVolumeSource;
/**
* portworxVolume represents a portworx volume attached and mounted on kubelets host machine. Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate is on.
* @references io.k8s.api.core.v1.PortworxVolumeSource
*/
portworxVolume?: io_k8s_api_core_v1_PortworxVolumeSource;
/**
* projected items for all in one resources secrets, configmaps, and downward API
* @references io.k8s.api.core.v1.ProjectedVolumeSource
*/
projected?: io_k8s_api_core_v1_ProjectedVolumeSource;
/**
* scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.
* @references io.k8s.api.core.v1.ScaleIOVolumeSource
*/
scaleIO?: io_k8s_api_core_v1_ScaleIOVolumeSource;
/**
* name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
* @required
*/
name: string;
}

/**
* Create a new Volume with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Volume instance with defaults applied
*/
export function createio_k8s_api_core_v1_Volume(data?: Partial<io_k8s_api_core_v1_Volume>): io_k8s_api_core_v1_Volume {
 return {
   secret: data?.secret !== undefined ? data.secret : createio_k8s_api_core_v1_SecretVolumeSource(),
   storageos: data?.storageos !== undefined ? data.storageos : createio_k8s_api_core_v1_StorageOSVolumeSource(),
   csi: data?.csi !== undefined ? data.csi : createio_k8s_api_core_v1_CSIVolumeSource(),
   configMap: data?.configMap !== undefined ? data.configMap : createio_k8s_api_core_v1_ConfigMapVolumeSource(),
   emptyDir: data?.emptyDir !== undefined ? data.emptyDir : createio_k8s_api_core_v1_EmptyDirVolumeSource(),
   ephemeral: data?.ephemeral !== undefined ? data.ephemeral : createio_k8s_api_core_v1_EphemeralVolumeSource(),
   fc: data?.fc !== undefined ? data.fc : createio_k8s_api_core_v1_FCVolumeSource(),
   nfs: data?.nfs !== undefined ? data.nfs : createio_k8s_api_core_v1_NFSVolumeSource(),
   azureDisk: data?.azureDisk !== undefined ? data.azureDisk : createio_k8s_api_core_v1_AzureDiskVolumeSource(),
   glusterfs: data?.glusterfs !== undefined ? data.glusterfs : createio_k8s_api_core_v1_GlusterfsVolumeSource(),
   rbd: data?.rbd !== undefined ? data.rbd : createio_k8s_api_core_v1_RBDVolumeSource(),
   cinder: data?.cinder !== undefined ? data.cinder : createio_k8s_api_core_v1_CinderVolumeSource(),
   photonPersistentDisk: data?.photonPersistentDisk !== undefined ? data.photonPersistentDisk : createio_k8s_api_core_v1_PhotonPersistentDiskVolumeSource(),
   image: data?.image !== undefined ? data.image : createio_k8s_api_core_v1_ImageVolumeSource(),
   flexVolume: data?.flexVolume !== undefined ? data.flexVolume : createio_k8s_api_core_v1_FlexVolumeSource(),
   gitRepo: data?.gitRepo !== undefined ? data.gitRepo : createio_k8s_api_core_v1_GitRepoVolumeSource(),
   vsphereVolume: data?.vsphereVolume !== undefined ? data.vsphereVolume : createio_k8s_api_core_v1_VsphereVirtualDiskVolumeSource(),
   cephfs: data?.cephfs !== undefined ? data.cephfs : createio_k8s_api_core_v1_CephFSVolumeSource(),
   azureFile: data?.azureFile !== undefined ? data.azureFile : createio_k8s_api_core_v1_AzureFileVolumeSource(),
   downwardAPI: data?.downwardAPI !== undefined ? data.downwardAPI : createio_k8s_api_core_v1_DownwardAPIVolumeSource(),
   flocker: data?.flocker !== undefined ? data.flocker : createio_k8s_api_core_v1_FlockerVolumeSource(),
   gcePersistentDisk: data?.gcePersistentDisk !== undefined ? data.gcePersistentDisk : createio_k8s_api_core_v1_GCEPersistentDiskVolumeSource(),
   hostPath: data?.hostPath !== undefined ? data.hostPath : createio_k8s_api_core_v1_HostPathVolumeSource(),
   iscsi: data?.iscsi !== undefined ? data.iscsi : createio_k8s_api_core_v1_ISCSIVolumeSource(),
   persistentVolumeClaim: data?.persistentVolumeClaim !== undefined ? data.persistentVolumeClaim : createio_k8s_api_core_v1_PersistentVolumeClaimVolumeSource(),
   awsElasticBlockStore: data?.awsElasticBlockStore !== undefined ? data.awsElasticBlockStore : createio_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource(),
   quobyte: data?.quobyte !== undefined ? data.quobyte : createio_k8s_api_core_v1_QuobyteVolumeSource(),
   portworxVolume: data?.portworxVolume !== undefined ? data.portworxVolume : createio_k8s_api_core_v1_PortworxVolumeSource(),
   projected: data?.projected !== undefined ? data.projected : createio_k8s_api_core_v1_ProjectedVolumeSource(),
   scaleIO: data?.scaleIO !== undefined ? data.scaleIO : createio_k8s_api_core_v1_ScaleIOVolumeSource(),
   name: data?.name !== undefined ? data.name : '',
 };
}
// Required imports
import { io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource, createio_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource } from '../awselasticblockstorevolumesource/io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource';
import { io_k8s_api_core_v1_AzureDiskVolumeSource, createio_k8s_api_core_v1_AzureDiskVolumeSource } from '../azurediskvolumesource/io_k8s_api_core_v1_AzureDiskVolumeSource';
import { io_k8s_api_core_v1_AzureFileVolumeSource, createio_k8s_api_core_v1_AzureFileVolumeSource } from '../azurefilevolumesource/io_k8s_api_core_v1_AzureFileVolumeSource';
import { io_k8s_api_core_v1_CSIVolumeSource, createio_k8s_api_core_v1_CSIVolumeSource } from '../csivolumesource/io_k8s_api_core_v1_CSIVolumeSource';
import { io_k8s_api_core_v1_CephFSVolumeSource, createio_k8s_api_core_v1_CephFSVolumeSource } from '../cephfsvolumesource/io_k8s_api_core_v1_CephFSVolumeSource';
import { io_k8s_api_core_v1_CinderVolumeSource, createio_k8s_api_core_v1_CinderVolumeSource } from '../cindervolumesource/io_k8s_api_core_v1_CinderVolumeSource';
import { io_k8s_api_core_v1_ConfigMapVolumeSource, createio_k8s_api_core_v1_ConfigMapVolumeSource } from '../configmapvolumesource/io_k8s_api_core_v1_ConfigMapVolumeSource';
import { io_k8s_api_core_v1_DownwardAPIVolumeSource, createio_k8s_api_core_v1_DownwardAPIVolumeSource } from '../downwardapivolumesource/io_k8s_api_core_v1_DownwardAPIVolumeSource';
import { io_k8s_api_core_v1_EmptyDirVolumeSource, createio_k8s_api_core_v1_EmptyDirVolumeSource } from '../emptydirvolumesource/io_k8s_api_core_v1_EmptyDirVolumeSource';
import { io_k8s_api_core_v1_EphemeralVolumeSource, createio_k8s_api_core_v1_EphemeralVolumeSource } from '../ephemeralvolumesource/io_k8s_api_core_v1_EphemeralVolumeSource';
import { io_k8s_api_core_v1_FCVolumeSource, createio_k8s_api_core_v1_FCVolumeSource } from '../fcvolumesource/io_k8s_api_core_v1_FCVolumeSource';
import { io_k8s_api_core_v1_FlexVolumeSource, createio_k8s_api_core_v1_FlexVolumeSource } from '../flexvolumesource/io_k8s_api_core_v1_FlexVolumeSource';
import { io_k8s_api_core_v1_FlockerVolumeSource, createio_k8s_api_core_v1_FlockerVolumeSource } from '../flockervolumesource/io_k8s_api_core_v1_FlockerVolumeSource';
import { io_k8s_api_core_v1_GCEPersistentDiskVolumeSource, createio_k8s_api_core_v1_GCEPersistentDiskVolumeSource } from '../gcepersistentdiskvolumesource/io_k8s_api_core_v1_GCEPersistentDiskVolumeSource';
import { io_k8s_api_core_v1_GitRepoVolumeSource, createio_k8s_api_core_v1_GitRepoVolumeSource } from '../gitrepovolumesource/io_k8s_api_core_v1_GitRepoVolumeSource';
import { io_k8s_api_core_v1_GlusterfsVolumeSource, createio_k8s_api_core_v1_GlusterfsVolumeSource } from '../glusterfsvolumesource/io_k8s_api_core_v1_GlusterfsVolumeSource';
import { io_k8s_api_core_v1_HostPathVolumeSource, createio_k8s_api_core_v1_HostPathVolumeSource } from '../hostpathvolumesource/io_k8s_api_core_v1_HostPathVolumeSource';
import { io_k8s_api_core_v1_ISCSIVolumeSource, createio_k8s_api_core_v1_ISCSIVolumeSource } from '../iscsivolumesource/io_k8s_api_core_v1_ISCSIVolumeSource';
import { io_k8s_api_core_v1_ImageVolumeSource, createio_k8s_api_core_v1_ImageVolumeSource } from '../imagevolumesource/io_k8s_api_core_v1_ImageVolumeSource';
import { io_k8s_api_core_v1_NFSVolumeSource, createio_k8s_api_core_v1_NFSVolumeSource } from '../nfsvolumesource/io_k8s_api_core_v1_NFSVolumeSource';
import { io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource, createio_k8s_api_core_v1_PersistentVolumeClaimVolumeSource } from '../persistentvolumeclaimvolumesource/io_k8s_api_core_v1_PersistentVolumeClaimVolumeSource';
import { io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource, createio_k8s_api_core_v1_PhotonPersistentDiskVolumeSource } from '../photonpersistentdiskvolumesource/io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource';
import { io_k8s_api_core_v1_PortworxVolumeSource, createio_k8s_api_core_v1_PortworxVolumeSource } from '../portworxvolumesource/io_k8s_api_core_v1_PortworxVolumeSource';
import { io_k8s_api_core_v1_ProjectedVolumeSource, createio_k8s_api_core_v1_ProjectedVolumeSource } from '../projectedvolumesource/io_k8s_api_core_v1_ProjectedVolumeSource';
import { io_k8s_api_core_v1_QuobyteVolumeSource, createio_k8s_api_core_v1_QuobyteVolumeSource } from '../quobytevolumesource/io_k8s_api_core_v1_QuobyteVolumeSource';
import { io_k8s_api_core_v1_RBDVolumeSource, createio_k8s_api_core_v1_RBDVolumeSource } from '../rbdvolumesource/io_k8s_api_core_v1_RBDVolumeSource';
import { io_k8s_api_core_v1_ScaleIOVolumeSource, createio_k8s_api_core_v1_ScaleIOVolumeSource } from '../scaleiovolumesource/io_k8s_api_core_v1_ScaleIOVolumeSource';
import { io_k8s_api_core_v1_SecretVolumeSource, createio_k8s_api_core_v1_SecretVolumeSource } from '../secretvolumesource/io_k8s_api_core_v1_SecretVolumeSource';
import { io_k8s_api_core_v1_StorageOSVolumeSource, createio_k8s_api_core_v1_StorageOSVolumeSource } from '../storageosvolumesource/io_k8s_api_core_v1_StorageOSVolumeSource';
import { io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource, createio_k8s_api_core_v1_VsphereVirtualDiskVolumeSource } from '../vspherevirtualdiskvolumesource/io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource';
