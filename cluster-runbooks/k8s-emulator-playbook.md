## K8S server emulator playbook

1. Spin up a sample cluster where you can reliable fetch the api components

2. `kind create cluster --config path-to-config`
```yaml
# a sample cluster config showing a host mount so we can retrieve the swagger
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    extraMounts:
      - hostPath: /home/k8s-complete-openapi/spec
        containerPath: /spec

```

3. After cluster is up get the swagger spec `kubectl get --raw "/openapi/v2" > $(pwd)/swagger.json`

4. Next derefence it with the custom python script (which is cpu/memory intensive and takes over 2 minutes)** note this isn't necessary to run the generator. 
    -   `source venv/bin/activate`
    - `python dereference.py` (this uses prance) **take note the script removes a troublesoom definition for JSON Schema because it has a paramater called $ref which prance picksup and attemps to de-reference. Since this is an emulation, we wont support JSON Schema calls
5. Next run the go main script to take the dereference and turn it into an Intermediate Represnetation(IR) which is new json structure optimized for generating the server :) 
6. Run the server generator! 
