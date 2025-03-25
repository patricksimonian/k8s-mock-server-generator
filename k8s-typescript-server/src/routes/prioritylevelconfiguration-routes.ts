// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createprioritylevelconfigurationRoutes(storage: Storage): express.Router {
  const router = express.Router();
  router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting prioritylevelconfiguration ${name}`);
      
      const resource = await storage.getResource('prioritylevelconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found`), res);
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

//read the specified PriorityLevelConfiguration
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting prioritylevelconfiguration ${name}`);
      
      const resource = await storage.getResource('prioritylevelconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified PriorityLevelConfiguration
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating prioritylevelconfiguration ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('prioritylevelconfiguration', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a PriorityLevelConfiguration
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting prioritylevelconfiguration ${name}`);
      
      try {

        const deleted = await storage.deleteResource('prioritylevelconfiguration', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`prioritylevelconfiguration ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'prioritylevelconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting prioritylevelconfiguration ${name}`);
      
      const resource = await storage.getResource('prioritylevelconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind PriorityLevelConfiguration
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing prioritylevelconfiguration`);
      
      const resources = await storage.listResources('prioritylevelconfiguration');
      
      const response = {
        kind: 'PrioritylevelconfigurationList',
        apiVersion: 'flowcontrol.apiserver.k8s.io/v1',
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

//create a PriorityLevelConfiguration
  router.post('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {
      logger.info(`Creating prioritylevelconfiguration`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('prioritylevelconfiguration', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of PriorityLevelConfiguration
  router.delete('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('prioritylevelconfiguration');
        
        if (!deleted) {
          return handleResourceError(new Error(`prioritylevelconfiguration not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`prioritylevelconfiguration not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'prioritylevelconfiguration'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of PriorityLevelConfiguration. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/watch/prioritylevelconfigurations', async (req, res, next) => {
    try {
      logger.info(`Listing prioritylevelconfiguration`);
      
      const resources = await storage.listResources('prioritylevelconfiguration');
      
      const response = {
        kind: 'PrioritylevelconfigurationList',
        apiVersion: 'flowcontrol.apiserver.k8s.io/v1',
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

//read status of the specified PriorityLevelConfiguration
  router.get('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing prioritylevelconfiguration`);
      
      const resources = await storage.listResources('prioritylevelconfiguration');
      
      const response = {
        kind: 'PrioritylevelconfigurationList',
        apiVersion: 'flowcontrol.apiserver.k8s.io/v1',
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

//replace status of the specified PriorityLevelConfiguration
  router.put('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating prioritylevelconfiguration ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('prioritylevelconfiguration', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/flowcontrol.apiserver.k8s.io/v1/prioritylevelconfigurations/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting prioritylevelconfiguration ${name}`);
      
      const resource = await storage.getResource('prioritylevelconfiguration', name);
      
      if (!resource) {
        return handleResourceError(new Error(`prioritylevelconfiguration ${name} not found`), res);
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
