/**
* PersistentVolumeSpec is the specification of a persistent volume.
* @resourceType persistentvolumespec
* @kind Persistentvolumespec
*/
export interface io_k8s_api_core_v1_PersistentVolumeSpec {
/**
* photonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine. Deprecated: PhotonPersistentDisk is deprecated and the in-tree photonPersistentDisk type is no longer supported.
* @references io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource
*/
photonPersistentDisk?: io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource;
/**
* awsElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Deprecated: AWSElasticBlockStore is deprecated. All operations for the in-tree awsElasticBlockStore type are redirected to the ebs.csi.aws.com CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
* @references io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource
*/
awsElasticBlockStore?: io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource;
/**
* cephFS represents a Ceph FS mount on the host that shares a pod's lifetime. Deprecated: CephFS is deprecated and the in-tree cephfs type is no longer supported.
* @references io.k8s.api.core.v1.CephFSPersistentVolumeSource
*/
cephfs?: io_k8s_api_core_v1_CephFSPersistentVolumeSource;
/**
* fc represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
* @references io.k8s.api.core.v1.FCVolumeSource
*/
fc?: io_k8s_api_core_v1_FCVolumeSource;
/**
* flocker represents a Flocker volume attached to a kubelet's host machine and exposed to the pod for its usage. This depends on the Flocker control service being running. Deprecated: Flocker is deprecated and the in-tree flocker type is no longer supported.
* @references io.k8s.api.core.v1.FlockerVolumeSource
*/
flocker?: io_k8s_api_core_v1_FlockerVolumeSource;
/**
* iscsi represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin.
* @references io.k8s.api.core.v1.ISCSIPersistentVolumeSource
*/
iscsi?: io_k8s_api_core_v1_ISCSIPersistentVolumeSource;
/**
* persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming

Possible enum values:
 - `"Delete"` means the volume will be deleted from Kubernetes on release from its claim. The volume plugin must support Deletion.
 - `"Recycle"` means the volume will be recycled back into the pool of unbound persistent volumes on release from its claim. The volume plugin must support Recycling.
 - `"Retain"` means the volume will be left in its current phase (Released) for manual reclamation by the administrator. The default policy is Retain.
*/
persistentVolumeReclaimPolicy?: 'Delete' | 'Recycle' | 'Retain';
/**
* hostPath represents a directory on the host. Provisioned by a developer or tester. This is useful for single-node development and testing only! On-host storage is not supported in any way and WILL NOT WORK in a multi-node cluster. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
* @references io.k8s.api.core.v1.HostPathVolumeSource
*/
hostPath?: io_k8s_api_core_v1_HostPathVolumeSource;
/**
* accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
* @isArray
*/
accessModes?: 'ReadOnlyMany' | 'ReadWriteMany' | 'ReadWriteOnce' | 'ReadWriteOncePod'[];
/**
* cinder represents a cinder volume attached and mounted on kubelets host machine. Deprecated: Cinder is deprecated. All operations for the in-tree cinder type are redirected to the cinder.csi.openstack.org CSI driver. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
* @references io.k8s.api.core.v1.CinderPersistentVolumeSource
*/
cinder?: io_k8s_api_core_v1_CinderPersistentVolumeSource;
/**
* Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is a beta field and requires enabling VolumeAttributesClass feature (off by default).
*/
volumeAttributesClassName?: string;
/**
* claimRef is part of a bi-directional binding between PersistentVolume and PersistentVolumeClaim. Expected to be non-nil when bound. claim.VolumeName is the authoritative bind between PV and PVC. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#binding
* @references io.k8s.api.core.v1.ObjectReference
*/
claimRef?: io_k8s_api_core_v1_ObjectReference;
/**
* flexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin. Deprecated: FlexVolume is deprecated. Consider using a CSIDriver instead.
* @references io.k8s.api.core.v1.FlexPersistentVolumeSource
*/
flexVolume?: io_k8s_api_core_v1_FlexPersistentVolumeSource;
/**
* local represents directly-attached storage with node affinity
* @references io.k8s.api.core.v1.LocalVolumeSource
*/
local?: io_k8s_api_core_v1_LocalVolumeSource;
/**
* nodeAffinity defines constraints that limit what nodes this volume can be accessed from. This field influences the scheduling of pods that use this volume.
* @references io.k8s.api.core.v1.VolumeNodeAffinity
*/
nodeAffinity?: io_k8s_api_core_v1_VolumeNodeAffinity;
/**
* quobyte represents a Quobyte mount on the host that shares a pod's lifetime. Deprecated: Quobyte is deprecated and the in-tree quobyte type is no longer supported.
* @references io.k8s.api.core.v1.QuobyteVolumeSource
*/
quobyte?: io_k8s_api_core_v1_QuobyteVolumeSource;
/**
* gcePersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. Provisioned by an admin. Deprecated: GCEPersistentDisk is deprecated. All operations for the in-tree gcePersistentDisk type are redirected to the pd.csi.storage.gke.io CSI driver. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
* @references io.k8s.api.core.v1.GCEPersistentDiskVolumeSource
*/
gcePersistentDisk?: io_k8s_api_core_v1_GCEPersistentDiskVolumeSource;
/**
* nfs represents an NFS mount on the host. Provisioned by an admin. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
* @references io.k8s.api.core.v1.NFSVolumeSource
*/
nfs?: io_k8s_api_core_v1_NFSVolumeSource;
/**
* rbd represents a Rados Block Device mount on the host that shares a pod's lifetime. Deprecated: RBD is deprecated and the in-tree rbd type is no longer supported. More info: https://examples.k8s.io/volumes/rbd/README.md
* @references io.k8s.api.core.v1.RBDPersistentVolumeSource
*/
rbd?: io_k8s_api_core_v1_RBDPersistentVolumeSource;
/**
* storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
*/
storageClassName?: string;
/**
* azureDisk represents an Azure Data Disk mount on the host and bind mount to the pod. Deprecated: AzureDisk is deprecated. All operations for the in-tree azureDisk type are redirected to the disk.csi.azure.com CSI driver.
* @references io.k8s.api.core.v1.AzureDiskVolumeSource
*/
azureDisk?: io_k8s_api_core_v1_AzureDiskVolumeSource;
/**
* csi represents storage that is handled by an external CSI driver.
* @references io.k8s.api.core.v1.CSIPersistentVolumeSource
*/
csi?: io_k8s_api_core_v1_CSIPersistentVolumeSource;
/**
* portworxVolume represents a portworx volume attached and mounted on kubelets host machine. Deprecated: PortworxVolume is deprecated. All operations for the in-tree portworxVolume type are redirected to the pxd.portworx.com CSI driver when the CSIMigrationPortworx feature-gate is on.
* @references io.k8s.api.core.v1.PortworxVolumeSource
*/
portworxVolume?: io_k8s_api_core_v1_PortworxVolumeSource;
/**
* scaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes. Deprecated: ScaleIO is deprecated and the in-tree scaleIO type is no longer supported.
* @references io.k8s.api.core.v1.ScaleIOPersistentVolumeSource
*/
scaleIO?: io_k8s_api_core_v1_ScaleIOPersistentVolumeSource;
/**
* storageOS represents a StorageOS volume that is attached to the kubelet's host machine and mounted into the pod. Deprecated: StorageOS is deprecated and the in-tree storageos type is no longer supported. More info: https://examples.k8s.io/volumes/storageos/README.md
* @references io.k8s.api.core.v1.StorageOSPersistentVolumeSource
*/
storageos?: io_k8s_api_core_v1_StorageOSPersistentVolumeSource;
/**
* glusterfs represents a Glusterfs volume that is attached to a host and exposed to the pod. Provisioned by an admin. Deprecated: Glusterfs is deprecated and the in-tree glusterfs type is no longer supported. More info: https://examples.k8s.io/volumes/glusterfs/README.md
* @references io.k8s.api.core.v1.GlusterfsPersistentVolumeSource
*/
glusterfs?: io_k8s_api_core_v1_GlusterfsPersistentVolumeSource;
/**
* mountOptions is the list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
* @isArray
*/
mountOptions?: string[];
/**
* volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.

Possible enum values:
 - `"Block"` means the volume will not be formatted with a filesystem and will remain a raw block device.
 - `"Filesystem"` means the volume will be or is formatted with a filesystem.
*/
volumeMode?: 'Block' | 'Filesystem';
/**
* azureFile represents an Azure File Service mount on the host and bind mount to the pod. Deprecated: AzureFile is deprecated. All operations for the in-tree azureFile type are redirected to the file.csi.azure.com CSI driver.
* @references io.k8s.api.core.v1.AzureFilePersistentVolumeSource
*/
azureFile?: io_k8s_api_core_v1_AzureFilePersistentVolumeSource;
/**
* capacity is the description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
*/
capacity?: Record<string, any>;
/**
* vsphereVolume represents a vSphere volume attached and mounted on kubelets host machine. Deprecated: VsphereVolume is deprecated. All operations for the in-tree vsphereVolume type are redirected to the csi.vsphere.vmware.com CSI driver.
* @references io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource
*/
vsphereVolume?: io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource;
}

