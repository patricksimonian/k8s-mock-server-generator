/**
* AggregationRule describes how to locate ClusterRoles to aggregate into the ClusterRole
* @resourceType aggregationrule
* @kind Aggregationrule
*/
export interface io_k8s_api_rbac_v1_AggregationRule {
/**
* ClusterRoleSelectors holds a list of selectors which will be used to find ClusterRoles and create the rules. If any of the selectors match, then the ClusterRole's permissions will be added
* @isArray
*/
clusterRoleSelectors?: Array<{ matchExpressions?: Array<{ key: string; operator: string; values?: string[] }>; matchLabels?: Record<string, any> }>;
}

/**
* Create a new Aggregationrule with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_rbac_v1_AggregationRule instance with defaults applied
*/
export function createio_k8s_api_rbac_v1_AggregationRule(data?: Partial<io_k8s_api_rbac_v1_AggregationRule>): io_k8s_api_rbac_v1_AggregationRule {
 return {
   clusterRoleSelectors: data?.clusterRoleSelectors !== undefined ? data.clusterRoleSelectors : [],
 };
}
