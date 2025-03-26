/**
* LeaseSpec is a specification of a Lease.
* @resourceType leasespec
* @kind Leasespec
*/
export interface io_k8s_api_coordination_v1_LeaseSpec {
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
* MicroTime is version of Time with microsecond level precision.
*/
renewTime?: Date;
/**
* Strategy indicates the strategy for picking the leader for coordinated leader election. If the field is not specified, there is no active coordination for this lease. (Alpha) Using this field requires the CoordinatedLeaderElection feature gate to be enabled.
*/
strategy?: string;
/**
* MicroTime is version of Time with microsecond level precision.
*/
acquireTime?: Date;
/**
* holderIdentity contains the identity of the holder of a current lease. If Coordinated Leader Election is used, the holder identity must be equal to the elected LeaseCandidate.metadata.name field.
*/
holderIdentity?: string;
}

/**
* Create a new Leasespec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_coordination_v1_LeaseSpec instance with defaults applied
*/
export function createio_k8s_api_coordination_v1_LeaseSpec(data?: Partial<io_k8s_api_coordination_v1_LeaseSpec>): io_k8s_api_coordination_v1_LeaseSpec {
 return {
   leaseDurationSeconds: data?.leaseDurationSeconds !== undefined ? data.leaseDurationSeconds : 0,
   leaseTransitions: data?.leaseTransitions !== undefined ? data.leaseTransitions : 0,
   preferredHolder: data?.preferredHolder !== undefined ? data.preferredHolder : '',
   renewTime: data?.renewTime !== undefined ? data.renewTime : '',
   strategy: data?.strategy !== undefined ? data.strategy : '',
   acquireTime: data?.acquireTime !== undefined ? data.acquireTime : '',
   holderIdentity: data?.holderIdentity !== undefined ? data.holderIdentity : '',
 };
}
