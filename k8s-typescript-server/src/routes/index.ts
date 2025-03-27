import express from 'express';
import { createDiscoveryRoutes } from './discovery-routes';
import { createOpenAPIRoutes } from './openapi-routes';
import { createUtilityRoutes } from './utility-routes';
import storage from '../storage';

// Import all route handlers

// Group endpoints by resource type

// Import route handlers
import { createapiserviceRoutes } from './apiservice-routes';
import { createbindingRoutes } from './binding-routes';
import { createcertificatesigningrequestRoutes } from './certificatesigningrequest-routes';
import { createclusterroleRoutes } from './clusterrole-routes';
import { createclusterrolebindingRoutes } from './clusterrolebinding-routes';
import { createcomponentstatusRoutes } from './componentstatus-routes';
import { createconfigmapRoutes } from './configmap-routes';
import { createcontrollerrevisionRoutes } from './controllerrevision-routes';
import { createcronjobRoutes } from './cronjob-routes';
import { createcsidriverRoutes } from './csidriver-routes';
import { createcsinodeRoutes } from './csinode-routes';
import { createcsistoragecapacityRoutes } from './csistoragecapacity-routes';
import { createcustomresourcedefinitionRoutes } from './customresourcedefinition-routes';
import { createdaemonsetRoutes } from './daemonset-routes';
import { createdeploymentRoutes } from './deployment-routes';
import { createendpointRoutes } from './endpoint-routes';
import { createendpointsliceRoutes } from './endpointslice-routes';
import { createephemeralcontainerRoutes } from './ephemeralcontainer-routes';
import { createeventRoutes } from './event-routes';
import { createflowschemaRoutes } from './flowschema-routes';
import { createhorizontalpodautoscalerRoutes } from './horizontalpodautoscaler-routes';
import { createingressRoutes } from './ingress-routes';
import { createingressclassRoutes } from './ingressclass-routes';
import { createjobRoutes } from './job-routes';
import { createjwkRoutes } from './jwk-routes';
import { createleaseRoutes } from './lease-routes';
import { createlimitrangeRoutes } from './limitrange-routes';
import { createlocalsubjectaccessreviewRoutes } from './localsubjectaccessreview-routes';
import { createmutatingwebhookconfigurationRoutes } from './mutatingwebhookconfiguration-routes';
import { createnamespaceRoutes } from './namespace-routes';
import { createnetworkpolicyRoutes } from './networkpolicy-routes';
import { createnodeRoutes } from './node-routes';
import { createpersistentvolumeRoutes } from './persistentvolume-routes';
import { createpersistentvolumeclaimRoutes } from './persistentvolumeclaim-routes';
import { createpodRoutes } from './pod-routes';
import { createpoddisruptionbudgetRoutes } from './poddisruptionbudget-routes';
import { createpodtemplateRoutes } from './podtemplate-routes';
import { createpriorityclassRoutes } from './priorityclass-routes';
import { createprioritylevelconfigurationRoutes } from './prioritylevelconfiguration-routes';
import { createproxyRoutes } from './proxy-routes';
import { createreplicasetRoutes } from './replicaset-routes';
import { createreplicationcontrollerRoutes } from './replicationcontroller-routes';
import { createresourcequotaRoutes } from './resourcequota-routes';
import { createroleRoutes } from './role-routes';
import { createrolebindingRoutes } from './rolebinding-routes';
import { createruntimeclassRoutes } from './runtimeclass-routes';
import { createsecretRoutes } from './secret-routes';
import { createselfsubjectaccessreviewRoutes } from './selfsubjectaccessreview-routes';
import { createselfsubjectreviewRoutes } from './selfsubjectreview-routes';
import { createselfsubjectrulesreviewRoutes } from './selfsubjectrulesreview-routes';
import { createserviceRoutes } from './service-routes';
import { createserviceaccountRoutes } from './serviceaccount-routes';
import { createstatefulsetRoutes } from './statefulset-routes';
import { createstorageclassRoutes } from './storageclass-routes';
import { createsubjectaccessreviewRoutes } from './subjectaccessreview-routes';
import { createtokenreviewRoutes } from './tokenreview-routes';
import { createvalidatingadmissionpolicyRoutes } from './validatingadmissionpolicy-routes';
import { createvalidatingadmissionpolicybindingRoutes } from './validatingadmissionpolicybinding-routes';
import { createvalidatingwebhookconfigurationRoutes } from './validatingwebhookconfiguration-routes';
import { createvolumeattachmentRoutes } from './volumeattachment-routes';

