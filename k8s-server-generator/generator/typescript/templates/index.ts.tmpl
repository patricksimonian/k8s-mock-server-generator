import { logger } from './logger';
import storage from './storage';
import { initCluster } from './init-cluster';
import { startServer } from './server';
import 'dotenv/config';

/**
 * Main entry point for the application
 */
async function main() {
  try {
    logger.info('Starting Kubernetes mock server');
    
    // Check if storage is initialized
    const isInitialized = await storage.isInitialized();
    
    if (!isInitialized) {
      logger.info('Initializing cluster state');
      await initCluster();
      await storage.markInitialized();
      logger.info('Cluster state initialized');
    } else {
      logger.info('Using existing cluster state');
    }
    
    // Start server
    startServer();
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Run the application
main();
