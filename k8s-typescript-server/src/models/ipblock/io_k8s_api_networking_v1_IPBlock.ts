/**
* IPBlock describes a particular CIDR (Ex. "192.168.1.0/24","2001:db8::/64") that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The except entry describes CIDRs that should not be included within this rule.
* @resourceType ipblock
* @kind Ipblock
*/
export interface io_k8s_api_networking_v1_IPBlock {
/**
* except is a slice of CIDRs that should not be included within an IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64" Except values will be rejected if they are outside the cidr range
* @isArray
*/
except?: string[];
/**
* cidr is a string representing the IPBlock Valid examples are "192.168.1.0/24" or "2001:db8::/64"
* @required
*/
cidr: string;
}

/**
* Create a new Ipblock with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_IPBlock instance with defaults applied
*/
export function createio_k8s_api_networking_v1_IPBlock(data?: Partial<io_k8s_api_networking_v1_IPBlock>): io_k8s_api_networking_v1_IPBlock {
 return {
   except: data?.except !== undefined ? data.except : [],
   cidr: data?.cidr !== undefined ? data.cidr : '',
 };
}
