import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createRoutes } from './routes';
import { errorHandler } from './middleware/error-handler';
import { clusterHandler } from './middleware/cluster-handler';
import { logger } from './logger';
import config from './config';

/**
 * Create and configure the Express server
 */
export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());

  app.use(morgan('dev'));
  app.use(clusterHandler);
  // Routes
  app.use(createRoutes());

  // Error handler
  app.use(errorHandler);

  // Health check
  app.get('/healthz', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  return app;
}

/**
 * Start the server
 */
export function startServer() {
  const app = createServer();
  const port = config.server.port;

  app.listen(port, () => {
    logger.info(`Server listening on port ${port}`);
  });

  return app;
}
