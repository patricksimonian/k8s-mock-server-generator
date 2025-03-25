// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createproxyRoutes(storage: Storage): express.Router {
  const router = express.Router();
  router.patch('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching proxy ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('proxy', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`proxy ${name} not found in namespace ${namespace}`), res);
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
  router.get('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing proxy in namespace ${namespace}`);
      
      const resources = await storage.listResources('proxy', namespace);
      
      const response = {
        kind: 'ProxyList',
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
  router.put('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating proxy ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('proxy', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//connect POST requests to proxy of Service
  router.post('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating proxy in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//connect DELETE requests to proxy of Service
  router.delete('/api/v1/namespaces/:namespace/services/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all proxy in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('proxy', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//connect GET requests to proxy of Node
  router.get('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      logger.info(`Listing proxy`);
      
      const resources = await storage.listResources('proxy');
      
      const response = {
        kind: 'ProxyList',
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

//connect PUT requests to proxy of Node
  router.put('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating proxy ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('proxy', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//connect POST requests to proxy of Node
  router.post('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      logger.info(`Creating proxy`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//connect DELETE requests to proxy of Node
  router.delete('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('proxy');
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/nodes/:name/proxy/:path', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting proxy ${name}`);
      
      const resource = await storage.getResource('proxy', name);
      
      if (!resource) {
        return handleResourceError(new Error(`proxy ${name} not found`), res);
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

//connect GET requests to proxy of Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing proxy in namespace ${namespace}`);
      
      const resources = await storage.listResources('proxy', namespace);
      
      const response = {
        kind: 'ProxyList',
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

//connect PUT requests to proxy of Pod
  router.put('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating proxy ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('proxy', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//connect POST requests to proxy of Pod
  router.post('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating proxy in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('proxy', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//connect DELETE requests to proxy of Pod
  router.delete('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all proxy in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('proxy', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`proxy not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`proxy not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'proxy'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/namespaces/:namespace/pods/:name/proxy/:path', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching proxy ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('proxy', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`proxy ${name} not found in namespace ${namespace}`), res);
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

  return router;
}
