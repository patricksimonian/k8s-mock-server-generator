/**
* PriorityLevelConfigurationStatus represents the current state of a "request-priority".
* @resourceType prioritylevelconfigurationstatus
* @kind Prioritylevelconfigurationstatus
*/
export interface io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus {
/**
* `conditions` is the current state of "request-priority".
* @isArray
*/
conditions?: Array<{ reason?: string; status?: string; type?: string; lastTransitionTime?: Date; message?: string }>;
}

/**
* Create a new Prioritylevelconfigurationstatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus(data?: Partial<io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus>): io_k8s_api_flowcontrol_v1_PriorityLevelConfigurationStatus {
 return {
   conditions: data?.conditions !== undefined ? data.conditions : [],
 };
}
