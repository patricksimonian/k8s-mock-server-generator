// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcomponentstatusRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read the specified ComponentStatus
  router.get('/api/v1/componentstatuses/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting componentstatus ${name}`);
      
      const resource = await storage.getResource('componentstatus', name);
      
      if (!resource) {
        return handleResourceError(new Error(`componentstatus ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//list objects of kind ComponentStatus
  router.get('/api/v1/componentstatuses', async (req, res, next) => {
    try {
      logger.info(`Listing componentstatus`);
      
      const resources = await storage.listResources('componentstatus');
      
      const response = {
        kind: 'ComponentstatusList',
        apiVersion: 'v1',
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
