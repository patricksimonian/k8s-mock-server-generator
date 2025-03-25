/**
* PriorityLevelConfigurationSpec specifies the configuration of a priority level.
* @resourceType prioritylevelconfigurationspec
* @kind Prioritylevelconfigurationspec
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationSpec {
/**
* ExemptPriorityLevelConfiguration describes the configurable aspects of the handling of exempt requests. In the mandatory exempt configuration object the values in the fields here can be modified by authorized users, unlike the rest of the `spec`.
* @isObject
*/
exempt?: { nominalConcurrencyShares?: number; lendablePercent?: number };
/**
* LimitedPriorityLevelConfiguration specifies how to handle requests that are subject to limits. It addresses two issues:
  - How are requests for this priority level limited?
  - What should be done with requests that exceed the limit?
* @isObject
*/
limited?: { borrowingLimitPercent?: number; lendablePercent?: number; limitResponse?: { queuing?: { handSize?: number; queueLengthLimit?: number; queues?: number }; type: string }; nominalConcurrencyShares?: number };
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
   exempt: data?.exempt !== undefined ? data.exempt : {},
   limited: data?.limited !== undefined ? data.limited : {},
   type: data?.type !== undefined ? data.type : '',
 };
}
