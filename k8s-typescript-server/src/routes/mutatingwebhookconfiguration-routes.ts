// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createmutatingwebhookconfigurationRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing mutatingwebhookconfiguration`);
      
      const resourceList = await storage.listResources('mutatingwebhookconfiguration', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//delete collection of MutatingWebhookConfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = null;
      logger.info(`Deleting all mutatingwebhookconfiguration ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('mutatingwebhookconfiguration', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
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

//list or watch objects of kind MutatingWebhookConfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing mutatingwebhookconfiguration`);
      
      const resourceList = await storage.listResources('mutatingwebhookconfiguration', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create a MutatingWebhookConfiguration
  router.post('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations', async (req, res, next) => {
    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      logger.info(`Creating mutatingwebhookconfiguration`);
      const namespace = null;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//read the specified MutatingWebhookConfiguration
  router.get('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting mutatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('mutatingwebhookconfiguration', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found in namespace ${namespace}`), res);
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
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = null;
      logger.info(`Updating mutatingwebhookconfiguration ${name}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('mutatingwebhookconfiguration', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a MutatingWebhookConfiguration
  router.delete('/apis/admissionregistration.k8s.io/v1/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Deleting mutatingwebhookconfiguration ${name}`);
      try {

        const deleted = await storage.deleteResource('mutatingwebhookconfiguration', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
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
      const namespace = null;
      logger.info(`Getting mutatingwebhookconfiguration ${name}`);
      const resource = await storage.getResource('mutatingwebhookconfiguration', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = storage.mergePatchResource('mutatingwebhookconfiguration', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = storage.jsonPatchResource('mutatingwebhookconfiguration', name, patchData, namespace, resource.metadata.resourceVersion);

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

//watch changes to an object of kind MutatingWebhookConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/admissionregistration.k8s.io/v1/watch/mutatingwebhookconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting mutatingwebhookconfiguration ${name}`);
      
      const resource = await storage.getResource('mutatingwebhookconfiguration', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`mutatingwebhookconfiguration ${name} not found in namespace ${namespace}`), res);
      }
  
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
