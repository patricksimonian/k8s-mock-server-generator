// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createconfigmapRoutes(storage: Storage): express.Router {
  const router = express.Router();

//list or watch objects of kind ConfigMap
  router.get('/api/v1/configmaps', async (req, res, next) => {
    try {
      logger.info(`Listing configmap`);
      
      const resources = await storage.listResources('configmap');
      
      const response = {
        kind: 'ConfigmapList',
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

//watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/configmaps', async (req, res, next) => {
    try {
      logger.info(`Listing configmap`);
      
      const resources = await storage.listResources('configmap');
      
      const response = {
        kind: 'ConfigmapList',
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
  router.patch('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching configmap ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('configmap', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`configmap ${name} not found in namespace ${namespace}`), res);
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

//read the specified ConfigMap
  router.get('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting configmap ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('configmap', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`configmap ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified ConfigMap
  router.put('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating configmap ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('configmap', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a ConfigMap
  router.delete('/api/v1/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting configmap ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('configmap', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`configmap ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`configmap ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'configmap'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ConfigMap
  router.get('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing configmap in namespace ${namespace}`);
      
      const resources = await storage.listResources('configmap', namespace);
      
      const response = {
        kind: 'ConfigmapList',
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

//create a ConfigMap
  router.post('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating configmap in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('configmap', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of ConfigMap
  router.delete('/api/v1/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all configmap in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('configmap', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`configmap not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`configmap not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'configmap'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind ConfigMap. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/configmaps/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting configmap ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('configmap', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`configmap ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of ConfigMap. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/configmaps', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing configmap in namespace ${namespace}`);
      
      const resources = await storage.listResources('configmap', namespace);
      
      const response = {
        kind: 'ConfigmapList',
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
