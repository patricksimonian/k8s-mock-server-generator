// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcsinodeRoutes(storage: Storage): express.Router {
  const router = express.Router();
  router.patch('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting csinode ${name}`);
      
      const resource = await storage.getResource('csinode', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csinode ${name} not found`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = storage.mergePatchResource('configmap', name, patchData);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = storage.jsonPatchResource('configmap', name, patchData);

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

//read the specified CSINode
  router.get('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting csinode ${name}`);
      
      const resource = await storage.getResource('csinode', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csinode ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified CSINode
  router.put('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating csinode ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('csinode', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a CSINode
  router.delete('/apis/storage.k8s.io/v1/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting csinode ${name}`);
      
      try {

        const deleted = await storage.deleteResource('csinode', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`csinode ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csinode ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'csinode'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind CSINode
  router.get('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {
      logger.info(`Listing csinode`);
      
      const resources = await storage.listResources('csinode');
      
      const response = {
        kind: 'CsinodeList',
        apiVersion: 'storage.k8s.io/v1',
        metadata: {
          resourceVersion: '1'
        },
        items: resources || []
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

//create a CSINode
  router.post('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {
      logger.info(`Creating csinode`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('csinode', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of CSINode
  router.delete('/apis/storage.k8s.io/v1/csinodes', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('csinode');
        
        if (!deleted) {
          return handleResourceError(new Error(`csinode not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csinode not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'csinode'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of CSINode. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/storage.k8s.io/v1/watch/csinodes', async (req, res, next) => {
    try {
      logger.info(`Listing csinode`);
      
      const resources = await storage.listResources('csinode');
      
      const response = {
        kind: 'CsinodeList',
        apiVersion: 'storage.k8s.io/v1',
        metadata: {
          resourceVersion: '1'
        },
        items: resources || []
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind CSINode. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/storage.k8s.io/v1/watch/csinodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting csinode ${name}`);
      
      const resource = await storage.getResource('csinode', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csinode ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
