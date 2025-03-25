// Export utility functions
export * from './resource-utils';
export * from './watch';

/**
 * Utility function to generate a random string
 */
export function generateRandomString(length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Utility function to parse query parameters
 */
export function parseQueryParams(query: any): Record<string, any> {
  const result: Record<string, any> = {};
  
  for (const key in query) {
    if (Object.prototype.hasOwnProperty.call(query, key)) {
      const value = query[key];
      
      // Try to parse numbers and booleans
      if (value === 'true') {
        result[key] = true;
      } else if (value === 'false') {
        result[key] = false;
      } else if (!isNaN(Number(value)) && value !== '') {
        result[key] = Number(value);
      } else {
        result[key] = value;
      }
    }
  }
  
  return result;
}

/**
 * Utility function to deep merge objects
 */
export function merge(target, patch) {
  if (patch === null || typeof patch !== 'object') {
    return patch;
  }
  // Clone target to avoid mutating original directly
  let output = Array.isArray(target) ? [...target] : { ...target };
  Object.keys(patch).forEach(key => {
    if (patch[key] === null) {
      // Null means removal of the key
      delete output[key];
    } else if (typeof patch[key] === 'object' && typeof output[key] === 'object') {
      output[key] = merge(output[key], patch[key]);
    } else {
      output[key] = patch[key];
    }
  });
  return output;
}

/**
 * Helper function to check if a value is an object
 */
function isObject(item: any): boolean {
  return item && typeof item === 'object' && !Array.isArray(item);
}
