import winston from 'winston';
import { Request, Response } from 'express';
import { Storage } from '../storage';

export interface WatchEvent {
    type: 'ADDED' | 'MODIFIED' | 'DELETED' | 'ERROR';
    object: any;
}

/**
 * Request parameters interface
 */
interface RequestParams {
  name?: string;
  namespace?: string;
  resourceType?: string;
}

/**
 * Request query interface
 */
interface RequestQuery {
  watch?: string;
  labelSelector?: string;
  resourceVersion?: string;
}

export async function watch(req: Request<RequestParams, any, any, RequestQuery>, res: Response, resourceType: string, resourceVersion: string, namespace: string, labelSelector, logger: winston.Logger, storage: Storage) {
    // Handle watch request
    // Set headers for streaming response
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Cache-Control', 'no-cache, no-transform');

    // Set up error handler
    const onError = (err: any) => {
        logger.error(`Watch error for ${resourceType}:`, err);

        // Send error event
        const errorEvent: WatchEvent = {
            type: 'ERROR',
            object: {
                kind: 'Status',
                apiVersion: 'v1',
                metadata: {},
                status: 'Failure',
                message: err.message || 'Watch error',
                reason: 'InternalError',
                code: 500
            }
        };

        res.write(JSON.stringify(errorEvent) + '\n');
        res.end();
    };

    // Set up close handler
    req.on('close', () => {
        if (stopWatching) {
            stopWatching();
        }
    });

    // Start watching
    let stopWatching: (() => void) | null = null;
    try {
        stopWatching = await storage.watchResources(
            resourceType,
            namespace,
            {
              labelSelector,
              resourceVersion,
            },
            (type, resource) => {
                // Send watch event
                const event: WatchEvent = {
                    type: type as 'ADDED' | 'MODIFIED' | 'DELETED',
                    object: resource
                };
                res.write(JSON.stringify(event) + '\n');
            }
        );
    } catch (err) {
        onError(err);
    }
}
