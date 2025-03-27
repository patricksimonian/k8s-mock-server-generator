Updates march 24th

- patch endpoint added and stoprage interface updated to allow for null namespace values. Now need to update the inMemory to handle storing namespaces vs non-namespaced resource, then also implement label selectors etc. 

Updates March 25th

I need to finish implementing the subresource generation. It could be that I need to refactor the endpoint template to handle the endpoint specific use cases. See https://chatgpt.com/c/67e3412c-2c64-8007-b150-65ffa7f41e17

Updates March 26th
I need to handle subresources for get and post requests seperatly. Eviction, exec, attach, and logs all act differently. I should also allow for a plugin for exec and attach as well as logs. 

Updates March 27th
supported log writing and reading. need to catch edge case where body parser can't be used for the log write endpoint 
additionally patching of objects have been fixed there was no await being used
TODO

- i know that the endpoint generatoin is almost there  
- i need to update the endpoint generation to properly generate calls for each method within an endpoint and also handle namespcaed vs non namespaced resources
- this means i need to update the storage interfaces to take a boolean to save to a namespaced or non-namespaced state
- i also need to settle on schema storage for each interface. For firestore specifically i need to make sure we're grabbing config to point to which collection/subcollection to store the state. 
- watch is no longer implemented take a look at https://v0.dev/chat/fork-of-kubernetes-mock-server-RvmbglgRVU0 version 42 for reference on its implementation. 
edge case routes

/watch
/finalize
+ more 

var operationalVerbs = []string{
	"/finalize", "/binding", "/eviction", "/scale", "/status", "/token", "/approval", "/log",
	"/exec", "/attach", "/portforward", "/proxy", "/redirect", "/watch", "/connect", "/bind",
	"/metrics", "/metrics/proxy", "/metrics/portforward",
}

those routes should only modify their true resource type. 

/// sample of how to run a patch

const id = req.params.id;
  const patchData = req.body;
  const contentType = req.get('Content-Type');

  // Retrieve the current resource
  let resource = resources[id];
  if (!resource) {
    return res.status(404).json({ error: 'Resource not found' });
  }

  // Handle based on Content-Type
  if (
    contentType === 'application/strategic-merge-patch+json' ||
    contentType === 'application/merge-patch+json'
  ) {
    // JSON merge patch: recursively merge the patch with the existing resource
    resource = merge(resource, patchData);
    resources[id] = resource;
    return res.json(resource);
  } else if (contentType === 'application/json-patch+json') {
    // JSON patch: apply an array of operations
    try {
      let updatedResource = jsonpatch.applyPatch(resource, patchData).newDocument;
      resources[id] = updatedResource;
      return res.json(updatedResource);
    } catch (error) {
      return res.status(400).json({ error: 'Invalid JSON patch data' });
    }
  } else {
    return res.status(415).json({ error: 'Unsupported Media Type' });
  }
