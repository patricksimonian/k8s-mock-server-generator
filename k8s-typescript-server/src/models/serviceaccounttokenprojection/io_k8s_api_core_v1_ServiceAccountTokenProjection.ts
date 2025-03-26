/**
* ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).
* @resourceType serviceaccounttokenprojection
* @kind Serviceaccounttokenprojection
*/
export interface io_k8s_api_core_v1_ServiceAccountTokenProjection {
/**
* audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
*/
audience?: string;
/**
* expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
*/
expirationSeconds?: number;
/**
* path is the path relative to the mount point of the file to project the token into.
* @required
*/
path: string;
}

/**
* Create a new Serviceaccounttokenprojection with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_ServiceAccountTokenProjection instance with defaults applied
*/
export function createio_k8s_api_core_v1_ServiceAccountTokenProjection(data?: Partial<io_k8s_api_core_v1_ServiceAccountTokenProjection>): io_k8s_api_core_v1_ServiceAccountTokenProjection {
 return {
   audience: data?.audience !== undefined ? data.audience : '',
   expirationSeconds: data?.expirationSeconds !== undefined ? data.expirationSeconds : 0,
   path: data?.path !== undefined ? data.path : '',
 };
}
