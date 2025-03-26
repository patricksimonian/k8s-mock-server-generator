// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpersistentvolumeRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting persistentvolume ${name}`);
      
      const resource = await storage.getResource('persistentvolume', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolume ${name} not found in namespace ${namespace}`), res);
      }
  
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of PersistentVolume. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/persistentvolumes', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing persistentvolume`);
      
      const resources = await storage.listResources('persistentvolume', namespace, listOpts);
      
      const response = {
        kind: 'PersistentvolumeList',
        apiVersion: 'v1',
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

//read the specified PersistentVolume
  router.get('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting persistentvolume ${name}`);
      
      const resource = await storage.getResource('persistentvolume', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolume ${name} not found in namespace ${namespace}`), res);
      }
  
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });
//replace the specified PersistentVolume
  router.put('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = null;
      logger.info(`Updating persistentvolume ${name}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('persistentvolume', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a PersistentVolume
  router.delete('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Deleting persistentvolume ${name}`);
      try {

        const deleted = await storage.deleteResource('persistentvolume', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolume ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolume ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'persistentvolume'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/persistentvolumes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = null;
      logger.info(`Getting persistentvolume ${name}`);

      const resource = await storage.getResource('persistentvolume', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolume ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = storage.mergePatchResource('persistentvolume', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = storage.jsonPatchResource('configmap', name, patchData, namespace, resource.metadata.resourceVersion);

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

//delete collection of PersistentVolume
  router.delete('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = null;
      logger.info(`Deleting all persistentvolume ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('persistentvolume', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolume not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolume not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'persistentvolume'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind PersistentVolume
  router.get('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing persistentvolume`);
      
      const resources = await storage.listResources('persistentvolume', namespace, listOpts);
      
      const response = {
        kind: 'PersistentvolumeList',
        apiVersion: 'v1',
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
  //create a PersistentVolume
  router.post('/api/v1/persistentvolumes', async (req, res, next) => {
    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      logger.info(`Creating persistentvolume`);
      const namespace = null;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = null;
      logger.info(`Getting persistentvolume ${name}`);

      const resource = await storage.getResource('persistentvolume', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolume ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = storage.mergePatchResource('persistentvolume', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = storage.jsonPatchResource('configmap', name, patchData, namespace, resource.metadata.resourceVersion);

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

//read status of the specified PersistentVolume
  router.get('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing persistentvolume`);
      
      const resources = await storage.listResources('persistentvolume', namespace, listOpts);
      
      const response = {
        kind: 'PersistentvolumeList',
        apiVersion: 'v1',
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
//replace status of the specified PersistentVolume
  router.put('/api/v1/persistentvolumes/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = null;
      logger.info(`Updating persistentvolume ${name}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('persistentvolume', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
