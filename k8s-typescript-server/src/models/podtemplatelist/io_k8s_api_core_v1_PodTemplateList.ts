/**
* PodTemplateList is a list of PodTemplates.
* @resourceType podtemplatelist
* @kind PodtemplateList
*/
export interface io_k8s_api_core_v1_PodTemplateList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* List of pod templates
* @required
* @isArray
* @references io.k8s.api.core.v1.PodTemplate
*/
items: io_k8s_api_core_v1_PodTemplate[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { remainingItemCount?: number; resourceVersion?: string; selfLink?: string; continue?: string };
}

/**
* Create a new PodtemplateList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_PodTemplateList instance with defaults applied
*/
export function createio_k8s_api_core_v1_PodTemplateList(data?: Partial<io_k8s_api_core_v1_PodTemplateList>): io_k8s_api_core_v1_PodTemplateList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_core_v1_PodTemplate, createio_k8s_api_core_v1_PodTemplate } from '../podtemplate/io_k8s_api_core_v1_PodTemplate';
