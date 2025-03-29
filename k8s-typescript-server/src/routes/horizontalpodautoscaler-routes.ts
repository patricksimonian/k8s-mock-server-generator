// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { getPrimaryContainer, handleResourceError } from '../utils';


export function createhorizontalpodautoscalerRoutes(storage: Storage): express.Router {
  const router = express.Router();

//watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/autoscaling/v1/watch/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing horizontalpodautoscaler`);
      
      const resourceList = await storage.listResources('horizontalpodautoscaler', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
 
  // the subresourcestatus
      try {
        const name = req.params.name;
        const namespace = req.params.namespace;
        logger.info(`Getting status ${name} in namespace ${namespace}`);
        
        const resource = await storage.getResource('status', name, namespace);
        
        if (!resource) {
          return handleResourceError(new Error(`status ${name} not found in namespace ${namespace}`), res);
        }
        res.json(resource);
      } catch (error) {
        next(error);
      }
  
   
  });
//replace status of the specified HorizontalPodAutoscaler
  router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating horizontalpodautoscaler ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "status";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('horizontalpodautoscaler', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching horizontalpodautoscaler ${name} in namespace ${namespace}`);
      const subresource = "status";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('horizontalpodautoscaler', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of HorizontalPodAutoscaler
  router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = req.params.namespace;
      logger.info(`Deleting all horizontalpodautoscaler in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('horizontalpodautoscaler', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing horizontalpodautoscaler in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('horizontalpodautoscaler', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create a HorizontalPodAutoscaler
  router.post('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {

    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      logger.info(`Creating horizontalpodautoscaler in namespace ${namespace}`);
      
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//list or watch objects of kind HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v2/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing horizontalpodautoscaler`);
      
      const resourceList = await storage.listResources('horizontalpodautoscaler', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/autoscaling/v2/watch/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing horizontalpodautoscaler`);
      
      const resourceList = await storage.listResources('horizontalpodautoscaler', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing horizontalpodautoscaler in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('horizontalpodautoscaler', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//read status of the specified HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
 
  // the subresourcestatus
      try {
        const name = req.params.name;
        const namespace = req.params.namespace;
        logger.info(`Getting status ${name} in namespace ${namespace}`);
        
        const resource = await storage.getResource('status', name, namespace);
        
        if (!resource) {
          return handleResourceError(new Error(`status ${name} not found in namespace ${namespace}`), res);
        }
        res.json(resource);
      } catch (error) {
        next(error);
      }
  
   
  });
//replace status of the specified HorizontalPodAutoscaler
  router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating horizontalpodautoscaler ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;
      const subresource = "status";
      const resourceVersion = resource.metadata && resource.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('horizontalpodautoscaler', name, subresource, resource, namespace);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching horizontalpodautoscaler ${name} in namespace ${namespace}`);
      const subresource = "status";

      const resourceVersion = patchData.metadata && patchData.metadata.resourceVersion || undefined; 
      const updatedResource = await storage.updateSubresource('horizontalpodautoscaler', name, subresource, patchData, namespace);
      return res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing horizontalpodautoscaler in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('horizontalpodautoscaler', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
//replace the specified HorizontalPodAutoscaler
  router.put('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating horizontalpodautoscaler ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('horizontalpodautoscaler', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a HorizontalPodAutoscaler
  router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('horizontalpodautoscaler', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching horizontalpodautoscaler ${name} in namespace ${namespace}`);
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = await storage.mergePatchResource('horizontalpodautoscaler', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = await storage.jsonPatchResource('horizontalpodautoscaler', name, patchData, namespace, resource.metadata.resourceVersion);

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

//read the specified HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });

//list or watch objects of kind HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = req.params.namespace;
      logger.info(`Listing horizontalpodautoscaler in namespace ${namespace}`);
      
      const resourceList = await storage.listResources('horizontalpodautoscaler', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });
  //create a HorizontalPodAutoscaler
  router.post('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {

    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      logger.info(`Creating horizontalpodautoscaler in namespace ${namespace}`);
      
      
      // Set namespace in metadata
      resource.metadata.namespace = namespace;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of HorizontalPodAutoscaler
  router.delete('/apis/autoscaling/v1/namespaces/:namespace/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const namespace = req.params.namespace;
      logger.info(`Deleting all horizontalpodautoscaler in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteAllResources('horizontalpodautoscaler', namespace, { labelSelector, fieldSelector });
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
    
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/autoscaling/v2/watch/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });

//watch changes to an object of kind HorizontalPodAutoscaler. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/autoscaling/v1/watch/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });

//list or watch objects of kind HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v1/horizontalpodautoscalers', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing horizontalpodautoscaler`);
      
      const resourceList = await storage.listResources('horizontalpodautoscaler', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

//read the specified HorizontalPodAutoscaler
  router.get('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Getting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
         res.json(resource);
    } catch (error) {
      next(error);
    }
  
   
  });
//replace the specified HorizontalPodAutoscaler
  router.put('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      const namespace = req.params.namespace;
      resource.metadata.namespace = namespace;
      logger.info(`Updating horizontalpodautoscaler ${name} in namespace ${namespace}`);

      // Set name and namespace in metadata
      resource.metadata.name = name;

      const updatedResource = await storage.updateResource('horizontalpodautoscaler', name, resource, namespace, resource.metadata.resourceVersion);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a HorizontalPodAutoscaler
  router.delete('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = req.params.namespace;
      logger.info(`Deleting horizontalpodautoscaler ${name} in namespace ${namespace}`);
      try {

        const deleted = await storage.deleteResource('horizontalpodautoscaler', name, namespace);
        
        if (!deleted) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`horizontalpodautoscaler ${name} not deleted in namespace ${namespace}. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'horizontalpodautoscaler'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/autoscaling/v2/namespaces/:namespace/horizontalpodautoscalers/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      const namespace = req.params.namespace;
      logger.info(`Patching horizontalpodautoscaler ${name} in namespace ${namespace}`);
      const resource = await storage.getResource('horizontalpodautoscaler', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`horizontalpodautoscaler ${name} not found in namespace ${namespace}`), res);
      }
      
      if (
        contentType === 'application/strategic-merge-patch+json' ||
        contentType === 'application/merge-patch+json'
      ) {
        // JSON merge patch: recursively merge the patch with the existing resource
        const updatedResource = await storage.mergePatchResource('horizontalpodautoscaler', name, patchData, namespace, resource.metadata.resourceVersion);
        return res.json(updatedResource);
      } else if (contentType === 'application/json-patch+json') {
        // JSON patch: apply an array of operations
        try {
          const updatedResource = await storage.jsonPatchResource('horizontalpodautoscaler', name, patchData, namespace, resource.metadata.resourceVersion);

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
