/**
* NonResourceRule holds information that describes a rule for the non-resource
* @resourceType nonresourcerule
* @kind Nonresourcerule
*/
export interface io_k8s_api_authorization_v1_NonResourceRule {
/**
* NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path.  "*" means all.
* @isArray
*/
nonResourceURLs?: string[];
/**
* Verb is a list of kubernetes non-resource API verbs, like: get, post, put, delete, patch, head, options.  "*" means all.
* @required
* @isArray
*/
verbs: string[];
}

/**
* Create a new Nonresourcerule with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_authorization_v1_NonResourceRule instance with defaults applied
*/
export function createio_k8s_api_authorization_v1_NonResourceRule(data?: Partial<io_k8s_api_authorization_v1_NonResourceRule>): io_k8s_api_authorization_v1_NonResourceRule {
 return {
   nonResourceURLs: data?.nonResourceURLs !== undefined ? data.nonResourceURLs : [],
   verbs: data?.verbs !== undefined ? data.verbs : [],
 };
}