/**
* Create all routes for the API server
*/
export function createRoutes(): express.Router {
 const router = express.Router();
 // Add utility routes
 router.use('/', createUtilityRoutes(storage));
 // Add discovery routes
 router.use('/', createDiscoveryRoutes(storage));
 // Add OpenAPI routes
 router.use('/', createOpenAPIRoutes());
 // Add resource routes
 router.use('/', createapiserviceRoutes(storage));
 router.use('/', createbindingRoutes(storage));
 router.use('/', createcertificatesigningrequestRoutes(storage));
 router.use('/', createclusterroleRoutes(storage));
 router.use('/', createclusterrolebindingRoutes(storage));
 router.use('/', createcomponentstatusRoutes(storage));
 router.use('/', createconfigmapRoutes(storage));
 router.use('/', createcontrollerrevisionRoutes(storage));
 router.use('/', createcronjobRoutes(storage));
 router.use('/', createcsidriverRoutes(storage));
 router.use('/', createcsinodeRoutes(storage));
 router.use('/', createcsistoragecapacityRoutes(storage));
 router.use('/', createcustomresourcedefinitionRoutes(storage));
 router.use('/', createdaemonsetRoutes(storage));
 router.use('/', createdeploymentRoutes(storage));
 router.use('/', createendpointRoutes(storage));
 router.use('/', createendpointsliceRoutes(storage));
 router.use('/', createephemeralcontainerRoutes(storage));
 router.use('/', createeventRoutes(storage));
 router.use('/', createflowschemaRoutes(storage));
 router.use('/', createhorizontalpodautoscalerRoutes(storage));
 router.use('/', createingressRoutes(storage));
 router.use('/', createingressclassRoutes(storage));
 router.use('/', createjobRoutes(storage));
 router.use('/', createjwkRoutes(storage));
 router.use('/', createleaseRoutes(storage));
 router.use('/', createlimitrangeRoutes(storage));
 router.use('/', createlocalsubjectaccessreviewRoutes(storage));
 router.use('/', createmutatingwebhookconfigurationRoutes(storage));
 router.use('/', createnamespaceRoutes(storage));
 router.use('/', createnetworkpolicyRoutes(storage));
 router.use('/', createnodeRoutes(storage));
 router.use('/', createpersistentvolumeRoutes(storage));
 router.use('/', createpersistentvolumeclaimRoutes(storage));
 router.use('/', createpodRoutes(storage));
 router.use('/', createpoddisruptionbudgetRoutes(storage));
 router.use('/', createpodtemplateRoutes(storage));
 router.use('/', createpriorityclassRoutes(storage));
 router.use('/', createprioritylevelconfigurationRoutes(storage));
 router.use('/', createproxyRoutes(storage));
 router.use('/', createreplicasetRoutes(storage));
 router.use('/', createreplicationcontrollerRoutes(storage));
 router.use('/', createresourcequotaRoutes(storage));
 router.use('/', createroleRoutes(storage));
 router.use('/', createrolebindingRoutes(storage));
 router.use('/', createruntimeclassRoutes(storage));
 router.use('/', createsecretRoutes(storage));
 router.use('/', createselfsubjectaccessreviewRoutes(storage));
 router.use('/', createselfsubjectreviewRoutes(storage));
 router.use('/', createselfsubjectrulesreviewRoutes(storage));
 router.use('/', createserviceRoutes(storage));
 router.use('/', createserviceaccountRoutes(storage));
 router.use('/', createstatefulsetRoutes(storage));
 router.use('/', createstorageclassRoutes(storage));
 router.use('/', createsubjectaccessreviewRoutes(storage));
 router.use('/', createtokenreviewRoutes(storage));
 router.use('/', createvalidatingadmissionpolicyRoutes(storage));
 router.use('/', createvalidatingadmissionpolicybindingRoutes(storage));
 router.use('/', createvalidatingwebhookconfigurationRoutes(storage));
 router.use('/', createvolumeattachmentRoutes(storage));
 
 return router;
}
