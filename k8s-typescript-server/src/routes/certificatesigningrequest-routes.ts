// endpoint-route.ts.tmpl
import express from 'express';
import { Storage } from '../storage/Storage';
import { logger } from '../logger';
import { handleResourceError } from '../utils';

export function createcertificatesigningrequestRoutes(storage: Storage): express.Router {
  const router = express.Router();

//read approval of the specified CertificateSigningRequest
  router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval', async (req, res, next) => {
    try {
      logger.info(`Listing certificatesigningrequest`);
      
      const resources = await storage.listResources('certificatesigningrequest');
      
      const response = {
        kind: 'CertificatesigningrequestList',
        apiVersion: 'certificates.k8s.io/v1',
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

//replace approval of the specified CertificateSigningRequest
  router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating certificatesigningrequest ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('certificatesigningrequest', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/approval', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting certificatesigningrequest ${name}`);
      
      const resource = await storage.getResource('certificatesigningrequest', name);
      
      if (!resource) {
        return handleResourceError(new Error(`certificatesigningrequest ${name} not found`), res);
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

//watch changes to an object of kind CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead, filtered to a single item with the 'fieldSelector' parameter.
  router.get('/apis/certificates.k8s.io/v1/watch/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting certificatesigningrequest ${name}`);
      
      const resource = await storage.getResource('certificatesigningrequest', name);
      
      if (!resource) {
        return handleResourceError(new Error(`certificatesigningrequest ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//watch individual changes to a list of CertificateSigningRequest. deprecated: use the 'watch' parameter with a list operation instead.
  router.get('/apis/certificates.k8s.io/v1/watch/certificatesigningrequests', async (req, res, next) => {
    try {
      logger.info(`Listing certificatesigningrequest`);
      
      const resources = await storage.listResources('certificatesigningrequest');
      
      const response = {
        kind: 'CertificatesigningrequestList',
        apiVersion: 'certificates.k8s.io/v1',
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

//list or watch objects of kind CertificateSigningRequest
  router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
    try {
      logger.info(`Listing certificatesigningrequest`);
      
      const resources = await storage.listResources('certificatesigningrequest');
      
      const response = {
        kind: 'CertificatesigningrequestList',
        apiVersion: 'certificates.k8s.io/v1',
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

//create a CertificateSigningRequest
  router.post('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
    try {
      logger.info(`Creating certificatesigningrequest`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      const createdResource = await storage.createResource('certificatesigningrequest', resource);
      
      res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  });

//delete collection of CertificateSigningRequest
  router.delete('/apis/certificates.k8s.io/v1/certificatesigningrequests', async (req, res, next) => {
    try {

      
      try {

        const deleted = await storage.deleteAllResources('certificatesigningrequest');
        
        if (!deleted) {
          return handleResourceError(new Error(`certificatesigningrequest not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`certificatesigningrequest not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          kind: 'certificatesigningrequest'
        }
      });
    } catch (error) {
      next(error);
    }
  });

//read status of the specified CertificateSigningRequest
  router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status', async (req, res, next) => {
    try {
      logger.info(`Listing certificatesigningrequest`);
      
      const resources = await storage.listResources('certificatesigningrequest');
      
      const response = {
        kind: 'CertificatesigningrequestList',
        apiVersion: 'certificates.k8s.io/v1',
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

//replace status of the specified CertificateSigningRequest
  router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating certificatesigningrequest ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('certificatesigningrequest', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name/status', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting certificatesigningrequest ${name}`);
      
      const resource = await storage.getResource('certificatesigningrequest', name);
      
      if (!resource) {
        return handleResourceError(new Error(`certificatesigningrequest ${name} not found`), res);
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

//read the specified CertificateSigningRequest
  router.get('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Getting certificatesigningrequest ${name}`);
      
      const resource = await storage.getResource('certificatesigningrequest', name);
      
      if (!resource) {
        return handleResourceError(new Error(`certificatesigningrequest ${name} not found`), res);
      }
      
      res.json(resource);
    } catch (error) {
      next(error);
    }
  });

//replace the specified CertificateSigningRequest
  router.put('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Updating certificatesigningrequest ${name}`);
      
      const resource = req.body;
      
      // Ensure resource has metadata
      if (!resource.metadata) {
        resource.metadata = {};
      }
      
      // Set name in metadata
      resource.metadata.name = name;
      
      const updatedResource = await storage.updateResource('certificatesigningrequest', name, resource);
      
      res.json(updatedResource);
    } catch (error) {
      next(error);
    }
  });

//delete a CertificateSigningRequest
  router.delete('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      logger.info(`Deleting certificatesigningrequest ${name}`);
      
      try {

        const deleted = await storage.deleteResource('certificatesigningrequest', name);
        
        if (!deleted) {
          return handleResourceError(new Error(`certificatesigningrequest ${name} not found}`), res);
        }
      } catch(e) {
          return handleResourceError(new Error(`certificatesigningrequest ${name} not deleted. Error: ${(e as Error).message}`), res);
      }
      
      res.status(200).json({
        kind: 'Status',
        apiVersion: 'v1',
        metadata: {},
        status: 'Success',
        details: {
          name: name,
          kind: 'certificatesigningrequest'
        }
      });
    } catch (error) {
      next(error);
    }
  });
  router.patch('/apis/certificates.k8s.io/v1/certificatesigningrequests/:name', async (req, res, next) => {
    try {
      const name = req.params.name;
      const patchData = req.body;
      const contentType = req.get('Content-Type');
      logger.info(`Getting certificatesigningrequest ${name}`);
      
      const resource = await storage.getResource('certificatesigningrequest', name);
      
      if (!resource) {
        return handleResourceError(new Error(`certificatesigningrequest ${name} not found`), res);
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
