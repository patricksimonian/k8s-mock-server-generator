// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createnodeRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read status of the specified Node
  router.get('/api/v1/nodes/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing node`);
      
      const resources = await storage.listResources('node');
      
      const response = {
        kind: 'NodeList',
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

//replace status of the specified Node
  router.put('/api/v1/nodes/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating node ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('node', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/nodes/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting node ${name}`);
      
      const resource = await storage.getResource('node', name);
      
      if (!resource) {
        return handleResourceError(new Error(`node ${name} not found`), res);
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

//watch individual changes to a list of Node. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/api/v1/watch/nodes', async (req, res, next) => {
    try {
      logger.info(`Listing node`);
      
      const resources = await storage.listResources('node');
      
      const response = {
        kind: 'NodeList',
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

//list or watch objects of kind Node
  router.get('/api/v1/nodes', async (req, res, next) => {
    try {
      logger.info(`Listing node`);
      
      const resources = await storage.listResources('node');
      
      const response = {
        kind: 'NodeList',
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

//create a Node
  router.post('/api/v1/nodes', async (req, res, next) => {
    try {
      logger.info(`Creating node`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('node', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of Node
  router.delete('/api/v1/nodes', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('node');
        
        if (!deleted) {
          return handleResourceError(new Error(`node not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`node not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'node'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind Node. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/api/v1/watch/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting node ${name}`);
      
      const resource = await storage.getResource('node', name);
      
      if (!resource) {
        return handleResourceError(new Error(`node ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//connect GET requests to proxy of Node
  router.get('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      logger.info(`Listing node`);
      
      const resources = await storage.listResources('node');
      
      const response = {
        kind: 'NodeList',
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
  router.put('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating node ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('node', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//connect POST requests to proxy of Node
  router.post('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      logger.info(`Creating node`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('node', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//connect DELETE requests to proxy of Node
  router.delete('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('node');
        
        if (!deleted) {
          return handleResourceError(new Error(`node not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`node not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'node'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/nodes/:name/proxy', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting node ${name}`);
      
      const resource = await storage.getResource('node', name);
      
      if (!resource) {
        return handleResourceError(new Error(`node ${name} not found`), res);
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

//read the specified Node
  router.get('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting node ${name}`);
      
      const resource = await storage.getResource('node', name);
      
      if (!resource) {
        return handleResourceError(new Error(`node ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified Node
  router.put('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating node ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('node', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Node
  router.delete('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting node ${name}`);
      
      try {

        const deleted = await storage.deleteResource('node', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`node ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`node ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'node'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/api/v1/nodes/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting node ${name}`);
      
      const resource = await storage.getResource('node', name);
      
      if (!resource) {
        return handleResourceError(new Error(`node ${name} not found`), res);
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
