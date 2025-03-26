// endpoint-route.ts.tmpl
import express from 'express';
import { KubeResource, Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createselfsubjectaccessreviewRoutes(storage: Storage): express.Router {
  const router = express.Router();
  //create a SelfSubjectAccessReview
  router.post('/apis/authorization.k8s.io/v1/selfsubjectaccessreviews', async (req, res, next) => {
    try {
      const resource = req.body;
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      logger.info(`Creating selfsubjectaccessreview`);
      const namespace = null;
      
      
      const createdResource = await storage.createResource(resource as KubeResource, namespace);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

  return router;
}
