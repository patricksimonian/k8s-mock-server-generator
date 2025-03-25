// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createclusterrolebindingRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read the specified ClusterRoleBinding
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting clusterrolebinding ${name}`);
      
      const resource = await storage.getResource('clusterrolebinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrolebinding ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified ClusterRoleBinding
  router.put('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating clusterrolebinding ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('clusterrolebinding', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a ClusterRoleBinding
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting clusterrolebinding ${name}`);
      
      try {

        const deleted = await storage.deleteResource('clusterrolebinding', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`clusterrolebinding ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`clusterrolebinding ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'clusterrolebinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting clusterrolebinding ${name}`);
      
      const resource = await storage.getResource('clusterrolebinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrolebinding ${name} not found`), res);
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

//watch changes to an object of kind ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting clusterrolebinding ${name}`);
      
      const resource = await storage.getResource('clusterrolebinding', name);
      
      if (!resource) {
        return handleResourceError(new Error(`clusterrolebinding ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ClusterRoleBinding
  router.get('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {
      logger.info(`Listing clusterrolebinding`);
      
      const resources = await storage.listResources('clusterrolebinding');
      
      const response = {
        kind: 'ClusterrolebindingList',
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

//create a ClusterRoleBinding
  router.post('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {
      logger.info(`Creating clusterrolebinding`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('clusterrolebinding', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of ClusterRoleBinding
  router.delete('/apis/rbac.authorization.k8s.io/v1/clusterrolebindings', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('clusterrolebinding');
        
        if (!deleted) {
          return handleResourceError(new Error(`clusterrolebinding not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`clusterrolebinding not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'clusterrolebinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of ClusterRoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/clusterrolebindings', async (req, res, next) => {
    try {
      logger.info(`Listing clusterrolebinding`);
      
      const resources = await storage.listResources('clusterrolebinding');
      
      const response = {
        kind: 'ClusterrolebindingList',
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

  return router;
}
