import { Storage, WatchEvent, WatchEventType } from './Storage';
import { StorageError } from './StorageError';
import { logger } from '../logger';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter } from 'events';
import { applyPatch } from 'fast-json-patch';
import { merge } from '../utils';
/**
* In-memory implementation of the Storage interface
*/
export class InMemoryStorage implements Storage {
 private data: Record<string, Record<string, Record<string, any>>> = {};
 private initialized: boolean = false;
 private eventEmitter: EventEmitter = new EventEmitter();

 constructor() {
   // Initialize data structure
   this.data = {
     namespaces: {}
   };
   
   // Create default namespace
   this.data.namespaces['default'] = {};
   
   // Set max listeners to avoid memory leak warnings
   this.eventEmitter.setMaxListeners(100);
   
   logger.info('In-memory storage initialized');
 }

 /**
  * Check if the storage has been initialized
  */
 async isInitialized(): Promise<boolean> {
   return this.initialized;
 }

 /**
  * Mark the storage as initialized
  */
 async markInitialized(): Promise<void> {
   this.initialized = true;
 }

 /**
  * Get a namespace or create it if it doesn't exist
  */
 private getOrCreateNamespace(namespace: string): Record<string, Record<string, any>> {
   if (!this.data.namespaces[namespace]) {
     this.data.namespaces[namespace] = {};
   }
   return this.data.namespaces[namespace];
 }

 /**
  * Get or create a collection in a namespace
  */
 private getOrCreateCollection(namespace: string, kind: string): Record<string, any> {
   const ns = this.getOrCreateNamespace(namespace);
   const collectionName = `${kind.toLowerCase()}s`;
   
   if (!ns[collectionName]) {
     ns[collectionName] = {};
   }
   return ns[collectionName];
 }

 /**
  * delete a collection in a namespace
  */
 private deleteCollection( kind: string, namespace?: string): void {
  
   const collectionName = `${kind.toLowerCase()}s`;
    if(namespace && this.data.namespaces[namespace]){
      delete this.data.namespaces[namespace][collectionName];
    }else{
    delete this.data[collectionName];
    }
   
 }

 /**
  * Get a resource by kind, name, and namespace
  */
 async getResource(kind: string, name: string, namespace: string = 'default'): Promise<any> {
   const collection = this.getOrCreateCollection(namespace, kind);
   const resource = collection[name];
   
   if (!resource) {
     throw StorageError.notFound(kind, name, namespace);
   }
   
   return { ...resource };
 }
 
 /**
  * List resources by kind and namespace
  */
 async listResources(kind: string, namespace: string = 'default', labelSelector?: string): Promise<any[]> {
   const collection = this.getOrCreateCollection(namespace, kind);
   let resources = Object.values(collection).map(resource => ({ ...resource }));
   
   // Apply label selector if provided
   if (labelSelector) {
     resources = this.filterByLabelSelector(resources, labelSelector);
   }
   
   return resources;
 }
 async mergePatchResource(kind: string, name: string, patch: any, namespace: string = 'default'): Promise<any> {
    const collection = this.getOrCreateCollection(namespace, kind);

    // Check if resource exists
    if (!collection[name]) {
      throw StorageError.notFound(kind, name, namespace);
    }

    // Get existing resource
    const existing = collection[name];

    // Apply patch (simple deep merge)
    const patched = merge(existing, patch);

    // Update resource metadata
    patched.metadata = {
      ...patched.metadata,
      resourceVersion: uuidv4()
    };

    // Store patched resource
    collection[name] = patched;

    // Emit watch event
    this.emitWatchEvent(WatchEventType.MODIFIED, patched, namespace);

    return { ...patched };
  }
  /**
   * Patch a resource with a JSON patch application/json-patch+json
   */
  async jsonPatchResource(kind: string, name: string, patch: any, namespace: string = 'default'): Promise<any> {
    const collection = this.getOrCreateCollection(namespace, kind);

    // Check if resource exists
    if (!collection[name]) {
      throw StorageError.notFound(kind, name, namespace);
    }

    // Get existing resource
    const existing = collection[name];

    // Apply patch (simple deep merge)
    const patched = applyPatch(existing, patch).newDocument;

    // Update resource metadata
    patched.metadata = {
      ...patched.metadata,
      resourceVersion: uuidv4()
    };

    // Store patched resource
    collection[name] = patched;

    // Emit watch event
    this.emitWatchEvent(WatchEventType.MODIFIED, patched, namespace);

    return { ...patched };
  }
 /**
  * Create a resource
  */
 async createResource(resource: any, namespace: string = 'default'): Promise<any> {
   const kind = resource.kind;
   if (!kind) {
     throw StorageError.missingField('kind');
   }
   
   const name = resource.metadata?.name;
   if (!name) {
     throw StorageError.missingField('metadata.name');
   }
   
   const collection = this.getOrCreateCollection(namespace, kind);
   
   // Check if resource already exists
   if (collection[name]) {
     throw StorageError.alreadyExists(kind, name, namespace);
   }
   
   // Add resource metadata
   const now = new Date().toISOString();
   const newResource = {
     ...resource,
     metadata: {
       ...resource.metadata,
       creationTimestamp: now,
       resourceVersion: uuidv4(),
       namespace: namespace
     }
   };
   
   // Store resource
   collection[name] = newResource;
   
   // Emit watch event
   this.emitWatchEvent(WatchEventType.ADDED, newResource, namespace);
   
   return { ...newResource };
 }
 
