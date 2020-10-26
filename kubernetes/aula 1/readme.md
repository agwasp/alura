# Kubernetes

## CMDs

| CMD | Description |
|:-------------|:-------------|
| **NODE** |
| kubectl get nodes | print nodes |
| **POD** |
| kubectl run <pod_name> --image=<image_name>:<image_tag> | add new pod |
| kubectl get pods | get all running pods |
| kubectl get pods --watch | get all running pods in real time |
| kubectl describe pod <pod_name> | gives all info about a pod |
| kubectl edit pod nginx-pod | edit pod opening the configuration file |
| kubectl apply -f <path_to_pod_file_to_apply> | add a pod based on a file |
| kubectl delete pod <pod_name> | delete a pod |
| kubectl delete -f <path_to_pod_file_to_delete> | delete a pod based on the file that created it |
| kubectl exec -it <pod_name> -- bash | executes actions inside a pod |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
