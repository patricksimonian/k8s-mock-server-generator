/**
* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
* @resourceType subject
* @kind Subject
*/
export interface io_k8s_api_flowcontrol_v1_Subject {
/**
* `group` matches based on user group name.
* @references io.k8s.api.flowcontrol.v1.GroupSubject
*/
group?: io_k8s_api_flowcontrol_v1_GroupSubject;
/**
* `kind` indicates which one of the other fields is non-empty. Required
* @required
*/
kind: string;
/**
* `serviceAccount` matches ServiceAccounts.
* @references io.k8s.api.flowcontrol.v1.ServiceAccountSubject
*/
serviceAccount?: io_k8s_api_flowcontrol_v1_ServiceAccountSubject;
/**
* `user` matches based on username.
* @references io.k8s.api.flowcontrol.v1.UserSubject
*/
user?: io_k8s_api_flowcontrol_v1_UserSubject;
}

/**
* Create a new Subject with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_flowcontrol_v1_Subject instance with defaults applied
*/
export function createio_k8s_api_flowcontrol_v1_Subject(data?: Partial<io_k8s_api_flowcontrol_v1_Subject>): io_k8s_api_flowcontrol_v1_Subject {
 return {
   group: data?.group !== undefined ? data.group : createio_k8s_api_flowcontrol_v1_GroupSubject(),
   kind: data?.kind !== undefined ? data.kind : '',
   serviceAccount: data?.serviceAccount !== undefined ? data.serviceAccount : createio_k8s_api_flowcontrol_v1_ServiceAccountSubject(),
   user: data?.user !== undefined ? data.user : createio_k8s_api_flowcontrol_v1_UserSubject(),
 };
}
// Required imports
import { io_k8s_api_flowcontrol_v1_GroupSubject, createio_k8s_api_flowcontrol_v1_GroupSubject } from '../groupsubject/io_k8s_api_flowcontrol_v1_GroupSubject';
import { io_k8s_api_flowcontrol_v1_ServiceAccountSubject, createio_k8s_api_flowcontrol_v1_ServiceAccountSubject } from '../serviceaccountsubject/io_k8s_api_flowcontrol_v1_ServiceAccountSubject';
import { io_k8s_api_flowcontrol_v1_UserSubject, createio_k8s_api_flowcontrol_v1_UserSubject } from '../usersubject/io_k8s_api_flowcontrol_v1_UserSubject';
