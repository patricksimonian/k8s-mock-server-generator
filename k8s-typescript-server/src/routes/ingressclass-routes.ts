// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createingressclassRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of IngressClass. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/networking.k8s.io/v1/watch/ingressclasses', async (req, res, next) => {
    try {
      logger.info(`Listing ingressclass`);
      
      const resources = await storage.listResources('ingressclass');
      
      const response = {
        kind: 'IngressclassList',
        apiVersion: 'networking.k8s.io/v1',
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

//list or watch objects of kind IngressClass
  router.get('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {
      logger.info(`Listing ingressclass`);
      
      const resources = await storage.listResources('ingressclass');
      
      const response = {
        kind: 'IngressclassList',
        apiVersion: 'networking.k8s.io/v1',
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

//create an IngressClass
  router.post('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {
      logger.info(`Creating ingressclass`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('ingressclass', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of IngressClass
  router.delete('/apis/networking.k8s.io/v1/ingressclasses', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('ingressclass');
        
        if (!deleted) {
          return handleResourceError(new Error(`ingressclass not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`ingressclass not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'ingressclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting ingressclass ${name}`);
      
      const resource = await storage.getResource('ingressclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`ingressclass ${name} not found`), res);
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

//read the specified IngressClass
  router.get('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting ingressclass ${name}`);
      
      const resource = await storage.getResource('ingressclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`ingressclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified IngressClass
  router.put('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating ingressclass ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('ingressclass', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete an IngressClass
  router.delete('/apis/networking.k8s.io/v1/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting ingressclass ${name}`);
      
      try {

        const deleted = await storage.deleteResource('ingressclass', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`ingressclass ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`ingressclass ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'ingressclass'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind IngressClass. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/networking.k8s.io/v1/watch/ingressclasses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting ingressclass ${name}`);
      
      const resource = await storage.getResource('ingressclass', name);
      
      if (!resource) {
        return handleResourceError(new Error(`ingressclass ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
