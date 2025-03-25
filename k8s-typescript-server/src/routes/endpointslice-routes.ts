// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createendpointsliceRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch changes to an object of kind EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting endpointslice ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('endpointslice', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`endpointslice ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//read the specified EndpointSlice
  router.get('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Getting endpointslice ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('endpointslice', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`endpointslice ${name} not found in namespace ${namespace}`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified EndpointSlice
  router.put('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Updating endpointslice ${name} in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name and namespace in metadata
      resource.metadata.name = name;
      resource.metadata.namespace = namespace;
      
      const updatedResource = await storage.updateResource('endpointslice', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete an EndpointSlice
  router.delete('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      const name = req.params.name;
      logger.info(`Deleting endpointslice ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('endpointslice', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`endpointslice ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`endpointslice ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'endpointslice'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      
      logger.info(`Patching endpointslice ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('endpointslice', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`endpointslice ${name} not found in namespace ${namespace}`), res);
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

//watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/discovery.k8s.io/v1/watch/namespaces/:namespace/endpointslices', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing endpointslice in namespace ${namespace}`);
      
      const resources = await storage.listResources('endpointslice', namespace);
      
      const response = {
        kind: 'EndpointsliceList',
        apiVersion: 'discovery.k8s.io/v1',
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

//list or watch objects of kind EndpointSlice
  router.get('/apis/discovery.k8s.io/v1/endpointslices', async (req, res, next) => {
    try {
      logger.info(`Listing endpointslice`);
      
      const resources = await storage.listResources('endpointslice');
      
      const response = {
        kind: 'EndpointsliceList',
        apiVersion: 'discovery.k8s.io/v1',
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

//list or watch objects of kind EndpointSlice
  router.get('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Listing endpointslice in namespace ${namespace}`);
      
      const resources = await storage.listResources('endpointslice', namespace);
      
      const response = {
        kind: 'EndpointsliceList',
        apiVersion: 'discovery.k8s.io/v1',
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

//create an EndpointSlice
  router.post('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Creating endpointslice in namespace ${namespace}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      const createdResource = await storage.createResource('endpointslice', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of EndpointSlice
  router.delete('/apis/discovery.k8s.io/v1/namespaces/:namespace/endpointslices', async (req, res, next) => {
    try {
      const namespace = req.params.namespace;
      logger.info(`Deleting all endpointslice in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('endpointslice', namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`endpointslice not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`endpointslice not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'endpointslice'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of EndpointSlice. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/discovery.k8s.io/v1/watch/endpointslices', async (req, res, next) => {
    try {
      logger.info(`Listing endpointslice`);
      
      const resources = await storage.listResources('endpointslice');
      
      const response = {
        kind: 'EndpointsliceList',
        apiVersion: 'discovery.k8s.io/v1',
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
