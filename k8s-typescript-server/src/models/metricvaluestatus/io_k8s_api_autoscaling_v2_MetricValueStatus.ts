/**
* MetricValueStatus holds the current value for a metric
* @resourceType metricvaluestatus
* @kind Metricvaluestatus
*/
export interface io_k8s_api_autoscaling_v2_MetricValueStatus {
/**
* averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
* @references io.k8s.apimachinery.pkg.api.resource.Quantity
*/
averageValue?: io_k8s_apimachinery_pkg_api_resource_Quantity;
/**
* value is the current value of the metric (as a quantity).
* @references io.k8s.apimachinery.pkg.api.resource.Quantity
*/
value?: io_k8s_apimachinery_pkg_api_resource_Quantity;
/**
* currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
*/
averageUtilization?: number;
}

/**
* Create a new Metricvaluestatus with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_MetricValueStatus instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_MetricValueStatus(data?: Partial<io_k8s_api_autoscaling_v2_MetricValueStatus>): io_k8s_api_autoscaling_v2_MetricValueStatus {
 return {
   averageValue: data?.averageValue !== undefined ? data.averageValue : createio_k8s_apimachinery_pkg_api_resource_Quantity(),
   value: data?.value !== undefined ? data.value : createio_k8s_apimachinery_pkg_api_resource_Quantity(),
   averageUtilization: data?.averageUtilization !== undefined ? data.averageUtilization : 0,
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_api_resource_Quantity, createio_k8s_apimachinery_pkg_api_resource_Quantity } from '../quantity/io_k8s_apimachinery_pkg_api_resource_Quantity';
