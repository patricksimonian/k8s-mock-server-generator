import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';
import pluralize from 'pluralize';

export function createDiscoveryRoutes(storage: Storage): express.Router {
  const router = express.Router();

  // Root path handler
  router.get('/', async (req, res, next) => {
    try {
      await handleRootPath(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  // API versions handler
  router.get('/api', async (req, res, next) => {
    try {
      await handleApiVersions(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  // API groups handler
  router.get('/apis', async (req, res, next) => {
    try {
      await handleApiGroups(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  // API resources handler
  router.get('/api/v1', async (req, res, next) => {
    try {
      await handleApiResources(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  // API group resources handler
  router.get('/apis/:group/:version', async (req, res, next) => {
    try {
      await handleApiGroupResources(req, res, storage);
    } catch (error) {
      next(error);
    }
  });

  return router;
}

/**
* Handler for GET /
*/
async function handleRootPath(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  logger.info('Getting API discovery information');

  const paths = {
    paths: ['/api', '/apis']
  };

  res.json(paths);
}

/**
* Handler for GET /api
*/
async function handleApiVersions(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  logger.info('Getting API versions');

  const apiVersions = {
    kind: 'APIVersions',
    versions: ['v1'],
    serverAddressByClientCIDRs: [
      {
        clientCIDR: '0.0.0.0/0',
        serverAddress: req.headers.host || 'localhost'
      }
    ]
  };

  res.json(apiVersions);
}

/**
* Handler for GET /apis
*/
async function handleApiGroups(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  logger.info('Getting API groups');

  // Use the pre-processed API groups data
  const apiGroupsData = [
    {
      name: 'admissionregistration.k8s.io',
      versions: [
        {
          groupVersion: 'admissionregistration.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'admissionregistration.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'apiextensions.k8s.io',
      versions: [
        {
          groupVersion: 'apiextensions.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'apiextensions.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'apiregistration.k8s.io',
      versions: [
        {
          groupVersion: 'apiregistration.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'apiregistration.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'apps',
      versions: [
        {
          groupVersion: 'apps/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'apps/v1',
        version: 'v1'
      }
    },
    {
      name: 'authentication.k8s.io',
      versions: [
        {
          groupVersion: 'authentication.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'authentication.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'authorization.k8s.io',
      versions: [
        {
          groupVersion: 'authorization.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'authorization.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'autoscaling',
      versions: [
        {
          groupVersion: 'autoscaling/v2',
          version: 'v2'
        },
        {
          groupVersion: 'autoscaling/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'autoscaling/v2',
        version: 'v2'
      }
    },
    {
      name: 'batch',
      versions: [
        {
          groupVersion: 'batch/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'batch/v1',
        version: 'v1'
      }
    },
    {
      name: 'certificates.k8s.io',
      versions: [
        {
          groupVersion: 'certificates.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'certificates.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'coordination.k8s.io',
      versions: [
        {
          groupVersion: 'coordination.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'coordination.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'discovery.k8s.io',
      versions: [
        {
          groupVersion: 'discovery.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'discovery.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'events.k8s.io',
      versions: [
        {
          groupVersion: 'events.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'events.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'flowcontrol.apiserver.k8s.io',
      versions: [
        {
          groupVersion: 'flowcontrol.apiserver.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'flowcontrol.apiserver.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'networking.k8s.io',
      versions: [
        {
          groupVersion: 'networking.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'networking.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'node.k8s.io',
      versions: [
        {
          groupVersion: 'node.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'node.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'policy',
      versions: [
        {
          groupVersion: 'policy/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'policy/v1',
        version: 'v1'
      }
    },
    {
      name: 'rbac.authorization.k8s.io',
      versions: [
        {
          groupVersion: 'rbac.authorization.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'rbac.authorization.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'scheduling.k8s.io',
      versions: [
        {
          groupVersion: 'scheduling.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'scheduling.k8s.io/v1',
        version: 'v1'
      }
    },
    {
      name: 'storage.k8s.io',
      versions: [
        {
          groupVersion: 'storage.k8s.io/v1',
          version: 'v1'
        },
      ],
      preferredVersion: {
        groupVersion: 'storage.k8s.io/v1',
        version: 'v1'
      }
    },
  ];

  // Add common API groups if not already in the list
  const commonGroups = ['apps', 'batch', 'networking.k8s.io', 'rbac.authorization.k8s.io'];
  commonGroups.forEach(group => {
    if (!apiGroupsData.some(g => g.name === group)) {
      apiGroupsData.push({
        name: group,
        versions: [
          {
            groupVersion: `${group}/v1`,
            version: 'v1'
          }
        ],
        preferredVersion: {
          groupVersion: `${group}/v1`,
          version: 'v1'
        }
      });
    }
  });

  const apiGroups = {
    kind: 'APIGroupList',
    apiVersion: 'v1',
    groups: apiGroupsData
  };

  res.json(apiGroups);
}

/**
* Handler for GET /api/v1
*/
async function handleApiResources(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  logger.info('Getting API resources for core v1');

  // Use the pre-processed core resources data
  const resources = [];

  // Process the pre-extracted core resources
  {
    const singularName = pluralize.singular('services');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'services',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('nodes');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'nodes',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('replicationcontrollers');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'replicationcontrollers',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('events');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'events',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('finalize');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'finalize',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('status');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'status',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('persistentvolumeclaims');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'persistentvolumeclaims',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('limitranges');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'limitranges',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('configmaps');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'configmaps',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('componentstatuses');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'componentstatuses',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('resourcequotas');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'resourcequotas',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('secrets');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'secrets',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('bindings');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'bindings',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('namespaces');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'namespaces',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('podtemplates');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'podtemplates',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('serviceaccounts');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'serviceaccounts',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('endpoints');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'endpoints',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('persistentvolumes');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'persistentvolumes',
      singularName: singularName,
      namespaced: false,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }
  {
    const singularName = pluralize.singular('pods');
    const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
    resources.push({
      name: 'pods',
      singularName: singularName,
      namespaced: true,
      kind: kind,
      verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
    });
  }

  // Add common core resources if not already in the list
  const commonResources = ['pods', 'services', 'configmaps', 'secrets', 'namespaces'];
  commonResources.forEach(resource => {
    if (!resources.some(r => r.name === resource)) {
      const singularName = pluralize.singular(resource);
      const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
      resources.push({
        name: resource,
        singularName: singularName,
        namespaced: resource !== 'namespaces',
        kind: kind,
        verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
      });
    }
  });

  const apiResourceList = {
    kind: 'APIResourceList',
    apiVersion: 'v1',
    groupVersion: 'v1',
    resources: resources
  };

  res.json(apiResourceList);
}

// Pre-compute API group resources map at startup
const apiGroupResourcesMap = {
  'admissionregistration.k8s.io/v1': [
    { 
      name: 'mutatingwebhookconfigurations',
      namespaced: false
    },
    { 
      name: 'validatingadmissionpolicies',
      namespaced: false
    },
    { 
      name: 'validatingwebhookconfigurations',
      namespaced: false
    },
    { 
      name: 'validatingadmissionpolicybindings',
      namespaced: false
    },
  ],
  'apiextensions.k8s.io/v1': [
    { 
      name: 'customresourcedefinitions',
      namespaced: false
    },
  ],
  'apiregistration.k8s.io/v1': [
    { 
      name: 'apiservices',
      namespaced: false
    },
  ],
  'apps/v1': [
    { 
      name: 'replicasets',
      namespaced: true
    },
    { 
      name: 'deployments',
      namespaced: true
    },
    { 
      name: 'statefulsets',
      namespaced: true
    },
    { 
      name: 'daemonsets',
      namespaced: true
    },
    { 
      name: 'controllerrevisions',
      namespaced: true
    },
  ],
  'authentication.k8s.io/v1': [
    { 
      name: 'tokenreviews',
      namespaced: false
    },
    { 
      name: 'selfsubjectreviews',
      namespaced: false
    },
  ],
  'authorization.k8s.io/v1': [
    { 
      name: 'subjectaccessreviews',
      namespaced: false
    },
    { 
      name: 'selfsubjectaccessreviews',
      namespaced: false
    },
    { 
      name: 'selfsubjectrulesreviews',
      namespaced: false
    },
    { 
      name: 'localsubjectaccessreviews',
      namespaced: true
    },
  ],
  'autoscaling/v1': [
    { 
      name: 'horizontalpodautoscalers',
      namespaced: true
    },
  ],
  'autoscaling/v2': [
    { 
      name: 'horizontalpodautoscalers',
      namespaced: true
    },
  ],
  'batch/v1': [
    { 
      name: 'cronjobs',
      namespaced: true
    },
    { 
      name: 'jobs',
      namespaced: true
    },
  ],
  'certificates.k8s.io/v1': [
    { 
      name: 'certificatesigningrequests',
      namespaced: false
    },
  ],
  'coordination.k8s.io/v1': [
    { 
      name: 'leases',
      namespaced: false
    },
  ],
  'discovery.k8s.io/v1': [
    { 
      name: 'endpointslices',
      namespaced: true
    },
  ],
  'events.k8s.io/v1': [
    { 
      name: 'events',
      namespaced: true
    },
  ],
  'flowcontrol.apiserver.k8s.io/v1': [
    { 
      name: 'prioritylevelconfigurations',
      namespaced: false
    },
    { 
      name: 'flowschemas',
      namespaced: false
    },
  ],
  'networking.k8s.io/v1': [
    { 
      name: 'ingressclasses',
      namespaced: false
    },
    { 
      name: 'networkpolicies',
      namespaced: false
    },
    { 
      name: 'ingresses',
      namespaced: true
    },
  ],
  'node.k8s.io/v1': [
    { 
      name: 'runtimeclasses',
      namespaced: false
    },
  ],
  'policy/v1': [
    { 
      name: 'poddisruptionbudgets',
      namespaced: true
    },
  ],
  'rbac.authorization.k8s.io/v1': [
    { 
      name: 'rolebindings',
      namespaced: true
    },
    { 
      name: 'clusterroles',
      namespaced: false
    },
    { 
      name: 'roles',
      namespaced: false
    },
    { 
      name: 'clusterrolebindings',
      namespaced: false
    },
  ],
  'scheduling.k8s.io/v1': [
    { 
      name: 'priorityclasses',
      namespaced: false
    },
  ],
  'storage.k8s.io/v1': [
    { 
      name: 'storageclasses',
      namespaced: false
    },
    { 
      name: 'csidrivers',
      namespaced: false
    },
    { 
      name: 'volumeattachments',
      namespaced: false
    },
    { 
      name: 'csinodes',
      namespaced: false
    },
    { 
      name: 'csistoragecapacities',
      namespaced: true
    },
  ],
};

// Common resources by API group
const commonGroupResources = {
  'apps/v1': ['deployments', 'statefulsets', 'daemonsets', 'replicasets'],
  'batch/v1': ['jobs', 'cronjobs'],
  'networking.k8s.io/v1': ['ingresses', 'networkpolicies'],
  'rbac.authorization.k8s.io/v1': ['roles', 'rolebindings', 'clusterroles', 'clusterrolebindings']
};

/**
* Handler for GET /apis/:group/:version
*/
async function handleApiGroupResources(
  req: express.Request,
  res: express.Response,
  storage: Storage
): Promise<void> {
  const group = req.params.group;
  const version = req.params.version;
  const groupVersion = `${group}/${version}`;

  logger.info(`Getting API resources for group ${groupVersion}`);

  try {
    // Extract resources from the pre-computed map
    const resources = [];
    
    // Get resources from the pre-computed map
    const groupResources = apiGroupResourcesMap[groupVersion] || [];
    
    // Process resources
    groupResources.forEach(resource => {
      if (!resources.some(r => r.name === resource.name)) {
        const singularName = pluralize.singular(resource.name);
        const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
        resources.push({
          name: resource.name,
          singularName: singularName,
          namespaced: resource.namespaced,
          kind: kind,
          verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
        });
      }
    });
    
    // Add common resources for specific API groups if not already in the list
    const commonResources = commonGroupResources[groupVersion] || [];
    commonResources.forEach(resource => {
      if (!resources.some(r => r.name === resource)) {
        const singularName = pluralize.singular(resource);
        const kind = singularName.charAt(0).toUpperCase() + singularName.slice(1);
        resources.push({
          name: resource,
          singularName: singularName,
          namespaced: true,
          kind: kind,
          verbs: ['get', 'list', 'create', 'update', 'patch', 'delete', 'deletecollection', 'watch']
        });
      }
    });

    const apiResourceList = {
      kind: 'APIResourceList',
      apiVersion: 'v1',
      groupVersion: groupVersion,
      resources: resources
    };

    res.json(apiResourceList);
  } catch (error) {
    handleResourceError(error, res);
  }
}
