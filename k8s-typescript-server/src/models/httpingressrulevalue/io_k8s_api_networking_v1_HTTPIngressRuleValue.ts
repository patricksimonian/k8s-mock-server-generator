/**
* HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.
* @resourceType httpingressrulevalue
* @kind Httpingressrulevalue
*/
export interface io_k8s_api_networking_v1_HTTPIngressRuleValue {
/**
* paths is a collection of paths that map requests to backends.
* @required
* @isArray
*/
paths: io_k8s_api_networking_v1_HTTPIngressPath[];
}

/**
* Create a new Httpingressrulevalue with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_HTTPIngressRuleValue instance with defaults applied
*/
export function createio_k8s_api_networking_v1_HTTPIngressRuleValue(data?: Partial<io_k8s_api_networking_v1_HTTPIngressRuleValue>): io_k8s_api_networking_v1_HTTPIngressRuleValue {
 return {
   paths: data?.paths !== undefined ? data.paths : [],
 };
}
// Required imports
import { io_k8s_api_networking_v1_HTTPIngressPath, createio_k8s_api_networking_v1_HTTPIngressPath } from '../io.k8s.api.networking.v1.HTTPIngressPath';
