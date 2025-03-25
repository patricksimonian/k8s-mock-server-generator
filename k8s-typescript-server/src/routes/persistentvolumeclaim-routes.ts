// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpersistentvolumeclaimRoutes(storage: Storage): express.Router {
  const router = express.Router();

//delete a PersistentVolumeClaim
  router.delete('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting persistentvolumeclaim ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('persistentvolumeclaim', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolumeclaim ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'persistentvolumeclaim'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('persistentvolumeclaim', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
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

//read the specified PersistentVolumeClaim
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('persistentvolumeclaim', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified PersistentVolumeClaim
  router.put('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('persistentvolumeclaim', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified PersistentVolumeClaim
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing persistentvolumeclaim in namespace ${namespace}`);
      
      const resources = await storage.listResources('persistentvolumeclaim', namespace);
      
      const response = {
        kind: 'PersistentvolumeclaimList',
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

//replace status of the specified PersistentVolumeClaim
  router.put('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('persistentvolumeclaim', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/persistentvolumeclaims/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('persistentvolumeclaim', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
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

//watch changes to an object of kind PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/persistentvolumeclaims/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting persistentvolumeclaim ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('persistentvolumeclaim', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`persistentvolumeclaim ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind PersistentVolumeClaim
  router.get('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing persistentvolumeclaim in namespace ${namespace}`);
      
      const resources = await storage.listResources('persistentvolumeclaim', namespace);
      
      const response = {
        kind: 'PersistentvolumeclaimList',
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

//create a PersistentVolumeClaim
  router.post('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating persistentvolumeclaim in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('persistentvolumeclaim', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of PersistentVolumeClaim
  router.delete('/api/v1/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all persistentvolumeclaim in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('persistentvolumeclaim', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`persistentvolumeclaim not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`persistentvolumeclaim not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'persistentvolumeclaim'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind PersistentVolumeClaim
  router.get('/api/v1/persistentvolumeclaims', async (req, res, next) => {
    try {
      logger.info(`Listing persistentvolumeclaim`);
      
      const resources = await storage.listResources('persistentvolumeclaim');
      
      const response = {
        kind: 'PersistentvolumeclaimList',
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

//watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/persistentvolumeclaims', async (req, res, next) => {
    try {
      logger.info(`Listing persistentvolumeclaim`);
      
      const resources = await storage.listResources('persistentvolumeclaim');
      
      const response = {
        kind: 'PersistentvolumeclaimList',
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

//watch individual changes to a list of PersistentVolumeClaim. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/persistentvolumeclaims', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing persistentvolumeclaim in namespace ${namespace}`);
      
      const resources = await storage.listResources('persistentvolumeclaim', namespace);
      
      const response = {
        kind: 'PersistentvolumeclaimList',
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

  return router;
}
