// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createserviceRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read the specified Service
  router.get('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting service ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('service', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified Service
  router.put('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating service ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('service', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Service
  router.delete('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting service ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('service', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`service ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'service'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching service ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('service', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
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

//list or watch objects of kind Service
  router.get('/api/v1/services', async (req, res, next) => {
    try {
      logger.info(`Listing service`);
      
      const resources = await storage.listResources('service');
      
      const response = {
        kind: 'ServiceList',
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

//watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/namespaces/:namespace/services', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing service in namespace ${namespace}`);
      
      const resources = await storage.listResources('service', namespace);
      
      const response = {
        kind: 'ServiceList',
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

//list or watch objects of kind Service
  router.get('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing service in namespace ${namespace}`);
      
      const resources = await storage.listResources('service', namespace);
      
      const response = {
        kind: 'ServiceList',
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

//create a Service
  router.post('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating service in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('service', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Service
  router.delete('/api/v1/namespaces/:namespace/services', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all service in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('service', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`service not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`service not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'service'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind Service. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/namespaces/:namespace/services/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting service ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('service', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified Service
  router.get('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing service in namespace ${namespace}`);
      
      const resources = await storage.listResources('service', namespace);
      
      const response = {
        kind: 'ServiceList',
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

//replace status of the specified Service
  router.put('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating service ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('service', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/services/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching service ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('service', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
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

//connect GET requests to proxy of Service
  router.get('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing service in namespace ${namespace}`);
      
      const resources = await storage.listResources('service', namespace);
      
      const response = {
        kind: 'ServiceList',
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

//connect PUT requests to proxy of Service
  router.put('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating service ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('service', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//connect POST requests to proxy of Service
  router.post('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating service in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('service', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//connect DELETE requests to proxy of Service
  router.delete('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all service in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('service', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`service not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`service not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'service'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/services/:name/proxy', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching service ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('service', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`service ${name} not found in namespace ${namespace}`), res);
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

//watch individual changes to a list of Service. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/services', async (req, res, next) => {
    try {
      logger.info(`Listing service`);
      
      const resources = await storage.listResources('service');
      
      const response = {
        kind: 'ServiceList',
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
