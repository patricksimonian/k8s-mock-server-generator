// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createjobRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind Job. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/batch/v1/watch/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting job ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('job', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/batch/v1/watch/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing job in namespace ${namespace}`);
      
      const resources = await storage.listResources('job', namespace);
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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

//delete collection of Job
  router.delete('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all job in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('job', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`job not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`job not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'job'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Job
  router.get('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing job in namespace ${namespace}`);
      
      const resources = await storage.listResources('job', namespace);
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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

//create a Job
  router.post('/apis/batch/v1/namespaces/:namespace/jobs', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating job in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('job', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind Job
  router.get('/apis/batch/v1/jobs', async (req, res, next) => {
    try {
      logger.info(`Listing job`);
      
      const resources = await storage.listResources('job');
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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

//watch individual changes to a list of Job. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/batch/v1/watch/jobs', async (req, res, next) => {
    try {
      logger.info(`Listing job`);
      
      const resources = await storage.listResources('job');
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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

//read the specified Job
  router.get('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting job ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('job', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified Job
  router.put('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating job ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('job', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a Job
  router.delete('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting job ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('job', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`job ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'job'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/batch/v1/namespaces/:namespace/jobs/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching job ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('job', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
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

//read status of the specified Job
  router.get('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing job in namespace ${namespace}`);
      
      const resources = await storage.listResources('job', namespace);
      
      const response = {
        kind: 'JobList',
        apiVersion: 'batch/v1',
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

//replace status of the specified Job
  router.put('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating job ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('job', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/batch/v1/namespaces/:namespace/jobs/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching job ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('job', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`job ${name} not found in namespace ${namespace}`), res);
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
