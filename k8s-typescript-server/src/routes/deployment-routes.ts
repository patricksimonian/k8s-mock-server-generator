// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { getPrimaryContainer, handleResourceError } from '../utils';


export function createdeploymentRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind Deployment. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting deployment ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('deployment', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`deployment ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });

//read scale of the specified Deployment
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', async (req, res, next) => {
 
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
//replace scale of the specified Deployment
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating deployment ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "scale";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('deployment', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name/scale', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching deployment ${name} in namespace ${namespace}`);
      const subresource = "scale";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('deployment', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Deployment
  router.get('/apis/apps/v1/deployments', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing deployment`);
      
      const resourceList = await storage.listResources('deployment', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching deployment ${name} in namespace ${namespace}`);
      const resource = await storage.getResource('deployment', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`deployment ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = storage.mergePatchResource('deployment', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = storage.jsonPatchResource('deployment', name, patchData, namespace, resource.metadata.resourceVersion);

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

//read the specified Deployment
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting deployment ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('deployment', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`deployment ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });
//replace the specified Deployment
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating deployment ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('deployment', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Deployment
  router.delete('/apis/apps/v1/namespaces/:namespace/deployments/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Deleting deployment ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('deployment', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`deployment ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`deployment ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'deployment'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/deployments', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing deployment`);
      
      const resourceList = await storage.listResources('deployment', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Deployment
  router.delete('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = req.params.namespace;
      logger.info(`Deleting all deployment in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('deployment', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`deployment not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`deployment not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'deployment'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Deployment
  router.get('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing deployment in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('deployment', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create a Deployment
  router.post('/apis/apps/v1/namespaces/:namespace/deployments', async (req, res, next) => {

    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      logger.info(`Creating deployment in namespace ${namespace}`);
      
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching deployment ${name} in namespace ${namespace}`);
      const subresource = "status";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('deployment', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified Deployment
  router.get('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
 
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
//replace status of the specified Deployment
  router.put('/apis/apps/v1/namespaces/:namespace/deployments/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating deployment ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "status";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('deployment', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Deployment. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apps/v1/watch/namespaces/:namespace/deployments', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing deployment in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('deployment', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
