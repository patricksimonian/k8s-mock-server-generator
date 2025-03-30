import { logger } from './logger';
import storage, { KubeResource } from './storage';
import config from './config';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Initialize the cluster state
 */
export async function initCluster(): Promise<void> {
  logger.info(`Initializing cluster with ${config.initialState.type} state`);
  
  if (config.initialState.type === 'default') {
    await initDefaultCluster();
  } else {
    logger.info('Skipping cluster initialization (empty state)');
  }
}

/**
 * Initialize cluster with default state
 */
async function initDefaultCluster(): Promise<void> {
  logger.info('Initializing cluster with default state');
  
  try {
    // Read default cluster state from JSON file
    const defaultStatePath = path.resolve(process.cwd(), 'default-cluster-state.json');
    
    if (!fs.existsSync(defaultStatePath)) {
      logger.warn(`Default cluster state file not found at ${defaultStatePath}, skipping initialization`);
      return;
    }
    
    const defaultState = JSON.parse(fs.readFileSync(defaultStatePath, 'utf8'));
    
    // Create resources from default state
    await createResourcesFromState(defaultState);
    
    logger.info('Default cluster state initialized successfully');
  } catch (error) {
    logger.error('Failed to initialize default cluster state:', error);
    throw error;
  }
}

/**
 * Create resources from state object
 */
async function createResourcesFromState(state: any): Promise<void> {
  // Check if state has namespaces
  if (!state.namespaces) {
    logger.warn('State object does not contain namespaces, skipping initialization');
    return;
  }
  
  // Create namespace resources first if they exist in the cluster section
  if (state.cluster && state.cluster.namespaces) {
    logger.info('Creating namespace resources');
    for (const [namespaceName, namespaceResource] of Object.entries(state.cluster.namespaces)) {
      logger.info(`Creating namespace ${namespaceName}`);
      try {
        await storage.createResource(namespaceResource as KubeResource);
      } catch (error) {
        logger.error(`Failed to create namespace ${namespaceName}:`, error);
      }
    }
  }
  
  // Create resources for each namespace
  for (const [namespace, resources] of Object.entries(state.namespaces)) {
    logger.info(`Creating resources for namespace ${namespace}`);
    
    // Create resources for each resource type
    for (const [resourceType, resourceMap] of Object.entries(resources as Record<string, Record<string, any>>)) {
      for (const [resourceName, resource] of Object.entries(resourceMap)) {
        logger.info(`Creating ${resourceType} ${resourceName} in namespace ${namespace}`);
        
        // Create resource
        try {
          await storage.createResource(resource, namespace);
        } catch (error) {
          logger.error(`Failed to create resource ${resourceName}:`, error);
        }
      }
    }
  }
  
  // Create other cluster-level resources if they exist
  if (state.cluster) {
    for (const [resourceType, resourceMap] of Object.entries(state.cluster)) {
      // Skip namespaces as they were already created
      if (resourceType === 'namespaces') continue;
      
      logger.info(`Creating cluster-level ${resourceType}`);
      for (const [resourceName, resource] of Object.entries(resourceMap as Record<string, any>)) {
        logger.info(`Creating cluster-level ${resourceType} ${resourceName}`);
        try {
          await storage.createResource(resource);
        } catch (error) {
          logger.error(`Failed to create cluster-level resource ${resourceName}:`, error);
        }
      }
    }
  }
}
