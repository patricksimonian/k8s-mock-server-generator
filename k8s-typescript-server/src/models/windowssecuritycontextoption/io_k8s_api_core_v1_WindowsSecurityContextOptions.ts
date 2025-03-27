/**
* WindowsSecurityContextOptions contain Windows-specific options and credentials.
* @resourceType windowssecuritycontextoption
* @kind Windowssecuritycontextoption
*/
export interface io_k8s_api_core_v1_WindowsSecurityContextOptions {
/**
* GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
*/
gmsaCredentialSpec?: string;
/**
* GMSACredentialSpecName is the name of the GMSA credential spec to use.
*/
gmsaCredentialSpecName?: string;
/**
* HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
*/
hostProcess?: boolean;
/**
* The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
*/
runAsUserName?: string;
}

/**
* Create a new Windowssecuritycontextoption with default values
* @param data - Optional partial data to override defaults
* @returns A new io_k8s_api_core_v1_WindowsSecurityContextOptions instance with defaults applied
*/
export function createio_k8s_api_core_v1_WindowsSecurityContextOptions(data?: Partial<io_k8s_api_core_v1_WindowsSecurityContextOptions>): io_k8s_api_core_v1_WindowsSecurityContextOptions {
 return {
   gmsaCredentialSpec: data?.gmsaCredentialSpec !== undefined ? data.gmsaCredentialSpec : '',
   gmsaCredentialSpecName: data?.gmsaCredentialSpecName !== undefined ? data.gmsaCredentialSpecName : '',
   hostProcess: data?.hostProcess !== undefined ? data.hostProcess : false,
   runAsUserName: data?.runAsUserName !== undefined ? data.runAsUserName : '',
 };
}