/**
* Create a new Persistentvolumespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PersistentVolumeSpec instance with defaults applied
*/
export function createio_k8s_api_core_v1_PersistentVolumeSpec(data?: Partial<io_k8s_api_core_v1_PersistentVolumeSpec>): io_k8s_api_core_v1_PersistentVolumeSpec {
 return {
   photonPersistentDisk: data?.photonPersistentDisk !== undefined ? data.photonPersistentDisk : createio_k8s_api_core_v1_PhotonPersistentDiskVolumeSource(),
   awsElasticBlockStore: data?.awsElasticBlockStore !== undefined ? data.awsElasticBlockStore : createio_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource(),
   cephfs: data?.cephfs !== undefined ? data.cephfs : createio_k8s_api_core_v1_CephFSPersistentVolumeSource(),
   fc: data?.fc !== undefined ? data.fc : createio_k8s_api_core_v1_FCVolumeSource(),
   flocker: data?.flocker !== undefined ? data.flocker : createio_k8s_api_core_v1_FlockerVolumeSource(),
   iscsi: data?.iscsi !== undefined ? data.iscsi : createio_k8s_api_core_v1_ISCSIPersistentVolumeSource(),
   persistentVolumeReclaimPolicy: data?.persistentVolumeReclaimPolicy !== undefined ? data.persistentVolumeReclaimPolicy : '',
   hostPath: data?.hostPath !== undefined ? data.hostPath : createio_k8s_api_core_v1_HostPathVolumeSource(),
   accessModes: data?.accessModes !== undefined ? data.accessModes : [],
   cinder: data?.cinder !== undefined ? data.cinder : createio_k8s_api_core_v1_CinderPersistentVolumeSource(),
   volumeAttributesClassName: data?.volumeAttributesClassName !== undefined ? data.volumeAttributesClassName : '',
   claimRef: data?.claimRef !== undefined ? data.claimRef : createio_k8s_api_core_v1_ObjectReference(),
   flexVolume: data?.flexVolume !== undefined ? data.flexVolume : createio_k8s_api_core_v1_FlexPersistentVolumeSource(),
   local: data?.local !== undefined ? data.local : createio_k8s_api_core_v1_LocalVolumeSource(),
   nodeAffinity: data?.nodeAffinity !== undefined ? data.nodeAffinity : createio_k8s_api_core_v1_VolumeNodeAffinity(),
   quobyte: data?.quobyte !== undefined ? data.quobyte : createio_k8s_api_core_v1_QuobyteVolumeSource(),
   gcePersistentDisk: data?.gcePersistentDisk !== undefined ? data.gcePersistentDisk : createio_k8s_api_core_v1_GCEPersistentDiskVolumeSource(),
   nfs: data?.nfs !== undefined ? data.nfs : createio_k8s_api_core_v1_NFSVolumeSource(),
   rbd: data?.rbd !== undefined ? data.rbd : createio_k8s_api_core_v1_RBDPersistentVolumeSource(),
   storageClassName: data?.storageClassName !== undefined ? data.storageClassName : '',
   azureDisk: data?.azureDisk !== undefined ? data.azureDisk : createio_k8s_api_core_v1_AzureDiskVolumeSource(),
   csi: data?.csi !== undefined ? data.csi : createio_k8s_api_core_v1_CSIPersistentVolumeSource(),
   portworxVolume: data?.portworxVolume !== undefined ? data.portworxVolume : createio_k8s_api_core_v1_PortworxVolumeSource(),
   scaleIO: data?.scaleIO !== undefined ? data.scaleIO : createio_k8s_api_core_v1_ScaleIOPersistentVolumeSource(),
   storageos: data?.storageos !== undefined ? data.storageos : createio_k8s_api_core_v1_StorageOSPersistentVolumeSource(),
   glusterfs: data?.glusterfs !== undefined ? data.glusterfs : createio_k8s_api_core_v1_GlusterfsPersistentVolumeSource(),
   mountOptions: data?.mountOptions !== undefined ? data.mountOptions : [],
   volumeMode: data?.volumeMode !== undefined ? data.volumeMode : '',
   azureFile: data?.azureFile !== undefined ? data.azureFile : createio_k8s_api_core_v1_AzureFilePersistentVolumeSource(),
   capacity: data?.capacity !== undefined ? data.capacity : {},
   vsphereVolume: data?.vsphereVolume !== undefined ? data.vsphereVolume : createio_k8s_api_core_v1_VsphereVirtualDiskVolumeSource(),
 };
}
// Required imports
import { io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource, createio_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource } from '../awselasticblockstorevolumesource/io_k8s_api_core_v1_AWSElasticBlockStoreVolumeSource';
import { io_k8s_api_core_v1_AzureDiskVolumeSource, createio_k8s_api_core_v1_AzureDiskVolumeSource } from '../azurediskvolumesource/io_k8s_api_core_v1_AzureDiskVolumeSource';
import { io_k8s_api_core_v1_AzureFilePersistentVolumeSource, createio_k8s_api_core_v1_AzureFilePersistentVolumeSource } from '../azurefilepersistentvolumesource/io_k8s_api_core_v1_AzureFilePersistentVolumeSource';
import { io_k8s_api_core_v1_CSIPersistentVolumeSource, createio_k8s_api_core_v1_CSIPersistentVolumeSource } from '../csipersistentvolumesource/io_k8s_api_core_v1_CSIPersistentVolumeSource';
import { io_k8s_api_core_v1_CephFSPersistentVolumeSource, createio_k8s_api_core_v1_CephFSPersistentVolumeSource } from '../cephfspersistentvolumesource/io_k8s_api_core_v1_CephFSPersistentVolumeSource';
import { io_k8s_api_core_v1_CinderPersistentVolumeSource, createio_k8s_api_core_v1_CinderPersistentVolumeSource } from '../cinderpersistentvolumesource/io_k8s_api_core_v1_CinderPersistentVolumeSource';
import { io_k8s_api_core_v1_FCVolumeSource, createio_k8s_api_core_v1_FCVolumeSource } from '../fcvolumesource/io_k8s_api_core_v1_FCVolumeSource';
import { io_k8s_api_core_v1_FlexPersistentVolumeSource, createio_k8s_api_core_v1_FlexPersistentVolumeSource } from '../flexpersistentvolumesource/io_k8s_api_core_v1_FlexPersistentVolumeSource';
import { io_k8s_api_core_v1_FlockerVolumeSource, createio_k8s_api_core_v1_FlockerVolumeSource } from '../flockervolumesource/io_k8s_api_core_v1_FlockerVolumeSource';
import { io_k8s_api_core_v1_GCEPersistentDiskVolumeSource, createio_k8s_api_core_v1_GCEPersistentDiskVolumeSource } from '../gcepersistentdiskvolumesource/io_k8s_api_core_v1_GCEPersistentDiskVolumeSource';
import { io_k8s_api_core_v1_GlusterfsPersistentVolumeSource, createio_k8s_api_core_v1_GlusterfsPersistentVolumeSource } from '../glusterfspersistentvolumesource/io_k8s_api_core_v1_GlusterfsPersistentVolumeSource';
import { io_k8s_api_core_v1_HostPathVolumeSource, createio_k8s_api_core_v1_HostPathVolumeSource } from '../hostpathvolumesource/io_k8s_api_core_v1_HostPathVolumeSource';
import { io_k8s_api_core_v1_ISCSIPersistentVolumeSource, createio_k8s_api_core_v1_ISCSIPersistentVolumeSource } from '../iscsipersistentvolumesource/io_k8s_api_core_v1_ISCSIPersistentVolumeSource';
import { io_k8s_api_core_v1_LocalVolumeSource, createio_k8s_api_core_v1_LocalVolumeSource } from '../localvolumesource/io_k8s_api_core_v1_LocalVolumeSource';
import { io_k8s_api_core_v1_NFSVolumeSource, createio_k8s_api_core_v1_NFSVolumeSource } from '../nfsvolumesource/io_k8s_api_core_v1_NFSVolumeSource';
import { io_k8s_api_core_v1_ObjectReference, createio_k8s_api_core_v1_ObjectReference } from '../objectreference/io_k8s_api_core_v1_ObjectReference';
import { io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource, createio_k8s_api_core_v1_PhotonPersistentDiskVolumeSource } from '../photonpersistentdiskvolumesource/io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource';
import { io_k8s_api_core_v1_PortworxVolumeSource, createio_k8s_api_core_v1_PortworxVolumeSource } from '../portworxvolumesource/io_k8s_api_core_v1_PortworxVolumeSource';
import { io_k8s_api_core_v1_QuobyteVolumeSource, createio_k8s_api_core_v1_QuobyteVolumeSource } from '../quobytevolumesource/io_k8s_api_core_v1_QuobyteVolumeSource';
import { io_k8s_api_core_v1_RBDPersistentVolumeSource, createio_k8s_api_core_v1_RBDPersistentVolumeSource } from '../rbdpersistentvolumesource/io_k8s_api_core_v1_RBDPersistentVolumeSource';
import { io_k8s_api_core_v1_ScaleIOPersistentVolumeSource, createio_k8s_api_core_v1_ScaleIOPersistentVolumeSource } from '../scaleiopersistentvolumesource/io_k8s_api_core_v1_ScaleIOPersistentVolumeSource';
import { io_k8s_api_core_v1_StorageOSPersistentVolumeSource, createio_k8s_api_core_v1_StorageOSPersistentVolumeSource } from '../storageospersistentvolumesource/io_k8s_api_core_v1_StorageOSPersistentVolumeSource';
import { io_k8s_api_core_v1_VolumeNodeAffinity, createio_k8s_api_core_v1_VolumeNodeAffinity } from '../volumenodeaffinity/io_k8s_api_core_v1_VolumeNodeAffinity';
import { io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource, createio_k8s_api_core_v1_VsphereVirtualDiskVolumeSource } from '../vspherevirtualdiskvolumesource/io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource';
