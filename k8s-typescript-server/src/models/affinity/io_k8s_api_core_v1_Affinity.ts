/**
* Affinity is a group of affinity scheduling rules.
* @resourceType affinity
* @kind Affinity
*/
export interface io_k8s_api_core_v1_Affinity {
/**
* Describes node affinity scheduling rules for the pod.
* @references io.k8s.api.core.v1.NodeAffinity
*/
nodeAffinity?: io_k8s_api_core_v1_NodeAffinity;
/**
* Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
* @references io.k8s.api.core.v1.PodAffinity
*/
podAffinity?: io_k8s_api_core_v1_PodAffinity;
/**
* Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
* @references io.k8s.api.core.v1.PodAntiAffinity
*/
podAntiAffinity?: io_k8s_api_core_v1_PodAntiAffinity;
}

/**
* Create a new Affinity with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_Affinity instance with defaults applied
*/
export function createio_k8s_api_core_v1_Affinity(data?: Partial<io_k8s_api_core_v1_Affinity>): io_k8s_api_core_v1_Affinity {
 return {
   nodeAffinity: data?.nodeAffinity !== undefined ? data.nodeAffinity : createio_k8s_api_core_v1_NodeAffinity(),
   podAffinity: data?.podAffinity !== undefined ? data.podAffinity : createio_k8s_api_core_v1_PodAffinity(),
   podAntiAffinity: data?.podAntiAffinity !== undefined ? data.podAntiAffinity : createio_k8s_api_core_v1_PodAntiAffinity(),
 };
}
// Required imports
import { io_k8s_api_core_v1_NodeAffinity, createio_k8s_api_core_v1_NodeAffinity } from '../nodeaffinity/io_k8s_api_core_v1_NodeAffinity';
import { io_k8s_api_core_v1_PodAffinity, createio_k8s_api_core_v1_PodAffinity } from '../podaffinity/io_k8s_api_core_v1_PodAffinity';
import { io_k8s_api_core_v1_PodAntiAffinity, createio_k8s_api_core_v1_PodAntiAffinity } from '../podantiaffinity/io_k8s_api_core_v1_PodAntiAffinity';
