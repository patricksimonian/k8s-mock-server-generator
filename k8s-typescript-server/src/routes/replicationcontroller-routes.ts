// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { getPrimaryContainer, handleResourceError } from '../utils';


export function createreplicationcontrollerRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing replicationcontroller in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('replicationcontroller', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified ReplicationController
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
 
  // the subresourcestatus
      try {
        const name = req.params.name;
        const namespace = req.params.namespace;
        logger.info(`Getting status ${name} in namespace ${namespace}`);
        
        const resource = await storage.getResource('status', name, namespace);
        
        if (!resource) {
          return handleResourceError(new Error(`status ${name} not found in namespace ${namespace}`), res);
        }
        res.json(resource);
      } catch (error) {
        next(error);
      }
  
   
  });
//replace status of the specified ReplicationController
  router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating replicationcontroller ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "status";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('replicationcontroller', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/replicationcontrollers/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching replicationcontroller ${name} in namespace ${namespace}`);
      const subresource = "status";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('replicationcontroller', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read scale of the specified ReplicationController
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', async (req, res, next) => {
 
  // the subresourcescale
      try {
        const name = req.params.name;
        const namespace = req.params.namespace;
        logger.info(`Getting scale ${name} in namespace ${namespace}`);
        
        const resource = await storage.getResource('scale', name, namespace);
        
        if (!resource) {
          return handleResourceError(new Error(`scale ${name} not found in namespace ${namespace}`), res);
        }
        res.json(resource);
      } catch (error) {
        next(error);
      }
  
   
  });
//replace scale of the specified ReplicationController
  router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating replicationcontroller ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "scale";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('replicationcontroller', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/replicationcontrollers/:name/scale', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching replicationcontroller ${name} in namespace ${namespace}`);
      const subresource = "scale";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('replicationcontroller', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ReplicationController
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing replicationcontroller in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('replicationcontroller', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create a ReplicationController
  router.post('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {

    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      logger.info(`Creating replicationcontroller in namespace ${namespace}`);
      
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of ReplicationController
  router.delete('/api/v1/namespaces/:namespace/replicationcontrollers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = req.params.namespace;
      logger.info(`Deleting all replicationcontroller in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('replicationcontroller', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`replicationcontroller not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`replicationcontroller not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'replicationcontroller'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ReplicationController
  router.get('/api/v1/replicationcontrollers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing replicationcontroller`);
      
      const resourceList = await storage.listResources('replicationcontroller', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//delete a ReplicationController
  router.delete('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Deleting replicationcontroller ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('replicationcontroller', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`replicationcontroller ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`replicationcontroller ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'replicationcontroller'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching replicationcontroller ${name} in namespace ${namespace}`);
      const resource = await storage.getResource('replicationcontroller', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`replicationcontroller ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = await storage.mergePatchResource('replicationcontroller', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = await storage.jsonPatchResource('replicationcontroller', name, patchData, namespace, resource.metadata.resourceVersion);

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

//read the specified ReplicationController
  router.get('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting replicationcontroller ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('replicationcontroller', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`replicationcontroller ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });
//replace the specified ReplicationController
  router.put('/api/v1/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating replicationcontroller ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('replicationcontroller', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind ReplicationController. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/replicationcontrollers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting replicationcontroller ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('replicationcontroller', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`replicationcontroller ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });

//watch individual changes to a list of ReplicationController. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/replicationcontrollers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing replicationcontroller`);
      
      const resourceList = await storage.listResources('replicationcontroller', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
