/**
* HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend.
* @resourceType httpingresspath
* @kind Httpingresspath
*/
export interface io_k8s_api_networking_v1_HTTPIngressPath {
/**
* pathType determines the interpretation of the path matching. PathType can be one of the following values: * Exact: Matches the URL path exactly. * Prefix: Matches based on a URL path prefix split by '/'. Matching is
  done on a path element by element basis. A path element refers is the
  list of labels in the path split by the '/' separator. A request is a
  match for path p if every p is an element-wise prefix of p of the
  request path. Note that if the last element of the path is a substring
  of the last element in request path, it is not a match (e.g. /foo/bar
  matches /foo/bar/baz, but does not match /foo/barbaz).
* ImplementationSpecific: Interpretation of the Path matching is up to
  the IngressClass. Implementations can treat this as a separate PathType
  or treat it identically to Prefix or Exact path types.
Implementations are required to support all path types.

Possible enum values:
 - `"Exact"` matches the URL path exactly and with case sensitivity.
 - `"ImplementationSpecific"` matching is up to the IngressClass. Implementations can treat this as a separate PathType or treat it identically to Prefix or Exact path types.
 - `"Prefix"` matches based on a URL path prefix split by '/'. Matching is case sensitive and done on a path element by element basis. A path element refers to the list of labels in the path split by the '/' separator. A request is a match for path p if every p is an element-wise prefix of p of the request path. Note that if the last element of the path is a substring of the last element in request path, it is not a match (e.g. /foo/bar matches /foo/bar/baz, but does not match /foo/barbaz). If multiple matching paths exist in an Ingress spec, the longest matching path is given priority. Examples: - /foo/bar does not match requests to /foo/barbaz - /foo/bar matches request to /foo/bar and /foo/bar/baz - /foo and /foo/ both match requests to /foo and /foo/. If both paths are present in an Ingress spec, the longest matching path (/foo/) is given priority.
* @required
*/
pathType: 'Exact' | 'ImplementationSpecific' | 'Prefix';
/**
* backend defines the referenced service endpoint to which the traffic will be forwarded to.
* @required
* @references io.k8s.api.networking.v1.IngressBackend
*/
backend: io_k8s_api_networking_v1_IngressBackend;
/**
* path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value "Exact" or "Prefix".
*/
path?: string;
}

/**
* Create a new Httpingresspath with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_networking_v1_HTTPIngressPath instance with defaults applied
*/
export function createio_k8s_api_networking_v1_HTTPIngressPath(data?: Partial<io_k8s_api_networking_v1_HTTPIngressPath>): io_k8s_api_networking_v1_HTTPIngressPath {
 return {
   pathType: data?.pathType !== undefined ? data.pathType : '',
   backend: data?.backend !== undefined ? data.backend : createio_k8s_api_networking_v1_IngressBackend(),
   path: data?.path !== undefined ? data.path : '',
 };
}
// Required imports
import { io_k8s_api_networking_v1_IngressBackend, createio_k8s_api_networking_v1_IngressBackend } from '../ingressbackend/io_k8s_api_networking_v1_IngressBackend';
