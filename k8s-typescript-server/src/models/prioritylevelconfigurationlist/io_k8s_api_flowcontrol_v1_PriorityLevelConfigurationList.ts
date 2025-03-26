/**
* PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
* @resourceType prioritylevelconfigurationlist
* @kind PrioritylevelconfigurationList
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList {
/**
* APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
*/
apiVersion?: string;
/**
* `items` is a list of request-priorities.
* @required
* @isArray
* @references io.k8s.api.flowcontrol.v1.PriorityLevelConfiguration
*/
items: io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration[];
/**
* Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
*/
kind?: string;
/**
* ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
* @isObject
*/
metadata?: { continue?: string; remainingItemCount?: number; resourceVersion?: string; selfLink?: string };
}

/**
* Create a new PrioritylevelconfigurationList with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationList {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   items: data?.items !== undefined ? data.items : ,
   kind: data?.kind !== undefined ? data.kind : '',
   metadata: data?.metadata !== undefined ? data.metadata : {},
 };
}
// Required imports
import { io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration, createio_k8s_api_flowcontrol_v1_PriorityLevelConfiguration } from '../prioritylevelconfiguration/io_k8s_api_flowcontrol_v1_PriorityLevelConfiguration';
