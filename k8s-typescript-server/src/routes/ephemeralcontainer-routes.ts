// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { getPrimaryContainer, handleResourceError } from '../utils';


export function createephemeralcontainerRoutes(storage: Storage): express.Router {
  const router = express.Router();
  router.patch('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching ephemeralcontainer ${name} in namespace ${namespace}`);
      const resource = await storage.getResource('ephemeralcontainer', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`ephemeralcontainer ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = await storage.mergePatchResource('ephemeralcontainer', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = await storage.jsonPatchResource('ephemeralcontainer', name, patchData, namespace, resource.metadata.resourceVersion);

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

//read ephemeralcontainers of the specified Pod
  router.get('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting ephemeralcontainer ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('ephemeralcontainer', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`ephemeralcontainer ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });
//replace ephemeralcontainers of the specified Pod
  router.put('/api/v1/namespaces/:namespace/pods/:name/ephemeralcontainers', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating ephemeralcontainer ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('ephemeralcontainer', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
