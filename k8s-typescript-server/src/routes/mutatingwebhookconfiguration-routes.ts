// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createmutatingwebhookconfigurationRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing mutatingwebhookconfiguration`);
      
      const resources = await storage.listResources('mutatingwebhookconfiguration');
      
      const response = {
        kind: 'MutatingwebhookconfigurationList',
        apiVersion: 'admissionregistration.k8s.io/v1',
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

//watch changes to an object of kind MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting mutatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('mutatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//read the specified MutatingWebhookConfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting mutatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('mutatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified MutatingWebhookConfiguration
  router.put('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating mutatingwebhookconfiguration ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('mutatingwebhookconfiguration', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a MutatingWebhookConfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting mutatingwebhookconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('mutatingwebhookconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'mutatingwebhookconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting mutatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('mutatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found`), res);
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

//list or watch objects of kind MutatingWebhookConfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing mutatingwebhookconfiguration`);
      
      const resources = await storage.listResources('mutatingwebhookconfiguration');
      
      const response = {
        kind: 'MutatingwebhookconfigurationList',
        apiVersion: 'admissionregistration.k8s.io/v1',
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

//create a MutatingWebhookConfiguration
  router.post('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Creating mutatingwebhookconfiguration`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('mutatingwebhookconfiguration', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of MutatingWebhookConfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('mutatingwebhookconfiguration');
        
        if (!deleted) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'mutatingwebhookconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });

  return router;
}
