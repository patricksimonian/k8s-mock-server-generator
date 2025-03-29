// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { getPrimaryContainer, handleResourceError } from '../utils';


export function createrolebindingRoutes(storage: Storage): express.Router {
  const router = express.Router();

//list or watch objects of kind RoleBinding
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing rolebinding in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('rolebinding', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create a RoleBinding
  router.post('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {

    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      logger.info(`Creating rolebinding in namespace ${namespace}`);
      
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of RoleBinding
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = req.params.namespace;
      logger.info(`Deleting all rolebinding in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('rolebinding', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`rolebinding not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`rolebinding not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'rolebinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of RoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/rolebindings', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing rolebinding`);
      
      const resourceList = await storage.listResources('rolebinding', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind RoleBinding
  router.get('/apis/rbac.authorization.k8s.io/v1/rolebindings', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing rolebinding`);
      
      const resourceList = await storage.listResources('rolebinding', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of RoleBinding. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing rolebinding in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('rolebinding', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching rolebinding ${name} in namespace ${namespace}`);
      const resource = await storage.getResource('rolebinding', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`rolebinding ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = await storage.mergePatchResource('rolebinding', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = await storage.jsonPatchResource('rolebinding', name, patchData, namespace, resource.metadata.resourceVersion);

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

//read the specified RoleBinding
  router.get('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting rolebinding ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('rolebinding', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`rolebinding ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });
//replace the specified RoleBinding
  router.put('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating rolebinding ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('rolebinding', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a RoleBinding
  router.delete('/apis/rbac.authorization.k8s.io/v1/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Deleting rolebinding ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('rolebinding', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`rolebinding ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`rolebinding ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'rolebinding'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind RoleBinding. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/rbac.authorization.k8s.io/v1/watch/namespaces/:namespace/rolebindings/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting rolebinding ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('rolebinding', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`rolebinding ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });

  return router;
}
