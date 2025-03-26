/**
* Projection that may be projected along with other supported volume types. Exactly one of these fields must be set.
* @resourceType volumeprojection
* @kind Volumeprojection
*/
export interface io_k8s_api_core_v1_VolumeProjection {
/**
* ClusterTrustBundleProjection describes how to select a set of ClusterTrustBundle objects and project their contents into the pod filesystem.
* @isObject
*/
clusterTrustBundle?: { path: string; signerName?: string; labelSelector?: { matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }; name?: string; optional?: boolean };
/**
* Adapts a ConfigMap into a projected volume.

The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.
* @isObject
*/
configMap?: { items?: Array<{ path: string; key: string; mode?: number }>; name?: string; optional?: boolean };
/**
* Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
* @isObject
*/
downwardAPI?: { items?: Array<{ fieldRef?: { apiVersion?: string; fieldPath: string }; mode?: number; path: string; resourceFieldRef?: { containerName?: string; divisor?: string; resource: string } }> };
/**
* Adapts a secret into a projected volume.

The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
* @isObject
*/
secret?: { items?: Array<{ mode?: number; path: string; key: string }>; name?: string; optional?: boolean };
/**
* ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
* @isObject
*/
serviceAccountToken?: { expirationSeconds?: number; path: string; audience?: string };
}

/**
* Create a new Volumeprojection with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_VolumeProjection instance with defaults applied
*/
export function createio_k8s_api_core_v1_VolumeProjection(data?: Partial<io_k8s_api_core_v1_VolumeProjection>): io_k8s_api_core_v1_VolumeProjection {
 return {
   clusterTrustBundle: data?.clusterTrustBundle !== undefined ? data.clusterTrustBundle : { path: '' },
   configMap: data?.configMap !== undefined ? data.configMap : {},
   downwardAPI: data?.downwardAPI !== undefined ? data.downwardAPI : {},
   secret: data?.secret !== undefined ? data.secret : {},
   serviceAccountToken: data?.serviceAccountToken !== undefined ? data.serviceAccountToken : { path: '' },
 };
}
