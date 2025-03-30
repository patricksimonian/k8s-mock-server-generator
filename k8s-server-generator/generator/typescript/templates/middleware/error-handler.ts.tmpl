import { Request, Response, NextFunction } from 'express';
import { StorageError } from '../storage/StorageError';
import { logger } from '../logger';

/**
 * Global error handler middleware
 */
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  logger.error('Error handling request:', err);
  
  // Handle StorageError
  if (err instanceof StorageError) {
    return res.status(err.getStatusCode()).json(err.toStatus());
  }
  
  // Handle other errors
  return res.status(500).json({
    kind: 'Status',
    apiVersion: 'v1',
    status: 'Failure',
    message: err.message || 'Internal server error',
    reason: 'InternalError',
    code: 500
  });
}
