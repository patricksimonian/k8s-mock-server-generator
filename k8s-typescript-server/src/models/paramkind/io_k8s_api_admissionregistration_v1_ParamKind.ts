/**
* ParamKind is a tuple of Group Kind and Version.
* @resourceType paramkind
* @kind Paramkind
*/
export interface io_k8s_api_admissionregistration_v1_ParamKind {
/**
* APIVersion is the API group version the resources belong to. In format of "group/version". Required.
*/
apiVersion?: string;
/**
* Kind is the API kind the resources belong to. Required.
*/
kind?: string;
}

/**
* Create a new Paramkind with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_admissionregistration_v1_ParamKind instance with defaults applied
*/
export function createio_k8s_api_admissionregistration_v1_ParamKind(data?: Partial<io_k8s_api_admissionregistration_v1_ParamKind>): io_k8s_api_admissionregistration_v1_ParamKind {
 return {
   apiVersion: data?.apiVersion !== undefined ? data.apiVersion : '',
   kind: data?.kind !== undefined ? data.kind : '',
 };
}
