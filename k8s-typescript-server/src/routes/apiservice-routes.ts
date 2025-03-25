// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createapiserviceRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of APIService. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/apiregistration.k8s.io/v1/watch/apiservices', async (req, res, next) => {
    try {
      logger.info(`Listing apiservice`);
      
      const resources = await storage.listResources('apiservice');
      
      const response = {
        kind: 'ApiserviceList',
        apiVersion: 'apiregistration.k8s.io/v1',
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

//read the specified APIService
  router.get('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting apiservice ${name}`);
      
      const resource = await storage.getResource('apiservice', name);
      
      if (!resource) {
        return handleResourceError(new Error(`apiservice ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified APIService
  router.put('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating apiservice ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('apiservice', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete an APIService
  router.delete('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting apiservice ${name}`);
      
      try {

        const deleted = await storage.deleteResource('apiservice', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`apiservice ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`apiservice ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'apiservice'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/apiregistration.k8s.io/v1/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting apiservice ${name}`);
      
      const resource = await storage.getResource('apiservice', name);
      
      if (!resource) {
        return handleResourceError(new Error(`apiservice ${name} not found`), res);
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

//watch changes to an object of kind APIService. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/apiregistration.k8s.io/v1/watch/apiservices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting apiservice ${name}`);
      
      const resource = await storage.getResource('apiservice', name);
      
      if (!resource) {
        return handleResourceError(new Error(`apiservice ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind APIService
  router.get('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {
      logger.info(`Listing apiservice`);
      
      const resources = await storage.listResources('apiservice');
      
      const response = {
        kind: 'ApiserviceList',
        apiVersion: 'apiregistration.k8s.io/v1',
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

//create an APIService
  router.post('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {
      logger.info(`Creating apiservice`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('apiservice', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of APIService
  router.delete('/apis/apiregistration.k8s.io/v1/apiservices', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('apiservice');
        
        if (!deleted) {
          return handleResourceError(new Error(`apiservice not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`apiservice not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'apiservice'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read status of the specified APIService
  router.get('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing apiservice`);
      
      const resources = await storage.listResources('apiservice');
      
      const response = {
        kind: 'ApiserviceList',
        apiVersion: 'apiregistration.k8s.io/v1',
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

//replace status of the specified APIService
  router.put('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating apiservice ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('apiservice', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/apiregistration.k8s.io/v1/apiservices/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting apiservice ${name}`);
      
      const resource = await storage.getResource('apiservice', name);
      
      if (!resource) {
        return handleResourceError(new Error(`apiservice ${name} not found`), res);
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
