/**
* Projection that may be projected along with other supported volume types. Exactly one of these fields must be set.
* @resourceType volumeprojection
* @kind Volumeprojection
*/
export interface io_k8s_api_core_v1_VolumeProjection {
/**
* configMap information about the configMap data to project
* @references io.k8s.api.core.v1.ConfigMapProjection
*/
configMap?: io_k8s_api_core_v1_ConfigMapProjection;
/**
* downwardAPI information about the downwardAPI data to project
* @references io.k8s.api.core.v1.DownwardAPIProjection
*/
downwardAPI?: io_k8s_api_core_v1_DownwardAPIProjection;
/**
* secret information about the secret data to project
* @references io.k8s.api.core.v1.SecretProjection
*/
secret?: io_k8s_api_core_v1_SecretProjection;
/**
* serviceAccountToken is information about the serviceAccountToken data to project
* @references io.k8s.api.core.v1.ServiceAccountTokenProjection
*/
serviceAccountToken?: io_k8s_api_core_v1_ServiceAccountTokenProjection;
/**
* ClusterTrustBundle allows a pod to access the `.spec.trustBundle` field of ClusterTrustBundle objects in an auto-updating file.

Alpha, gated by the ClusterTrustBundleProjection feature gate.

ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector.

Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem.  Esoteric PEM features such as inter-block comments and block headers are stripped.  Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
* @references io.k8s.api.core.v1.ClusterTrustBundleProjection
*/
clusterTrustBundle?: io_k8s_api_core_v1_ClusterTrustBundleProjection;
}

/**
* Create a new Volumeprojection with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_VolumeProjection instance with defaults applied
*/
export function createio_k8s_api_core_v1_VolumeProjection(data?: Partial<io_k8s_api_core_v1_VolumeProjection>): io_k8s_api_core_v1_VolumeProjection {
 return {
   configMap: data?.configMap !== undefined ? data.configMap : createio_k8s_api_core_v1_ConfigMapProjection(),
   downwardAPI: data?.downwardAPI !== undefined ? data.downwardAPI : createio_k8s_api_core_v1_DownwardAPIProjection(),
   secret: data?.secret !== undefined ? data.secret : createio_k8s_api_core_v1_SecretProjection(),
   serviceAccountToken: data?.serviceAccountToken !== undefined ? data.serviceAccountToken : createio_k8s_api_core_v1_ServiceAccountTokenProjection(),
   clusterTrustBundle: data?.clusterTrustBundle !== undefined ? data.clusterTrustBundle : createio_k8s_api_core_v1_ClusterTrustBundleProjection(),
 };
}
// Required imports
import { io_k8s_api_core_v1_ClusterTrustBundleProjection, createio_k8s_api_core_v1_ClusterTrustBundleProjection } from '../clustertrustbundleprojection/io_k8s_api_core_v1_ClusterTrustBundleProjection';
import { io_k8s_api_core_v1_ConfigMapProjection, createio_k8s_api_core_v1_ConfigMapProjection } from '../configmapprojection/io_k8s_api_core_v1_ConfigMapProjection';
import { io_k8s_api_core_v1_DownwardAPIProjection, createio_k8s_api_core_v1_DownwardAPIProjection } from '../downwardapiprojection/io_k8s_api_core_v1_DownwardAPIProjection';
import { io_k8s_api_core_v1_SecretProjection, createio_k8s_api_core_v1_SecretProjection } from '../secretprojection/io_k8s_api_core_v1_SecretProjection';
import { io_k8s_api_core_v1_ServiceAccountTokenProjection, createio_k8s_api_core_v1_ServiceAccountTokenProjection } from '../serviceaccounttokenprojection/io_k8s_api_core_v1_ServiceAccountTokenProjection';
