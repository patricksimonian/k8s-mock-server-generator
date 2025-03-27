/**
* LeaseSpec is a specification of a Lease.
* @resourceType leasespec
* @kind Leasespec
*/
export interface io_k8s_api_coordination_v1_LeaseSpec {
/**
* Strategy indicates the strategy for picking the leader for coordinated leader election. If the field is not specified, there is no active coordination for this lease. (Alpha) Using this field requires the CoordinatedLeaderElection feature gate to be enabled.
*/
strategy?: string;
/**
* acquireTime is a time when the current lease was acquired.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime
*/
acquireTime?: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
/**
* holderIdentity contains the identity of the holder of a current lease. If Coordinated Leader Election is used, the holder identity must be equal to the elected LeaseCandidate.metadata.name field.
*/
holderIdentity?: string;
/**
* leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measured against the time of last observed renewTime.
*/
leaseDurationSeconds?: number;
/**
* leaseTransitions is the number of transitions of a lease between holders.
*/
leaseTransitions?: number;
/**
* PreferredHolder signals to a lease holder that the lease has a more optimal holder and should be given up. This field can only be set if Strategy is also set.
*/
preferredHolder?: string;
/**
* renewTime is a time when the current holder of a lease has last updated the lease.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime
*/
renewTime?: io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime;
}

/**
* Create a new Leasespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_coordination_v1_LeaseSpec instance with defaults applied
*/
export function createio_k8s_api_coordination_v1_LeaseSpec(data?: Partial<io_k8s_api_coordination_v1_LeaseSpec>): io_k8s_api_coordination_v1_LeaseSpec {
 return {
   strategy: data?.strategy !== undefined ? data.strategy : '',
   acquireTime: data?.acquireTime !== undefined ? data.acquireTime : createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime(),
   holderIdentity: data?.holderIdentity !== undefined ? data.holderIdentity : '',
   leaseDurationSeconds: data?.leaseDurationSeconds !== undefined ? data.leaseDurationSeconds : 0,
   leaseTransitions: data?.leaseTransitions !== undefined ? data.leaseTransitions : 0,
   preferredHolder: data?.preferredHolder !== undefined ? data.preferredHolder : '',
   renewTime: data?.renewTime !== undefined ? data.renewTime : createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime, createio_k8s_apimachinery_pkg_apis_meta_v1_MicroTime } from '../microtime/io_k8s_apimachinery_pkg_apis_meta_v1_MicroTime';
