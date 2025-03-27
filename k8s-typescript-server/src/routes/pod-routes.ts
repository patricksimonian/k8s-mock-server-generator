// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';


export function createpodRoutes(storage: Storage): express.Router {
  const router = express.Router();
  //create binding of a Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/binding', async (req, res, next) => {
    logger.info(`/api/v1/namespaces/:namespace/pods/:name/binding not supported`);
    res.status(405).json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      reason: 'MethodNotAllowed',
      message: 'Method not allowed'
    });
    return;
  });

//list or watch objects of kind Pod
  router.get('/api/v1/pods', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing pod`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create eviction of a Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/eviction', async (req, res, next) => {
     const resource = req.body;
     // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      logger.info(`Creating ${resource.kind} in namespace ${namespace}`);
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      res.status(201).json(createdResource);
  });

//watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/pods', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing pod`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind Pod. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting pod ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('pod', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
      }
  
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//connect GET requests to proxy of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
//connect PUT requests to proxy of Pod
  router.put('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating pod ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "proxy";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('pod', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  //connect POST requests to proxy of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    logger.info(`/api/v1/namespaces/:namespace/pods/:name/proxy not supported`);
    res.status(405).json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      reason: 'MethodNotAllowed',
      message: 'Method not allowed'
    });
    return;
  });

//connect DELETE requests to proxy of Pod
  router.delete('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = req.params.namespace;
      logger.info(`Deleting all pod in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('pod', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`pod not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`pod not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'pod'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/pods/:name/proxy', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching pod ${name} in namespace ${namespace}`);
      const subresource = "proxy";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('pod', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Pod. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//connect GET requests to attach of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //connect POST requests to attach of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/attach', async (req, res, next) => {
    logger.info(`/api/v1/namespaces/:namespace/pods/:name/attach not supported`);
    res.status(405).json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      reason: 'MethodNotAllowed',
      message: 'Method not allowed'
    });
    return;
  });

//connect GET requests to portforward of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/portforward', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //connect POST requests to portforward of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/portforward', async (req, res, next) => {
    logger.info(`/api/v1/namespaces/:namespace/pods/:name/portforward not supported`);
    res.status(405).json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      reason: 'MethodNotAllowed',
      message: 'Method not allowed'
    });
    return;
  });

//read the specified Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting pod ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('pod', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
      }
  
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
//replace the specified Pod
  router.put('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating pod ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('pod', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Pod
  router.delete('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Deleting pod ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('pod', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`pod ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'pod'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/pods/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching pod ${name} in namespace ${namespace}`);
      const resource = await storage.getResource('pod', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`pod ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = storage.mergePatchResource('pod', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = storage.jsonPatchResource('pod', name, patchData, namespace, resource.metadata.resourceVersion);

          return res.json(updatedResource);
        } catch (error) {
          return res.status(400).json({ error: 'Invalid JSON patch data' });
        }
      } else {
        return res.status(415).json({ error: 'Unsupported Media Type' });
      }
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Pod
  router.get('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create a Pod
  router.post('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {

    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      logger.info(`Creating pod in namespace ${namespace}`);
      
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Pod
  router.delete('/api/v1/namespaces/:namespace/pods', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = req.params.namespace;
      logger.info(`Deleting all pod in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('pod', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`pod not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`pod not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'pod'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read status of the specified Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
//replace status of the specified Pod
  router.put('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating pod ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "status";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('pod', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/pods/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching pod ${name} in namespace ${namespace}`);
      const subresource = "status";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('pod', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//connect GET requests to exec of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/exec', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //connect POST requests to exec of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/exec', async (req, res, next) => {
    logger.info(`/api/v1/namespaces/:namespace/pods/:name/exec not supported`);
    res.status(405).json({
      kind: 'Status',
      apiVersion: 'v1',
      metadata: {},
      status: 'Failure',
      reason: 'MethodNotAllowed',
      message: 'Method not allowed'
    });
    return;
  });

//read log of the specified Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/log', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing pod in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('pod', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
