// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createvalidatingwebhookconfigurationRoutes(storage: Storage): express.Router {
  const router = express.Router();

//replace the specified ValidatingWebhookConfiguration
  router.put('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating validatingwebhookconfiguration ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('validatingwebhookconfiguration', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a ValidatingWebhookConfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting validatingwebhookconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('validatingwebhookconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'validatingwebhookconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting validatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('validatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not found`), res);
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

//read the specified ValidatingWebhookConfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('validatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting validatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('validatingwebhookconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`validatingwebhookconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind ValidatingWebhookConfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing validatingwebhookconfiguration`);
      
      const resources = await storage.listResources('validatingwebhookconfiguration');
      
      const response = {
        kind: 'ValidatingwebhookconfigurationList',
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

//create a ValidatingWebhookConfiguration
  router.post('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Creating validatingwebhookconfiguration`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('validatingwebhookconfiguration', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of ValidatingWebhookConfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/validatingwebhookconfigurations', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('validatingwebhookconfiguration');
        
        if (!deleted) {
          return handleResourceError(new Error(`validatingwebhookconfiguration not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`validatingwebhookconfiguration not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'validatingwebhookconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of ValidatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/admissionregistration.k8s.io/v1/watch/validatingwebhookconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing validatingwebhookconfiguration`);
      
      const resources = await storage.listResources('validatingwebhookconfiguration');
      
      const response = {
        kind: 'ValidatingwebhookconfigurationList',
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

  return router;
}
