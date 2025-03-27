// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { getPrimaryContainer, handleResourceError } from '../utils';


export function createcustomresourcedefinitionRoutes(storage: Storage): express.Router {
  const router = express.Router();
  //create a CustomResourceDefinition
  router.post('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {

    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      logger.info(`Creating customresourcedefinition`);
      const namespace = null;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of CustomResourceDefinition
  router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = null;
      logger.info(`Deleting all customresourcedefinition ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('customresourcedefinition', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`customresourcedefinition not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`customresourcedefinition not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'customresourcedefinition'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind CustomResourceDefinition
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing customresourcedefinition`);
      
      const resourceList = await storage.listResources('customresourcedefinition', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//read the specified CustomResourceDefinition
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting customresourcedefinition ${name}`);
      
      const resource = await storage.getResource('customresourcedefinition', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });
//replace the specified CustomResourceDefinition
  router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = null;
      logger.info(`Updating customresourcedefinition ${name}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('customresourcedefinition', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a CustomResourceDefinition
  router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Deleting customresourcedefinition ${name}`);
      try {

        const deleted = await storage.deleteResource('customresourcedefinition', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`customresourcedefinition ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`customresourcedefinition ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'customresourcedefinition'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = null;
      logger.info(`Getting customresourcedefinition ${name}`);
      const resource = await storage.getResource('customresourcedefinition', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = await storage.mergePatchResource('customresourcedefinition', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = await storage.jsonPatchResource('customresourcedefinition', name, patchData, namespace, resource.metadata.resourceVersion);

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

//watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting customresourcedefinition ${name}`);
      
      const resource = await storage.getResource('customresourcedefinition', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });

//watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing customresourcedefinition`);
      
      const resourceList = await storage.listResources('customresourcedefinition', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified CustomResourceDefinition
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
 
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
//replace status of the specified CustomResourceDefinition
  router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = null;
      logger.info(`Updating customresourcedefinition ${name}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "status";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('customresourcedefinition', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = null;
      logger.info(`Getting customresourcedefinition ${name}`);
      const subresource = "status";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('customresourcedefinition', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
