// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';


export function createcomponentstatusRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read the specified ComponentStatus
  router.get('/api/v1/componentstatuses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const namespace = null;
      logger.info(`Getting componentstatus ${name}`);
      
      const resource = await storage.getResource('componentstatus', name, namespace);
      
      if (!resource) {
        return handleResourceError(new Error(`componentstatus ${name} not found in namespace ${namespace}`), res);
      }
  
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list objects of kind ComponentStatus
  router.get('/api/v1/componentstatuses', async (req, res, next) => {
    try {
      const labelSelector = req.query.labelSelector as string | undefined;
      const fieldSelector = req.query.fieldSelector as string | undefined;
      const limit = req.query.limit ? Number(req.query.limit) : undefined;
      const cont = req.query.continue as string | undefined;
      const listOpts = { labelSelector, fieldSelector, limit, continue: cont };
      const namespace = null;
      logger.info(`Listing componentstatus`);
      
      const resourceList = await storage.listResources('componentstatus', namespace, listOpts);
      

      
      res.json(resourceList);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
