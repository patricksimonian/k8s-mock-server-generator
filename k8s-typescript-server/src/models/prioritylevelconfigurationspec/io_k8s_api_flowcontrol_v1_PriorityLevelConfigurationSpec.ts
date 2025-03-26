/**
* PriorityLevelConfigurationSpec specifies the configuration of a priority level.
* @resourceType prioritylevelconfigurationspec
* @kind Prioritylevelconfigurationspec
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec {
/**
* `exempt` specifies how requests are handled for an exempt priority level. This field MUST be empty if `type` is `"Limited"`. This field MAY be non-empty if `type` is `"Exempt"`. If empty and `type` is `"Exempt"` then the default values for `ExemptPriorityLevelConfiguration` apply.
* @references io.k8s.api.flowcontrol.v1.ExemptPriorityLevelConfiguration
*/
exempt?: io_k8s_api_flowcontrol_v1_ExemptPriorityLevelConfiguration;
/**
* `limited` specifies how requests are handled for a Limited priority level. This field must be non-empty if and only if `type` is `"Limited"`.
* @references io.k8s.api.flowcontrol.v1.LimitedPriorityLevelConfiguration
*/
limited?: io_k8s_api_flowcontrol_v1_LimitedPriorityLevelConfiguration;
/**
* `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
* @required
*/
type: string;
}

/**
* Create a new Prioritylevelconfigurationspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec {
 return {
   exempt: data?.exempt !== undefined ? data.exempt : createio_k8s_api_flowcontrol_v1_ExemptPriorityLevelConfiguration(),
   limited: data?.limited !== undefined ? data.limited : createio_k8s_api_flowcontrol_v1_LimitedPriorityLevelConfiguration(),
   type: data?.type !== undefined ? data.type : '',
 };
}
// Required imports
import { io_k8s_api_flowcontrol_v1_ExemptPriorityLevelConfiguration, createio_k8s_api_flowcontrol_v1_ExemptPriorityLevelConfiguration } from '../exemptprioritylevelconfiguration/io_k8s_api_flowcontrol_v1_ExemptPriorityLevelConfiguration';
import { io_k8s_api_flowcontrol_v1_LimitedPriorityLevelConfiguration, createio_k8s_api_flowcontrol_v1_LimitedPriorityLevelConfiguration } from '../limitedprioritylevelconfiguration/io_k8s_api_flowcontrol_v1_LimitedPriorityLevelConfiguration';
