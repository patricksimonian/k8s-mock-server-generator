import { clusterScopedKinds, Status } from '../storage';
import { KubeResource } from '../storage';

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




/** Check if a resource kind is cluster-scoped */
export function isClusterScoped(kind: string): boolean {
  return clusterScopedKinds.has(kind);
}

/** Create a Kubernetes "Status" object for errors/failures */
export function createStatusFailure(message: string, code: number, reason?: string): Status {
  return {
    kind: "Status",
    apiVersion: "v1",
    metadata: {},
    status: "Failure",
    message,
    reason,
    code
  };
}

// ----------------------------------------------------------------
// Label Selector Parsing (with =, !=, in, notin, exists, etc.)
// ----------------------------------------------------------------
interface LabelRequirement {
  key: string;
  operator: "Equals" | "NotEquals" | "In" | "NotIn" | "Exists" | "DoesNotExist";
  values?: string[];
}

export function parseLabelSelector(selector: string): LabelRequirement[] {
  if (!selector.trim()) return [];
  const segments = selector.split(",").map(s => s.trim());
  const requirements: LabelRequirement[] = [];

  for (const seg of segments) {
    // e.g., "app in (nginx, redis)"
    const inRegex = /^([^!=]+)\s+(in|notin)\s*\(\s*([^)]+)\s*\)\s*$/;
    const inMatch = seg.match(inRegex);
    if (inMatch) {
      const key = inMatch[1].trim();
      const op = inMatch[2] === "in" ? "In" : "NotIn";
      const values = inMatch[3]
        .split(",")
        .map(v => v.trim())
        .filter(v => v);
      requirements.push({ key, operator: op, values });
      continue;
    }

    // e.g., "app=nginx" or "app!=nginx"
    const eqRegex = /^([^!=]+)(!?=)([^!=]+)$/;
    const eqMatch = seg.match(eqRegex);
    if (eqMatch) {
      const key = eqMatch[1].trim();
      const eqOp = eqMatch[2] === "=" ? "Equals" : "NotEquals";
      const value = eqMatch[3].trim();
      requirements.push({ key, operator: eqOp, values: [value] });
      continue;
    }

    // e.g., "app" => Exists, "!app" => DoesNotExist
    if (seg.startsWith("!")) {
      const key = seg.slice(1).trim();
      requirements.push({ key, operator: "DoesNotExist" });
    } else {
      requirements.push({ key: seg, operator: "Exists" });
    }
  }

  return requirements;
}

export function matchesLabelRequirements(labels: Record<string, string>, requirements: LabelRequirement[]): boolean {
  for (const req of requirements) {
    const hasKey = Object.prototype.hasOwnProperty.call(labels, req.key);
    const value = labels[req.key];

    switch (req.operator) {
      case "Exists":
        if (!hasKey) return false;
        break;
      case "DoesNotExist":
        if (hasKey) return false;
        break;
      case "Equals":
        if (!hasKey || value !== req.values![0]) return false;
        break;
      case "NotEquals":
        if (hasKey && value === req.values![0]) return false;
        break;
      case "In":
        if (!hasKey || !req.values!.includes(value)) return false;
        break;
      case "NotIn":
        if (hasKey && req.values!.includes(value)) return false;
        break;
    }
  }
  return true;
}

export function matchesLabelSelector(resource: KubeResource, selector: string): boolean {
  const labels = resource.metadata?.labels || {};
  const requirements = parseLabelSelector(selector);
  return matchesLabelRequirements(labels, requirements);
}

// ----------------------------------------------------------------
// Field Selector Parsing (limited to a few fields for demo)
// ----------------------------------------------------------------
export type FieldOperator =
  | "Equals"
  | "NotEquals"
  | "In"
  | "NotIn"
  | "Exists"
  | "DoesNotExist";

export interface FieldRequirement {
  path: string;         // e.g. "metadata.name"
  operator: FieldOperator;
  values?: string[];    // used for In/NotIn
}

/**
 * Parse a fieldSelector string into structured FieldRequirements, 
 * supporting =, !=, in, notin, existence, doesNotExist.
 *
 * Examples:
 *   "metadata.name=my-pod,status.phase!=Running,spec.nodeName in (node1,node2)"
 *   "metadata.namespace"
 *   "!metadata.namespace"
 */
export function parseFieldSelector(selector: string): FieldRequirement[] {
  if (!selector.trim()) return [];

  const segments = selector.split(",").map((s) => s.trim());
  const requirements: FieldRequirement[] = [];

  for (const seg of segments) {
    // 1) Attempt to match "key in (v1,v2)" / "key notin (v1,v2)"
    const inRegex = /^([^!=]+)\s+(in|notin)\s*\(\s*([^)]+)\s*\)\s*$/;
    const inMatch = seg.match(inRegex);
    if (inMatch) {
      const path = inMatch[1].trim();
      const op = inMatch[2] === "in" ? "In" : "NotIn";
      const values = inMatch[3]
        .split(",")
        .map((v) => v.trim())
        .filter((v) => v);
      requirements.push({ path, operator: op, values });
      continue;
    }

    // 2) Attempt to match "key=value" or "key!=value"
    const eqRegex = /^([^!=]+)(!?=)([^!=]+)$/;
    const eqMatch = seg.match(eqRegex);
    if (eqMatch) {
      const path = eqMatch[1].trim();
      const eqOp = eqMatch[2] === "=" ? "Equals" : "NotEquals";
      const value = eqMatch[3].trim();
      requirements.push({ path, operator: eqOp, values: [value] });
      continue;
    }

    // 3) Attempt to match "!key" => doesNotExist, or "key" => exists
    if (seg.startsWith("!")) {
      const path = seg.slice(1).trim();
      requirements.push({ path, operator: "DoesNotExist" });
    } else {
      // "key" => exists
      requirements.push({ path: seg, operator: "Exists" });
    }
  }

  return requirements;
}

/**
 * Safely retrieves the value of a dotted path from a resource object.
 * E.g. getFieldValue(resource, "spec.nodeName") => "worker-1"
 */
export function getFieldValue(resource: any, path: string): any {
  const parts = path.split(".");
  let current: any = resource;
  for (const part of parts) {
    if (current == null || typeof current !== "object") {
      return undefined; // can't go deeper
    }
    current = current[part];
  }
  return current;
}

export function matchesFieldRequirement(resource: any, req: FieldRequirement): boolean {
  const actualValue = getFieldValue(resource, req.path);

  const hasValue = actualValue !== undefined && actualValue !== null;
  switch (req.operator) {
    case "Exists":
      return hasValue;
    case "DoesNotExist":
      return !hasValue;

    case "Equals":
      // requires actual value to exist
      if (!hasValue) return false;
      return String(actualValue) === req.values![0];

    case "NotEquals":
      // if it doesn't exist, it's not equal
      if (!hasValue) return true;
      return String(actualValue) !== req.values![0];

    case "In":
      // must exist and match one of req.values
      if (!hasValue) return false;
      return req.values!.map(String).includes(String(actualValue));

    case "NotIn":
      // if it doesn't exist, that means it's effectively not in that set
      if (!hasValue) return true;
      return !req.values!.map(String).includes(String(actualValue));
  }
}

export function matchesFieldSelector(resource: any, selector: string): boolean {
  const requirements = parseFieldSelector(selector);
  for (const req of requirements) {
    if (!matchesFieldRequirement(resource, req)) {
      return false;
    }
  }
  return true;
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
