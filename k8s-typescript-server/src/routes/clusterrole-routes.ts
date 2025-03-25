// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createclusterroleRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of ClusterRole. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles', async (req, res, next) => {
    try {
      logger.info(`Listing clusterrole`);
      
      const resources = await storage.listResources('clusterrole');
      
      const response = {
        kind: 'ClusterroleList',
        apiVersion: 'rbac.authorization.k8s.io/v1',
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

//list or watch objects of kind ClusterRole
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {
      logger.info(`Listing clusterrole`);
      
      const resources = await storage.listResources('clusterrole');
      
      const response = {
        kind: 'ClusterroleList',
        apiVersion: 'rbac.authorization.k8s.io/v1',
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

//create a ClusterRole
  router.post('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {
      logger.info(`Creating clusterrole`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('clusterrole', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of ClusterRole
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterroles', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('clusterrole');
        
        if (!deleted) {
          return handleResourceError(new Error(`clusterrole not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`clusterrole not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'clusterrole'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind ClusterRole. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting clusterrole ${name}`);
      
      const resource = await storage.getResource('clusterrole', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrole ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//read the specified ClusterRole
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting clusterrole ${name}`);
      
      const resource = await storage.getResource('clusterrole', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrole ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified ClusterRole
  router.put('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating clusterrole ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('clusterrole', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a ClusterRole
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting clusterrole ${name}`);
      
      try {

        const deleted = await storage.deleteResource('clusterrole', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`clusterrole ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`clusterrole ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'clusterrole'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/rbac.authorization.k8s.io/v1/clusterroles/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting clusterrole ${name}`);
      
      const resource = await storage.getResource('clusterrole', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrole ${name} not found`), res);
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
