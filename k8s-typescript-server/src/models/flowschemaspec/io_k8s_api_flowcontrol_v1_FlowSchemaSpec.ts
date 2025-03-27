/**
* FlowSchemaSpec describes how the FlowSchema's specification looks like.
* @resourceType flowschemaspec
* @kind Flowschemaspec
*/
export interface io_k8s_api_flowcontrol_v1_FlowSchemaSpec {
/**
* `priorityLevelConfiguration` should reference a PriorityLevelConfiguration in the cluster. If the reference cannot be resolved, the FlowSchema will be ignored and marked as invalid in its status. Required.
* @required
* @references io.k8s.api.flowcontrol.v1.PriorityLevelConfigurationReference
*/
priorityLevelConfiguration: io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference;
/**
* `rules` describes which requests will match this flow schema. This FlowSchema matches a request if and only if at least one member of rules matches the request. if it is an empty slice, there will be no requests matching the FlowSchema.
* @isArray
*/
rules?: io_k8s_api_flowcontrol_v1_PolicyRulesWithSubjects[];
/**
* `distinguisherMethod` defines how to compute the flow distinguisher for requests that match this schema. `nil` specifies that the distinguisher is disabled and thus will always be the empty string.
* @references io.k8s.api.flowcontrol.v1.FlowDistinguisherMethod
*/
distinguisherMethod?: io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod;
/**
* `matchingPrecedence` is used to choose among the FlowSchemas that match a given request. The chosen FlowSchema is among those with the numerically lowest (which we take to be logically highest) MatchingPrecedence.  Each MatchingPrecedence value must be ranged in [1,10000]. Note that if the precedence is not specified, it will be set to 1000 as default.
*/
matchingPrecedence?: number;
}

/**
* Create a new Flowschemaspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_FlowSchemaSpec instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_FlowSchemaSpec(data?: Partial<io_k8s_api_flowcontrol_v1_FlowSchemaSpec>): io_k8s_api_flowcontrol_v1_FlowSchemaSpec {
 return {
   priorityLevelConfiguration: data?.priorityLevelConfiguration !== undefined ? data.priorityLevelConfiguration : createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference(),
   rules: data?.rules !== undefined ? data.rules : [],
   distinguisherMethod: data?.distinguisherMethod !== undefined ? data.distinguisherMethod : createio_k8s_api_flowcontrol_v1_FlowDistinguisherMethod(),
   matchingPrecedence: data?.matchingPrecedence !== undefined ? data.matchingPrecedence : 0,
 };
}
// Required imports
import { io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod, createio_k8s_api_flowcontrol_v1_FlowDistinguisherMethod } from '../flowdistinguishermethod/io_k8s_api_flowcontrol_v1_FlowDistinguisherMethod';
import { io_k8s_api_flowcontrol_v1_PolicyRulesWithSubjects, createio_k8s_api_flowcontrol_v1_PolicyRulesWithSubjects } from '../io.k8s.api.flowcontrol.v1.PolicyRulesWithSubjects';
import { io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference, createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference } from '../prioritylevelconfigurationreference/io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationReference';
