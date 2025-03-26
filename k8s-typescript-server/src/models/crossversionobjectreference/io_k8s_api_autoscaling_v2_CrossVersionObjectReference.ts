/**
* CrossVersionObjectReference contains enough information to let you identify the referred resource.
* @resourceType crossversionobjectreference
* @kind Crossversionobjectreference
*/
export interface io_k8s_api_autoscaling_v2_CrossVersionObjectReference {
/**
* apiVersion is the API version of the referent
*/
apiVersion?: string;
/**
* kind is the kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
* @required
*/
kind: string;
/**
* name is the name of the referent; More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
* @required
*/
name: string;
}

/**
* Create a new Crossversionobjectreference with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_CrossVersionObjectReference instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_CrossVersionObjectReference(data?: Partial<io_k8s_api_autoscaling_v2_CrossVersionObjectReference>): io_k8s_api_autoscaling_v2_CrossVersionObjectReference {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
   name: data?.name !== undefined ? data.name : '',
 };
}
