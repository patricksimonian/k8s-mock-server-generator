/**
* MetricIdentifier defines the name and optionally selector for a metric
* @resourceType metricidentifier
* @kind Metricidentifier
*/
export interface io_k8s_api_autoscaling_v2_MetricIdentifier {
/**
* name is the name of the given metric
* @required
*/
name: string;
/**
* selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
selector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
}

/**
* Create a new Metricidentifier with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_MetricIdentifier instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_MetricIdentifier(data?: Partial<io_k8s_api_autoscaling_v2_MetricIdentifier>): io_k8s_api_autoscaling_v2_MetricIdentifier {
 return {
   name: data?.name !== undefined ? data.name : '',
   selector: data?.selector !== undefined ? data.selector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
