// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcsidriverRoutes(storage: Storage): express.Router {
  const router = express.Router();

//replace the specified CSIDriver
  router.put('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating csidriver ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('csidriver', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a CSIDriver
  router.delete('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting csidriver ${name}`);
      
      try {

        const deleted = await storage.deleteResource('csidriver', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`csidriver ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csidriver ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'csidriver'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting csidriver ${name}`);
      
      const resource = await storage.getResource('csidriver', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csidriver ${name} not found`), res);
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

//read the specified CSIDriver
  router.get('/apis/storage.k8s.io/v1/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting csidriver ${name}`);
      
      const resource = await storage.getResource('csidriver', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csidriver ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of CSIDriver. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/storage.k8s.io/v1/watch/csidrivers', async (req, res, next) => {
    try {
      logger.info(`Listing csidriver`);
      
      const resources = await storage.listResources('csidriver');
      
      const response = {
        kind: 'CsidriverList',
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

//list or watch objects of kind CSIDriver
  router.get('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {
      logger.info(`Listing csidriver`);
      
      const resources = await storage.listResources('csidriver');
      
      const response = {
        kind: 'CsidriverList',
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

//create a CSIDriver
  router.post('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {
      logger.info(`Creating csidriver`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('csidriver', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of CSIDriver
  router.delete('/apis/storage.k8s.io/v1/csidrivers', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('csidriver');
        
        if (!deleted) {
          return handleResourceError(new Error(`csidriver not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`csidriver not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'csidriver'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind CSIDriver. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/storage.k8s.io/v1/watch/csidrivers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting csidriver ${name}`);
      
      const resource = await storage.getResource('csidriver', name);
      
      if (!resource) {
        return handleResourceError(new Error(`csidriver ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
