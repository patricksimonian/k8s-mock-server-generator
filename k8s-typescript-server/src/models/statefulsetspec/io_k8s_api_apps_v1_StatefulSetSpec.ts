/**
* A StatefulSetSpec is the specification of a StatefulSet.
* @resourceType statefulsetspec
* @kind Statefulsetspec
*/
export interface io_k8s_api_apps_v1_StatefulSetSpec {
/**
* Minimum number of seconds for which a newly created pod should be ready without any of its container crashing for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)
*/
minReadySeconds?: number;
/**
* ordinals controls the numbering of replica indices in a StatefulSet. The default ordinals behavior assigns a "0" index to the first replica and increments the index by one for each additional replica requested.
* @references io.k8s.api.apps.v1.StatefulSetOrdinals
*/
ordinals?: io_k8s_api_apps_v1_StatefulSetOrdinals;
/**
* persistentVolumeClaimRetentionPolicy describes the lifecycle of persistent volume claims created from volumeClaimTemplates. By default, all persistent volume claims are created as needed and retained until manually deleted. This policy allows the lifecycle to be altered, for example by deleting persistent volume claims when their stateful set is deleted, or when their pod is scaled down.
* @references io.k8s.api.apps.v1.StatefulSetPersistentVolumeClaimRetentionPolicy
*/
persistentVolumeClaimRetentionPolicy?: io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy;
/**
* podManagementPolicy controls how pods are created during initial scale up, when replacing pods on nodes, or when scaling down. The default policy is `OrderedReady`, where pods are created in increasing order (pod-0, then pod-1, etc) and the controller will wait until each pod is ready before continuing. When scaling down, the pods are removed in the opposite order. The alternative policy is `Parallel` which will create pods in parallel to match the desired scale without waiting, and on scale down will delete all pods at once.

Possible enum values:
 - `"OrderedReady"` will create pods in strictly increasing order on scale up and strictly decreasing order on scale down, progressing only when the previous pod is ready or terminated. At most one pod will be changed at any time.
 - `"Parallel"` will create and delete pods as soon as the stateful set replica count is changed, and will not wait for pods to be ready or complete termination.
*/
podManagementPolicy?: 'OrderedReady' | 'Parallel';
/**
* replicas is the desired number of replicas of the given Template. These are replicas in the sense that they are instantiations of the same Template, but individual replicas also have a consistent identity. If unspecified, defaults to 1.
*/
replicas?: number;
/**
* selector is a label query over pods that should match the replica count. It must match the pod template's labels. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
* @required
* @references io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector
*/
selector: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
/**
* serviceName is the name of the service that governs this StatefulSet. This service must exist before the StatefulSet, and is responsible for the network identity of the set. Pods get DNS/hostnames that follow the pattern: pod-specific-string.serviceName.default.svc.cluster.local where "pod-specific-string" is managed by the StatefulSet controller.
* @required
*/
serviceName: string;
/**
* template is the object that describes the pod that will be created if insufficient replicas are detected. Each pod stamped out by the StatefulSet will fulfill this Template, but have a unique identity from the rest of the StatefulSet. Each pod will be named with the format <statefulsetname>-<podindex>. For example, a pod in a StatefulSet named "web" with index number "3" would be named "web-3". The only allowed template.spec.restartPolicy value is "Always".
* @required
* @references io.k8s.api.core.v1.PodTemplateSpec
*/
template: io_k8s_api_core_v1_PodTemplateSpec;
/**
* revisionHistoryLimit is the maximum number of revisions that will be maintained in the StatefulSet's revision history. The revision history consists of all revisions not represented by a currently applied StatefulSetSpec version. The default value is 10.
*/
revisionHistoryLimit?: number;
/**
* updateStrategy indicates the StatefulSetUpdateStrategy that will be employed to update Pods in the StatefulSet when a revision is made to Template.
* @references io.k8s.api.apps.v1.StatefulSetUpdateStrategy
*/
updateStrategy?: io_k8s_api_apps_v1_StatefulSetUpdateStrategy;
/**
* volumeClaimTemplates is a list of claims that pods are allowed to reference. The StatefulSet controller is responsible for mapping network identities to claims in a way that maintains the identity of a pod. Every claim in this list must have at least one matching (by name) volumeMount in one container in the template. A claim in this list takes precedence over any volumes in the template, with the same name.
* @isArray
*/
volumeClaimTemplates?: io_k8s_api_core_v1_PersistentVolumeClaim[];
}

/**
* Create a new Statefulsetspec with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_apps_v1_StatefulSetSpec instance with defaults applied
*/
export function createio_k8s_api_apps_v1_StatefulSetSpec(data?: Partial<io_k8s_api_apps_v1_StatefulSetSpec>): io_k8s_api_apps_v1_StatefulSetSpec {
 return {
   minReadySeconds: data?.minReadySeconds !== undefined ? data.minReadySeconds : 0,
   ordinals: data?.ordinals !== undefined ? data.ordinals : createio_k8s_api_apps_v1_StatefulSetOrdinals(),
   persistentVolumeClaimRetentionPolicy: data?.persistentVolumeClaimRetentionPolicy !== undefined ? data.persistentVolumeClaimRetentionPolicy : createio_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy(),
   podManagementPolicy: data?.podManagementPolicy !== undefined ? data.podManagementPolicy : '',
   replicas: data?.replicas !== undefined ? data.replicas : 0,
   selector: data?.selector !== undefined ? data.selector : createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector(),
   serviceName: data?.serviceName !== undefined ? data.serviceName : '',
   template: data?.template !== undefined ? data.template : createio_k8s_api_core_v1_PodTemplateSpec(),
   revisionHistoryLimit: data?.revisionHistoryLimit !== undefined ? data.revisionHistoryLimit : 0,
   updateStrategy: data?.updateStrategy !== undefined ? data.updateStrategy : createio_k8s_api_apps_v1_StatefulSetUpdateStrategy(),
   volumeClaimTemplates: data?.volumeClaimTemplates !== undefined ? data.volumeClaimTemplates : [],
 };
}
// Required imports
import { io_k8s_api_apps_v1_StatefulSetOrdinals, createio_k8s_api_apps_v1_StatefulSetOrdinals } from '../statefulsetordinal/io_k8s_api_apps_v1_StatefulSetOrdinals';
import { io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy, createio_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy } from '../statefulsetpersistentvolumeclaimretentionpolicy/io_k8s_api_apps_v1_StatefulSetPersistentVolumeClaimRetentionPolicy';
import { io_k8s_api_apps_v1_StatefulSetUpdateStrategy, createio_k8s_api_apps_v1_StatefulSetUpdateStrategy } from '../statefulsetupdatestrategy/io_k8s_api_apps_v1_StatefulSetUpdateStrategy';
import { io_k8s_api_core_v1_PersistentVolumeClaim, createio_k8s_api_core_v1_PersistentVolumeClaim } from '../io.k8s.api.core.v1.PersistentVolumeClaim';
import { io_k8s_api_core_v1_PodTemplateSpec, createio_k8s_api_core_v1_PodTemplateSpec } from '../podtemplatespec/io_k8s_api_core_v1_PodTemplateSpec';
import { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector, createio_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from '../labelselector/io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';