 /**
  * Update a resource
  */
 async updateResource(kind: string, name: string, resource: any, namespace: string = 'default'): Promise<any> {
   const collection = this.getOrCreateCollection(namespace, kind);
   
   // Check if resource exists
   if (!collection[name]) {
     throw StorageError.notFound(kind, name, namespace);
   }
   
   // Update resource metadata
   const existing = collection[name];
   const updatedResource = {
     ...resource,
     metadata: {
       ...resource.metadata,
       creationTimestamp: existing.metadata.creationTimestamp,
       resourceVersion: uuidv4(),
       namespace: namespace
     }
   };
   
   // Store updated resource
   collection[name] = updatedResource;
   
   // Emit watch event
   this.emitWatchEvent(WatchEventType.MODIFIED, updatedResource, namespace);
   
   return { ...updatedResource };
 }
 
 /**
  * Patch a resource
  */
 async patchResource(kind: string, name: string, patch: any, namespace: string = 'default'): Promise<any> {
   const collection = this.getOrCreateCollection(namespace, kind);
   
   // Check if resource exists
   if (!collection[name]) {
     throw StorageError.notFound(kind, name, namespace);
   }
   
   // Get existing resource
   const existing = collection[name];
   
   // Apply patch (simple deep merge)
   const patched = this.deepMerge(existing, patch);
   
   // Update resource metadata
   patched.metadata = {
     ...patched.metadata,
     resourceVersion: uuidv4()
   };
   
   // Store patched resource
   collection[name] = patched;
   
   // Emit watch event
   this.emitWatchEvent(WatchEventType.MODIFIED, patched, namespace);
   
   return { ...patched };
 }
 
 /**
  * Deep merge two objects
  */
 private deepMerge(target: any, source: any): any {
   const output = { ...target };
   
   if (isObject(target) && isObject(source)) {
     Object.keys(source).forEach(key => {
       if (isObject(source[key])) {
         if (!(key in target)) {
           Object.assign(output, { [key]: source[key] });
         } else {
           output[key] = this.deepMerge(target[key], source[key]);
         }
       } else {
         Object.assign(output, { [key]: source[key] });
       }
     });
   }
   
   return output;
   
   function isObject(item: any): boolean {
     return item && typeof item === 'object' && !Array.isArray(item);
   }
 }
 
 /**
  * Delete a resource
  */
 async deleteResource(kind: string, name: string, namespace: string = 'default'): Promise<boolean> {
   const collection = this.getOrCreateCollection(namespace, kind);
   
   // Check if resource exists
   if (!collection[name]) {
     throw StorageError.notFound(kind, name, namespace);
   }
   
   // Get the resource before deleting it
   const resource = { ...collection[name] };
   
   // Delete resource
   delete collection[name];
   
   // Emit watch event
   this.emitWatchEvent(WatchEventType.DELETED, resource, namespace);

   return true;
 }
 
 /**
  * Delete all resources 
  */
  async deleteAllResources(kind: string, namespace: string = 'default'): Promise<boolean> {
    const resources = await this.listResources(kind, namespace);
    this.deleteCollection(kind, namespace);
   
    // Emit watch event
    for (const resource of resources) {
      this.emitWatchEvent(WatchEventType.DELETED, resource, namespace);
    }

   return true;
 }
 
 /**
  * Watch resources of a specific kind in a namespace
  */
 async watchResources(
   kind: string, 
   namespace: string = 'default', 
   labelSelector?: string, 
   resourceVersion?: string,
   onEvent?: (type: 'ADDED' | 'MODIFIED' | 'DELETED', resource: any) => void
 ): Promise<() => void> {
   const eventName = this.getWatchEventName(kind, namespace);
   
   // Create event handler
   const handler = (event: WatchEvent) => {
     // Apply label selector if provided
     if (labelSelector && !this.matchesLabelSelector(event.object, labelSelector)) {
       return;
     }
     
     // Check resource version if provided
     if (resourceVersion && event.object.metadata?.resourceVersion <= resourceVersion) {
       return;
     }
     
     // Call onEvent callback if provided
     if (onEvent) {
       onEvent(event.type as any, event.object);
     }
   };
   
   // Register event handler
   this.eventEmitter.on(eventName, handler);
   
   // Send initial ADDED events for existing resources
   const resources = await this.listResources(kind, namespace, labelSelector);
   for (const resource of resources) {
     if (!resourceVersion || resource.metadata?.resourceVersion > resourceVersion) {
       if (onEvent) {
         onEvent(WatchEventType.ADDED, resource);
       }
     }
   }
   
   // Return function to stop watching
   return () => {
     this.eventEmitter.removeListener(eventName, handler);
   };
 }
 
 /**
  * Emit a watch event
  */
 private emitWatchEvent(type: WatchEventType, resource: any, namespace: string = 'default'): void {
   const kind = resource.kind;
   if (!kind) {
     return;
   }
   
   const eventName = this.getWatchEventName(kind, namespace);
   const event: WatchEvent = { type, object: resource };
   
   this.eventEmitter.emit(eventName, event);
 }
 
 /**
  * Get the event name for a watch event
  */
 private getWatchEventName(kind: string, namespace: string): string {
   return `${namespace}:${kind}`;
 }
 
 /**
  * Filter resources by label selector
  */
 private filterByLabelSelector(resources: any[], labelSelector: string): any[] {
   return resources.filter(resource => this.matchesLabelSelector(resource, labelSelector));
 }
 
 /**
  * Check if a resource matches a label selector
  */
 private matchesLabelSelector(resource: any, labelSelector: string): boolean {
   const labels = resource.metadata?.labels || {};
   
   // Parse label selector (simple implementation for now)
   const selectors = labelSelector.split(',').map(s => s.trim());
   
   // Check if all selectors match
   return selectors.every(selector => {
     const [key, value] = selector.split('=').map(s => s.trim());
     return labels[key] === value;
   });
 }
}
