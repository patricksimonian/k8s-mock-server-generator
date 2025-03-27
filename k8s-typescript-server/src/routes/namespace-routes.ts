// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { getPrimaryContainer, handleResourceError } from '../utils';


export function createnamespaceRoutes(storage: Storage): express.Router {
  const router = express.Router();
  router.patch('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = null;
      logger.info(`Getting namespace ${name}`);
      const resource = await storage.getResource('namespace', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`namespace ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = storage.mergePatchResource('namespace', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = storage.jsonPatchResource('namespace', name, patchData, namespace, resource.metadata.resourceVersion);

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

//read the specified Namespace
  router.get('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting namespace ${name}`);
      
      const resource = await storage.getResource('namespace', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`namespace ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });
//replace the specified Namespace
  router.put('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = null;
      logger.info(`Updating namespace ${name}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('namespace', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Namespace
  router.delete('/api/v1/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Deleting namespace ${name}`);
      try {

        const deleted = await storage.deleteResource('namespace', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`namespace ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`namespace ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'namespace'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind Namespace. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting namespace ${name}`);
      
      const resource = await storage.getResource('namespace', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`namespace ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });
//replace finalize of the specified Namespace
  router.put('/api/v1/namespaces/:name/finalize', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = null;
      logger.info(`Updating namespace ${name}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "finalize";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('namespace', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Namespace. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing namespace`);
      
      const resourceList = await storage.listResources('namespace', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create a Namespace
  router.post('/api/v1/namespaces', async (req, res, next) => {

    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      logger.info(`Creating namespace`);
      const namespace = null;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Namespace
  router.get('/api/v1/namespaces', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing namespace`);
      
      const resourceList = await storage.listResources('namespace', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified Namespace
  router.get('/api/v1/namespaces/:name/status', async (req, res, next) => {
 
  // the subresourcestatus
      try {
        const name = req.params.name;
        const namespace = null;
        logger.info(`Getting status ${name}`);
        
        const resource = await storage.getResource('status', name, namespace);
        
        if (!resource) {
          return handleResourceError(new Error(`status ${name} not found in namespace ${namespace}`), res);
        }
        res.json(resource);
      } catch (error) {
        next(error);
      }
  
   
  });
//replace status of the specified Namespace
  router.put('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = null;
      logger.info(`Updating namespace ${name}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "status";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('namespace', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = null;
      logger.info(`Getting namespace ${name}`);
      const subresource = "status";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('namespace', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
