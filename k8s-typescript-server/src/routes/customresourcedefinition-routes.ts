// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcustomresourcedefinitionRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions', async (req, res, next) => {
    try {
      logger.info(`Listing customresourcedefinition`);
      
      const resources = await storage.listResources('customresourcedefinition');
      
      const response = {
        kind: 'CustomresourcedefinitionList',
        apiVersion: 'apiextensions.k8s.io/v1',
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

//read the specified CustomResourceDefinition
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting customresourcedefinition ${name}`);
      
      const resource = await storage.getResource('customresourcedefinition', name);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found`), res);
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
      logger.info(`Updating customresourcedefinition ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('customresourcedefinition', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a CustomResourceDefinition
  router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting customresourcedefinition ${name}`);
      
      try {

        const deleted = await storage.deleteResource('customresourcedefinition', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`customresourcedefinition ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`customresourcedefinition ${name} not deleted. Error: ${(e as Error).message}`), res);
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
      logger.info(`Getting customresourcedefinition ${name}`);
      
      const resource = await storage.getResource('customresourcedefinition', name);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found`), res);
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

//list or watch objects of kind CustomResourceDefinition
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      logger.info(`Listing customresourcedefinition`);
      
      const resources = await storage.listResources('customresourcedefinition');
      
      const response = {
        kind: 'CustomresourcedefinitionList',
        apiVersion: 'apiextensions.k8s.io/v1',
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

//create a CustomResourceDefinition
  router.post('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {
      logger.info(`Creating customresourcedefinition`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('customresourcedefinition', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of CustomResourceDefinition
  router.delete('/apis/apiextensions.k8s.io/v1/customresourcedefinitions', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('customresourcedefinition');
        
        if (!deleted) {
          return handleResourceError(new Error(`customresourcedefinition not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`customresourcedefinition not deleted. Error: ${(e as Error).message}`), res);
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

//watch changes to an object of kind CustomResourceDefinition. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/apiextensions.k8s.io/v1/watch/customresourcedefinitions/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting customresourcedefinition ${name}`);
      
      const resource = await storage.getResource('customresourcedefinition', name);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified CustomResourceDefinition
  router.get('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing customresourcedefinition`);
      
      const resources = await storage.listResources('customresourcedefinition');
      
      const response = {
        kind: 'CustomresourcedefinitionList',
        apiVersion: 'apiextensions.k8s.io/v1',
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

//replace status of the specified CustomResourceDefinition
  router.put('/apis/apiextensions.k8s.io/v1/customresourcedefinitions/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating customresourcedefinition ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('customresourcedefinition', name, resource);
      
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
      logger.info(`Getting customresourcedefinition ${name}`);
      
      const resource = await storage.getResource('customresourcedefinition', name);
      
      if (!resource) {
        return handleResourceError(new Error(`customresourcedefinition ${name} not found`), res);
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
