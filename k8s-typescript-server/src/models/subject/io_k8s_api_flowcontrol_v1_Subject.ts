/**
* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
* @resourceType subject
* @kind Subject
*/
export interface io_k8s_api_flowcontrol_v1_Subject {
/**
* GroupSubject holds detailed information for group-kind subject.
* @isObject
*/
group?: { name: string };
/**
* `kind` indicates which one of the other fields is non-empty. Required
* @required
*/
kind: string;
/**
* ServiceAccountSubject holds detailed information for service-account-kind subject.
* @isObject
*/
serviceAccount?: { name: string; namespace: string };
/**
* UserSubject holds detailed information for user-kind subject.
* @isObject
*/
user?: { name: string };
}

/**
* Create a new Subject with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_Subject instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_Subject(data?: Partial<io_k8s_api_flowcontrol_v1_Subject>): io_k8s_api_flowcontrol_v1_Subject {
 return {
   group: data?.group !== undefined ? data.group : { name: '' },
   kind: data?.kind !== undefined ? data.kind : '',
   serviceAccount: data?.serviceAccount !== undefined ? data.serviceAccount : { name: '', namespace: '' },
   user: data?.user !== undefined ? data.user : { name: '' },
 };
}
