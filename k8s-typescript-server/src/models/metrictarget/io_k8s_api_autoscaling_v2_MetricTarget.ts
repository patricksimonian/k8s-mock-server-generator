/**
* MetricTarget defines the target value, average value, or average utilization of a specific metric
* @resourceType metrictarget
* @kind Metrictarget
*/
export interface io_k8s_api_autoscaling_v2_MetricTarget {
/**
* type represents whether the metric type is Utilization, Value, or AverageValue
* @required
*/
type: string;
/**
* value is the target value of the metric (as a quantity).
* @references io.k8s.apimachinery.pkg.api.resource.Quantity
*/
value?: io_k8s_apimachinery_pkg_api_resource_Quantity;
/**
* averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
*/
averageUtilization?: number;
/**
* averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
* @references io.k8s.apimachinery.pkg.api.resource.Quantity
*/
averageValue?: io_k8s_apimachinery_pkg_api_resource_Quantity;
}

/**
* Create a new Metrictarget with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_autoscaling_v2_MetricTarget instance with defaults applied
*/
export function createio_k8s_api_autoscaling_v2_MetricTarget(data?: Partial<io_k8s_api_autoscaling_v2_MetricTarget>): io_k8s_api_autoscaling_v2_MetricTarget {
 return {
   type: data?.type !== undefined ? data.type : '',
   value: data?.value !== undefined ? data.value : createio_k8s_apimachinery_pkg_api_resource_Quantity(),
   averageUtilization: data?.averageUtilization !== undefined ? data.averageUtilization : 0,
   averageValue: data?.averageValue !== undefined ? data.averageValue : createio_k8s_apimachinery_pkg_api_resource_Quantity(),
 };
}
// Required imports
import { io_k8s_apimachinery_pkg_api_resource_Quantity, createio_k8s_apimachinery_pkg_api_resource_Quantity } from '../quantity/io_k8s_apimachinery_pkg_api_resource_Quantity';
