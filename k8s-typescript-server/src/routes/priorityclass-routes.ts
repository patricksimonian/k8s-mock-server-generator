// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createpriorityclassRoutes(storage: Storage): express.Router {
  const router = express.Router();

//list or watch objects of kind PriorityClass
  router.get('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {
      logger.info(`Listing priorityclass`);
      
      const resources = await storage.listResources('priorityclass');
      
      const response = {
        kind: 'PriorityclassList',
        apiVersion: 'scheduling.k8s.io/v1',
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

//create a PriorityClass
  router.post('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {
      logger.info(`Creating priorityclass`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('priorityclass', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of PriorityClass
  router.delete('/apis/scheduling.k8s.io/v1/priorityclasses', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('priorityclass');
        
        if (!deleted) {
          return handleResourceError(new Error(`priorityclass not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`priorityclass not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'priorityclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of PriorityClass. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/scheduling.k8s.io/v1/watch/priorityclasses', async (req, res, next) => {
    try {
      logger.info(`Listing priorityclass`);
      
      const resources = await storage.listResources('priorityclass');
      
      const response = {
        kind: 'PriorityclassList',
        apiVersion: 'scheduling.k8s.io/v1',
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

//watch changes to an object of kind PriorityClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/scheduling.k8s.io/v1/watch/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting priorityclass ${name}`);
      
      const resource = await storage.getResource('priorityclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`priorityclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//read the specified PriorityClass
  router.get('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting priorityclass ${name}`);
      
      const resource = await storage.getResource('priorityclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`priorityclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified PriorityClass
  router.put('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating priorityclass ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('priorityclass', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a PriorityClass
  router.delete('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting priorityclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('priorityclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`priorityclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`priorityclass ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'priorityclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/scheduling.k8s.io/v1/priorityclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting priorityclass ${name}`);
      
      const resource = await storage.getResource('priorityclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`priorityclass ${name} not found`), res);
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
