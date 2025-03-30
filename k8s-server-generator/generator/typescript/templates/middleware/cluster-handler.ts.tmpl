/**
 * Cluster Handler middleware
 * 
 * This middleware checks for the X-Emulated-Cluster-Name custom header and binds that to the request
 * object. This is used to determine which cluster to use for the request.
 */
import { Request, Response, NextFunction } from 'express';


declare module 'express-serve-static-core' {
  interface Request {
    clusterName?: string;
  }
}

export function clusterHandler(req: Request, res: Response, next: NextFunction) {
  // Skip authentication and pass through all requests
  const clusterName = req.header('X-Emulated-Cluster-Name');
  if (clusterName) {
    req.clusterName = clusterName;
  } else {
    req.clusterName = 'default';
  }
  next();
}
