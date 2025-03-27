import { Readable } from "stream";
// A standard Kubernetes Status object for errors or system-level responses.
export interface Status {
  kind: "Status";
  apiVersion: "v1";
  metadata: Record<string, any>;
  status: "Success" | "Failure";
  message?: string;
  reason?: string;
  code?: number;
}

// A generic representation of a Kubernetes resource with minimal required fields.
export interface KubeResource {
  apiVersion: string;
  kind: string;
  metadata: {
    name: string;
    namespace?: string;
    resourceVersion?: string;
    creationTimestamp?: string;
    deletionTimestamp?: string;   // for graceful deletion
    finalizers?: string[];        // for finalizers
    labels?: Record<string, string>;
    [key: string]: any;           // any other metadata fields
  };
  spec?: any;   // vary by resource kind
  status?: any; // vary by resource kind
  [key: string]: any; // additional top-level fields (subresources, etc.)
}

// A standard List object in Kubernetes
export interface KubeList<T = KubeResource> {
  kind: string;          // e.g., "PodList", "DeploymentList"
  apiVersion: string;    // e.g., "v1"
  metadata: {
    resourceVersion?: string;
    continue?: string;    // pagination token
  };
  items: T[];
}

// Options for listing resources (label/field selectors, pagination).
export interface ListOptions {
  labelSelector?: string;
  fieldSelector?: string;
  limit?: number;
  continue?: string; // base64-encoded pagination token
}

// Options for watching resources.
export interface WatchOptions {
  labelSelector?: string;
  fieldSelector?: string;
  resourceVersion?: string;
  timeoutSeconds?: number;
  allowBookmarks?: boolean;
}

// The main watch event types
export enum WatchEventType {
  ADDED = "ADDED",
  MODIFIED = "MODIFIED",
  DELETED = "DELETED",
  BOOKMARK = "BOOKMARK",
  ERROR = "ERROR"
}

export interface LogEntry {
  timestamp: string;
  line: string;
  stream: "stdout" | "stderr";
}

// The "Scale" object used by the /scale subresource in real K8s
export interface KubeScale {
  apiVersion: "autoscaling/v1";
  kind: "Scale";
  metadata: {
    name: string;
    namespace?: string;
    [key: string]: any;
  };
  spec?: {
    replicas?: number;
  };
  status?: {
    replicas?: number;
    selector?: string;
    [key: string]: any;
  };
}

// Our storage interface
export interface Storage {
  isInitialized(): Promise<boolean>;
  markInitialized(): Promise<void>;

  getResource(kind: string, name: string, namespace?: string | null): Promise<KubeResource | Status>;

  writeLogs(
    name: string,
    namespace: string,
    container: string,
    stdout: string,
    stderr: string,
    cluster: string 
  ): Promise<true | Status>;

  readLogs(
    name: string,
    namespace: string,
    container: string,
    cluster: string,
    options?: {
      follow?: boolean;
      tailLines?: number;
      sinceTime?: string;
      timestamps?: boolean;
      stdout?: boolean;
      stderr?: boolean;
    }
  ): Promise<Readable | Status>;

  listResources(
    kind: string,
    namespace?: string | null,
    options?: ListOptions
  ): Promise<KubeList<KubeResource> | Status>;

  createResource(
    resource: KubeResource,
    namespace?: string | null
  ): Promise<KubeResource | Status>;

  updateResource(
    kind: string,
    name: string,
    resource: KubeResource,
    namespace?: string | null,
    expectedResourceVersion?: string
  ): Promise<KubeResource | Status>;

  mergePatchResource(
    kind: string,
    name: string,
    patch: any,
    namespace?: string | null,
    expectedResourceVersion?: string
  ): Promise<KubeResource | Status>;

  jsonPatchResource(
    kind: string,
    name: string,
    patch: any,
    namespace?: string | null,
    expectedResourceVersion?: string
  ): Promise<KubeResource | Status>;

  updateSubresource(
    kind: string,
    name: string,
    subresource: string,
    patch: any,
    namespace?: string | null,
    expectedResourceVersion?: string
  ): Promise<KubeResource | KubeScale | Status>;

  deleteResource(
    kind: string,
    name: string,
    namespace?: string | null
  ): Promise<true | Status>;

  deleteAllResources(
    kind: string,
    namespace?: string | null,
    opts?: { labelSelector?: string; fieldSelector?: string }
  ): Promise<true | Status>;

  watchResources(
    kind: string,
    namespace?: string | null,
    options?: WatchOptions,
    onEvent?: (eventType: WatchEventType, resource: KubeResource | Status) => void
  ): Promise<() => void>;
}

/**
 * A simple set of cluster-scoped resource kinds.
 * Real K8s has more (e.g. ClusterRole, PersistentVolume, etc.).
 */
export const clusterScopedKinds = new Set([
"Namespace", "Node", "ClusterRole", "ClusterRoleBinding"
]);
